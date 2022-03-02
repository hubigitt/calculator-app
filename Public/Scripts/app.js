const keypad = document.querySelector(".keypad");
const screen = document.getElementById("output__number");

let memory = [0];
let digits = [0];
let activeOperation;

//UTILITY FUNCTIONS
function renderResult() {
    if (digits.length === 0) {
        screen.textContent = 0;
    } else {
        const result = parseInt(digits.join(""));
        screen.textContent = result;
        console.log(result, typeof result);
    }
}
function pushToMemory() {
    memory = digits;
    digits = [];
    renderResult();
}
function changeHandler(result) {
    digits = result.toString().split("");
    document.querySelector(".keypad__button--active").className =
        "keypad__button";
    renderResult();
}

//CALCULATOR FUNCTIONS
function add(a, b) {
    const result = a + b;
    changeHandler(result);
}
function subtract(a, b) {
    const result = a - b;
    changeHandler(result);
}
function multiply(a, b) {
    const result = a * b;
    changeHandler(result);
}
function divide(a, b) {
    if (a === 0 || b === 0) {
        digits = memory;
        document.querySelector(".keypad__button--active").className =
            "keypad__button";
        renderResult();
        alert("You can't divide by 0 fool!");
    } else {
        const result = a / b;
        changeHandler(result);
    }
}
function equals(operator) {
    const a = parseInt(memory.join(""));
    const b = parseInt(digits.join(""));
    console.log(operator);
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

keypad.addEventListener("click", (event) => {
    const button = event.target;
    const id = button.id;
    if (parseInt(id) >= 0 && parseInt(id) < 10) {
        digits.push(parseInt(id));
        renderResult();
    } else {
        switch (id) {
            case "add":
                button.className = "keypad__button--active";
                activeOperation = id;
                pushToMemory();
                break;
            case "subtract":
                button.className = "keypad__button--active";
                activeOperation = id;
                pushToMemory();
                break;
            case "multiply":
                button.className = "keypad__button--active";
                activeOperation = id;
                pushToMemory();
                break;
            case "divide":
                button.className = "keypad__button--active";
                activeOperation = id;
                pushToMemory();
                break;
            case "reset":
                digits = [0];
                memory = [0];
                renderResult();
                break;
            case "equals":
                equals(activeOperation);
                memory = [];
                break;
            case "del":
                digits.pop(id);
                renderResult();
                break;
            // case "dot":
            //     digits.push(".");
            //     renderResult();
            //     break;
        }
    }
});
