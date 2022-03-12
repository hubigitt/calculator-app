const keypad = document.querySelector(".keypad");
const screen = document.getElementById("output__number");
const resetBtn = document.getElementById("reset");
const themeSlider = document.querySelector(".nav__theme__toggler__slider");
const themeSliderDot = themeSlider.firstElementChild;

console.log(themeSlider);

let memory = "";
let digits = "";
let activeOperation;
let currentTheme = 1;

//THEME
setTheme(currentTheme);

function changeThemeHandler() {
    // const dot = themeSliderDot;
    const current = parseInt(
        themeSliderDot.className.charAt(themeSliderDot.className.length - 1)
    );
    if (current === 3) {
        // newClassName = "nav__theme__toggler__slider--1";
        // newClassName2 = "nav__theme__toggler__slider--1--theme1";
        currentTheme = 1;
    } else {
        // newClassName = `nav__theme__toggler__slider--${current + 1}`;
        // newClassName2 = `nav__theme__toggler__slider--${current + 1}--theme${
        //     current + 1
        // }`;
        currentTheme = current + 1;
    }
    // dot.className = `${newClassName} ${newClassName2}`;
    setTheme(currentTheme);
}

//UTILITY FUNCTIONS
function renderResult() {
    if (digits.length === 0) {
        screen.textContent = 0;
    } else {
        screen.textContent = digits;
        console.log(digits, typeof digits);
    }
}
function pushToMemory() {
    if (digits.length != 0) {
        memory = digits;
        digits = "";
    }
    renderResult();
}
function setResult(result) {
    digits = result;
    document
        .querySelector(".keypad__button--active")
        .classList.remove("keypad__button--active");
    renderResult();
}
function deactivateButtons() {
    const buttons = document.querySelectorAll(".keypad__button--active");
    buttons.forEach((button) => {
        button.classList.remove("keypad__button--active");
    });
}
function activateOperationButton(button) {
    button.classList.add("keypad__button--active");
    activeOperation = button.id;
}

//CALCULATOR FUNCTIONS
function add(a, b) {
    const result = a + b;
    setResult(result.toFixed(3));
}
function subtract(a, b) {
    const result = a - b;
    setResult(result.toFixed(3));
}
function multiply(a, b) {
    const result = a * b;
    setResult(result.toFixed(3));
}
function divide(a, b) {
    if (a === 0 || b === 0) {
        digits = memory;
        document
            .querySelector(".keypad__button--active")
            .classList.remove("keypad__button--active");
        renderResult();
        alert("You can't divide by 0 fool!");
    } else {
        const result = a / b;
        setResult(result.toFixed(3));
    }
}
function equals(operator) {
    const a = parseFloat(memory);
    const b = parseFloat(digits);
    if (operator === "add") {
        add(a, b);
    }
    if (operator === "subtract") {
        subtract(a, b);
    }
    if (operator === "multiply") {
        multiply(a, b);
    }
    if (operator === "divide") {
        divide(a, b);
    }
}
//EVENT LISTENERS

keypad.addEventListener("click", (event) => {
    const button = event.target;
    const id = button.id;
    if (parseInt(id) >= 0 && parseInt(id) < 10) {
        digits += id;
        renderResult();
    } else {
        switch (id) {
            case "add":
                deactivateButtons();
                activateOperationButton(button);
                console.log(activeOperation);
                pushToMemory();
                break;
            case "subtract":
                deactivateButtons();
                activateOperationButton(button);
                console.log(activeOperation);
                pushToMemory();
                break;
            case "multiply":
                deactivateButtons();
                activateOperationButton(button);
                console.log(activeOperation);
                pushToMemory();
                break;
            case "divide":
                deactivateButtons();
                activateOperationButton(button);
                console.log(activeOperation);
                pushToMemory();
                break;
            case "reset":
                digits = "";
                memory = "";
                deactivateButtons();
                renderResult();
                break;
            case "equals":
                equals(activeOperation);
                console.log(activeOperation);
                memory = "";
                break;
            case "del":
                digits = digits.slice(0, digits.length - 1);
                renderResult();
                break;
            case "dot":
                digits += ".";
                console.log(digits);
                renderResult();
                break;
        }
    }
});

themeSlider.addEventListener("click", changeThemeHandler);
