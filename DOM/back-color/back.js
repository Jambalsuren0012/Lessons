// let myButton = document.getElementById("btn");
// function changeBackgroundColor () {
// myButton.style = "background-color: green"
// }
// function changeBackgroundColor2 () {
//     myButton.style = "background-color: red"
//     }
// function changes () {

// }
// myButton.addEventListener("click",changeBackgroundColor,);\
const colors = [ "purple", "pink", "green"];

let colorindex  = 0;

let r = Math.floor(Math.random()* (255 - 0 )).toString(16);
let g = Math.floor(Math.random()* (255 - 0 )).toString(16);
let b = Math.floor(Math.random()* (255 - 0 )).toString(16);

const body = document.getElementsByTagName("body")[0];

const change = () => {
if (colorindex >= 3){
    colorindex = 0;
}
body.style = `background-color: ${colors[colorindex]}`;
colorindex++;
};
myBtn.addEventlistener("click", change);
