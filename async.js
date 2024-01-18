// async functions always return a promise. This promise will be resolved with the value returned by the async function or rejected with an error thrown by the async function.
// If an async function throws an error, the promise returned by the async function will be rejected with that error.
async function f()
{
    console.log("Inside async function");
    // return "10";
    // throw new Error("rejected");
}

f()
.then((v)=>console.log("Value: "+v))
.catch((err)=>console.log("Error is: "+err));