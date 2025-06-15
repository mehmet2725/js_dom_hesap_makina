// Light dark buton olmadan olmazdı tabikide bu en son aklıma geldi bu arada
const lightDarkBtn = document.querySelector('.lightDarkBtn');
const body = document.body;


if (localStorage.isDarkMode === 'true') {
    body.classList.add('darkTheme');
    lightDarkBtn.textContent = '🌞';
} else {
    lightDarkBtn.textContent = '🌙';
}

lightDarkBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('darkTheme');
    if (isDark) {
        lightDarkBtn.textContent = '🌞';
        localStorage.isDarkMode = 'true';
        console.log('dark mode açıldı');
    } else {
        lightDarkBtn.textContent = '🌙';
        localStorage.isDarkMode = 'false';
        console.log('light mode açıldı');
    }
});

let currentInput = "";
let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

function writeNumbers() {
    for (const btn of buttons) {
        btn.addEventListener("click", () => {
            console.log(`Butona basıldı: ${btn.innerText}`);

            if (!isNaN(btn.innerText)) {
                currentInput += btn.innerText;
                display.value = currentInput;
            }
        });
    }

}
// şimdi operatör butonlarını bir şekilde döngüye sokup onların 
// operatör butonu olup olmadıklarını anlamam gerekiyor.
function clickOperators() {
    for (const btn of buttons) {
        btn.addEventListener(`click`, () => {
            if (["+", "-", "x", "/"].includes(btn.innerText)) {
                firstNumber = currentInput;
                operator = btn.innerText;
                currentInput = "";
                display.value = "";
                console.log(`Operator seçildi: ${operator}, firstNumber: ${firstNumber}`);
            }
        });
    }
}
// Şimdi ise eşittire bastığımda hagni operatörün hanig işlemiyapcağını
// ayarlamam lazım ayrıca sürekli olarak da console'a log düşücez.
function clickEqua() {
    for (const btn of buttons) {
        btn.addEventListener("click", () => {
            if (btn.innerText === "=") {
                secondNumber = currentInput;
                const num1 = Number(firstNumber);
                const num2 = Number(secondNumber);
                let result;

                if (operator === "+") {
                    result = num1 + num2;
                } else if (operator === "-") {
                    result = num1 - num2;
                } else if (operator === "x") {
                    result = num1 * num2;
                } else if (operator === "/") {
                    result = num1 / num2;
                }

                display.value = result;
                currentInput = result;
                console.log(`secondNumber: ${secondNumber}, Sonuç${result}`);
                firstNumber = null;
                secondNumber = null;
                operator = null;
            }
        });
    }
}

// clear butonu her şeyi eski haline getirip konsolu da temizleyecek.
function clickClear() {
    for (const btn of buttons) {
        btn.addEventListener("click", () => {
            if (btn.innerText === "C") {
                currentInput = "";
                firstNumber = null;
                secondNumber = null;
                operator = null;
                result = null;
                display.value = "";
                console.clear();
                console.log("Temizlendi.");
            }
        });
    }
}

writeNumbers();
clickOperators();
clickEqua();
clickClear();