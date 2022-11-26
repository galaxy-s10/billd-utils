import { execSync } from 'child_process';
import path from 'path';

import { copyFileSync } from 'fs-extra';

import { chalkERROR } from './utils';

const watch = process.argv.includes('--watch');

// 项目根目录路径
const rootDir = path.resolve(__dirname, '..');

// 项目根目录要复制的文件
const FILES_COPY_LOCAL = ['README.md', 'package.json', 'LICENSE'];

// rollup打包
const rollupBuild = () => {
  execSync(`pnpm run build:rollup${watch ? ' --watch' : ''}`, {
    stdio: 'inherit',
  });
};

const copyFile = () => {
  Object.values(FILES_COPY_LOCAL).forEach((file) => {
    copyFileSync(path.join(rootDir, file), path.join(rootDir, './dist', file));
  });
};

(() => {
  try {
    rollupBuild();
    copyFile();
  } catch (error) {
    console.log(chalkERROR(`！！！本地构建失败！！！`));
    console.log(error);
    console.log(chalkERROR(`！！！本地构建失败！！！`));
  }
})();
