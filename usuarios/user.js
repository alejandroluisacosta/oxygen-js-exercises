import Person from './person.js';

class User extends Person {
    constructor(email, firstName, id, image, ip, lastName, macAddress, password, username, uuid, website) {
        super(id, firstName, lastName);
        this._email = email;
        this._image = image;
        this._ip = ip;
        this._macAddress = macAddress;
        this._password = password;
        this._username = username;
        this._uuid = uuid;
        this._website = website;
    }

    get email() {
        return this._email;
    }

    get image() {
        return this._image;
    }

    get ip() {
        return this._ip;
    }

    get macAddress() {
        return this._macAddress;
    }

    get password() {
        return this._password;
    }

    get username() {
        return this._username;
    }

    get uuid() {
        return this._uuid;
    }

    get website() {
        return this._website;
    }
}

export default User;