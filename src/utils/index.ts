export const debugLog = (type: 'log' | 'warn' | 'error', ...data) => {
  console[type]('billd-utils', ...data);
};
