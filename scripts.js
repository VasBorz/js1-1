// 1. Задать температуру в градусах по Цельсию.
// Вывести в alert соответствующую температуру в градусах по Фаренгейту.
// Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту,
// Tc – температура по Цельсию
var tc = 20,
    tf = (9 / 5) * tc + 32;
alert('Temperature in fahrenheit:' + tf + "\nTemperature in fahrenheit:" + tc);

// 2. Работа с переменными.
//     a) Объявить две переменные: admin и name. Записать в name строку «Василий»;
//    b) Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
var admin = '',
    name = 'Василий';

admin = name;
alert(admin);

//     4. *Чему будет равно JS-выражение 1000 + "108"?
alert(1000 + "108");
alert('Будет 1000108 - так как есть оператор +\n1) он может бить как +\n2) Как сочетание в пхп .\n3) Так как в js он 2в1 преоритет за сочитанием')
//     5. *Самостоятельно разобраться с атрибутами тега script (async и defer).