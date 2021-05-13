{

    const changeRate = () => {

        const rateEUR = 4.5481;
        const rateUSD = 3.7978;
        const currency = document.querySelector(".js-currency");
        const defaultRate = document.querySelector(".js-defaultRate");

        switch (currency.value) {
            case "EUR":
                defaultRate.value = rateEUR;
                break;

            case "USD":
                defaultRate.value = rateUSD;
                break;
        }
    }
    
    const changeCurrency = () => {

        const currency = document.querySelector(".js-currency");

        currency.addEventListener("input", () => {

            changeRate();
        })
    }
    changeCurrency();

    const changeDefaultRate = () => {

        const button = document.querySelector(".js-button");

        button.addEventListener("click", () => {

            changeRate();
        })
    }
    changeDefaultRate();

    const calculateResult = () => {

        const amount = document.querySelector(".js-amount");
        const defaultRate = document.querySelector(".js-defaultRate");
        const convertedAmount = document.querySelector(".js-convertedAmount");
        const currencyChanged = document.querySelector(".js-currencyChanged");
        const currency = document.querySelector(".js-currency");
        const amountValue = amount.value;
        const defaultRateValue = defaultRate.value;
        const result = +amountValue / +defaultRateValue;

        convertedAmount.innerText = result.toFixed(2);
        currencyChanged.innerText = currency.value;
    }

    const init = () => {

        const form = document.querySelector(".form")

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            calculateResult();
        })
    }
    init();
}