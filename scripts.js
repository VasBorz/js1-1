// 1. Дан код:
var a = 1, b = 1, c, d;

c = ++a; alert(c);           // 2 потомучто изночально 1 и ми увеличуем на 1 через преинкремент = увеличело перед виводом
d = b++; alert(d);           // 1 потомучто изночально 1 и ми увеличуем на 1 через постикримент = увеличело после вивода
c = (2+ ++a); alert(c);      // 5 ми добавляемо 2 к а которое уже 3 после c = ++a и сейчас тоже его инкрементируем
d = (2+ b++); alert(d);      // 4 точно такое самое в предедущем но здесь ми увеличели но не вивели
alert(a);                    // 3 1 + 2 раза инкремент
alert(b);                    // 3 1 + 2 раза инкремент
// Почему код даёт именно такие результаты?


//2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
alert(x); // будет равно 5 = ми а умножили на два и записали в переменную и потом доплюсовали к 1

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
var a = Math.round(Math.random()) * 100 - 1,
    b = Math.round(Math.random()) * 50 - 1;
document.write(a +  " first number<br>" + b + " second number<br>");
//если a и b положительные, вывести их разность;
if(a >= 0 && b >= 0){
    var result = (a - b) + " minus <br>";
    document.write(result);
// если а и b отрицательные, вывести их произведение;
}else if( a < 0 && b < 0){
    var result = (a / b) + " divide <br>";
    document.write(result);
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
}else if((a >= 0 && b <= 0) || (a <= 0 && b >= 0)){
    var result = (a + b) + " sum <br>";
    document.write(result);
}

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
var i = 0;

switch (i <= 15) {
    case (i === 0):
       document.write(i + "<br>");
        i++;
    case (i === 1):
        document.write(i + "<br>");
        i++;
    case (i === 2):
        document.write(i + "<br>");
        i++;
    case (i === 3):
        document.write(i + "<br>");
        i++;
    case (i === 4):
        document.write(i + "<br>");
        i++;
    case (i === 5):
        document.write(i + "<br>");
        i++;
}

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function sum(arg1, arg2) {
    return arg1 + arg2;
}
function divide(arg1, arg2) {
    return arg1 / arg2;
}
function minus(arg1, arg2) {
    return arg1 - arg2;
}
function multiply (arg1, arg2) {
    return arg1 * arg2;
}

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
function mathOperation(arg1, arg2, operation){
    switch (operation !== 'undefined') {
        case (operation === "+"):
            return sum(arg1, arg2);
        case (operation === "-"):
            return minus(arg1, arg2);
        case (operation === "/"):
            return divide(arg1, arg2);
        case (operation === "*"):
            return multiply(arg1, arg2);
        default:
            return 'operation undefined, setup please';
    }
}
document.write(mathOperation(20, 30, ));