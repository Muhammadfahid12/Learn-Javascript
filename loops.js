//For of is not used for objects
//for in iterate over keys while for of interate over elements only in arrays



//Difference between for of and for in loops
// const arr = [11,22,33,444,555,66,7777];
// arr.foo = "hello";

// for (const a in arr) {
//   console.log("for in loop ",a,arr[a]);
// }
//i only represents the index and arr[i] represents the value of the specific index.

// for (const i of arr) {
//   console.log("for of loop ",i);
// }

//use of For In Loops with String and objects,loops concepts

// let a ={
//     name: "Fahid",
//     age: 23,
//     gender: "male"
// }
// for(let i=0;i<Object.keys(a).length;i++){
//     const a2 = a[Object.keys(a)[i]]
//     console.log(a2)
// }

//  for (const properties in a) {
//  console.log(properties)
//      }


//  let name="Muhammad Fahid Farooq"
//  for (const char in name){
//     console.log(name[char])
//  }

// let cls = ["first","second","third","fourth","fifth","six"]
// for(const char in cls){
//     console.log(cls[char])
// }


// console.log("use of For Of Loops")

// //let obj=["first","second","third","fourth","fifth","six"]
// let obj ={
//     name: "Fahid",
//     age: 23,
//     gender: "male"
// }
//    for (let iterator of obj) {
//     console.log(iterator)
//    }


// const object = {a: 1, b: 2, c: 3};
// for (let property in  object) {
//   console.log(property);
// }
//  function fac(n){
//   let a=1;
// for(let i=1;i<=n;i++){
//        a*=i
//  }
//  return a;
// }
//  console.log(fac(5))


// function scream(n) {
//   let str='';
//   for(let i=0;i<=n;i++){
//       if(i%2===0){
//           str+='A'
//       } else if(i%2===1){
//       str+='a'
//       }
//   } 
//   return str;  
//  }
//  console.log(scream(5))




// function topDouble(value, top) {
// while(true){
//   let a=1;
//   if(value>=top){
//   break;}
//   else {
//     for(let i=1;i<value;i++){
              

//     }
//   }
// }
// return value
// }
// console.log(topDouble(5,20))


//xXxxxXXXXXXXXXXasw11
 // let a=string.slice(string.indexOf('x')) 

// function splitAtX(string) {
//     for(var i=0; i<string.length; i++){
//         if(string[i]==='x'){
//          return  string=string.slice(i+1,string.length)
//         }
//     } 
//   }
//  console.log(splitAtX('happyxbirthday'))

//very important concept
//i


   // function splitAtX(string){
   //  const x = string.indexOf('x')
   //  const firstHalf=string.slice(0,x)
   //  const secondHalf=string.slice(x+1)
   //  if(firstHalf.length > secondHalf.length){
   //     return firstHalf;
      
   //  }
   //  return secondHalf;
   // }
   // console.log(splitAtX('happ22424yxbirthday'))