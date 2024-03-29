'use strict'

// 1) Следующим переменным присвоить значения 
//    - money - любое число “Доход за месяц”,
const money = 150000;
//    - income - строка с дополнительными доходом (например: фриланс), 
const income = 20000;
//    - addExpenses - строка с перечислением дополнительных расходов через запятую (например: интернет, такси, коммуналка),
const addExpenses = 'Интернет, Такси, Коммуналка';
//    - deposit - любое булево значение,
const deposit = true;
//    - mission - любое число (Какую сумму хотите накопить),
const mission = 3000000;
//    - period - число от 1 до 12 (месяцев)
const period = 12;
// 2) Используя методы и свойства:
//    - Вывести в консоль тип данных значений переменных money, income, deposit;
console.log(money, income, deposit);
//    - Вывести в консоль длину строки addExpenses
console.log(addExpenses.length);
//    - Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`); 
//    - Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.toLowerCase().split(' ')); 
//    - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
const budgetDay = money/30;
//    - Вывести в консоль budgetDay
console.log(budgetDay);





// 3) Проверить, чтобы все работало и не было ошибок в консоли



// 4) Добавить папку или ветку со вторым уроком в свой репозиторий на GitHub



