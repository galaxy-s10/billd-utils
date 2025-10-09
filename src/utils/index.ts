export const debugLog = (type: 'log' | 'warn' | 'error', ...data) => {
  console[type]('billd-utils', ...data);
};

export const throwError = (msg: string) => {
  throw new Error(`billd-utils ${msg}`);
};
