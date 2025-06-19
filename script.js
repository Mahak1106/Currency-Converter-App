function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;
  const result = document.getElementById("result");

  if (!amount || amount <= 0) {
    result.textContent = "Enter a valid amount.";
    return;
  }

  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[to];
      const converted = (amount * rate).toFixed(2);
      result.textContent = `${amount} ${from} = ${converted} ${to}`;
    })
    .catch(() => {
      result.textContent = "Something went wrong. Try again.";
    });
}
