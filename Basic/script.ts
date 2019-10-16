//OOOOOLD AND LOOOONG VERSIOOOON
class Person {
    firstName;
    lastName;
    age;
    jobTitle;

    constructor(firstName:string, lastName:string, age:number, jobTitleXXX:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitleXXX;
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

    message() {
        return `(1)Hello there, my name is ${this.fullName()} and I am ${this.age} years old and I am an ${this.jobTitle}.` 
    }
}

//THIS DOES THE SAME AS 'class Person' IN JUST A FEW LINES
class Person2 {
    constructor(public firstName:string, public lastName:string, public age:number, public jobTitle:string){};
        fullName() {
        return this.firstName + " " + this.lastName;
    }
    message() {
        return `(1)Hello there, my name is ${this.fullName()} and I am ${this.age} years old and I am an ${this.jobTitle}.` 
    }
}

let person1 = new Person2("John", "Doe", 18, "Bundeskanzler");

// console.log(person1.message());


class Work extends Person2 {
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

/*
var arr = [person1, person2, extendedPerson3];

for (let val of array){
    if (val.something)
    document.getElementById('demo').innerHTML += val.something();
}
*/