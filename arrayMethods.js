// array methods
// 1. change array to strings
//  let r = ["first", "second", "third"]
//  console.log(a.toString())


// 2.delete method for array elemenst
//  let b =["first", "second", "third"]
// delete b[0]
//  console.log(typeof b[0])//type of deleted item will always be undefined

//3.Merging arrays (concat method)

//The concat() method does not change the existing arrays. It always returns a new array.

//  let engrs1 = ["first", "second", "third"]
//  let  engrs2=["fourth", "fifth", "sixth"]
// let engrs3 =engrs1.concat(engrs2)
// //we can also concat with values
//  let engrs4=engrs2.concat("hi I am Allah's Man")
//    console.log(engrs4)

//4. Splice method
//  let a =[1,2,3,4,5]
//  a.splice(0,2,)
//  console.log(a)
//5.slice Method


// function sumEven(array) {
//   let total=0;
//   for(let i=0;i<array.length;i++){
//           if(array[i]%2===0){
//              total+=array[i];
//             //  return total     //we cannnot use return value there because it will 
//           //return total as soon it find even number and only first element will be displayyed     }
       
//         }
       
       
// }
// return total;
// }

// function unique(array) {
//   const arr1 =[];

//   function unique(array) {
//     let newArray = [];
//     for(let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (newArray.indexOf(element) === -1) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }}
// console.log(unique[1,2,3,44,3,2,55])


// function addOne(array) {
//    let array2=[]
//      for(let i=0;i<array.length;i++){
//     array2.push(array[i]+1)
//     }
// return array2
// }
// console.log(addOne([1,2,2,3341,131,321,31]))


function greaterThanFive(array) {
 
for(let i=array.length-1;i=>0;i--){
    if(array[i]>2){
        array.splice(i,1)
    }
    
}
return array
}
 console.log(greaterThanFive('array is',[1,2,33,44]))


