// await is only valid in async functions.
// async and await is also used for promise Handling. When await is used before a Promise, JS Engine will wait till the Promise gets resolved/rejected.
let p= new Promise((resolve,reject)=>{
    // resolve(100);
    // reject(new Error("Rejected"));
    setTimeout(()=>resolve(100),5000);

});


function h()
{
    console.log("First");
    // The call-back function inside the promiseHandlers like then(),catch() and finally() are asynchronous or non-blocking.
    // JS engine will not wait for promise to be resolved.
    p.then((v)=>console.log("Value: "+v),(e)=>console.log("Error: "+e));
    console.log("Second");
}
// h();

async function f()
{
    console.log("First aw");
    // JS Engine will waiting for promise to resolve.
    const v= await p;
    console.log(v);
    console.log("Second aw");
}
// f();

let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(1000),10000);
});

async function fc()
{
    console.log("Hi1");
    const v1= await p;
    console.log("v1: "+v1);
    console.log("Hi2");

    console.log("Hi3");
    const v2= await p2;
    console.log("v2: "+v2);
    console.log("Hi4");
}
fc();



// Behind the Scenes:
// At line6, setTimeout is called. It is asynchronous so it moves from call-stack to Web API/browser with a timer attached to it.
// When async function is invoked, it will be pushed into call-stack for execution.
// When JS-Engine executes await statement,it removes the async function from call-stack so that the promise is fulfilled (setTimeout when timer expires is pushed into call-back/task queue. When call-stack is empty, it is pushed into call-stack so that the promise p gets fulfilled.).
// When the promise is fulfilled, JS-Engine pushes the async function back to call-stack and executes it from the line where it left.