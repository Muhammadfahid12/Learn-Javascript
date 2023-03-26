// array methods
// 1. change array to strings
 let r = ["first", "second", "third"]
 console.log(a.toString())


// 2.delete method for array elemenst
 let b =["first", "second", "third"]
delete b[0]
 console.log(typeof b[0])//type of deleted item will always be undefined

//3.Merging arrays (concat method)

//The concat() method does not change the existing arrays. It always returns a new array.

 let engrs1 = ["first", "second", "third"]
 let  engrs2=["fourth", "fifth", "sixth"]
let engrs3 =engrs1.concat(engrs2)
//we can also concat with values
 let engrs4=engrs2.concat("hi I am Allah's Man")
   console.log(engrs4)

//4. Splice method
 let a =[1,2,3,4,5]
 a.splice(0,2,)
 console.log(a)
//5.slice Method