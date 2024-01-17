let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("p1 resolved");
        reject("p1 rejected");
    }, 2000);
});

let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("p2 resolved");
        reject("p2 rejected");
    }, 2000);
});

let p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("p3 resolved");
        reject("p3 rejected");
    }, 3000);
});

/*
Promise.all():
The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.


It returns a promise. If all the input promises are fulfilled then the returned promise is fulfilled with the "Array of promiseResults",or if any of the input promises is rejected then the returned promise is also rejected with the error of first rejected input promise.
*/

Promise.all([p1,p2,p3]).then((v)=>console.log("Promise.all(): "+v, v instanceof Array), (err)=>console.log("Error in Promise.all(): "+ err));


/*
Promise.allSettled():
The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

It returns a Promise which is fulfilled with the "Array of Objects" where each object contains the promiseStatus and promiseResult of all the settled promises(fulfilled or rejected).
*/
Promise.allSettled([p1,p2,p3]).then((v)=>console.log("Promise.allSettled():",v, v instanceof Array),(err)=>console.log("Error in Promise.allSettled(): "+ err));

/*
Promise.race():
The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

It returns a Promise which will be fulfilled with the result of FIRST SETTLED PROMISE.
*/
Promise.race([p1,p2,p3]).then((v)=>console.log("Promise.race(): "+v, v instanceof Array),(err)=>console.log("Error in Promise.race(): "+ err));

/*
Promise.any():
The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

It returns a promise that is resolved with the result of FIRST FULFILLED PROMISE. If there is no fulfilled promise in the iterable, then the returned
promise is fulfilled with aggregateError containing an array of rejection reasons.
*/
Promise.any([p1,p2,p3]).then((v)=>console.log("Promise.any(): "+v, v instanceof Array),(err)=>console.log("Error in Promise.any(): "+ err));

