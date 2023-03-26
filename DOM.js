const title= document.querySelector('#main');
 title.style.color="green";
 console.log(title)

const list1 =document.querySelectorAll(".child")
 for (let i=0; i<list.length; i++) {
 list1[i].style.color="green"
list1[i].style.background="black"
 }

//creating elements

let unorderedList = document.querySelector('ul')
let list =document.createElement("li")
  
unorderedList.appendChild(list)
a//appendChild is used to adding elements to the existing ones 
console.log(unorderedList)


//modifying text elements

const updateText = document.querySelector('.child')
 console.log(updateText.innerText)
 console.log(updateText.textContent)// it also indicates spacing between them
 console.log(updateText.innerHTML)
  updateText.innerText="updated Git Vesion text"


 let unorderedList2 = document.querySelector('ul')
 let list2 = document.createElement("li")

unorderedList2.appendChild(list2)

list.innerText="Newly Added list using textContent Method"
list.innerText="Management Skills"
console.log(unorderedList2)


 
// modifying classes and attributes
list.setAttribute("class", "least-recent")//we have created a class attribute named "least-recent
 unorderedList.setAttribute("id","unordered")//
 let title= document.getElementsByClassName(".least-recent")
 console.log(title)

 unorderedList.removeAttribute("id")

 let doc =document.body
 doc.appendChild("Hello Wrold")
//appned can alos handle strings and more than one element while appendChild can't do that.
 console.log(doc)
let docs= document.body
console.log(docs)
let ul = document.querySelector('ul')
ul.setAttribute("class","nav-ul")
let li=document.createElement("li")
ul.appendChild(li)
ul.style.backgroundColor="red"
li.innerconte="Home"
console.log(ul)