// Very imp


// console.log(checkRepeat("Fahad"))
// function checkRepeat(str){
//         let frequency = {}
//         for(let char of str){
//         if(char in frequency){
//             frequency[char]=frequency[char] +1
//                             //this frequency[char]=1 or greater so we added another 1
//        }
//        else{
//         frequency[char]=1
//        }
//         }
//         return frequency
//     }
//we use above code as a refernce in this second function


// console.log(wordRepeat("hello! I am learning advance javascript hello!"))
// function wordRepeat(str){
//         let stringToArray=str.split(' ')
//         return checkRepeat(stringToArray)
//     }



//Important use(to find maximum in arrays)

// randomSort = [2, 3, 4, 11, 23, 1, 0, 83, 21, 909090]
// randomSort.sort(() => {
//   return 0.5 - Math.random();
// });
// console.log(randomSort);

// Finding Maximum Number in Array;
// arr=[10,20,30,40,50,800]
// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);
//   }
//   console.log(myArrayMax(arr))

//to find minimum we use Math.min.apply

//finding maximum and minimum in simple way


//Max
// arr=[23,444,12,9012,-3242,-7007,90000]
// console.log('Maximum :' ,maxItem(arr))
// function maxItem(arr){
// let length=arr.length;
// let max=-Infinity;
// while(length--){
// if(arr[length]>max){
//     max=arr[length];
// }
// return max
// }
// }

//Finding Minimum
// arr=[23,444,12,9012,-3242,-7007,90000]
// console.log('Minimum :' , minItem(arr))
// function minItem(arr){
//     let length=arr.length;
//     min=Infinity
// while(length--){
// if(arr[length]<min){
//   min=arr[length];  
// }
// }
// return min
// }




// function findMax(arr){
//     let max=arr[0]
// for(let char of arr){
//  if(char>max){
//     max=char
//  }
// }
// return max;
// }
// console.log(findMax([23,24,22,787,178391]))
// Checking the repetition of characters
// let object={
// name:'Muhammad Asif Hameed'
// }

// object.age=object.name
// console.log(object)

//Array Sort Method

// let arr =[2,10,50,6,3,4].sort()
// console.log(arr)//[ 10, 2, 3, 4, 50, 6 ]
//the reason is that numbers of array are converted to strings and
//then they are compared,like '10'=='2',only first character is compared,so 10 is smaller than 2,
//to solve it,we use comparsion functions,look in

//Strings have a built-in method for convienent comparison called "localeCompare";

// const fruits = ['banana', 'kino', 'apple', 'pineapple'];

// fruits.sort(function(a, b) {
//   return a.localeCompare(b);
// });

// console.log(fruits);

// let c = "abcd".localeCompare("bcd"); // -1,0,1 (-1)indicate that a should
// console.log(c)

// function sortStudents(students) {
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
// let arr= [22,13,4,78,80].sort((a,b)=>{
//     b-a
//  })
// console.log(arr)


// const students = [
//     { id: 1, graduated: true, grade: 86 },
//     { id: 2, graduated: false, grade: 96 },
//     { id: 3, graduated: false, grade: 78 },
//     { id: 4, graduated: true, grade: 96 },
//     { id: 5, graduated: false, grade: 46 },
//     { id: 6, graduated: true, grade: 99 },
// ];
// let sortStudents = students.sort((a,b)=>{
//  if(a.graduated>b.graduated){
//   return -1
//  }
//  if(a.graduated<b.graduated){
//  return 1}
         
//   return b.grade-a.grade

//   }
// )
// console.log(sortStudents)



//TO sort strings in object arrays
// const cars = [
//   {type:"Volvo", year:2016,id:2},
//   {type:"Saab", year:2001,id:4},
//   {type:"BMW", year:2010,id:3}
// ];
// let stringSort =cars.sort((a,b)=>{
//   let x= a.type.toLowerCase();
//   let y = b.type.toLowerCase();
//   if(x<y) return -1;
//   if(x>y) return 1;
//   return 0
// })
// console.log(stringSort)



// Very impotant question

// let Events = [
// { event: 'dance', month: 'MAR'},
// { event: 'farmers market', month: 'JUN'},
// { event: 'parade', month: 'JAN'}
// ]

// const MONTHS = [
//   'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
//   'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
// ];

// function sortByMonth(events) {
// events.sort((a,b)=>{
//   let x= MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month)
//  return x
 
// })
// }
// console.log((sortByMonth(Events)))

//Arrat Map()
function sayHello(name, greeting) {
  if(greeting === undefined) {
      greeting = "Hello";
  }
  return `${greeting} ${name}!`;
}
// console.log(sayHello("Fahid","Assalam o Alaikum"))
// const result = ['Steve', 'Amanda'].map((x,y)=>sayHello(x));
// console.log(result)


// function squareRoot(x){  
// const absolutes = x.map(Math.abs);
//  return  absolutes.map(Math.sqrt)
// }
// console.log(squareRoot([-15, 9, -2, 4]))

function squared(arry) {
  return arry.map(x=>x*x)
}
console.log(squared([1,2,3,4]))

// Mapping over objects in array

// let abc= users.map(x=>{
  //   return {name:x.name,
  //   loggedIn:false}
  
  // })
  // console.log(abc)
  
  // we can also specify index using mapping,for example:
  function updateArray(arr){
    return arr.map(user=>{ 
      { user.name='Fahad';
      user.age=user.age+4;}
      return user
    })
  }
  const users = [
    { name: 'Corey', loggedIn: true },
    { name: 'Anna', loggedIn: false },
    { name: 'Anna', loggedIn: false,age:22 }
  ];
console.log(updateArray(users))



//Array Filters