// const myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if(success) resolve("Accept")
//     else reject("Rejected")
// });

// myPromise
// .then(result => console.log(result))
// .catch(error => console.log(error))



// Promise Chaining

function step1() {
    return Promise.resolve("Step 1 done");
}

function step2() {
    return Promise.resolve("Step 2 done");
}

step1()
.then(res => {
    console.log(res);
    return step2();
})
.then(res => {
    console.log(res);
})
