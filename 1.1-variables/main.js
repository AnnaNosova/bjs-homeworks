//task 1

let Ivanov = {
    algebra: 5,
    geography: 4,
    physics: 4,
};

let averageMark;
let marksSum = 0;
let counter = 0;

for (let value of Object.values(Ivanov))  {
    marksSum += value
    averageMark = marksSum / ++counter;
}

console.log(averageMark);

//task 2

let myName = 'Анна';
let message = `Привет, мир! Меня зовут ${myName}`;

console.log(message);

//task 3

let x = 2,
y = 22,
z = 0;

let result = x * y + 5 * z + x - 1;

console.log(result);
