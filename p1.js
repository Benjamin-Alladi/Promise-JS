let p= new Promise(function(resolve,reject){
    console.log("After setTimeOut");
    resolve(100);
    // reject(new Error("Error generated"));
}).catch((err)=>console.log("Error is: "+ err));

console.log("Outside Promise");
console.log(p);

p.then((val)=>console.log("Value: "+ val));
p.then(()=>console.log("then() executed"));
console.log(p);

console.log(p);