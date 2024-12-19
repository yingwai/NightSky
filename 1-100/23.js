//Смешанная дробь
/*
Сделайте генератор паззлов, который на входе показывает смешанную дробь. Требуется представить эту дробь в виде неправильной дроби (например, 3 целых 4/5= (3*5+4)/5=19/5
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

function createRandomFraction(level: int) -> int[] {
  let celoe = rand_int(level * 5 - 1) + 1;
  let numerator = rand_int(level * 5 - 1) + 2;
  let denominator = rand_int(level * 5 - 1) + 1;
    while (denominator >= numerator) {
    	denominator = rand_int(level * 5 - 1) + 1;
    }
    
  return [celoe, numerator, denominator];
}

function declOfNum(n: int, text_forms: string[]) -> string {
  n = n % 100;

  let n1 = n % 10;

  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }

  return text_forms[2];
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let num = createRandomFraction(level)
    let inpt = string(num[0]) + " " + string(num[1]) + "/" + string(num[2]);
    let outp = string(num[0] * num[2] + num[1]) + "/" + string(num[2]);
    let wrong = "";
    if (num[0] * num[2] + num[1] >= level * 2 && rand_bool()) {
    	wrong = string(num[0] * num[2] + num[1] - (rand_int(level * 2) + 1)) + "/" + string(num[2]);
    }
    else {
    	wrong = string(num[0] * num[2] + num[1] + (rand_int(level * 2) + 1)) + "/" + string(num[2]);
    }
  
    let task = "Дана|Представлена|Выставлена|Указана|Видна|Показана|Подчёркнута|Выделена".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "выразить|пересчитать|перевести|определить|представить".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " смешанная дробь, её попросили " + whatDo + " эту дробь в виде неправильной дроби без сокращения.";

    if (rand_bool()) {sc="Требуется представить смешанную дробь в виде неправильной дроби без сокращения."}
    let descr = sc + "\n Формат вывода, следующий: неправильная дробь. \n Пример: 14/2";

    let expl = "Получаем случайную смешанную дробь " + inpt + ". \n Считаем неправильную дробь следующим образом " + string(num[0]) + " " + declOfNum(num[0], ["целое", "целых", "целых"]) + " " + string(num[1]) + "/" + string(num[2]) + "=(" + string(num[0]) +"*" + string(num[2]) +"+" + string(num[1]) +")/" + string(num[2]) +"=" + outp + "." ;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
