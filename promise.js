    let error = true;
    let promise = new Promise(function(resolve, reject) {
        if(!error) {
            resolve("NO error");

        } else {
            reject("error present");
        }
    });

console.log(promise);
    
promise
.then(()=> {
    console.log("its resoved");
})
.catch(function status() {
    console.log("caught error")
})
.then(() => {
    console.log("come again")
})
.finally(() => {
    console.log("its executing anyhow");
})

fetch('https://api.github.com/users')
.then(response => { return response.json()})
.then(data => {console.log(data)})
.catch(error => {console.log(error)})
