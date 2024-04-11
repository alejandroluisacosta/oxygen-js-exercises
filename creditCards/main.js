const cards = [
    {
        "type": "MasterCard",
        "number": "4532750907210784",
        "expiration": "04/23",
        "owner": "Max Raynor"
    },
    {
        "type": "Visa Retired",
        "number": "2521245243761597",
        "expiration": "05/25",
        "owner": "Stella Gerhold"
    },
    {
        "type": "American Express",
        "number": "4024007178484134",
        "expiration": "12/26",
        "owner": "Lilliana Shanahan"
    },
    {
        "type": "Visa",
        "number": "5230345408485662",
        "expiration": "09/24",
        "owner": "Christina Gibson"
    },
    {
        "type": "Visa",
        "number": "2221179050665513",
        "expiration": "11/26",
        "owner": "Jake Feil"
    },
    {
        "type": "Discover Card",
        "number": "4024007108573097",
        "expiration": "10/26",
        "owner": "Victor Bashirian"
    },
    {
        "type": "MasterCard",
        "number": "4556101006271874",
        "expiration": "05/25",
        "owner": "Pearline Stroman"
    },
    {
        "type": "Visa",
        "number": "4024007120838510",
        "expiration": "11/24",
        "owner": "Evelyn Haag"
    },
    {
        "type": "Visa",
        "number": "4539663111220023",
        "expiration": "04/26",
        "owner": "Danika Abbott"
    },
    {
        "type": "MasterCard",
        "number": "4539556814256320",
        "expiration": "04/23",
        "owner": "Brennan Murazik"
    },
    {
        "type": "Visa Retired",
        "number": "4024007135604477",
        "expiration": "09/26",
        "owner": "Erich Mann"
    },
    {
        "type": "MasterCard",
        "number": "4539003948076191",
        "expiration": "01/24",
        "owner": "Caden White"
    },
    {
        "type": "Visa",
        "number": "349690052202486",
        "expiration": "08/25",
        "owner": "Isaac Wunsch"
    },
    {
        "type": "Visa",
        "number": "4532518359144623",
        "expiration": "07/25",
        "owner": "Julio Koepp"
    },
    {
        "type": "Discover Card",
        "number": "377988810243841",
        "expiration": "02/22",
        "owner": "Albin Hansen"
    },
    {
        "type": "MasterCard",
        "number": "5460743634710245",
        "expiration": "04/26",
        "owner": "Zane Stark"
    },
    {
        "type": "Visa",
        "number": "2300501839933926",
        "expiration": "05/24",
        "owner": "Fay Ryan"
    },
    {
        "type": "MasterCard",
        "number": "4716027439006",
        "expiration": "10/23",
        "owner": "Jarred Blanda"
    },
    {
        "type": "Visa",
        "number": "4539790805223",
        "expiration": "11/24",
        "owner": "Eugenia White"
    },
    {
        "type": "Discover Card",
        "number": "6011973455391849",
        "expiration": "04/25",
        "owner": "Gay Schmeler"
    },
    {
        "type": "Visa Retired",
        "number": "2303254868198600",
        "expiration": "05/26",
        "owner": "Salvador Effertz"
    },
    {
        "type": "MasterCard",
        "number": "4024007129219332",
        "expiration": "03/27",
        "owner": "Celestine Mosciski"
    },
    {
        "type": "Visa",
        "number": "2221031080406741",
        "expiration": "07/24",
        "owner": "Madge Rohan"
    },
    {
        "type": "American Express",
        "number": "5512989654927072",
        "expiration": "08/24",
        "owner": "Breanna Raynor"
    },
    {
        "type": "MasterCard",
        "number": "6011626148707207",
        "expiration": "02/25",
        "owner": "Humberto Rath"
    },
    {
        "type": "American Express",
        "number": "6011367636680149",
        "expiration": "04/27",
        "owner": "Ludwig Prosacco"
    },
    {
        "type": "Visa",
        "number": "4577679302986142",
        "expiration": "12/24",
        "owner": "Shayne Jacobson"
    },
    {
        "type": "Visa",
        "number": "6011468385387256",
        "expiration": "04/25",
        "owner": "Norbert Okuneva"
    },
    {
        "type": "MasterCard",
        "number": "4532452961540798",
        "expiration": "05/26",
        "owner": "Orie Barton"
    },
    {
        "type": "Visa",
        "number": "4485811360948372",
        "expiration": "09/25",
        "owner": "Viva Sawayn"
    },
    {
        "type": "MasterCard",
        "number": "5123418345276104",
        "expiration": "11/25",
        "owner": "Mark Gutmann"
    },
    {
        "type": "Visa Retired",
        "number": "4497605803646",
        "expiration": "03/26",
        "owner": "Jazmyne Crooks"
    },
    {
        "type": "MasterCard",
        "number": "6011016191448083",
        "expiration": "07/24",
        "owner": "Jovan Terry"
    },
    {
        "type": "Visa",
        "number": "5414887145268735",
        "expiration": "07/25",
        "owner": "Grace Nienow"
    },
    {
        "type": "American Express",
        "number": "5174880506977085",
        "expiration": "04/26",
        "owner": "Amara Green"
    },
    {
        "type": "Visa",
        "number": "4716246583121",
        "expiration": "12/24",
        "owner": "Felicity Cummerata"
    },
    {
        "type": "MasterCard",
        "number": "2438287332228460",
        "expiration": "06/24",
        "owner": "Alison Romaguera"
    },
    {
        "type": "MasterCard",
        "number": "4539571614530337",
        "expiration": "08/26",
        "owner": "Jaylon Franecki"
    },
    {
        "type": "Visa",
        "number": "6011774481250813",
        "expiration": "06/26",
        "owner": "Neoma Roberts"
    },
    {
        "type": "MasterCard",
        "number": "4929753793059258",
        "expiration": "10/24",
        "owner": "Rubye Emard"
    },
    {
        "type": "Visa",
        "number": "6011158117344796",
        "expiration": "09/24",
        "owner": "Jerrold Hirthe"
    },
    {
        "type": "American Express",
        "number": "2659664853334699",
        "expiration": "07/24",
        "owner": "Caden Buckridge"
    },
    {
        "type": "Visa",
        "number": "4408577529586874",
        "expiration": "12/24",
        "owner": "Ibrahim Walter"
    },
    {
        "type": "American Express",
        "number": "2221086020008528",
        "expiration": "12/25",
        "owner": "Kody Roberts"
    },
    {
        "type": "Visa",
        "number": "5268770113935567",
        "expiration": "01/27",
        "owner": "Royal Dibbert"
    },
    {
        "type": "Visa",
        "number": "347213265989781",
        "expiration": "02/26",
        "owner": "Magdalen Hyatt"
    },
    {
        "type": "Discover Card",
        "number": "2430020354803714",
        "expiration": "01/25",
        "owner": "Camryn Abernathy"
    },
    {
        "type": "MasterCard",
        "number": "4024007185278271",
        "expiration": "12/24",
        "owner": "Justice Hodkiewicz"
    },
    {
        "type": "MasterCard",
        "number": "2348172003937095",
        "expiration": "01/26",
        "owner": "Theodora Fisher"
    },
    {
        "type": "Visa",
        "number": "343400967610021",
        "expiration": "02/25",
        "owner": "Kobe Sanford"
    },
    {
        "type": "American Express",
        "number": "5550014770276297",
        "expiration": "01/25",
        "owner": "Shemar Muller"
    },
    {
        "type": "MasterCard",
        "number": "4829027244413690",
        "expiration": "07/24",
        "owner": "Dangelo West"
    },
    {
        "type": "Visa",
        "number": "4929564818694",
        "expiration": "07/26",
        "owner": "Jacey Rau"
    },
    {
        "type": "MasterCard",
        "number": "4045204648314125",
        "expiration": "05/24",
        "owner": "Lavonne Schimmel"
    },
    {
        "type": "Discover Card",
        "number": "4539396520235700",
        "expiration": "11/25",
        "owner": "Maxie Hoeger"
    },
    {
        "type": "Visa Retired",
        "number": "4929303009787",
        "expiration": "03/26",
        "owner": "Andre Harris"
    },
    {
        "type": "Visa",
        "number": "2221678525322527",
        "expiration": "10/25",
        "owner": "Haylee Barrows"
    },
    {
        "type": "Visa",
        "number": "4556302097298624",
        "expiration": "07/24",
        "owner": "Herta Bartell"
    },
    {
        "type": "MasterCard",
        "number": "2489140909442485",
        "expiration": "04/25",
        "owner": "Andres Donnelly"
    },
    {
        "type": "Visa",
        "number": "5141976960579928",
        "expiration": "02/26",
        "owner": "Vernon Funk"
    },
    {
        "type": "MasterCard",
        "number": "4532319205290904",
        "expiration": "01/27",
        "owner": "Alberto Steuber"
    },
    {
        "type": "American Express",
        "number": "4444175504443918",
        "expiration": "12/25",
        "owner": "Cleta Ziemann"
    },
    {
        "type": "American Express",
        "number": "4485065759634743",
        "expiration": "12/26",
        "owner": "Schuyler Rath"
    },
    {
        "type": "Visa",
        "number": "5567778101804107",
        "expiration": "11/26",
        "owner": "Lisette Schuster"
    },
    {
        "type": "MasterCard",
        "number": "2348245149658302",
        "expiration": "02/26",
        "owner": "Lori Veum"
    },
    {
        "type": "Visa Retired",
        "number": "4539978230810904",
        "expiration": "11/26",
        "owner": "Pearl Johnston"
    },
    {
        "type": "Visa",
        "number": "6011845541464667",
        "expiration": "02/26",
        "owner": "Sonny Weissnat"
    },
    {
        "type": "Visa",
        "number": "6011318057616963",
        "expiration": "03/26",
        "owner": "Miguel Wehner"
    },
    {
        "type": "Visa",
        "number": "5467436531296748",
        "expiration": "10/24",
        "owner": "Luther Trantow"
    },
    {
        "type": "MasterCard",
        "number": "5306374666623227",
        "expiration": "07/26",
        "owner": "Jerrell Hartmann"
    },
    {
        "type": "Visa",
        "number": "5454363670098039",
        "expiration": "10/25",
        "owner": "Buster Abshire"
    },
    {
        "type": "MasterCard",
        "number": "4011615892990395",
        "expiration": "06/26",
        "owner": "Peyton Kohler"
    },
    {
        "type": "Visa Retired",
        "number": "4532735529140386",
        "expiration": "06/26",
        "owner": "Marques Lind"
    },
    {
        "type": "American Express",
        "number": "4556171554014364",
        "expiration": "12/25",
        "owner": "Greg Howell"
    },
    {
        "type": "Visa",
        "number": "4916362343231",
        "expiration": "03/25",
        "owner": "Rachelle Schamberger"
    },
    {
        "type": "Visa",
        "number": "2659187622642861",
        "expiration": "06/25",
        "owner": "Lyric Jakubowski"
    },
    {
        "type": "American Express",
        "number": "4024007199823310",
        "expiration": "05/24",
        "owner": "Daren Botsford"
    },
    {
        "type": "Visa",
        "number": "2666106292920861",
        "expiration": "10/25",
        "owner": "Lilyan Streich"
    },
    {
        "type": "MasterCard",
        "number": "5186032806253694",
        "expiration": "12/25",
        "owner": "Roberto Torp"
    },
    {
        "type": "MasterCard",
        "number": "4024007176913050",
        "expiration": "03/25",
        "owner": "Michele Goodwin"
    },
    {
        "type": "MasterCard",
        "number": "2395781080842788",
        "expiration": "05/25",
        "owner": "Jade McGlynn"
    },
    {
        "type": "Visa",
        "number": "4916604559561646",
        "expiration": "02/25",
        "owner": "Israel McClure"
    },
    {
        "type": "MasterCard",
        "number": "4929398689448544",
        "expiration": "05/26",
        "owner": "Nils Bosco"
    },
    {
        "type": "MasterCard",
        "number": "4485732989994375",
        "expiration": "01/26",
        "owner": "Marielle Collier"
    },
    {
        "type": "MasterCard",
        "number": "348971986588476",
        "expiration": "05/26",
        "owner": "Kristina Hoppe"
    },
    {
        "type": "Visa",
        "number": "4556916514432316",
        "expiration": "03/25",
        "owner": "Rafael Ebert"
    },
    {
        "type": "Visa",
        "number": "5504126197283644",
        "expiration": "11/25",
        "owner": "Arjun Stanton"
    },
    {
        "type": "Visa",
        "number": "2720360756054352",
        "expiration": "01/25",
        "owner": "David Maggio"
    },
    {
        "type": "Visa Retired",
        "number": "4929405526797874",
        "expiration": "02/26",
        "owner": "Ricardo Cummerata"
    },
    {
        "type": "Visa Retired",
        "number": "5457065102277050",
        "expiration": "03/25",
        "owner": "Savion Grimes"
    },
    {
        "type": "Visa",
        "number": "4532498905015876",
        "expiration": "07/26",
        "owner": "Zola Rutherford"
    },
    {
        "type": "Visa",
        "number": "4929169707572635",
        "expiration": "09/25",
        "owner": "Albin Nitzsche"
    },
    {
        "type": "MasterCard",
        "number": "4929905172089997",
        "expiration": "08/25",
        "owner": "Joe Rohan"
    },
    {
        "type": "American Express",
        "number": "4556445850217750",
        "expiration": "02/27",
        "owner": "Cecelia Legros"
    },
    {
        "type": "Visa",
        "number": "2468378027856898",
        "expiration": "02/27",
        "owner": "Ashleigh Little"
    },
    {
        "type": "American Express",
        "number": "2610252291302276",
        "expiration": "09/25",
        "owner": "Kody Ferry"
    },
    {
        "type": "Visa Retired",
        "number": "2221456401432771",
        "expiration": "02/25",
        "owner": "Laurence Bruen"
    },
    {
        "type": "Visa Retired",
        "number": "6011335666270271",
        "expiration": "06/26",
        "owner": "Amelia Smith"
    },
    {
        "type": "Discover Card",
        "number": "4532594672920478",
        "expiration": "05/26",
        "owner": "Elwin Klein"
    },
    {
        "type": "Visa",
        "number": "2534545768794971",
        "expiration": "02/27",
        "owner": "Marques Sauer"
    }
]
// Root element
const root = document.getElementById("root");

/* DIA 1: LA AMENAZA DEL OBJETO */

// Title
const day1Title = document.createElement("h2");
day1Title.innerText = "Día 1: La Amenaza del Objeto";
day1Title.classList = "day-title"
root.appendChild(day1Title);

// 1. Agrupar por el tipo de tarjeta de creditto cuales existen dentro de la info

// Card-types array
let cardTypes = [];

// Loop over JSON object to obtain types
cards.forEach((card) => {
    // If card not in array, push it
    if (!cardTypes.includes(card.type))
        cardTypes.push(card.type);
})
console.log(cardTypes);

/* END */





// 2. Mostrar la información en HTML de forma que se muestre una tabla (<table>) por cada tipo de 

// Container
const day1Ex2 = document.createElement("div");
day1Ex2.classList = "exercise";
root.appendChild(day1Ex2);

// Title
const day1Ex2Title = document.createElement("h2");
day1Ex2Title.innerText = "2. Tarjetas separadas por tipo";
day1Ex2.appendChild(day1Ex2Title);

// Table with types of cards
const table = document.createElement("table");
table.classList = "ex2"

// Append table to root elmnt
day1Ex2.appendChild(table);

// Populate table headers
cardTypes.forEach((element) => {
    let thead = document.createElement("th");
    thead.innerText = element;
    table.appendChild(thead);
})

// Array counting clients with each card type
let counts = []
counts.length = cardTypes.length;
counts.fill(0);

// Count amount of holders for each card type
for (let card = 0; cards[card]; card++) {
    for (let type = 0; cardTypes[type]; type++) {
        if (cards[card].type === cardTypes[type]) {
            counts[type]++;
        }
    }
}

// Maximum amount of any card type
const maxHolders = Math.max(...counts);

// Create rows and columns for max holders amount
for (let rows = 0; rows < maxHolders; rows++) {
    let tr = document.createElement("tr");
    for (let columns = 0; cardTypes[columns]; columns++){
        let td = document.createElement("td");
        td.textContent = '-';
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

// Refresh counts array
counts.fill(0);

// Populate table columns
for (let client = 0; cards[client]; client++) {
    for (let type = 0; cardTypes[type]; type++) {
        if (cards[client].type === cardTypes[type]) {
            table.rows[counts[type]].cells[type].textContent = cards[client].owner;
            counts[type]++;
        }
    }
}

/* END */



/* 3. Indicar en HTML Cuantas personas tienen la fecha de expiración en este año para la tarjeta de credito. */

// Amount of people with cards expiring this year
let expireCounter = 0;
for (let card = 0; cards[card]; card++) {
    if (cards[card].expiration.includes("/24")) {
        expireCounter++
    }
}
// Display on website
let expireThisYear = document.createElement("h2");
const date = new Date();
expireThisYear.textContent = `3. Tarjetas que expiran en ${date.getFullYear()}: ${expireCounter}`;
root.appendChild(expireThisYear);

expireThisYear.classList = "exercise"

/* END */




/* 4. Indicar en HTML el nombre de las personas que tienen la tarjeta de credito caducada (inferior a este mes) */

// Container
const day1Ex4 = document.createElement("div");
day1Ex4.classList = "exercise";
root.appendChild(day1Ex4);

// Expired function
const isExpired = ((month, year) => {
    if ((month < date.getMonth() + 1) && (year <= date.getFullYear() - 2000) || year < date.getFullYear() - 2000)
        return true;
    else
        return false;
})

// Titleitle
let day1Ex4Title = document.createElement("h2");
day1Ex4Title.innerText = '4. Clientes con tarjetas expiradas';
day1Ex4.appendChild(day1Ex4Title);
    

// Append names of clients with expired cards to HTML
cards.forEach((card) => {
    let expiredClient;
    if (isExpired(parseInt(card.expiration[0] + card.expiration[1]), parseInt(card.expiration[3] + card.expiration[4]))) {
            expiredClient = document.createElement("p");
            expiredClient.innerText = card.owner;
            day1Ex4.appendChild(expiredClient);
        }
    })

/* END */





/* DIA 2: LA VENGANZA DEL EVENTO */

const day2Title = document.createElement("h2");
day2Title.innerText = "Día 2: La Venganza del Evento";
day2Title.classList = "day-title"
root.appendChild(day2Title);


/* 1. Con los tipos de tarjetas que se han filtrado anteriormente, 
crear tantos botones como tipos de tarjeta de crédito que existen, de forma que al hacer _click_ 
sobre cada uno de ellos, los datos se filtren para que solo se vean las tarjetas de ese tipo. */

// Container
const day2Ex1 = document.createElement("div");
day2Ex1.classList = "exercise";
root.appendChild(day2Ex1);

// Title
const day2ex1Title = document.createElement("h2");
day2ex1Title.innerText = '1. Filtrar por tipo de tarjeta';
day2Ex1.appendChild(day2ex1Title);

// Card dropdown selector
const selectCardType = document.createElement("select");
selectCardType.id = "selectCardType"
cardTypes.forEach(type => {
    const option = document.createElement("option");
    option.value = type;
    option.innerText = type;
    selectCardType.appendChild(option);
})

// Dropdown label
const labelCardType = document.createElement("label");
labelCardType.for = "selectCardType";
labelCardType.innerText = "Select card type:";

// Div for label and input
const day2Ex1Input = document.createElement("div");
day2Ex1Input.classList = "input-container"
day2Ex1.appendChild(day2Ex1Input);

// Append label & dropdown
day2Ex1Input.appendChild(labelCardType);
day2Ex1Input.appendChild(selectCardType);

// HTML table
const filterTable = document.createElement("table");
day2Ex1.appendChild(filterTable);

// Array of card attributes
const cardAttributes = ["Type", "Card number", "Expiration date", "Owner"];

// Filter function
const filterByCard = (typeOfCard) => {
    // Arrays of clients for selected card type
    let filteredClients = cards.filter((client) => client.type === typeOfCard);
    // Table header
    const thead = document.createElement("thead");
    for (attribute in cardAttributes) {
        if (cardAttributes[attribute] !== "Type") {
            const th = document.createElement("th");
            th.innerText = cardAttributes[attribute];
            thead.appendChild(th);
        }
    }
    // Append table header
    filterTable.appendChild(thead);
    // Populate table with rows
    filteredClients.forEach(client => {
        // Create row
        const tr = document.createElement("tr");
        // Fill rows with client information
        for (attribute in client) {
            // td for each clients' attribute
            const td = document.createElement("td");
            // Fill td with all values except card type
            if (attribute !== 'type') {
                td.innerText = client[attribute];
                // Append td's text to tr
                tr.appendChild(td);
            }
        }
        // Append filled tr to filterTable
        filterTable.appendChild(tr);
    })
    }

// By-default function call
let selectedValue = cardTypes[0];
filterByCard(selectedValue);

// Event listener func call
selectCardType.addEventListener("change", () => {
    filterTable.innerHTML = "";
    selectedValue = selectCardType.value;
    filterByCard(selectedValue);
})

/* END */



/* 2. Agrear un input de búsqueda, de forma que al introducir el mes de caducidad
 aparezcan las tarjetas de crédito que caducan para ese mes. */

// Container
const day2Ex2 = document.createElement("div");
day2Ex2.classList = "exercise";
root.appendChild(day2Ex2);

 // Filter by expiration date title
 const day2Ex2Title = document.createElement("h2");
 day2Ex2Title.innerText = "2. Filtrar tarjetas por mes de expiración";
 day2Ex2.appendChild(day2Ex2Title);

 // Array of months
 const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Month dropdown selector
const selectMonth = document.createElement("select");
selectMonth.id = "selectMonth"
months.forEach(month => {
    const option = document.createElement("option");
    option.value = month;
    option.innerText = month;
    selectMonth.appendChild(option);
})

// Dropdown label
const labelMonth = document.createElement("label");
labelMonth.for = "selectMonth";
labelMonth.innerText = "Month";

// Append label & dropdown
day2Ex2.appendChild(labelMonth);
day2Ex2.appendChild(selectMonth);

// Table of expiring cards
const expireMonthTable = document.createElement("table");
day2Ex2.appendChild(expireMonthTable);

// Function to get expiration from card
const getExpirationMonth = cardExpiration => {
    let monthNumber = parseInt(cardExpiration[0] + cardExpiration[1]);
    return months[monthNumber - 1];
}

// Filter by exp month function
const filterByExpMonth = month => {
    // Array of expiring cards
    let expireOnMonth = cards.filter(card => getExpirationMonth(card.expiration) === month)
    // Table header
    const thead = document.createElement("thead");
    for (attribute in cardAttributes) {
        const th = document.createElement("th");
        th.innerText = cardAttributes[attribute];
        thead.appendChild(th);
    }
    // Append table header
    expireMonthTable.appendChild(thead);
    // Populate table with rows
    expireOnMonth.forEach(client => {
        // Create row
        const tr = document.createElement("tr");
        // Fill rows with client information
        for (attribute in client) {
            // td for each clients' attribute
            const td = document.createElement("td");
            // Fill td with clients' info
            td.innerText = client[attribute];
            // Append td's text to tr
            tr.appendChild(td);
        }
        // Append filled tr to filterTable
        expireMonthTable.appendChild(tr);
    })
}

// By-default function call
let selectedMonth1 = months[0];
filterByExpMonth(selectedMonth1);

// Event listener func call
selectMonth.addEventListener("change", () => {
    expireMonthTable.innerHTML = "";
    selectedMonth1 = selectMonth.value;
    filterByExpMonth(selectedMonth1);
})

/* END */

/* 3. Hacer lo mismo para el año. De forma que tienes que filtrar por año y mes. 
Ej: Tarjetas que caducan el mes 04 del año 25 */

// Container
const day2Ex3 = document.createElement("div");
day2Ex3.classList = "exercise";
root.appendChild(day2Ex3);

// Array of years
const years = [];
for (let year = 4; year <= 10; year++)
    years[year - 4] = year + 20;
console.log(years);

// Title
const day2Ex3Title = document.createElement("h2");
day2Ex3Title.innerText = "3. Filtrar tarjetas por mes y año de expiración";
day2Ex3.appendChild(day2Ex3Title);

// Month dropdown selector
const selectMonth2 = document.createElement("select");
selectMonth2.id = "selectMonth2"
months.forEach(month => {
   const option = document.createElement("option");
   option.value = month;
   option.innerText = month;
   selectMonth2.appendChild(option);
})

// Dropdown month label
const labelMonth2 = document.createElement("label");
labelMonth2.for = "selectMonth2";
labelMonth2.innerText = "Month";

// Year dropdown selector
const selectYear = document.createElement("select");
selectYear.id = "selectYear"
years.forEach(year => {
   const option = document.createElement("option");
   option.value = year;
   option.innerText = year;
   selectYear.appendChild(option);
})

// Dropdown year label
const labelYear = document.createElement("label");
labelYear.for = "selectYelabelYear";
labelYear.innerText = "Year";

// Append labels & dropdowns
day2Ex3.appendChild(labelMonth2);
day2Ex3.appendChild(selectMonth2);
day2Ex3.appendChild(labelYear);
day2Ex3.appendChild(selectYear);

// Table of expiring cards
const expireMAndYTable = document.createElement("table");
day2Ex3.appendChild(expireMAndYTable);

// Function to get expiration year from card
const getExpirationYear = cardExpiration => parseInt(cardExpiration[3] + cardExpiration[4]);

// Filter by exp month function
const filterByExpMAndY = (month, year) => {
   // Array of expiring cards
   let expireOnMAndY = cards.filter(card => getExpirationMonth(card.expiration) === month && getExpirationYear(card.expiration) === year);
   // Table header
   const thead = document.createElement("thead");
   for (attribute in cardAttributes) {
       const th = document.createElement("th");
       th.innerText = cardAttributes[attribute];
       thead.appendChild(th);
   }
   // Append table header
   expireMAndYTable.appendChild(thead);
   // Populate table with rows
   expireOnMAndY.forEach(client => {
       // Create row
       const tr = document.createElement("tr");
       // Fill rows with client information
       for (attribute in client) {
           // td for each clients' attribute
           const td = document.createElement("td");
           // Fill td with clients' info
           td.innerText = client[attribute];
           // Append td's text to tr
           tr.appendChild(td);
       }
       // Append filled tr to filterTable
       expireMAndYTable.appendChild(tr);
   })
}

// By-default function call
let selectedMonth2 = months[0];
let selectedYear = years[0]
filterByExpMAndY(selectedMonth2, selectedYear); 

// Event listener for month call
selectMonth2.addEventListener("change", () => {
   expireMAndYTable.innerHTML = "";
   selectedMonth2 = selectMonth2.value;
   filterByExpMAndY(selectedMonth2, selectedYear);
   console.log(selectedMonth2);
   console.log(selectedYear);
})

// Event listener for year call
selectYear.addEventListener("change", () => {
    expireMAndYTable.innerHTML = "";
    selectedYear = parseInt(selectYear.value);
    filterByExpMAndY(selectedMonth2, selectedYear);
    console.log(selectedMonth2);
    console.log(selectedYear);
 })