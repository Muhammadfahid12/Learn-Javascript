// https://dummyjson.com/products/1
// fetch('https://dummyjson.com/products/1')
// .then(data=>data.json())
// .then(data=>console.log(data)
// )

function isAllX(string) {
    for(let i=0;i<string.length;i++){
        if(string[i].toLowerCase()==='x'){
            return true
        }else{
           return false;
        }
    } 
 }
console.log(isAllX('Xadad')) 