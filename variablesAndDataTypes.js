let details = {
    id:1,
    place:"this place",
    present:true
}
console.log(details);

function greet() {
    console.log("hello");
}

let hello = () => {
    console.log("hello");
}


let hi = function(name) {
    console.log("hi "+ `${name}`);

}

hi = (user) => {
    console.log("hi "+ user);

}

var user = "user";
hi(user);
var user = "admin"
hi(user);
hello();

let date = new Date();
console.log(date);

console.log(Number("22222"));

let studentName = ["Ria","yuvi", "diksha"]
studentName.push("Me");
console.log(studentName);

studentName.forEach((elemwnt, index)=> {
    console.log(elemwnt, index);
})