//Генератор выражений с более сложными действиями
/*
Создайте генератор заданий, который будет давать пользователю пример с двумя действиями, одно из которых сложение/вычитание, а второе - умножение/деление. 
Пользователь должен будет написать или выбрать число, которое представлено данным примером. Обязательно делайте так, чтобы ответ был целым числом, без дробей.
*/

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: string,
    output: string,
    wrong_output: string,
    explanation: string
}

function round(p: float, after_dot: int) -> string {  
    let sign = "";
    if (p < 0.0) {
        sign = "-";
        p = -p;
    }

    let coeff = 1;
    for (let i = 0; i < after_dot; i += 1) {
        coeff *= 10;
    }
    
    p *= float(coeff);
    let int_p = int(p + 0.5);
  
  let after_string = string(int_p % coeff);
    for (let i = 0; after_string.length() < after_dot; i += 1) {
        after_string = "0" + after_string;
    }
    
    return sign + string(int_p / coeff) + "." + after_string;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let num = [float(rand_int(level * 3) + 1), float(rand_int(level * 3) + 1), float(rand_int(level * 3) + 1)];
    let ans = 0.0;
    let operator = "+-/*"[rand_int(4)];
    let inpt = string(num[0]) + " " + operator + " " + string(num[1]);
    if (operator == "*") {
    	ans = num[0] * num[1];
        let op = "+-"[rand_int(2)];
        inpt += " " + op + " " + string(num[2])
        if (op == "+") {
        	ans += num[2]
        }
        else {
        	ans -= num[2]
        }
    }
    else if (operator == "/") {
    	ans = num[0] / num[1];
        let op = "+-"[rand_int(2)];
        inpt += " " + op + " " + string(num[2])
        if (op == "+") {
        	ans += num[2]
        }
        else {
        	ans -= num[2]
        }
    }
    else if (operator == "+") {
        let op = "/*"[rand_int(2)];
        inpt += " " + op + " " + string(num[2])
        if (op == "/") {
        	ans = num[1] / num[2] + num[0];
        }
        else {
        	ans = num[1] * num[2] + num[0];
        }
    }
    else if (operator == "-") {
    	let op = "/*"[rand_int(2)];
        inpt += " " + op + " " + string(num[2])
        if (op == "/") {
        	ans = num[0] - (num[1] / num[2]);
        }
        else {
        	ans = num[0] - (num[1] * num[2]);
        }
    }
    
    let outp = string(ans);
    let wrong = "";
    if (rand_bool()) {
    	wrong = string(int(ans + float(rand_int(10) + 1)));
    }
    else {
    	wrong = string(int(ans - float(rand_int(10) + 1)));
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " пример, её попросили " + whatDo + " ответ и округлить его до целых.";

    if (rand_bool()) {sc="Дан пример, требуется определить ответ и округлить его до целых."}
    let descr = sc + "\n Пример вывода следующий: -5, 11, 20";

    let expl = "Решаем пример по математическим правилам: сначала идёт умножение или деление, а после сложение или вычитание. \n" + inpt + "=" + outp;
    for (let i = 0; i < outp.length(); i += 1) {
        if (outp[i] == ".") {
            outp = string(float(round(ans, 0)));
            expl += "\n Округляем ответ до целого числа и получаем ответ " + outp;
        	break;
        }
    }
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
