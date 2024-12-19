//Генератор: окружность
/*
Создайте генератор, который будет давать длину окружности в виде смешанной дроби, а Вам необходимо найти радиус данной геометрической фигуры.
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

function generateMixedFraction(level: int) -> string {
    let whole = string(rand_int(level + 10) + 1);
    let numerator = string(rand_int(level * 5) + 10);
    let denominator = string(rand_int(level * 5) + 10);
    while (int(numerator) >= int(denominator)) {
        numerator = string(rand_int(level * 5) + 10);
        denominator = string(rand_int(level * 5) + 10);
    }
    return whole + " " + numerator + "/" + denominator;
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

function getRadius(circumference: string) -> string {
    let mixed = circumference.split(" ");
    let whole = float(mixed[0]);
    let frac = mixed[1].split("/");
    let num = float(frac[0]);
    let den = float(frac[1]);
    let fraction = num/den;
    let total = whole + fraction;
    let str = string(total / (2.0 * 3.14));
    if (str == "NaN") {
    	str = "Радиус слишком маленький."
    }
    else {
    	str = round(float(str), 2)
    }
    return str;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let inpt = generateMixedFraction(level);
    let outp = getRadius(inpt);
    let wrong = outp;
    while (wrong == outp) {
    	let temp = generateMixedFraction(level);
        wrong = getRadius(temp);
    }
  
    let task = "Дана|Представлена|Выставлена|Указана|Видна|Показана|Подчёркнута|Выделена".split("|")[rand_int(8)];
let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];
    
let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
        " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|задание".split("|")[rand_int(5)] + ". " + 
        task + " длина окружности  в виде смешанной дроби. Её попросили " + whatDo + " радиус по формуле с использование числа π = 3.14. Ответ необходимо округлять до сотых.";
  
if (rand_bool()) {sc="Дана длина окружности  в виде смешанной дроби, требуется определить радиус по формуле с использование числа π = 3.14. Ответ необходимо округлять до сотых."}
let descr = sc + "\n Пример вывода следующий: 1.89";
 
let expl = "Преобразуем длину в обычную дробь (" + inpt.split(" ")[0] + "*" + inpt.split(" ")[1].split("/")[1] + "+" + inpt.split(" ")[1].split("/")[0] + ")/" + inpt.split(" ")[1].split("/")[1] + "=" + 
    		string(int(inpt.split(" ")[0]) * int(inpt.split(" ")[1].split("/")[1]) + int(inpt.split(" ")[1].split("/")[0])) + "/" + inpt.split(" ")[1].split("/")[1] + 
    		"\n Находим радиус (" + string(int(inpt.split(" ")[0]) * int(inpt.split(" ")[1].split("/")[1]) + int(inpt.split(" ")[1].split("/")[0])) + "/" + inpt.split(" ")[1].split("/")[1] + ")/(2*3.14)=" + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
