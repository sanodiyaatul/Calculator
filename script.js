// let input = document.getElementById("inputBox");
// let buttons = document.querySelectorAll("button");

// let string = "";
// let arr = Array.from(buttons);

// arr.forEach(button => {
//     button.addEventListener('click',(e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else {string+= e.target.innerHTML;
//         input.value = string;
//         }
//     })
// })

// document.addEventListener("keypress",function (event) {
//     makeSound(event.key);
// });
//     function makeSound(key){

//     switch (key) {
//         case "1":
//             document.getElementsByClassName(".1").textContent=1;
//             break;

//             case "2":
//                 document.getElementsByClassName(".2").textContent=2;
//                 break;

    

//         default:
//             break;
//     };
// };


let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";

// Map keyboard keys to corresponding button innerHTML values
const keyboardMappings = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    ".": "dot",
    "+": "plus",
    "-": "minus",
    "*": "multiply",
    "/": "divide",
    "%": "modulo",
    "=": "equal"

    // Add more mappings for other keys as needed
};

// Add a click event listener to each button
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

// Listen for keypress events on the document
document.addEventListener("keypress", function (event) {
    const keyPressed = event.key;
    const buttonValue = keyboardMappings[keyPressed];

    // If a corresponding button value is found, trigger a click event
    if (buttonValue !== undefined) {
        const button = document.querySelector(`button[data-value="${buttonValue}"]`);
        if (button) {
            button.click();
        }
    }
});