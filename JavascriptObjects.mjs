//Object- non-primitive data type as collection of data(key:value pairs)

//Object creation
//using Object literals - list of pairs
export default {
    name: "reena",
    place: "goa",
    age: 26
}
// console.log(info);
//using new keyword

export let marks = new Object();
marks.science = 80;
marks.english = 70;
marks.studentName = "denny";

//Object method
marks.total = function () {
    return (this.science + this.english);
}
console.log(marks.total());


// Object Properties =  values(key:values pairs)

//Object methods
// object containing method
const person = {
    greet: function () { console.log('greet'); },
    hello: () => { console.log("hello") }
};
person.greet();

//Constructor Functions- to create objects

function Details(standard, noOfDays, name) {
    this.standard = standard,
        this.days = noOfDays,
        this.name = name
}

export let student = new Details(12, 5, "john")
console.log(student);
console.log(student.standard);

//Object Prototype - default property, add new properties or methods to constructor
Details.prototype.subject = "Maths";
console.log(student.subject);

export let message = () => {
    return("This is an exported function")
}