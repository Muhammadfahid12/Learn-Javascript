//This Keyword in javascript
//if this is used in regular function then it will be scoped globally
//and if used within a method,it will be scoped locally
//Difference between 'call' and apply 'method'
//The difference is that call takes a list of arguments,
// while apply takes a single array of arguments.


// function thisName() {
//     return this.name ;
//   }
//   const result= thisName.bind({name:'Bob',age:29})
//   console.log(result())



// const obj = {
//     value: 2,
//     getValue: function() {
//         return this.value;
//     }}
// let result = obj.getValue();
// console.log(result)



function addYear() {
    setTimeout(()=> {
        this.age++
        console.log(this.age)
    }, 2000);
}

const person1 = { age: 29,add:addYear};

(person1.add())





