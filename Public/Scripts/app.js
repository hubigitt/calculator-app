import * as theme from "./themes.js";
import * as utility from "./utility.js";
import * as calculator from "./calculator.js";

const keypad = document.querySelector(".keypad");
const screen = document.getElementById("output__number");
const themeSlider = document.querySelector(".nav__theme__toggler__slider");
const themeSliderDot = themeSlider.firstElementChild;
const ls = localStorage;

let memory = "";
let digits = "";
let activeOperation;
let currentTheme = parseInt(ls.getItem("theme"));

//THEME
theme.setTheme(currentTheme); //THEME INITIATION

function changeThemeHandler() {
    const current = parseInt(
        themeSliderDot.className.charAt(themeSliderDot.className.length - 1)
    );
    currentTheme = current === 3 ? 1 : current + 1;
    ls.setItem("theme", currentTheme);
    theme.setTheme(currentTheme);
}

//EVENT LISTENERS
keypad.addEventListener("click", (event) => {
    const button = event.target;
    const id = button.id;
    if (parseInt(id) >= 0 && parseInt(id) < 10) {
        if (activeOperation === "") {
            activeOperation = "diho";
            digits = id;
            screen.textContent = utility.renderResult(digits);
        } else {
            digits = digits === 0 ? id : (digits += id);
            screen.textContent = utility.renderResult(digits);
        }
    } else {
        switch (id) {
            case "add":
                utility.deactivateButtons();
                activeOperation = utility.activateOperationButton(button);
                memory = utility.pushToMemory(digits);
                digits = utility.cleanDigits();
                break;
            case "subtract":
                utility.deactivateButtons();
                activeOperation = utility.activateOperationButton(button);
                memory = utility.pushToMemory(digits);
                digits = utility.cleanDigits();
                break;
            case "multiply":
                utility.deactivateButtons();
                activeOperation = utility.activateOperationButton(button);
                memory = utility.pushToMemory(digits);
                digits = utility.cleanDigits();
                break;
            case "divide":
                utility.deactivateButtons();
                activeOperation = utility.activateOperationButton(button);
                memory = utility.pushToMemory(digits);
                digits = utility.cleanDigits();
                break;
            case "reset":
                digits = utility.cleanDigits();
                memory = "";
                utility.deactivateButtons();
                screen.textContent = utility.renderResult(digits);
                break;
            case "equals":
                utility.deactivateButtons();
                digits = calculator.equals(activeOperation, memory, digits);
                screen.textContent = utility.renderResult(digits);
                activeOperation = "";
                memory = "";
                break;
            case "del":
                digits = digits.slice(0, digits.length - 1);
                screen.textContent = utility.renderResult(digits);
                break;
            case "dot":
                digits += ".";
                screen.textContent = utility.renderResult(digits);
                break;
        }
    }
});

themeSlider.addEventListener("click", changeThemeHandler);
