const keypad = document.querySelector(".keypad");
const screen = document.getElementById("output__number");

let digits = [];

function renderResult() {
    if (digits.length === 0) {
        screen.textContent = 0;
    } else {
        const result = parseInt(digits.join(""));
        screen.textContent = result;
        console.log(result, typeof result);
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
                break;
            case "subtract":
                break;
            case "multiply":
                break;
            case "divide":
                break;
            case "reset":
                digits = [0];
                renderResult();
                break;
            case "equals":
                break;
            case "del":
                digits.pop(id);
                renderResult();
                break;
            case "dot":
                digits.push(".");
                renderResult();
                break;
        }
    }
});
