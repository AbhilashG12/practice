// main.ts
const { Worker } = require("worker_threads");

function runCpuInWorker(): Promise<number> {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/worker.ts"); 

    worker.on("message", resolve);
    worker.on("error", reject);
  });
}

runCpuInWorker().then((result) => {
  console.log("Worker result:", result);
});
console.log("Main thread is FREE now!");
