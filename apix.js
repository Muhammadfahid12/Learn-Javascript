//https://dummyjson.com/products/1

fetch('https://dummyjson.com/products/1')
.then(data=>data.json())
.then(data=>console.log(data)
)

