class Person {
    firstName = "";
    lastName = "";
    age = "";
    jobTitle = "";

    constructor(firstName, lastName, age, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

    message() {
        return `(1)Hello there, my name is ${this.fullName()} and I am ${this.age} years old and I am an ${this.jobTitle}.` 
    }
}

let person1 = new Person("John", "Doe", 18, "Bundeskanzler");

// console.log(person1.message());


class Work extends Person {
    salary;
    jobLocation;

    constructor(firstName, lastName, age, jobTitle, salary, jobLocation) {
        super(firstName, lastName, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }

    message2(){
    	return `${super.message()} (2)And I get ${this.salary} every month, and I work in ${this.jobLocation}`
    }
    
}

let person2 = new Work("Mr.", "Smith", 42, "Agent", 31415, "the Matrix")

console.log(person2.message2());