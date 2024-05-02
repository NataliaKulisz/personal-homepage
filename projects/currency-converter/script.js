let amountElement = document.querySelector(".js-amount");
let givenCurrencyElement = document.querySelector(".js-given-currency");
let targetCurrencyElement = document.querySelector(".js-target-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let rateElement = document.querySelector(".js-rate");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = parseFloat(amountElement.value);
    let givenCurrency = givenCurrencyElement.value;
    let targetCurrency = targetCurrencyElement.value;
    let result;
    let rate;

    if (givenCurrency === "pln" && targetCurrency === "euro") {
        result = amount * 0.23;
        rate = 0.23;
    } else if (givenCurrency === "pln" && targetCurrency === "dollar") {
        result = amount * 0.25;
        rate = 0.25;
    } else if (givenCurrency === "euro" && targetCurrency === "pln") {
        result = amount * 4.33;
        rate = 4.33;
    } else if (givenCurrency === "euro" && targetCurrency === "dollar") {
        result = amount * 1.07;
        rate = 1.07;
    } else if (givenCurrency === "dollar" && targetCurrency === "pln") {
        result = amount * 4.05;
        rate = 4.05;
    } else if (givenCurrency === "dollar" && targetCurrency === "euro") {
        result = amount * 0.93;
        rate = 0.93;
    } else {
        result = amount;
    }

    resultElement.textContent = result.toFixed(2);
    rateElement.textContent = rate;
});
