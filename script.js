const block = document.getElementById("block");
const display = document.getElementById("displayHex");

const hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

let color = "";
let randHex;
let randNum = 0;

// Event Listeners
block.addEventListener("click", displayColor);



function displayColor()
{
    randHex = "#" + randColor();
    block.style.backgroundColor = randHex;
    display.innerHTML = randHex;
    color = "";
}


function randColor()
{
    for (let i = 0; i < 6; i++) 
    {
        randNum = getRndInteger(0,15);
        color = color + hex[randNum];
    }
    return color;
}


function getRndInteger(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

