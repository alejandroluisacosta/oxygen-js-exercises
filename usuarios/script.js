import Person from './person.js';
import User from './user.js';
import addInputEventListener from './filterByNameInput.js';
import renderUsersInHtml from './render.js';


export let users = [];

let baseUrl = "https://fakerapi.it/api/v1/users?_quantity=20&_gender=male";

const root = document.getElementById("root");

export const fetchData = url => {
    users = [];
    console.log(url);
    const request = fetch(url)
    .then((response) => {
        if (response.ok) {
            response.json()
            .then((jsonData) => {
                jsonData.data.forEach(user => {
                    let newUser = new User(user.email, user.firstname, user.id, user.image, user.ip, user.lastname, user.macAddress, user.password, user.username, user.uuid, user.website);
                    users.push(newUser);
                });
                console.log(users);
                renderUsersInHtml(users);
                addInputEventListener();
            })
            .catch(error => alert("Problemas con API"));
        }
    })
    .catch(error => alert("Problemas al obtener datos de la API"))
}

fetchData(baseUrl);