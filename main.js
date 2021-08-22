let colors = ["green", "red", "yellow", "rgba(133,122,200)", "#f15025", "blue", "cyan", "black", "skyblue", "orange", "gold", "aqua"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");


btn.addEventListener("click", () => {
    // Get random number between from colors array
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    // console.log(randomNumber);
});

let getRandomNumber = () => Math.floor(Math.random()*colors.length);

