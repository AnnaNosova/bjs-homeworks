
'use strict'

//task 1

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let result = [];

    if (d > 0) {
        result[0] = (-b + Math.sqrt(d)) / (2 * a);
        result[1] = (-b - Math.sqrt(d)) / (2 * a);
    } else if (d === 0) {
        result[0] = -b  / (2 * a); 
    }
    return result;
}

// task 2

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){

    if (marks.length > 5) {
        console.log ('Превышено максимальное количество оценок. Будет произведен расчет по первым пяти оценкам')
        marks.splice(5, marks.length - 5);
    }

    let result;
    let marksSum = 0;

    for (let i = 0; i <marks.length; i++) {
        marksSum += marks[i];
    }

    result = marksSum / marks.length;
    return result;
}

// task 3

function calculateDrinkTask(){
    let name = window.personName.value;
    console.log(name);
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let birthYear = dateOfBirthday.getFullYear();
    let today = new Date();
    let nowYear = today.getFullYear();
    let result;

    if ((nowYear - birthYear) >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    console.log(result)
    return result;
}