//Генератор чисел с операцией
/*
Создайте генератор, выводящий на экран трехзначное положительное или отрицательное число. Человек должен указать, на сколько число надо уменьшить или увеличить, чтобы поменять его знак. 
Например, число 30. Сколько нужно отнять от этого числа, чтобы получилось отрицательное число -30. Не используйте этот примерю.
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

function outputSignChangeAmount(num: string) -> string {
    let str = "";
    if (num[0] == "-") {
    	let temp = string(int(num) * 2);
        str = temp.split("-")[1];
    }
    else {
    	str = string(int(num) * 2);
    }
    
    return str;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let operator = "- "[rand_int(2)];
    let inpt = operator + string(rand_int(level * 45 - 1) + 100);
    let outp = outputSignChangeAmount(inpt);
    let wrong = "";
    if (rand_bool()) {
    	wrong = string(int(outp) + rand_int(50) + 1);
    }
    else {
    	wrong = string(int(outp) - rand_int(50) + 1);
    }
  
    let task = "Дано|Представлено|Выставлено|Указано|Видно|Показано|Подчёркнуто|Выделено".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " число, её попросили " + whatDo + ", на сколько число надо ";
	if (rand_bool()) {sc="Дано число, требуется определить, на сколько число надо "}
    if (operator == "-") {
    	sc += "увеличить, чтобы поменять знак этого числа."
    }
    else {
    	sc += "уменьшить, чтобы поменять знак этого числа."
    }

    let descr = sc + "\n Пример вывода следующий: 320, 294, 358";

    let expl = "Находим число которое нужно ";
    if (operator == "-") {
    	expl += "прибавить, чтобы изменить знак этого числа "  + inpt.split("-")[1] + "*2=" + string(int(inpt.split("-")[1]) * 2) +
            	"\n Проверяем: " + inpt + "+" + outp + "=" + string(int(inpt) + int(outp));
    }
    else {
    	expl += "отнять, чтобы изменить знак этого числа " + inpt + "*2=" + string(int(inpt) * 2) +
            	"\n Проверяем: " + inpt + "-" + outp + "=" + string(int(inpt) - int(outp));
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
