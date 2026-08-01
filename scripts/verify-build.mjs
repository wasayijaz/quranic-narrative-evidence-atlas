import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { transform } from 'lightningcss';

const root = process.cwd();
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const run = (script) => {
  const command = process.platform === 'win32' ? process.env.ComSpec ?? 'cmd.exe' : npmCommand;
  const args = process.platform === 'win32' ? ['/d', '/s', '/c', `${npmCommand} run ${script}`] : ['run', script];
  const result = spawnSync(command, args, {
    cwd: root,
    env: process.env,
    stdio: 'inherit',
  });

  if (result.error) {
    console.error(`Verification loop could not start ${script}: ${result.error.message}`);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

for (const script of ['build', 'test:gate', 'test:ledger', 'test:integrity', 'test:scope']) {
  run(script);
}

const stylesheetPath = path.join(root, 'src', 'styles', 'atlas.css');
const stylesheet = fs.readFileSync(stylesheetPath);
const minified = transform({
  filename: stylesheetPath,
  code: stylesheet,
  minify: true,
});

const expectedRoutes = [
  'index.html',
  'en/index.html',
  'ur/index.html',
  'en/quran/index.html',
  'ur/quran/index.html',
  'en/learn/index.html',
  'ur/learn/index.html',
  'en/teach/index.html',
  'ur/teach/index.html',
  'en/research/index.html',
  'ur/research/index.html',
  'en/verification/index.html',
  'ur/verification/index.html',
  'en/ashab-al-kahf/index.html',
  'ur/ashab-al-kahf/index.html',
  'en/stories/ashab-al-kahf/index.html',
  'ur/stories/ashab-al-kahf/index.html',
  'en/stories/thamud-al-hijr/index.html',
  'ur/stories/thamud-al-hijr/index.html',
  'en/stories/yusuf/index.html',
  'ur/stories/yusuf/index.html',
];

const missingRoutes = expectedRoutes.filter((route) => !fs.existsSync(path.join(root, 'dist', route)));
if (missingRoutes.length > 0) {
  console.error(`Verification loop failed: missing rendered routes: ${missingRoutes.join(', ')}`);
  process.exit(1);
}

console.log(
  `Verification loop passed: ${expectedRoutes.length} rendered routes, ` +
    `CSS minified (${minified.code.length} bytes), and all evidence gates passed.`,
);
