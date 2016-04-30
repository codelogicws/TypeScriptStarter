var Person = (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hi there");
    };
    return Person;
}());
