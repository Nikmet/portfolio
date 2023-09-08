const btnDArkMode = document.querySelector(".dark-mode-btn");

// Проверка темной темы на уровне системы
if (window.matchMedia && window.matchMedia("(prefers-color-theme: dark)").matches) {
    btnDArkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

//Проверка темной темы в LocalStorage
if (localStorage.getItem("darkMode") === "dark") {
    btnDArkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDArkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Проверка изменения системных настроек
window.matchMedia("(prefers-color-theme: dark)").addEventListener("change", (event) => {
    const newColorTheme = event.matches ? "dark" : "light";

    if (newColorTheme === "dark") {
        btnDArkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
    } else {
        btnDArkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
    }
});

// Изменение темы по кнопке
btnDArkMode.addEventListener("click", () => {
    btnDArkMode.classList.toggle("dark-mode-btn--active");
    const isDArk = document.body.classList.toggle("dark");

    if (isDArk) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
});
