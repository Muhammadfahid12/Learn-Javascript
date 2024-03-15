//var

function sum() 
{

  var y = 12;

}
 console.log(y); //it won't return any error

// let

function increment() {

  let x = 10;

  for (let i = 0; i < 5; i++) {
    console.log(x++);
  }

}

console.log(x); //here it will return error because x is declared with let keyword and it is block scope

increment();

//const

function decrement() {

  const x = 10;

  for (let i = 0; i < 5; i++) {

    x = x + 1; //this cannot occur because we are using const
    console.log(x);

  }

}

decrement();



