import { users } from './script.js';
import renderUsersInHtml from './render.js';

const addInputEventListener = () => {
    const filterByName = document.getElementById("filter-by-name"); 
    const filterEvent = filterByName.addEventListener("input", (event) => {
        root.innerHTML = ""
        let usersFilteredByName = users.filter(user => user.firstname.toLowerCase().includes(event.target.value) || user.lastname.toLowerCase().includes(event.target.value));
        renderUsersInHtml(usersFilteredByName);
    })
}

export default addInputEventListener;