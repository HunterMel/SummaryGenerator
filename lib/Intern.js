class Intern {
    // define properties
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school; 
    }

    //deine methods 

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

}

    module.exports = Intern;