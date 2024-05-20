class Role {
    _role;
    constructor(id) {
        EvaluateTypeID(id);
    }

    EvaluateTypeID = (typeID) => {

        switch (typeID) {
            case 0: this._role = new ServiceRole(); return 0;
            case 1: this._role = new PartsRole(); return 1;
            default: console.error(`invalid type ID: "${typeID}"`); return -1;
        }
    }

    GetRole = () => { return this._role; }
}

class ServiceRole {

    _ro = '';
    _bay = '';
    _story = '';
    constructor(ro, bay, story) {
        this._ro = ro;
        this._bay = bay;
        this._story = story;
    }

    EditInfo = (info, value) => {

        this[info] = value;
    }

    GetInfo = (info) => {

        return this[info];
    }
}

class PartsRole {

    _defmsg = "parts role class";
}


class User {

    _name = '';
    _role;
    constructor(name, roleID) {

        this._name = name;
        this._role = new Role(roleID);
    }
}