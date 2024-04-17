/* 2. Crear las clases de Persona y Usuarios, teniendo en cuenta que tienen propiedades comunes */

class Person {
    constructor(id, firstName, lastName) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }
}

export default Person;