//Генератор ряда дробей
/*
Сделайте генератор паззлов, который создаёт задание в виде ряда дробных чисел, у которых знаменатель возрастает на единицу (1/2, 1/3... 1/10). 
Затем сделайте несложные математические операции с данным рядом. Например, поделите (умножьте) на конкретное число или другие действия. Используйте аналогичные приёмы.
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

function fractionArray(length: int, level: int) -> string[] {
    let fractionArray: string[] = [];
    let num = rand_int(level * 5 - 1) + 1;
    for (let i = 1; i <= length; i += 1) {
        fractionArray.push(string(num) + "/" + string(num + i));
    }
    return fractionArray;
}

function fractionRes(fraction: string[], length: int) -> string[] {
    let res: string[] = [];
    for (let i = 0; i < fraction.length(); i += 1) {
        res.push(round(float(fraction[i].split("/")[0]) / float(fraction[i].split("/")[1]), 2));
    }
    return res;
}

function operateOnArray(arr: string[], operation: string) -> string {
    let result = float(arr[0]);
    if (operation == "+") {
        for (let i = 1; i < arr.length(); i += 1) {
            result += float(arr[i]);
        }
    } 
    else if (operation == "-") {
        for (let i = 1; i < arr.length(); i += 1) {
            result -= float(arr[i]);
        }
    } 
    else if (operation == "*") {
        for (let i = 1; i < arr.length(); i += 1) {
            result *= float(arr[i]);
        }
    } 
    else if (operation == "/") {
        for (let i = 1; i < arr.length(); i += 1) {
            result /= float(arr[i]);
        }
    }
    return round(result, 2);
}


function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let length = rand_int(level - 1) + 1;
    if (length <= 1) {length = 2}
    
    let fraction = fractionArray(length, level)
    let inpt = "";
	for (let i = 0; i < fraction.length(); i += 1) {
        if (i == fraction.length() - 1) {
        	inpt += fraction[i] + ".";
            continue;
        }
        inpt += fraction[i] + ", "
    }
    let operator = "+*-/"[rand_int(4)];
    let res = fractionRes(fraction, length)
    let outp = operateOnArray(res, operator);
    
    let wrong = string(rand_int(level - 1) + 1) + "." + outp.split(".")[1];
    while (wrong == outp) {
    	wrong = string(rand_int(level) ) + "." + outp.split(".")[1];
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд чисел, её попросили " + whatDo + " ответ если ";
    if (rand_bool()) {sc="Дан ряд чисел, требуется определить ответ, при условии что необходимо "}
    if (operator == "+") {
    	sc += "сложить все числа по очереди. Все расчёты необходимо сокрощать до сотых."
    }
    else if (operator == "-") {
    	sc += "минусовать все числа по очереди. Все расчёты необходимо сокрощать до сотых."
    }
    if (operator == "*") {
    	sc += "перемножить все числа по очереди. Все расчёты необходимо сокрощать до сотых."
    }
    if (operator == "/") {
    	sc += "делить все числа по очереди. Все расчёты необходимо сокрощать до сотых."
    }

    let descr = sc + "\n Пример вывода следующий: 7.07, 5.00, 2,06";
    let expl = "Сначала делим числитель на знаменатель у каждой дроби: \n";
    for (let i = 0; i < res.length(); i += 1) {
        expl += string(i + 1) + ". " + fraction[i] + "=" + res[i] + "\n";
    }
    expl += "После посчитав пример получим ответ " + outp
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
