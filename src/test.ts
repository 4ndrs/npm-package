console.info("Hello, World");

const waiter = (secs: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), secs * 1000));
