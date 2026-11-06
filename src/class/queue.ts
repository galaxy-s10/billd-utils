// TIP: ctrl+cmd+t,生成函数注释
import { debugLog } from '../utils/index';

export class ConcurrentPoll {
  /** 任务队列 */
  tasks: Array<() => Promise<any>> = [];
  /** 最大并发数 */
  private max = 5;
  /** 正在运行的任务数 */
  private running = 0;
  /** 待执行任务总数 */
  total = 0;
  /** 任务间隔延迟(ms) */
  delay = 0;
  /** 全部任务完成后的回调 */
  done?: () => void;

  constructor({ max = 5, done, delay = 0 }) {
    this.tasks = [];
    this.total = 0;
    this.running = 0;
    this.max = max;
    this.done = done;
    this.delay = delay;
    setTimeout(() => {
      this.run();
    }, 0);
  }

  addTask(task: () => Promise<any>) {
    this.tasks.push(task);
    this.total += 1;
  }

  run() {
    if (this.tasks.length === 0) {
      return;
    }

    // 剩余可并发数 = max - running
    const availableSlots = this.max - this.running;
    // 本次可启动的任务数
    const batchSize = Math.min(this.tasks.length, availableSlots);

    for (let i = 0; i < batchSize; i += 1) {
      this.running += 1;
      const task = this.tasks.shift()!;
      task()
        .catch((error) => {
          debugLog('error', error);
        })
        .finally(() => {
          setTimeout(() => {
            this.running -= 1;
            this.total -= 1;
            this.run();
            if (this.total === 0) {
              this.done?.();
            }
          }, this.delay);
        });
    }
  }
}
