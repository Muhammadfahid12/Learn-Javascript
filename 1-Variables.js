
// function increment() {

//     let x = 10;
//     for(let i = 0; i < 5; i++){
//         console.log(x++);
//     }
    
// }

// increment();

function increment() {

    const x = 10;
    for(let i = 0; i < 5; i++){
        x = x+1 //this cannot occur because we are using const 
        console.log(x);
    }
    
}

increment();