//Topics covered in this are optional chaining and dynamic ojects. 
let dynamic="name"
//Dynamic Object with example;
let value="age"
let learn="skill"
let obj ={
  [dynamic]:"Muhammad Fahid",
  [value]:22,
  [learn]:"fronr-end developer"
}

console.log(obj)

//Advance Object Properties
//Chain linking
var company = {
    name:"Apple",
    since:1976,
    founders:"Steve Jobs and Steve Wozniak",
    Details : {//here we use another object without assignment operator
        headquarters : "California" ,
        Country:"USA",
        CEO: "Tim Cook"
    },
  }
  //console.log(company.Details)//this is used bcz we are using object in object
   var {name,founders,Details :{CEO,headquarters}} = company;
   //Destructuring from  objects from nested objects
   console.log("2nd method")
   console.log({name,founders,Details:{CEO,headquarters}})
  
  console.log("using optional chaining")
  console.log(company?.Details?.CEO)
  