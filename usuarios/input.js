import { users, renderUsersInHtml } from './script.js';

const addInputEventListener = () => {
    const filterByName = document.getElementById("filter-by-name"); 
    const filterEvent = filterByName.addEventListener("input", (event) => {
        root.innerHTML = ""
        let usersFilteredByName = users.filter(user => user.firstname.toLowerCase().includes(event.target.value) || user.lastname.toLowerCase().includes(event.target.value));
        renderUsersInHtml(usersFilteredByName);
    })
}

const modifyApiUrl = () => {
    const amountOfUsers = document.getElementById("amount-of-users");
    const newUrl = 
}

export default addInputEventListener;