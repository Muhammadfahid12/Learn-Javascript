//Array Sort Method

// let arr =[2,10,50,6,3,4].sort()
// console.log(arr)//[ 10, 2, 3, 4, 50, 6 ]
//the reason is that numbers of array are converted to strings and 
//then they are compared,like '10'=='2',only first character is compared,so 10 is smaller than 2,
//to solve it,we will do

//Strings have a built-in method for convienent comparison called "localeCompare";


// const fruits = ['banana', 'kino', 'apple', 'pineapple'];

// fruits.sort(function(a, b) {
//   return a.localeCompare(b);
// });

// console.log(fruits); 

// let c = "abcd".localeCompare("bcd"); // -1,0,1 (-1)indicate that a should 
// console.log(c)




function sortStudents(students) {
//     students.sort((a,b)=>{
//         if(a.graduated>b.graduated)
//         return -1
//         else if (a.graduated<b.graduated){
//             return 1
//         } 
//     })
//         students.sort((a,b)=>{
//             if(a.grade>b.grade){
//                 return -1
//             } else if(a.grade<b.grade){
//                 return 1
//             }

//         })
// }

}
