//Array.map
//a function is applied on each element of the array.

// arr=[1,2,3]
// const b =arr.map(a=>a+1)
// console.log(b)

//const absolutes = [-1, 1, -2, 2].map(Math.abs);

// console.log(absolutes); // [1,1,2,2]
function hello(name,age){
    if(name===undefined){
        return "MR.abc"
    }
    return ` Hello ${name} and I am ${age} years old`
}

// let arr= ['Fahad',28].map(hello)
// console.log(arr)                         //' [Hello Fahad and I am 0 years old',
                                            //' Hello 28 and I am 1 years old'}


//the output is becuase map works as (element,index,array).so "Fahad" is element and index is 0,

let result = ['Fahad',28].map(function (a){
    return a.
}
)