let users = [];
const request = fetch(
    "https://fakerapi.it/api/v1/users?_quantity=20&_gender=male"
)
    .then((response) => {
        if (response.ok) {
            response.json()
            .then((jsonData) => {
                users = jsonData;
                console.log(users.data);
            })
            .catch(error => alert("Problemas con API"));
        }
    })
    .catch(error => alert("Problemas al obtener datos de la API"))

console.log(request);