/**
 * 获取日期当天的开始时间到结束时间
 */
export function dateStartAndEnd(date: Date) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const startTime = `${y}-${m}-${d} 00:00:00`;
  const endTime = `${y}-${m}-${d} 23:59:59`;
  return {
    startTime,
    endTime,
  };
}

/**
 * ios日期兼容
 * 2022-01-19 15:28:00 转成 2022/01/19 15:28:00
 */
export function iosTimestamp(time: string) {
  return time.replace(/-/g, '/');
}
