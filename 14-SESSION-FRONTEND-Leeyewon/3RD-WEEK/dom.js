const newHeader1 = document.createElement("h1");

newHeader1.innerText = "New Header";

document.body.appendChild(newHeader1);

const newline = document.createElement("p");

newline.innerText = "New Line!";

const secondline = document.getElementsByTagName("p")[1];

document.body.insertBefore(newline, secondline);

const nodeToRemove = document.getElementsByTagName("p")[2];

const parentNode = document.body;

parentNode.removeChild(nodeToRemove);

const button2 = document.getElementsByTagName("button")[1];

button2.setAttribute("disabled", true);

button2.removeAttribute("disabled");

const inputField = document.getElementsByTagName("input")[0];

inputField.type = "color";

console.log(demo.innerText);
console.log(demo.textContent);
console.log(demo.innerHTML);

const line1 = document.getElementsByTagName("p")[0];

line1.style.color = "#ffc1cc";
line1.style.fontSize = "50px"

const buttonclick = document.getElementsByTagName("button")[0];

buttonclick.addEventListener("click", () => console.log("Click"));

