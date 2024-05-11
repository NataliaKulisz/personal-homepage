let amountElement = document.querySelector(".js-amount");
let givenCurrencyElement = document.querySelector(".js-given-currency");
let targetCurrencyElement = document.querySelector(".js-target-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let rateElement = document.querySelector(".js-rate");

function getExchangeRate(givenCurrency, targetCurrency) {
    if (givenCurrency === "pln" && targetCurrency === "eur") {
        return 0.23;
    } else if (givenCurrency === "pln" && targetCurrency === "usd") {
        return 0.25;
    } else if (givenCurrency === "eur" && targetCurrency === "pln") {
        return 4.33;
    } else if (givenCurrency === "eur" && targetCurrency === "usd") {
        return 1.07;
    } else if (givenCurrency === "usd" && targetCurrency === "pln") {
        return 4.05;
    } else if (givenCurrency === "usd" && targetCurrency === "eur") {
        return 0.93;
    } else {
        return 1;
    }
}

givenCurrencyElement.addEventListener("change", () => {
    updateExchangeRate();
});

function updateExchangeRate() {
    let givenCurrency = givenCurrencyElement.value;
    let targetCurrency = targetCurrencyElement.value;
    let rate = getExchangeRate(givenCurrency, targetCurrency);
    rateElement.textContent = rate;
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = parseFloat(amountElement.value);
    let givenCurrency = givenCurrencyElement.value;
    let targetCurrency = targetCurrencyElement.value;
    let rate = parseFloat(rateElement.textContent);
    let result;

    if (givenCurrency === targetCurrency) {
        result = amount;
    } else {
        result = amount * rate;
    }

    if (amount <= 0) {
        result = 0;
    }

    resultElement.textContent = result.toFixed(2);
});
