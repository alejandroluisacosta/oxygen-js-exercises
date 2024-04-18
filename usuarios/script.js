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
                jsonData.data.forEach(user => {
                    let newUser = new User(user.email, user.firstname, user.id, user.image, user.ip, user.lastname, user.macAddress, user.password, user.username, user.uuid, user.website);
                    console.log(newUser);
                    users.push(newUser);
                });
                renderUsersInHtml(users);
                addInputEventListener();
            })
            .catch(error => alert("Problemas con API"));
        }
    })
    .catch(error => alert("Problemas al obtener datos de la API"))

const alex = new User(1, "alex", "acosta", "ale@ale", "image", 1.11, 1.112, 1234, "aacosta", 1, "ale.com");
console.log(alex);