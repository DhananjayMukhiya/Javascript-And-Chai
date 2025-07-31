/*
Async Fundamentals in JavaScript

1. Synchronous vs Asynchronous:
    - Synchronous code runs sequentially, blocking further execution until each operation completes.
    - Asynchronous code allows other operations to run while waiting for tasks (like network requests, timers) to finish.

2. Callbacks:
    - Functions passed as arguments to handle async results.
    - Example: setTimeout(() => { console.log('Done'); }, 1000);

3. Promises:
    - Objects representing eventual completion or failure of async operations.
    - States: pending, fulfilled, rejected.
    - Example:
      const promise = new Promise((resolve, reject) => {
         // async work
      });
      promise.then(result => {}).catch(error => {});

4. async/await:
    - Syntax for writing async code that looks synchronous.
    - 'async' before function enables use of 'await' inside.
    - 'await' pauses execution until promise settles.
    - Example:
      async function fetchData() {
         const data = await fetch('url');
         return data;
      }

5. Error Handling:
    - Use .catch() with promises or try/catch with async/await.

6. Event Loop:
    - JavaScript uses an event loop to handle async operations, allowing non-blocking execution.

Summary:
- Use callbacks, promises, or async/await for async tasks.
- Prefer promises/async-await for cleaner, more maintainable code.
*/

