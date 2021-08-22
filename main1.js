

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Hex color example =  #f15025

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", () => {
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});
// To get random number 
let getRandomNumber = () => Math.floor(Math.random() * hex.length)