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

const addresses = [{"id":1,"street":"50059 Schultz Cliffs Apt. 933","streetName":"Hodkiewicz Drives","buildingNumber":"4676","city":"Sauerside","zipcode":"11198","country":"Pitcairn Islands","county_code":"TV","latitude":-67.73546,"longitude":-34.890942},{"id":2,"street":"837 Hope Estates","streetName":"Roberts Mission","buildingNumber":"2104","city":"Mullerhaven","zipcode":"15559","country":"Cyprus","county_code":"UM","latitude":-47.980246,"longitude":95.704973},{"id":3,"street":"16089 Champlin Plains","streetName":"Sven Rapid","buildingNumber":"91570","city":"Port Destineyborough","zipcode":"38429","country":"Tonga","county_code":"TO","latitude":-72.062188,"longitude":34.526462},{"id":4,"street":"14220 Ava Courts Apt. 524","streetName":"Moore Place","buildingNumber":"3985","city":"Carterville","zipcode":"33990-8146","country":"Sierra Leone","county_code":"DK","latitude":-20.740723,"longitude":165.970557},{"id":5,"street":"58738 Edward Ridges","streetName":"Renner Valley","buildingNumber":"71645","city":"Casperville","zipcode":"27097-1712","country":"Benin","county_code":"EG","latitude":30.343353,"longitude":-9.963037},{"id":6,"street":"15846 Beatty Land","streetName":"Steuber Throughway","buildingNumber":"37853","city":"Port Garth","zipcode":"42985","country":"Peru","county_code":"GM","latitude":-14.562158,"longitude":66.183619},{"id":7,"street":"5008 Katharina Tunnel","streetName":"Paige Loaf","buildingNumber":"90615","city":"New Ernestfurt","zipcode":"99124-6786","country":"Comoros","county_code":"YT","latitude":56.562845,"longitude":24.140518},{"id":8,"street":"231 McLaughlin Light Apt. 636","streetName":"Pacocha Club","buildingNumber":"8735","city":"Corwinmouth","zipcode":"76123","country":"United Kingdom","county_code":"GU","latitude":-68.190112,"longitude":-54.728991},{"id":9,"street":"581 Rolfson Knolls","streetName":"Ben Branch","buildingNumber":"94123","city":"O'Haraview","zipcode":"95873","country":"Palau","county_code":"IE","latitude":57.602489,"longitude":158.442235},{"id":10,"street":"869 Walker Hills Suite 959","streetName":"Alexandro Radial","buildingNumber":"512","city":"Konopelskiside","zipcode":"16262-2178","country":"Lithuania","county_code":"GQ","latitude":28.988058,"longitude":-95.176954},{"id":11,"street":"9453 Douglas Drives Apt. 111","streetName":"Oceane Field","buildingNumber":"34700","city":"Friesenburgh","zipcode":"49637","country":"Tajikistan","county_code":"PW","latitude":-36.146449,"longitude":-62.967864},{"id":12,"street":"55881 Schneider Cove","streetName":"Rory Path","buildingNumber":"4458","city":"Lizashire","zipcode":"54986","country":"Saint Helena","county_code":"MW","latitude":-4.300779,"longitude":140.980602},{"id":13,"street":"8158 Treutel Walks Apt. 252","streetName":"O'Kon Run","buildingNumber":"30402","city":"East Amelyport","zipcode":"52324-9261","country":"Greece","county_code":"NO","latitude":-33.190206,"longitude":150.784157},{"id":14,"street":"491 Zulauf Field Apt. 513","streetName":"Howell Spring","buildingNumber":"5310","city":"Baileybury","zipcode":"67989-7786","country":"South Africa","county_code":"PR","latitude":7.557271,"longitude":-160.475245},{"id":15,"street":"89055 Sipes Forest","streetName":"Schimmel View","buildingNumber":"112","city":"Jameyberg","zipcode":"71651","country":"Mauritania","county_code":"ME","latitude":-87.182142,"longitude":124.461591},{"id":16,"street":"7729 Joanne Cove Apt. 185","streetName":"Adelbert Squares","buildingNumber":"796","city":"New Camila","zipcode":"46015-2953","country":"Saint Vincent and the Grenadines","county_code":"PA","latitude":77.820615,"longitude":162.664519},{"id":17,"street":"4511 Olga Hollow","streetName":"Amy Islands","buildingNumber":"3867","city":"Port Erin","zipcode":"49840","country":"South Africa","county_code":"MN","latitude":-3.132892,"longitude":-91.17062},{"id":18,"street":"668 Josue Lake","streetName":"Maxime Passage","buildingNumber":"234","city":"Lake Aracelitown","zipcode":"75765","country":"Romania","county_code":"AU","latitude":-51.194732,"longitude":-27.959658},{"id":19,"street":"81733 Lilla Summit Suite 284","streetName":"Kelly Mews","buildingNumber":"32049","city":"Arnoldoborough","zipcode":"22146-7022","country":"Congo","county_code":"BG","latitude":36.00629,"longitude":-75.102079},{"id":20,"street":"341 Bogisich Mountain","streetName":"Ernesto Underpass","buildingNumber":"5032","city":"Tyrelbury","zipcode":"85398","country":"Hungary","county_code":"GN","latitude":67.624336,"longitude":6.95893},{"id":21,"street":"726 Lupe Mountains Suite 963","streetName":"Felipa Village","buildingNumber":"632","city":"Lake Ardella","zipcode":"51376","country":"Mongolia","county_code":"VE","latitude":-70.169215,"longitude":-2.439156},{"id":22,"street":"250 Shirley Knolls","streetName":"Boyle Ramp","buildingNumber":"5303","city":"Careyberg","zipcode":"81391","country":"Austria","county_code":"BT","latitude":77.434389,"longitude":3.287906},{"id":23,"street":"15761 Adolf Terrace Apt. 792","streetName":"Camila Ranch","buildingNumber":"53529","city":"Lake Bridgettefort","zipcode":"13762","country":"Ukraine","county_code":"SA","latitude":78.257622,"longitude":52.459708},{"id":24,"street":"7564 McCullough Fort","streetName":"Marquardt Mills","buildingNumber":"249","city":"North Keeley","zipcode":"88749","country":"Ireland","county_code":"LV","latitude":78.972819,"longitude":123.611345},{"id":25,"street":"9193 Wisozk Heights","streetName":"Della Fork","buildingNumber":"310","city":"Wellingtonfurt","zipcode":"25241-4159","country":"Barbados","county_code":"FM","latitude":19.778077,"longitude":-79.70363},{"id":26,"street":"9694 Sven Parkways Suite 295","streetName":"Leannon Roads","buildingNumber":"24476","city":"New Hillardland","zipcode":"08254-6096","country":"Martinique","county_code":"GN","latitude":79.113799,"longitude":21.263081},{"id":27,"street":"56339 Torphy Springs","streetName":"Mueller Haven","buildingNumber":"482","city":"Port Ronaldo","zipcode":"58596-7764","country":"Portugal","county_code":"SO","latitude":74.075435,"longitude":52.923459},{"id":28,"street":"800 Buck Harbors Suite 388","streetName":"Gleichner Divide","buildingNumber":"6294","city":"New Preston","zipcode":"83177","country":"Mayotte","county_code":"SL","latitude":52.308902,"longitude":-3.457694},{"id":29,"street":"58795 Cleta Avenue","streetName":"Reinger Fields","buildingNumber":"4031","city":"Sidchester","zipcode":"09052-2237","country":"Fiji","county_code":"PM","latitude":56.063326,"longitude":100.307689},{"id":30,"street":"193 Kyla Causeway Apt. 965","streetName":"Hamill Way","buildingNumber":"4149","city":"South Alena","zipcode":"51041","country":"Iraq","county_code":"DE","latitude":-13.267491,"longitude":-57.382669},{"id":31,"street":"85841 Brittany Radial","streetName":"Ben Mission","buildingNumber":"24345","city":"Port Norvalview","zipcode":"40815-9248","country":"Philippines","county_code":"PF","latitude":-22.008353,"longitude":-49.134638},{"id":32,"street":"116 Donny Ville","streetName":"Watson Keys","buildingNumber":"7739","city":"Bednarhaven","zipcode":"04457","country":"Cocos (Keeling) Islands","county_code":"CH","latitude":23.409683,"longitude":-25.092006},{"id":33,"street":"131 Kyra Burg","streetName":"Hazel Burg","buildingNumber":"799","city":"West Tyriquechester","zipcode":"63648-6228","country":"Sudan","county_code":"SK","latitude":40.024735,"longitude":83.985984},{"id":34,"street":"721 Antonetta Vista","streetName":"Graham Crescent","buildingNumber":"860","city":"North Annetown","zipcode":"65721-8141","country":"Estonia","county_code":"KI","latitude":-15.121175,"longitude":178.626563},{"id":35,"street":"979 Faye Manors Suite 065","streetName":"Glover Estate","buildingNumber":"31763","city":"Freemanstad","zipcode":"54527","country":"Jersey","county_code":"AL","latitude":20.108997,"longitude":-37.284153},{"id":36,"street":"7404 General Freeway Suite 217","streetName":"Purdy Ways","buildingNumber":"6038","city":"Jaydenberg","zipcode":"09247-3276","country":"Paraguay","county_code":"VG","latitude":16.175646,"longitude":-158.517287},{"id":37,"street":"5142 Bria Village Suite 186","streetName":"Gleason Inlet","buildingNumber":"490","city":"Klockofurt","zipcode":"49381","country":"Eritrea","county_code":"BA","latitude":37.615073,"longitude":24.014456},{"id":38,"street":"7447 Ellen Crossing","streetName":"Schinner Forges","buildingNumber":"897","city":"South Isabelleview","zipcode":"69273-6683","country":"Brunei Darussalam","county_code":"LB","latitude":-57.048413,"longitude":63.209992},{"id":39,"street":"515 Estel Rue Apt. 558","streetName":"Edmund Valleys","buildingNumber":"50454","city":"South Hope","zipcode":"57355","country":"Isle of Man","county_code":"TN","latitude":-48.257298,"longitude":-117.093095},{"id":40,"street":"93154 Freeman Wells","streetName":"Schuppe Lights","buildingNumber":"727","city":"Altenwerthmouth","zipcode":"34855-2318","country":"Japan","county_code":"EE","latitude":-16.832759,"longitude":-178.759066},{"id":41,"street":"29213 Wilderman Pass","streetName":"Larson Forest","buildingNumber":"2619","city":"Port Nels","zipcode":"53343-6882","country":"Western Sahara","county_code":"KZ","latitude":-66.776414,"longitude":33.699505},{"id":42,"street":"69120 Schuster Heights","streetName":"Pablo Drive","buildingNumber":"55455","city":"Clarkburgh","zipcode":"60887","country":"Angola","county_code":"ZM","latitude":-48.184684,"longitude":90.914503},{"id":43,"street":"883 Jazmyne Plaza","streetName":"Pierce Common","buildingNumber":"19725","city":"Millerland","zipcode":"44150-8186","country":"Micronesia","county_code":"OM","latitude":-71.040426,"longitude":117.35807},{"id":44,"street":"81688 Adams Canyon","streetName":"Armstrong Stravenue","buildingNumber":"6209","city":"South Mateoburgh","zipcode":"26788","country":"Kyrgyz Republic","county_code":"TZ","latitude":-56.480201,"longitude":-132.309993},{"id":45,"street":"688 Ottilie Ranch Suite 011","streetName":"Dallin Mountain","buildingNumber":"1661","city":"South Alanaton","zipcode":"09929-3200","country":"Latvia","county_code":"NA","latitude":-51.263722,"longitude":37.631858},{"id":46,"street":"3395 Kunde Canyon Apt. 267","streetName":"Destini Centers","buildingNumber":"66217","city":"South Alaina","zipcode":"24398-1014","country":"Swaziland","county_code":"AZ","latitude":-60.655299,"longitude":-66.530041},{"id":47,"street":"8237 Flatley Port Apt. 875","streetName":"Sonny Summit","buildingNumber":"171","city":"East Charley","zipcode":"74698-0296","country":"Mali","county_code":"TD","latitude":-46.136588,"longitude":13.994611},{"id":48,"street":"68786 Marta Corner","streetName":"Edgardo Glen","buildingNumber":"285","city":"New Clarabelle","zipcode":"01042","country":"Saint Pierre and Miquelon","county_code":"LB","latitude":22.597597,"longitude":98.041275},{"id":49,"street":"522 White Cliff","streetName":"Melba Brooks","buildingNumber":"592","city":"South Lomaside","zipcode":"86513","country":"Australia","county_code":"HR","latitude":54.61147,"longitude":76.475974},{"id":50,"street":"36074 Meagan Inlet","streetName":"Rowe Courts","buildingNumber":"5055","city":"Dellmouth","zipcode":"31196","country":"Pitcairn Islands","county_code":"TD","latitude":59.80562,"longitude":-127.60152},{"id":51,"street":"738 Kirlin Streets Suite 540","streetName":"O'Hara Corner","buildingNumber":"5866","city":"East Claudia","zipcode":"32496","country":"San Marino","county_code":"YT","latitude":-58.524493,"longitude":132.903854},{"id":52,"street":"361 Carley River Suite 872","streetName":"Grady Hollow","buildingNumber":"48984","city":"Littleburgh","zipcode":"98627-3952","country":"Marshall Islands","county_code":"SN","latitude":-83.582477,"longitude":124.565696},{"id":53,"street":"19076 Graciela Inlet","streetName":"Mollie Trafficway","buildingNumber":"95897","city":"New Serenity","zipcode":"92117-7971","country":"Saint Vincent and the Grenadines","county_code":"UA","latitude":-59.647296,"longitude":87.308029},{"id":54,"street":"4895 Romaguera Ways","streetName":"Ethelyn Meadow","buildingNumber":"977","city":"Leuschkeport","zipcode":"02266","country":"Moldova","county_code":"SG","latitude":-88.971732,"longitude":154.152211},{"id":55,"street":"57992 Morissette Parkway","streetName":"Luis Rapids","buildingNumber":"640","city":"Port Myrtleside","zipcode":"60704-5819","country":"Mongolia","county_code":"GA","latitude":63.25113,"longitude":-172.622615},{"id":56,"street":"56139 Bartoletti Island","streetName":"Hane Rue","buildingNumber":"45574","city":"West Brad","zipcode":"19225-7114","country":"Norfolk Island","county_code":"NI","latitude":-61.036266,"longitude":-168.197158},{"id":57,"street":"116 Felton Via","streetName":"Neha Springs","buildingNumber":"860","city":"Madisynburgh","zipcode":"03449","country":"Timor-Leste","county_code":"DO","latitude":82.935427,"longitude":-7.443203},{"id":58,"street":"60358 Noe Views Suite 498","streetName":"Grant Village","buildingNumber":"474","city":"West Garrettton","zipcode":"93830-1888","country":"South Georgia and the South Sandwich Islands","county_code":"VE","latitude":49.478971,"longitude":-158.392444},{"id":59,"street":"39815 Kaylah Vista Suite 888","streetName":"Vernice Locks","buildingNumber":"24810","city":"Wolfchester","zipcode":"67789","country":"Swaziland","county_code":"TV","latitude":38.2534,"longitude":93.513382},{"id":60,"street":"99537 Ernser Junctions Suite 069","streetName":"Dolores Isle","buildingNumber":"7872","city":"Camilaside","zipcode":"93439-4630","country":"Guinea-Bissau","county_code":"RS","latitude":78.308623,"longitude":132.975452},{"id":61,"street":"12939 Charles Square Suite 497","streetName":"Arielle Dam","buildingNumber":"5811","city":"Gutmannton","zipcode":"56606-0690","country":"Oman","county_code":"SC","latitude":-76.111961,"longitude":88.742783},{"id":62,"street":"44746 Isac Freeway Apt. 889","streetName":"Nikolaus Shores","buildingNumber":"932","city":"Kingburgh","zipcode":"62784","country":"Croatia","county_code":"VE","latitude":13.301589,"longitude":-116.182986},{"id":63,"street":"4742 Eichmann Gateway Suite 593","streetName":"Weimann Wall","buildingNumber":"30236","city":"Port Ryannburgh","zipcode":"97640","country":"Nauru","county_code":"CF","latitude":48.546515,"longitude":-146.191608},{"id":64,"street":"67881 Izaiah Underpass","streetName":"Berge Walks","buildingNumber":"75935","city":"Sheridanside","zipcode":"31353","country":"Pitcairn Islands","county_code":"GI","latitude":14.643741,"longitude":80.421471},{"id":65,"street":"742 Strosin Station Apt. 259","streetName":"Cormier Course","buildingNumber":"8174","city":"Kuhnfort","zipcode":"02986-6959","country":"Jersey","county_code":"MW","latitude":72.216691,"longitude":103.098617},{"id":66,"street":"24202 Adolph Dale Suite 098","streetName":"Keebler Trail","buildingNumber":"94600","city":"North Margie","zipcode":"71084","country":"French Guiana","county_code":"BW","latitude":-10.995503,"longitude":22.013188},{"id":67,"street":"20439 Wilkinson Terrace","streetName":"Johathan Meadows","buildingNumber":"50339","city":"West Merlehaven","zipcode":"18432-8315","country":"Monaco","county_code":"HU","latitude":-27.620452,"longitude":161.360219},{"id":68,"street":"8465 Natasha Mountain Apt. 669","streetName":"Yundt Vista","buildingNumber":"9598","city":"Port Christopstad","zipcode":"49897","country":"Lebanon","county_code":"OM","latitude":31.74038,"longitude":178.453641},{"id":69,"street":"98727 Funk Light Apt. 571","streetName":"Hester Pine","buildingNumber":"84416","city":"Konopelskiland","zipcode":"85355-0024","country":"Antigua and Barbuda","county_code":"PH","latitude":85.822475,"longitude":-20.5743},{"id":70,"street":"96350 Alize Mountain Suite 061","streetName":"Weber Estates","buildingNumber":"14349","city":"Aldaland","zipcode":"41546","country":"Panama","county_code":"ZW","latitude":-46.627584,"longitude":-47.923774},{"id":71,"street":"7080 Dane Alley","streetName":"Dayton Pine","buildingNumber":"830","city":"New Rosalyn","zipcode":"98861-7990","country":"Antarctica (the territory South of 60 deg S)","county_code":"SA","latitude":-15.621679,"longitude":-117.471189},{"id":72,"street":"2177 Fritsch Fords Suite 508","streetName":"Alyce Radial","buildingNumber":"70797","city":"West Lyda","zipcode":"19524-1654","country":"Mauritius","county_code":"LR","latitude":89.001174,"longitude":10.519397},{"id":73,"street":"3426 Trantow Locks Suite 106","streetName":"Bartoletti Loaf","buildingNumber":"7977","city":"Champlinbury","zipcode":"25488-0083","country":"Australia","county_code":"MT","latitude":65.758854,"longitude":-162.107017},{"id":74,"street":"88635 Erdman Forge Apt. 712","streetName":"Rowan Route","buildingNumber":"1269","city":"New Devynport","zipcode":"52882-4242","country":"Uzbekistan","county_code":"SM","latitude":-16.478201,"longitude":-6.071509},{"id":75,"street":"643 Quitzon Common Suite 558","streetName":"Loy Bridge","buildingNumber":"365","city":"Willfurt","zipcode":"79186-7250","country":"Mauritius","county_code":"GS","latitude":-71.585225,"longitude":-123.724874},{"id":76,"street":"2021 Johnson Knoll Suite 097","streetName":"Peggie Mission","buildingNumber":"9232","city":"New Norbertfort","zipcode":"34158","country":"Gambia","county_code":"SB","latitude":-34.181727,"longitude":95.963315},{"id":77,"street":"9749 Feil Ramp","streetName":"Jarret Rapids","buildingNumber":"10473","city":"Connfort","zipcode":"83246-8393","country":"Luxembourg","county_code":"CV","latitude":-83.763267,"longitude":154.301745},{"id":78,"street":"992 Kuhlman Groves Apt. 886","streetName":"Skiles Street","buildingNumber":"851","city":"North Paige","zipcode":"80897-3253","country":"Anguilla","county_code":"CA","latitude":-85.842705,"longitude":19.236976},{"id":79,"street":"864 Flatley River","streetName":"Jerry Viaduct","buildingNumber":"58866","city":"Predovicland","zipcode":"30577-4810","country":"Liberia","county_code":"PL","latitude":71.129033,"longitude":-94.696231},{"id":80,"street":"6208 Velma Lodge","streetName":"Janet Gateway","buildingNumber":"21737","city":"Lorainemouth","zipcode":"13341","country":"Fiji","county_code":"TR","latitude":-50.173242,"longitude":-84.109898},{"id":81,"street":"57321 Heidenreich Points Suite 508","streetName":"Von Trail","buildingNumber":"7277","city":"Octaviachester","zipcode":"12840","country":"Serbia","county_code":"KR","latitude":-63.726558,"longitude":-77.197037},{"id":82,"street":"4357 O'Kon Shoal Apt. 437","streetName":"Braun River","buildingNumber":"37327","city":"Mohrberg","zipcode":"83129-7461","country":"Yemen","county_code":"KP","latitude":39.765178,"longitude":-122.552031},{"id":83,"street":"8834 Adella Estate Suite 448","streetName":"Treutel Valleys","buildingNumber":"59399","city":"Port Juliafort","zipcode":"45922-4861","country":"Holy See (Vatican City State)","county_code":"AS","latitude":-79.172347,"longitude":-116.648909},{"id":84,"street":"9519 Swaniawski Circles Apt. 228","streetName":"Wyman Pass","buildingNumber":"461","city":"Monserratechester","zipcode":"96878","country":"Libyan Arab Jamahiriya","county_code":"KZ","latitude":-48.173549,"longitude":-169.715314},{"id":85,"street":"5940 Lockman Harbor","streetName":"Kaitlin Plaza","buildingNumber":"654","city":"Port Geo","zipcode":"23953-6766","country":"Antarctica (the territory South of 60 deg S)","county_code":"CU","latitude":51.435821,"longitude":-101.478634},{"id":86,"street":"69089 Farrell Street","streetName":"Derick Coves","buildingNumber":"8776","city":"Lake Caitlyn","zipcode":"17478","country":"Gabon","county_code":"LC","latitude":-28.993694,"longitude":-56.375146},{"id":87,"street":"986 Jamir Greens Suite 250","streetName":"Macejkovic Vista","buildingNumber":"65171","city":"East Pansyview","zipcode":"79741-7609","country":"Saint Martin","county_code":"FK","latitude":-66.409502,"longitude":29.269218},{"id":88,"street":"5599 Jamarcus Dale","streetName":"Spinka Plaza","buildingNumber":"2216","city":"Hermannland","zipcode":"92545","country":"United States Virgin Islands","county_code":"FK","latitude":29.738502,"longitude":148.005451},{"id":89,"street":"259 Ortiz Junctions Apt. 812","streetName":"Harber Orchard","buildingNumber":"410","city":"Lake Johathan","zipcode":"01401","country":"Mayotte","county_code":"IE","latitude":-60.021206,"longitude":136.758724},{"id":90,"street":"24246 Quinten Cliff Suite 855","streetName":"Morissette Avenue","buildingNumber":"3883","city":"East Cleora","zipcode":"70959-0991","country":"Russian Federation","county_code":"US","latitude":-19.49946,"longitude":9.952662},{"id":91,"street":"5302 Clair Port Apt. 768","streetName":"Lindgren Village","buildingNumber":"245","city":"West Derrickside","zipcode":"50425","country":"Bulgaria","county_code":"BE","latitude":-16.69485,"longitude":-74.897509},{"id":92,"street":"76653 Eriberto Valley Apt. 556","streetName":"Crooks Bridge","buildingNumber":"82216","city":"Samaraport","zipcode":"85123","country":"Germany","county_code":"VI","latitude":12.285183,"longitude":-154.388086},{"id":93,"street":"20442 Konopelski Pass Apt. 314","streetName":"Wilkinson Loaf","buildingNumber":"89690","city":"East Lelia","zipcode":"73149","country":"Marshall Islands","county_code":"BG","latitude":-29.491267,"longitude":20.551323},{"id":94,"street":"2531 Sarai Ranch Suite 516","streetName":"O'Conner Court","buildingNumber":"79749","city":"New Deanna","zipcode":"01927","country":"Lithuania","county_code":"KW","latitude":-44.321125,"longitude":51.10192},{"id":95,"street":"105 Fay Prairie Apt. 288","streetName":"Hand Branch","buildingNumber":"975","city":"Reingerfurt","zipcode":"15989","country":"Anguilla","county_code":"JM","latitude":-55.085942,"longitude":158.469133},{"id":96,"street":"9424 Streich Avenue Apt. 629","streetName":"Nash Ridges","buildingNumber":"7193","city":"North Schuylerland","zipcode":"98615-4545","country":"Sweden","county_code":"CW","latitude":43.751169,"longitude":57.790981},{"id":97,"street":"2300 Blick Islands","streetName":"Strosin Lodge","buildingNumber":"218","city":"Sanfordville","zipcode":"90514","country":"Cuba","county_code":"DM","latitude":-84.693805,"longitude":-143.710603},{"id":98,"street":"57766 Gislason Mills","streetName":"Arno Streets","buildingNumber":"366","city":"Port Verona","zipcode":"66697-5786","country":"French Polynesia","county_code":"NA","latitude":46.339954,"longitude":71.455173},{"id":99,"street":"877 Swift Port Apt. 714","streetName":"Littel Ridges","buildingNumber":"129","city":"Ileneland","zipcode":"69286-9082","country":"Israel","county_code":"SB","latitude":67.892073,"longitude":-57.536449},{"id":100,"street":"57441 Wilkinson Mountain Suite 955","streetName":"Rolando Field","buildingNumber":"6246","city":"East Vivienville","zipcode":"96686-5632","country":"Colombia","county_code":"SS","latitude":37.865952,"longitude":98.169073}];

// Root element
const root = document.getElementById("root");

/* DIA 1: LA AMENAZA DEL OBJETO */

// Title
const day1Title = document.createElement("h1");
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

const day2Title = document.createElement("h1");
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
const cardAttributes = ["Type", "Card number", "Expiration", "Owner"];

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
labelMonth.innerText = "Month:";

// Div for label and input
const day2Ex2Input = document.createElement("div");
day2Ex2Input.classList = "input-container"
day2Ex2.appendChild(day2Ex2Input);

// Append label & dropdown
day2Ex2Input.appendChild(labelMonth);
day2Ex2Input.appendChild(selectMonth);

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




/* DIA 3: EL RETORNO DEL JSON */


const day3Title = document.createElement("h1");
day3Title.innerText = "Día 3: El Retorno del JSON";
day3Title.classList = "day-title"
root.appendChild(day3Title);



/* 1. Añadir a los clientes registrados sus direcciones, filtrarlos por mes y año de expiración,
y colocar junto a cada uno de ellos un botón de "más información" que muestre toda la info del cliente */

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

// Append addresses to clients
for (let client = 0; cards[client]; client++) {
    cards[client].address = `${addresses[client].street} building ${addresses[client].buildingNumber}, ${addresses[client].zipcode} ${addresses[client].city}, ${addresses[client].country}`;
}

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
labelMonth2.innerText = "Month:";

// Year dropdown selector
const selectYear = document.createElement("select");
selectYear.id = "selectYear"
selectYear.selectedIndex = 1;
years.forEach(year => {
   const option = document.createElement("option");
   option.value = year;
   option.innerText = year;
   selectYear.appendChild(option);
})

// Dropdown year label
const labelYear = document.createElement("label");
labelYear.for = "selectYelabelYear";
labelYear.innerText = "Year:";

// Div for label and input
const day2Ex3Input = document.createElement("div");
day2Ex3Input.classList = "input-container"
day2Ex3.appendChild(day2Ex3Input);

// Append labels & dropdowns
day2Ex3Input.appendChild(labelMonth2);
day2Ex3Input.appendChild(selectMonth2);
day2Ex3Input.appendChild(labelYear);
day2Ex3Input.appendChild(selectYear);

// Table of expiring cards
const expireMAndYTable = document.createElement("table");
day2Ex3.appendChild(expireMAndYTable);

// Function to get expiration year from card
const getExpirationYear = cardExpiration => parseInt(cardExpiration[3] + cardExpiration[4]);

// Filter by exp month function
const filterByExpMAndY = (month, year) => {
   // Array of expiring cards
   let expireOnMAndY = cards.filter(card => getExpirationMonth(card.expiration) === month && getExpirationYear(card.expiration) === year);
   // Card attributes including address
   const newCardAttributes = [...cardAttributes];
   newCardAttributes.push("Address");
   // Table header
   const thead = document.createElement("thead");
   for (attribute in cardAttributes) {
        if (cardAttributes[attribute] === "Type" || cardAttributes[attribute] === "Card number") {
            const th = document.createElement("th");
            th.innerText = cardAttributes[attribute];
            thead.appendChild(th);
        }
   }
   // Append table header
   expireMAndYTable.appendChild(thead);
   // Populate table with rows
   expireOnMAndY.map((client, index) => {
       // Create row
       const tr = document.createElement("tr");
       // Fill rows with card basic information
       for (attribute in client) {
           if (attribute === "type" || attribute === "number") {
                const td = document.createElement("td");
                td.innerText = client[attribute];
                tr.appendChild(td);
            }
        }
        expireMAndYTable.appendChild(tr);
        // Add cients' "more information"
        const moreInfo = document.createElement("p");
        moreInfo.innerText = `Owner: ${expireOnMAndY[index].owner} | Address: ${expireOnMAndY[index].address}.`;
        moreInfo.classList = "hidden";
        moreInfo.id = `more-info-${index}`;
        expireMAndYTable.appendChild(moreInfo);
        // Button
        const button = document.createElement("button");
        button.innerText = "More info";
        button.id = index;
        button.addEventListener("click", (event) => {
            const toHide = document.getElementById(`more-info-${event.target.id}`)
            if (button.classList.contains("open")) {
                toHide.classList.add("hidden");
                button.innerText = "More info";
                button.classList.remove("open");
            }
            else {
                toHide.classList.remove("hidden");
                button.innerText = "Less";
                button.classList.add("open");
                }
        })
        tr.appendChild(button);
   })
}

// By-default function call
let selectedMonth2 = months[0];
let selectedYear = years[1]
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

 /* END */

 