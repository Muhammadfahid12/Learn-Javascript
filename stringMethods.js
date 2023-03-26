//strings method in JavaScript
// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim() //remove leading and trailing whitespace
// String trimStart() //remove whitspaces from beginning of string
// String trimEnd()//remove whitespaces from end of string
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

/*Extracting String Parts
there are three methods to extract strings parts
slice(start, end)
substring(start, end)
substr(start, length)
*/

// let a ="Muhammad Fahid Farooq"
// console.log(a.length)
// console.log(a.slice(0,10))
// console.log("substring method",a.substring(0,10))//substring method is only used for positive indexing
// console.log(a.substr(12,6))
//The difference in substr is that the second parameter specifies the length of the extracted part.


//The replace() method replaces a specified value with another value in a string:
// let name ="please visit microsoft and microsoft."
// let b = name.replaceAll("microsoft","fahad")
// console.log(b)
// let name = "     helloo world        j"
// // console.log(name)
// console.log(name.trimEnd())

const str = "Hello, world!";
const words = str.split(""); // split the string into an array of words
//console.log(words); // outputs ["Hello", "world!"]
const rev=words.reverse();
console.log(rev)
const join= rev.join('')
console.log(join)