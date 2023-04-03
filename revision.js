// function fizzBuzz(n){

//     if(n%3===0 && n%5===0){
//         return "FizzBuzz"
//     }
//     else if(n%3===0){
//         return "Fizz"
//     }
//     else if (n%5===0){
//         return "Buzz"
//     }
//     else if (typeof n === "string"){
//         return "Not a Number"
//     }
//     else {
//         return n;
//     }
// }
// console.log(fizzBuzz('a'))
// console.log(fizzBuzz(5))
// console.log(fizzBuzz(8))

// function speedCheck(speed){
//     let speedAllowed=70;
//     let a=5
//     if(speed<75){
//         console.log("OK")
//     }
//     else{
//     let point= Math.floor((speed-speedAllowed)/a)
//     if (point>=12){
//         console.log("License Suspended")
//     }
//     else {
//         console.log("Points", point)
//     }
//     }
// }
// speedCheck(75)
// function EvenOdd(n){
//     if(n%2===0){
//         console.log("Even Number")
//     }
//     else {
//         console.log("Odd Number")
//     }
// }
// EvenOdd(41)
// function isTruthy(arr){
//       for(let values of arr){
//       if(values){                   //it means if that element is truthy
//         console.log(values,"is true")

//       }
//       else{
//         console.log(values,"is false")
//     }
// }}
// isTruthy([1,2,3,null,'',0])

// function truthy(arr){
//     let count=0
//     for(let values of arr){
//         if(values){
//             count++
//         }
//         else{
//             console.log(values,"is false values")
//         }
//     }
//     return count
// }
// console.log(truthy([1,2,3,null,'',0,"Fahad","Mosh"]))
// let intro = {
//     name: 'Muhammad Fahid Farooq',
//     age: 22,
//     email: 'ranafahadirshad@gmail.com',
//     22:23
// }


// function objectString(obj) {    
//     for (let keys in obj) {
//         if (typeof keys && typeof obj[keys] === 'string') {
//             console.log(keys, obj[keys])
//         }
//     }
// }
// (objectString(intro))



// function Sum(num){
//     let a=0;
//     for(let i=0;i<=num;i++){
//         if(i%3===0||i%5===0){
//             a+=i
//         }
//     }  
//     return a
// }
// console.log(Sum(5))


//
// function stars(num){
// let a ='';
// for(let i=1; i<=num; i++){
//   a=(a.concat(i))
//   console.log(a)
// }
// }
// ((stars(5)))


// function isPrime(num){
//     for(let i=0;i<=num,i++){
//         if(i%)
//     }
// }
let obj = {n:12}
function increment(n){
    obj.n++
}
increment(obj)
console.log(obj)
