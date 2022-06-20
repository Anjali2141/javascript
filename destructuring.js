import {student} from './JavascriptObjects.mjs'

//Destructuring = expression to extract data from arrays,objects & assign each of them with local variables

//Array Destructuring
const [a, b, c, d] = [1, 2, 3,4];
console.log(a, b, c, d);

const [first,second,third, ...fourth] = [1,2,3,4,5,6]
console.log(first,second,third, fourth);


//Object destructuring - assigning to existing variable names
let { standard, days, subject}= student;
console.log(standard, days, subject)

// assigning new variable names
let {standard:Class, days:day, subject:sub}= student;
console.log(Class, day, sub);