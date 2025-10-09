import { debugLog } from '../utils';

const lockMap = new Map<string, number>();

/**
 * 检查是否在锁定期内
 * @param id 锁定的标识符
 * @param lockDuration 锁定持续时间（毫秒）
 * @returns true-在锁定期内（已锁定），false-锁定期结束（未锁定）
 */
export const useLock = (data: {
  id: string;
  lockDuration: number;
}): { lock: boolean; lockMap: Map<string, number> } => {
  const { id, lockDuration } = data;
  const now = Date.now();

  try {
    const lockTime = lockMap.get(id);

    if (lockTime === undefined) {
      // 第一次，设置锁定并返回未锁定状态
      lockMap.set(id, now);
      return { lock: false, lockMap }; // 未锁定
    }

    const timePassed = now - lockTime;

    if (timePassed < lockDuration) {
      // 还在锁定期内
      return { lock: true, lockMap }; // 已锁定
    } else {
      // 锁定期结束，重置锁定时间
      lockMap.set(id, now);
      return { lock: false, lockMap }; // 未锁定
    }
  } catch (error) {
    debugLog('error', error);
    lockMap.delete(id); // 出错时清除锁定
    return { lock: false, lockMap }; // 出错时视为未锁定
  }
};
