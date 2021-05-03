let form = document.querySelector(".form")

let amount = document.querySelector(".form__js-amount");

let currency = document.querySelector(".form__js-currency");

let defaultRate = document.querySelector(".form__js-defaultRate");

let button = document.querySelector(".form__js-button");

let convertedAmount = document.querySelector(".section__js-convertedAmount");

let currencyChanged = document.querySelector(".section__js-currencyChanged");

currency.addEventListener("input", () => {

    switch (currency.value) {
        case "EUR":
            defaultRate.value = "4.5481";
            break;

        case "USD":
            defaultRate.value = "3.7978";
            break;
    }
})

button.addEventListener("click", (defaultCurrency) => {
    defaultCurrency.preventDefault();

    switch (currency.value) {
        case "EUR":
            defaultRate.value = "4.5481";
            break;

        case "USD":
            defaultRate.value = "3.7978";
            break;
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let amountValue = amount.value;
    let defaultRateValue = defaultRate.value;
    let score = +amountValue / +defaultRateValue;
    convertedAmount.innerText = score.toFixed(2);
    currencyChanged.innerText = currency.value;
})