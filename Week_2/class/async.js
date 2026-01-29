// console.log("Start");
// function task() {
//     setTimeout(() => {
//         console.log("Task running");
//     }, 3000); // 3000 ms = 3 seconds
// }
// task();


// function func(callback) {
//     setTimeout(() => {
//         callback("B")
//     }, 3000)
// }
// console.log("A");
// func((value) => {
//     console.log(value);
// })
// console.log("C");


// console.log("Start");
// function wait() {
//     let start = Date.now();
//     while(Date.now() - start < 3000);
// }
// wait();
// console.log("End");



console.log("Start");
function wait() {
    setTimeout(() => {
        console.log("wait");
    }, 2000)
}
wait();
console.log("End");