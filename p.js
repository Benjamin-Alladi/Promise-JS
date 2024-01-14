let p= new Promise((resolve,reject)=>{
    console.log("Inside Promise");
    console.log(typeof resolve, resolve);
    console.log("Before Resolving");
    // resolve(100);
    setTimeout(()=>resolve(100),5000);
    console.log("Resolved");
    console.log("After Resolving");
});

p.then((val)=> console.log("Val: "+val));
p.then((val)=> console.log("Val: "+val));

console.log(p);
console.log("Hi");