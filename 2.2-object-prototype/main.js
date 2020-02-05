'use strict'

//task 1

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    } else {
        initPrintAnimalSound.prototype = animal;
        let sound = animal.sound;
        return sound;
    }
    
}

//task2

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let marksSum = 0;
    for (let i = 0; i < marks.length; i++) {
        marksSum += Number(marks[i]);
    }
    let roundedAverage = Math.round(marksSum / marks.length);
    return roundedAverage;
}

//task 3 

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();
    let diff = now - Number(new Date(birthday));
    let age = diff / (365.25*24*60*60*1000);
    if (age < 18) {
        return false;
    } else {
        return true;
    }
}
