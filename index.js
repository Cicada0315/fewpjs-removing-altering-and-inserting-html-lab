// Write your code here!
document.querySelector('main#main').remove();

let header = document.createElement("h1");
header.setAttribute("id", "victory");
document.body.appendChild(header)
header.innerHTML = "Jean is the champion";

let newHeader=document.querySelector('h1#victory');
