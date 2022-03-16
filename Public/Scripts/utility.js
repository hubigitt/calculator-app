export function renderResult(digits) {
    return digits.length === 0 ? 0 : digits;
}
export function pushToMemory(digits) {
    return digits.length !== 0 ? digits : 0;
}
export function cleanDigits() {
    return 0;
}
export function deactivateButtons() {
    const buttons = document.querySelectorAll(".keypad__button--active");
    buttons.forEach((button) => {
        button.classList.remove("keypad__button--active");
    });
}
export function activateOperationButton(button) {
    button.classList.add("keypad__button--active");
    const activeOperation = button.id;
    return activeOperation;
}
