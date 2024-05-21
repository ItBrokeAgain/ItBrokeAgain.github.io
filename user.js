class Role {
    _role;
    constructor(id) {
        this.EvaluateTypeID(id);
    }

    EvaluateTypeID = (typeID) => {

        switch (typeID) {
            case 0: this._role = new ServiceRole(); return 0;
            case 1: this._role = new PartsRole(); return 1;
            default: console.error(`invalid type ID: "${typeID}"`); return -1;
        }
    }

    GetRole = () => { return this._role; }

    UpdateRole = (id) => { this.EvaluateTypeID(id) } 

}

class ServiceRole {

    _ro = '';
    _bay = '';
    _story = '';
    constructor() {

    }

    EditInfo = (info, value) => {

        this[info] = value;
        console.log("Edit: "+ this[info]);
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


    GetName = () => { return this._name }

    GetRole = () => { return this._role }

    GetRoleType = () => { return this._role.GetRole(); }

    GetRO = () => { 
        return this.GetRoleType().GetInfo('_ro') 
    }

    GetBay = () => {
        return this.GetRoleType().GetInfo("_bay")
    }
}