const Employee = require('../lib/Employee');

class Manger extends Employee {
    constructor(name, id, email, officeNumber, employeeNumber) {
        super(name, id, email, officeNumber, employeeNumber);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRoles() { 
        return 'Manger';
    }
}

module.exports = Manger;