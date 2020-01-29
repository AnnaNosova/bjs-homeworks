'use strickt'

//task 1

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = new Date (window.date.value);
    let currentDate = new Date();
    let monthsAmount = Math.round((Math.abs(date.getTime() - currentDate.getTime())) / (1000 * 3600 * 24 * 30.5));
    let result = calculateTotalMortgage(percent, contribution, amount, monthsAmount);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, monthsAmount) {


    let mortgageData = {
        percent: parseInt(percent),
        contribution: parseInt(contribution),
        amount: parseInt(amount),
        monthsAmount: monthsAmount,
    }

    for (let key in Object(mortgageData)) {
        console.log(mortgageData[key])
        if (isNaN(mortgageData[key]) || mortgageData[key] === undefined) {
            console.log(`Параметр ${key} содержит неправильное значение ${mortgageData[key]}`);
            return `Параметр ${key} содержит неправильное значение ${mortgageData[key]}`;
        } 
    }


    mortgageData.index = mortgageData.percent / 100 / 12;
    let monthlyPayment = (mortgageData.amount - mortgageData.contribution) * (mortgageData.index + mortgageData.index / (((1 + mortgageData.index) ** mortgageData.monthsAmount) - 1))
    let mortgageResult = (monthlyPayment * mortgageData.monthsAmount).toFixed(2);
    return (mortgageResult);
}

//task 2

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if(name === '') {
        name = 'Аноним';
    }
    return `Привет, мир! Меня зовут ${name}`;
}