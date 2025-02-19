let rootElm = document.documentElement;
let switchElm = document.getElementById('chk');
let isDarkMode = readFromLocalStorage("isDarkMode");
let browserDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

let darkState = isDarkMode !== null ? isDarkMode : browserDark;

if (darkState) {
    switchElm.checked = true;
    rootElm.setAttribute("data-dark", "true");
} else {
    switchElm.checked = false;
    rootElm.setAttribute("data-dark", "false");
}

switchElm.addEventListener("change", function () {
    let isDark = switchElm.checked;
    saveToLocalStorage("isDarkMode", isDark);
    rootElm.setAttribute("data-dark", isDark ? "true" : "false");
});
