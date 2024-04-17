import Person from './person.js';
import User from './user.js';
import addInputEventListener from './input.js';
import renderUsersInHtml from './render.js';


export let users = [];

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