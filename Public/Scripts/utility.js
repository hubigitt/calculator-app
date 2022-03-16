//UTILITY FUNCTIONS

export function renderResult(digits) {
    if (digits.length === 0) return 0;
    else return digits;
}
export function pushToMemory(digits) {
    if (digits.length != 0) return digits;
    else return;
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
