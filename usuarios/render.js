import { users } from "./script.js";

const renderUsersInHtml = users => {
    
    const root = document.getElementById("root");
    const userTable = document.createElement("table");
    userTable.id = "user-table";
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

export default renderUsersInHtml;