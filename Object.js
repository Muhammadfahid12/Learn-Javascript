// primitve data types are copied by their value,
// while non-primitve are copied by refernce


//to enumrate objects we use "for in loop" and for of(by using "Object.keys or Object.entries") or also use of ("in") value

//Object Cloning(we use Object.assign method )

let obj={
  name:"Muhammad Fahid Farooq",
  age:22,
  profession:'Web-developer',
}
// let Cloning= Object.assign(obj,{email:'ranafahadirshad@gmail.com'})
//   console.log(Cloning)
  //Another Cloning Method by use of spread operator
let Cloned={...obj,email:'ranafahadirshad@gmail.com'}
console.log(Cloned)



// //Topics covered in this are optional chaining and dynamic ojects. 
// let dynamic="name"
// //Dynamic Object with example;
// let value="age"
// let learn="skill"
// let obj ={
//   [dynamic]:"Muhammad Fahid",
//   [value]:22,
//   [learn]:"front-end developer"
// }

// console.log(obj)

// //Advance Object Properties
// //Chain linking
// var company = {
//     name:"Apple",
//     since:1976,
//     founders:"Steve Jobs and Steve Wozniak",
//     Details : {//here we use another object without assignment operator
//         headquarters : "California" ,
//         Country:"USA",
//         CEO: "Tim Cook"
//     },
//   }
//   //console.log(company.Details)//this is used bcz we are using object in object
//    var {name,founders,Details :{CEO,headquarters}} = company;
//    //Destructuring from  objects from nested objects
//    console.log("2nd method")
//    console.log({name,founders,Details:{CEO,headquarters}})
  
//   console.log("using optional chaining")
//   console.log(company?.Details?.CEO)


// function modify(object) {
//  object.message = "Hello World";
// }
// const m = {
//   name: "Seven Eleven" 
// }

// modify(m);

// console.log(m.message);