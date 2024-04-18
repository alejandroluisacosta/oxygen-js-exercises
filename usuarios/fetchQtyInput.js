import { users } from './script.js';
import renderUsersInHtml from './render.js';
import { fetchData } from './script.js';

const root = document.getElementById("root");

const qtyInput = document.getElementById("fetch-by-quantity");
qtyInput.addEventListener("change", event => {
    const newUrl = `https://fakerapi.it/api/v1/users?_quantity=${event.target.value}&_gender=male`;
    console.log(root);
    users.length = 0;
    fetchData(newUrl);
})
