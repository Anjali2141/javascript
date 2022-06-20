
// async function promiseFunction() {
//     console.log("Before Promise into the function");
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Inside Promise");
//             resolve("resoved");
//         }, 2000)
//     })
//     console.log("Inside function")
//     let result = await promise;
//     console.log(result, "hello");

//     return "now outside of async function";
// }

// console.log("Before calling promiseFunction");
// promiseFunction();
// console.log("After calling promiseFunction");

// setInterval(promiseFunction, 100000)

async function api()  {
    let response = await fetch('https://api.github.com/users')
   let data =await response.json();
    console.log(data);
}
api();