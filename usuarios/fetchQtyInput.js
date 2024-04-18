import { users } from './script.js';
import renderUsersInHtml from './render.js';
import { fetchData } from './script.js';

const qtyInput = document.getElementById("fetch-by-quantity");
qtyInput.addEventListener("change", event => {
    const newUrl = `https://fakerapi.it/api/v1/users?_quantity=${event.target.value}&_gender=male`;
    const userTable = document.getElementById("user-table");
    console.log(root);
    root.innerHTML = "";
    console.log(root);
    fetchData(newUrl);
})