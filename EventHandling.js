//Event Hanlder
//Mouse Events are 
/*
click
dblclick
mouseover
mouseout
mousedown
mouseup
*/

let title= document.getElementById('main')

// title.addEventListener("mouseover",()=>{
//    title.style.backgroundColor="green"
// })
// //MouseOut type event


// title.addEventListener("mouseout",()=>{
//     title.style.backgroundColor="red"
//  })

//mousedown event type
// title.addEventListener("mousedown",()=>{
//     title.style.backgroundColor="yellow"
// })

/* 
key type events are


keydown//it works when key is press down

keyup//it works when key is released

keypress//physical events


*/

// let title= document.getElementById('input')
// title.addEventListener("keyup",(x)=>{//we give an argument because we have to give input
//  if((x).key==='E'){
//     console.log("Ea key is pressed")
//  }
//  else{
//     console.log(`pressed key is ${x.key}`)
//  }})


//keypress handles only physical keys,it did not respomd like "shift key","backspace key etc"
// let title= document.getElementById('input')
// title.addEventListener("keypress",(event)=>{
//     console.log(`pressed key is ${event.key}`)
// })

//form event handlers


const form = document.getElementById('my-form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()//
    const name1 = document.getElementById('name').value
    if(name1===""){
        alert("please enter your name")
        name1.focus()
    } 
      else{
        alert(`hello ${name1}`) 
      }  
    }
)





