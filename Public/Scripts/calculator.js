function add(a, b) {
    const result = a + b;
    return result.toFixed(3);
}
function subtract(a, b) {
    const result = a - b;
    return result.toFixed(3);
}
function multiply(a, b) {
    const result = a * b;
    if (a === 0) return 0;
    else return result.toFixed(3);
}
function divide(a, b, memory) {
    if (b === 0) {
        alert("You can't divide by 0 fool!");
        return memory;
    } else {
        const result = a / b;
        return result.toFixed(3);
    }
}
export function equals(operator, memory, digits) {
    const a = parseFloat(memory);
    const b = parseFloat(digits);
    let result;
    if (digits === 0) {
        alert("Something is missing, try again.");
        return "0";
    } else {
        if (operator === "add") {
            result = add(a, b);
        }
        if (operator === "subtract") {
            result = subtract(a, b);
        }
        if (operator === "multiply") {
            result = multiply(a, b);
        }
        if (operator === "divide") {
            result = divide(a, b, memory);
        }
        if (operator === "") {
            result = 0;
        }
    }
    return result;
}
