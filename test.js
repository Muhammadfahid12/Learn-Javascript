//1.
function halfValue(numbers) {
    let newArr=[]
for(let i=0;i<numbers.length;i++){
    newArr.push(Math.round(numbers[i]/2))

}
// return newArr;
// }
// console.log(halfValue([4,7,9]))

//2.
// function countC(str) {
//     let char='';
//     for(let i=0;i<str.length;i++){
//         if(str[i]==='c'||str[i]==="C"){
//             char+=str[i]
//         }
//     } 
//     return char.length
//  }
 
//  console.log(countC('abdefcCCccccc'))

 //3
//  const vowels=['a','e','i','o','u']
//  function countVowels(str) {
//     let count=0
//  for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i].toLowerCase())){
// count++;
//     }
//  }
//  return count
// }

// console.log(countVowels('AbcdEi'))

//4.
// function reverse(string) {
//     const splt= string.split('')
//     let rev =splt.reverse()
//     const join=rev.join('')
//     return join
// }
// console.log(reverse('abcdef'))


// function isPalindrome(string) {
//     for(let i=0; i<string.length; i++){
//         if(string[i]==string[i+2]){
//             return true
//         }
//     }
//     return false
// }
// console.log(isPalindrome('tenat'))

// let obj={
//     K:4,
//     Q:3,
//     J:2,
// }
// function playerHandScore(hand) {
//     const newArr=hand.split('')
//     let sum=0;
//     for(let i=0;i<hand.length;i++){
//        const score = obj[newArr[i]]     
//        sum+=score  
//     }
//     return sum
// }
//     console.log(playerHandScore('00QKK'))

// function toNumber(string) {
//     if((typeof string)===NaN){
//       return 0 ;
//     } else{
//        return  parseInt(string)
//     }
// }
// console.log(toNumber("px"))




// function fizzBuzz(numbers) {
//     let result=''
//     for(let i=0;i<numbers.length;i++){
//         if ((numbers[i])%3===0 && numbers[i]%5===0){
//            result+='fizzbuzz'
//       } else if ((numbers[i])%5===0){
//           result+='buzz'
//     } else if ((numbers[i])%3===0){
//           result+='fizz'
//     }
    
//     }
//     return result;
// }
    
//     console.log(fizzBuzz([3,15,8,28,30]))
    

console.log(this)