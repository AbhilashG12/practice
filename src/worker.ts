const { parentPort } = require("node:worker_threads");

let count = 0;
for (let i = 0; i < 5_000_000_000; i++) {
  count += i;
}

parentPort?.postMessage(count);
