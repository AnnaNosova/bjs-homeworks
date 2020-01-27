'use strict'

//task 1

console.log('task 1');
console.log('');
console.log('');


function getSolutions(a,b,c) {
    let dis = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-b - Math.sqrt(dis)) / (2 * a);
    let x2 = (-b + Math.sqrt(dis)) / (2 * a);

    if (dis > 0) {
        return { 
            roots: [x1, x2],
            D: dis
        };
    } else if (dis === 0) {
        return { 
            roots: [x1],
            D: dis
        };
    } else if (dis < 0) {
        return {
            D: dis
        };
    };
}

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D > 0) {
        return console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    } else if (result.D === 0) {
        return console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D < 0) {
        return console.log('Уравнение не имеет вещественных корней');
    };
}

showSolutionsMessage (1,2,3);
console.log('');
showSolutionsMessage (7,20,-3)
console.log('');
showSolutionsMessage (2,4,2)
console.log('');
console.log('');
console.log('');


//task 2

console.log('task 2');
console.log('');
console.log('');

function getAverageScore(data) {
    let marksSum = 0;
    let counter = 0;
    for (let value of Object.values(data)) {
        let subjAverageMark = getAverageMarks(value);
        marksSum += subjAverageMark;
        counter++;
    }
    data.average = marksSum / counter;
    return console.log(data);
}

function getAverageMarks(subject) {
    let marksSum = 0;
    for (let i = 0; i < subject.length; i++) {
        marksSum += subject[i];
      }
    return marksSum / subject.length;
} 

let Ivanov = {
    algebra: [3,2,4,3,4,3],
    russian: [5,3,5],
    literature: [2,3,2,3],
    geometry: [4,3,4,5],
    physics: [5,4,5,4,5],
    //chemistry: [5,2],
    english: [5,5,5],
    //german: [5,5,5,5,5,5],
    geograhpy: [5,4,4,5],
    history: [2,3,3,3],
};
getAverageScore(Ivanov);

console.log('');
console.log('');
console.log('');

//task 3

console.log('task 2');
console.log('');
console.log('');

function getPersonData(secretData) {
    secretData.firstName = secretData.aaa;
    delete secretData.aaa;
    secretData.lastName = secretData.bbb;
    delete secretData.bbb;

    for (let i in secretData) {
        secretData[i] = descryptPersonData(secretData[i]);
    }
  return secretData;
}

function descryptPersonData(data) {
    if (data === 0) {
        return 'Родриго';
    } else {
        return 'Эмильо';
    }
}


console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 0}));