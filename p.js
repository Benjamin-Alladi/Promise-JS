let p= new Promise((resolve,reject)=>{
    console.log("Inside Promise");
    console.log(typeof resolve, resolve);
    console.log("Before Resolving");
    // resolve(100);
    setTimeout(()=>resolve(100),5000);
    // reject(new Error("Rejected"));
    console.log("Resolved");
    console.log("After Resolving");
}).catch((err)=>console.log("Error: "+ err.message));

p.finally(()=> console.log("Finally"));
p.then((value)=> console.log("Value: "+value));
p.then((val)=> console.log("Val: "+val));
p.catch((err)=>console.log("Error: "+ err.message));

console.log(p);
console.log("Hi");

