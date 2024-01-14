function createOrder(cart)
{
    let p= new Promise((resolve,reject)=>{

        if(validate(cart))
        {
            let orderId= 10;
            resolve(orderId);
        }
        else
        {
            let err= new Error("Order not Created!")
            reject(err);
        }
    });

    return p;
};
function validate(cart)
{
    return true;
    // return false;
};

function proceedToPayment()
{
    return new Promise(function(resolve,reject){
        console.log("Redirecting to Payment");
        resolve("Payment Successful");
    })
}

function showOrderSummary()
{
    return new Promise((resolve,reject)=>{
        resolve("Order placed Successfully");
    })
}
function updateWallet()
{
    return new Promise((resolve,reject)=>{
        resolve("Wallet Updated");
    })
}

let cart= ["shirt","pant","tshirt"];

createOrder(cart)
.then((orderId)=>{console.log("Order Created with Id: "+ orderId); return orderId;},
(err)=>console.log(err.message))
.then(function(){
    return proceedToPayment();
})
.then((pInfo)=>console.log("Payment Info: "+ pInfo))
.then(function(){
    return showOrderSummary();
})
.then((os)=>console.log("Order Summary: "+ os))
.then(function(){
    return updateWallet();
})
.then((val)=>console.log(val))
.then(()=>console.log("Done"))
.catch((err)=>console.log(err.message));