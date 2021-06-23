const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

// test


// const employee1 = new Employee("John", 1, "john@mail.com")
// const employee2 = new Manager("Mary", 2, "mary@mail.com", 12321)

// console.log(employee2.getOfficeNumber())

