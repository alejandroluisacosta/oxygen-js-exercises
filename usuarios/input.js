import { users } from './script.js';
import renderUsersInHtml from './render.js';

const addInputEventListener = () => {
    const filterByName = document.getElementById("filter-by-name"); 
    const filterEvent = filterByName.addEventListener("input", (event) => {
        root.innerHTML = ""
        let usersFilteredByName = users.filter(user => user.firstName.toLowerCase().includes(event.target.value) || user.lastName.toLowerCase().includes(event.target.value));
        renderUsersInHtml(usersFilteredByName);
    })
}

export default addInputEventListener;