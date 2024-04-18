import { users } from './script.js';
import renderUsersInHtml from './render.js';
import { fetchData } from './script.js';

const root = document.getElementById("root");

const qtyInput = document.getElementById("fetch-by-quantity");
qtyInput.addEventListener("change", event => {
    let userInput = event.target.value;
    if (userInput === "")
        userInput = 20;
    const newUrl = `https://fakerapi.it/api/v1/users?_quantity=${userInput}&_gender=male`;
    root.innerHTML = "";
    fetchData(newUrl);
})
