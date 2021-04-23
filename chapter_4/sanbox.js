// Function declaration
function greet(){
    console.log('welcome');
}

greet();

// function expression
const speak = function(name){
    console.log('good day ' + name);
};

speak('mario');

// returning value
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// arrow function
const calcArea = (radius) => {
    return 3.14 * radius**2;
};

const area = calcArea(5);
console.log(area);


// callback & foreach

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    value += 20;
    console.log(value);
});

let people = ['mario', 'budi', 'jaka', 'sudirman 1'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);