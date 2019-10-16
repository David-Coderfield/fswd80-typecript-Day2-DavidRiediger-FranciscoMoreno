var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, jobTitle) {
        this.firstName = "";
        this.lastName = "";
        this.age = "";
        this.jobTitle = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.message = function () {
        return "(1)Hello there, my name is " + this.fullName() + " and I am " + this.age + " years old and I am an " + this.jobTitle + ".";
    };
    return Person;
}());
var person1 = new Person("John", "Doe", 18, "Bundeskanzler");
// console.log(person1.message());
var Work = /** @class */ (function (_super) {
    __extends(Work, _super);
    function Work(firstName, lastName, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, firstName, lastName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Work.prototype.message2 = function () {
        return _super.prototype.message.call(this) + " (2)And I get " + this.salary + " every month, and I work in " + this.jobLocation;
    };
    return Work;
}(Person));
var person2 = new Work("Mr.", "Smith", 42, "Agent", 31415, "the Matrix");
console.log(person2.message2());
