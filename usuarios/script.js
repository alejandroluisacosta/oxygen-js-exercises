import Person from './person.js';
import User from './user.js';

/* 1. Consumir (fetch) la API de usuarios */

let users = [];
const request = fetch(
    "https://fakerapi.it/api/v1/users?_quantity=20&_gender=male")
    .then((response) => {
        if (response.ok) {
            response.json()
            .then((jsonData) => {
                users = jsonData.data;
                renderUsersInHtml(users);
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
    
    // Object.getOwnPropertyNames(User.prototype).forEach(property => {
    //     if (property !== 'constructor') {
    //         const th = document.createElement("th");
    //         th.innerText = property;
    //         tableHead.appendChild(th);
    //     }
    // });

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
