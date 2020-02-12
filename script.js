'use strict';
var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

const makeRequest = (request) => {

    let response = '';

    do {
        response = prompt(request);
    } while (!response && response.length <= 50)

    return response;
}

for (let i = 0; i < 2; i++) {
    let a = makeRequest('Введите обязательную статью расходов в этом месяце'),
        b = makeRequest("Во сколько обойдется?");
    appData.expenses[a] = b;
};

appData.moneyPerDay = appData.budget / 30;

alert("Щоденний бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальний уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Високий уровень достатка");
} else {
    console.log("oshibka")
}

// //Сколько типов данных существует в JS?
// //7
// //Как вывести информацию в консоль?
// //console.log(*);
// //Какая функция операторов || и &&?
// //або, і

// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 15; i++) {
//     if (i == 7) {
//         continue
//     }
//     console.log(i)
// }