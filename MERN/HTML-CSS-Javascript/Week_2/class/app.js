// function one() {
//     two();
//     console.log("Hii");
// }

// function two() {
//     console.log("Hello");
// }

// one();


// console.log("Start");
// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data mil Gaya");
//     }, 2000);
// }
// fetchData((data) => {
//     console.log(data);
// })
// console.log("End");


setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000)
    }, 1000)
}, 1000)