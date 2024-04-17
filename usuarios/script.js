import Person from './person.js';
import User from './user.js';
import addInputEventListener from './input.js';

/* 1. Consumir (fetch) la API de usuarios */

let users = [];

let url = "https://fakerapi.it/api/v1/users?_quantity=20&_gender=male";

const request = fetch(url)
    .then((response) => {
        if (response.ok) {
            response.json()
            .then((jsonData) => {
                users = jsonData.data;
                renderUsersInHtml(users);
                addInputEventListener();
            })
            .catch(error => alert("Problemas con API"));
        }
    })
    .catch(error => alert("Problemas al obtener datos de la API"))

/* END */


/* 2.1 Mostrarlo en HTML los resultados de usuarios. DE LA FORMA MÁS SENCILLA POSIBLE */


const renderUsersInHtml = users => {
    
    const root = document.getElementById("root");
    const userTable = document.createElement("table");
    root.appendChild(userTable);

    const tableHead = document.createElement("thead");
    userTable.appendChild(tableHead);
    const tableBody = document.createElement("tbody")
    userTable.appendChild(tableBody);

    users.forEach(user => {
        const tr = document.createElement("tr");
        tableBody.appendChild(tr);
        for (let property in user) {
            const td = document.createElement("td");
            td.innerText = user[property];
            tr.appendChild(td);
        }
    })

}


export { users, renderUsersInHtml };