import { execSync } from 'child_process';
import path from 'path';

import pkg from '../package.json';
import { chalkERROR, chalkSUCCESS } from './utils';

const command = 'npm publish';

// 项目根目录路径
const rootDir = path.resolve(__dirname, '..');

// git push
execSync(`git push origin v${pkg.version}`, { stdio: 'inherit' });
execSync(`git push`, { stdio: 'inherit' });

try {
  execSync(command, {
    stdio: 'inherit',
    cwd: path.join(rootDir, 'dist'),
  });
  console.log(chalkSUCCESS(`发布${pkg.name}@${pkg.version}成功！`));
} catch (error) {
  console.log(error);
  console.log(chalkERROR(`发布${pkg.name}@${pkg.version}失败！`));
}
