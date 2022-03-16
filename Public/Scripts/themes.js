const d = document;
const ls = localStorage;

export function setTheme(currentTheme) {
    const body = d.body;
    const app = d.querySelector(".app");
    const themeSlider = d.querySelector(".nav__theme__toggler__slider");
    const themeSliderDot = themeSlider.firstElementChild;
    const output = d.querySelector(".output");
    const keypad = d.querySelector(".keypad");
    const keypadButtons = d.querySelectorAll(".keypad__button");
    const delButton = d.getElementById("del");
    const resetButton = d.getElementById("reset");
    const equalsButton = d.getElementById("equals");

    const theme1 = () => {
        body.style.background = "hsl(222, 26%, 31%)";
        app.className = "app app--theme1";
        themeSlider.className =
            "nav__theme__toggler__slider nav__theme__toggler__slider--theme1";
        themeSliderDot.className =
            "nav__theme__toggler__slider--1 nav__theme__toggler__slider--1--theme1";
        output.className = "output output--theme1";
        keypad.className = "keypad keypad--theme1";
        keypadButtons.forEach((btn) => {
            btn.className = "keypad__button keypad__button--theme1";
        });
        // keypadButtons.className = "keypad__button keypad__button-theme1";
        delButton.className =
            "keypad__button keypad__del-button keypad__del-button--theme1";
        resetButton.className =
            "keypad__button keypad__reset-button keypad__reset-button--theme1";
        equalsButton.className =
            "keypad__button keypad__equals-button keypad__equals-button--theme1";
    };
    const theme2 = () => {
        body.style.background = "hsl(0, 0%, 90%)";
        app.className = "app app--theme2";
        themeSlider.className =
            "nav__theme__toggler__slider nav__theme__toggler__slider--theme2";
        themeSliderDot.className =
            "nav__theme__toggler__slider--2 nav__theme__toggler__slider--2--theme2";
        output.className = "output output--theme2";
        keypad.className = "keypad keypad--theme2";
        keypadButtons.forEach((btn) => {
            btn.className = "keypad__button keypad__button--theme2";
        });
        // keypadButtons.className = "keypad__button keypad__button-theme2";
        delButton.className =
            "keypad__button keypad__del-button keypad__del-button--theme2";
        resetButton.className =
            "keypad__button keypad__reset-button keypad__reset-button--theme2";
        equalsButton.className =
            "keypad__button keypad__equals-button keypad__equals-button--theme2";
    };

    const theme3 = () => {
        body.style.background = "hsl(268, 75%, 9%)";
        app.className = "app app--theme3";
        themeSlider.className =
            "nav__theme__toggler__slider nav__theme__toggler__slider--theme3";
        themeSliderDot.className =
            "nav__theme__toggler__slider--3 nav__theme__toggler__slider--3--theme3";
        output.className = "output output--theme3";
        keypad.className = "keypad keypad--theme3";
        keypadButtons.forEach((btn) => {
            btn.className = "keypad__button keypad__button--theme3";
        });
        // keypadButtons.className = "keypad__button keypad__button--theme3";
        delButton.className =
            "keypad__button keypad__del-button keypad__del-button--theme3";
        resetButton.className =
            "keypad__button keypad__reset-button keypad__reset-button--theme3";
        equalsButton.className =
            "keypad__button keypad__equals-button keypad__equals-button--theme3";
    };

    theme1();

    if (currentTheme === 1) theme1();
    if (currentTheme === 2) theme2();
    if (currentTheme === 3) theme3();
}
