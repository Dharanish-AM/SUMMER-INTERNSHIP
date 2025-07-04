let a = "ready";
console.log(a);


setTimeout  (() => {
    console.log("Hello, World!");

}, 0
)

setTimeout(() => {
    console.log("1st");
    setTimeout(() => {
        console.log("2nd");
        setTimeout(() => {
            console.log("3rd");
        }, 2000);
    }, 2000);
}, 2000);  


var x = 5;
console.log(x);

let mypromise = new Promise((resolve, reject) => {
    let sucess = false;
    if (sucess) {
        resolve("Promise resolved");
    }else
    {
        reject("Promise rejected");
    }
});

mypromise.then((q)=>console.log(q))
.catch((w) => console.log(w));

const handlepromise = async () => {
    try{
    const a=await mypromise;
    console.log(a);
    }
    catch(err){
        console.log( err);
    }
}
handlepromise();

setInterval(() => {
    console.log("Hello, World!");
}, 1000);