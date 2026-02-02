const timestamp = () => new Date().toISOString().replace('T', ' ').slice(0, 19);

const logger = {
  info: (msg: string) => console.log(`[${timestamp()}] ${msg}`),
  warn: (msg: string) => console.warn(`[${timestamp()}] WARN: ${msg}`),
  error: (msg: string | Error) => console.error(`[${timestamp()}] ERROR:`, msg),
  debug: (msg: string) => {
    if (process.env.LOG_LEVEL === 'debug') {
      console.log(`[${timestamp()}] DEBUG: ${msg}`);
    }
  },
};

export default logger;
