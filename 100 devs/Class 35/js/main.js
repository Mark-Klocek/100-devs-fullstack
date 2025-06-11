//Whats the output of the code below?
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log('done'));
//1- you can only have one resolve or reject per promise, so the first resolve is what will be displayed


//The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve,ms))
}

delay(3000).then(() => console.log('runs after 3 seconds'));

//Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

// promise.then(f1).catch(f2);

// Versus:

// promise.then(f1, f2);

//No, because the top fragment has a catch, which only handles thrown errors, whereas the bottom promise handles two normal response functions that can handle either resolves or rejects

//**CORRECTION the error is actually unhandled in the 2nd code blurb because it doesn't have a catch! */

// Error in setTimeout

// What do you think? Will the .catch trigger? Explain your answer.

// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);

//No, it will not trigger because the catch is outside of the promise chain. It is outside of the executor.