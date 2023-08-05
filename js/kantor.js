let formElement = document.querySelector(".js-form");
let exchangeElement = document.querySelector(".js-exchange");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

let rateEUR = 4.52;
let rateUSD = 4.22;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = +currencyElement.value;
    let exchange = exchangeElement.value;
    let result;

    switch (exchange) {
        case "USD":
            result = currency / rateUSD;
            break;
        case "EUR":
            result = currency / rateEUR;
            break;

    }



    resultElement.innerHTML = `${currency.toFixed(2)} zł to <strong>${result.toFixed(2)} ${exchange}
</strong>`;
});



