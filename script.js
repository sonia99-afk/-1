const form = document.getElementById("form");
const result = document.getElementById("result");

const API_URL = "https://script.google.com/macros/s/AKfycbzOQtLxPyxJ2VSQqaS2qRFACco1bMbnoscS69CQitbyFodtI1zQnI3b_2NrRSSwJvJk/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const surname = document.getElementById("surname").value;
  const rub = document.getElementById("rub").value;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        surname: surname,
        rub: rub,
      }),
    });

    const data = await response.json();

    result.innerHTML = `
      Фамилия: ${surname}<br>
      RUB: ${rub}<br>
      CNY: ${data.cny}
    `;
  } catch (error) {
    result.innerHTML = "Ошибка";
  }
});
