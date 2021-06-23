class Employee {
    // define properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // define methods
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;

// test for using a class
// const employee1 = {
//     name: "John",
//     id: 1,
//     email: "john@mail.com"
// }

// const employee2 = new Employee("John", 1, "john@mail.com")
// const employee3 = new Employee("John", 1, "john@mail.com")





