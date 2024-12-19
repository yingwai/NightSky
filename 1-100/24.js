//генератор дроби из десятичной
/*
Сделайте генератор примеров, который переводит дроби в десятичные числа.
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

function createRandomFraction(level: int) -> float[] {
  let numerator = float(rand_int(level * 5 - 1) + 1);
  let denominator = float(rand_int(level * 5 - 1) + 1);
    
  return [numerator, denominator];
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let num = createRandomFraction(level)
    let inpt = string(num[0]) + "/" + string(num[1]);
    let outp = round(num[0] / num[1], 2);
    let wrong = "";
    if (float(outp) >= 6.0 && rand_bool()) {
    	wrong = round(float(num[0] / num[1]) - float(rand_int(5) + 1), 2)
    }
    else {
    	wrong = round(float(num[0] / num[1]) + float(rand_int(5) + 1), 2)
    }
  
    let task = "Дана|Представлена|Выставлена|Указана|Видна|Показана|Подчёркнута|Выделена".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "выразить|перерассчитать|перевести|определить".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " дробь, её попросили " + whatDo + " в десятичное число с скоращением до сотых.";

    if (rand_bool()) {sc="Дана дробь, требуется перевести в десятичное число с скоращением до сотых."}
    let descr = sc + "\n Формат вывода, следующий: десятичное число. \n Пример: 0.07, 0.93, 1.26, 2.00.";

    let expl = "Получаем случайную дробь " + inpt + ". \n Поделив числитель на знаменатель и сократив до сотых получаем " + outp + ".";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
