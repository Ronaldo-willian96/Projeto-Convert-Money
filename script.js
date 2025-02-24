const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outras Moedas

    // Verificação de valor válido
    const inputValue = parseFloat(inputCurrencyValue.replace(',', '.')); // Troca a vírgula por ponto para tratar números
    if (isNaN(inputValue) || inputValue <= 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    console.log(currencySelect.value);

    // Definindo as taxas de câmbio
    const dolarToday = 5.2;
    const euroToday = 6.1;

    // Conversão para Dólar
    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday);
    }

    // Conversão para Euro
    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday);
    }

    // Exibir valor em Real
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue);
}

function changeCurrency(){
  const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")


  if (currencySelect.value === "dolar"){
    currencyName.innerHTML ="Dólar americano"
    currencyImage.src = "./assets/estados-unidos (1) 1.png"
  }
 
  if (currencySelect.value === "euro"){
    currencyName.innerHTML ="Euro"
    currencyImage.src = "./assets/euro.png"
  }

  onvertValues()

}

currencySelect.addEventListener("change",  changeCurrency)
// Adicionando evento de clique para o botão
convertButton.addEventListener("click", convertValues);
