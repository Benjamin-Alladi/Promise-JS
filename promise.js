function f(cb)
{
    console.log("First");
    cb();
}
function s(cb)
{
    console.log("Second");
    cb();
}
function t(cb)
{
    console.log("third");
    cb();
}
function fr()
{
    console.log("fourth");
}

// Call-back Hell forming Pyramid Of Doom:
f(()=>{
    s(()=>{
        t(()=>{
            fr();
        });
    });
});


let p= new Promise((resolve,reject)=>{
    console.log("First");
    resolve(10);
})
.then(()=>console.log("second"))
.then(()=>console.log("third"))
.then(()=>console.log("fourth"));

// console.log(p);

