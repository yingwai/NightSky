//Перевод валют
/*
Создайте генератор паззлов, в котором выполняющему на входе предлагается таблица курса валют. Нужно перевести числа, приведенные в рублях, в валюты в таблице.
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

function rand_float(num: int, digit: int) -> float{
    let t = 10;
  for(let i = 1; i < digit; i += 1){
      t *= 10;
    }
  return float(float(rand_int(num * t))/float(t));
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
    
    let rub = float(rand_int(level * 2500 - 500) + 500);
    let curs = [rand_float(level * 5, 2), rand_float(level * 5, 2), rand_float(level * 5, 2)];
    let inpt = "1. BYN - " + string(curs[0]) + "\n 2. EUR - " + string(curs[1]) + "\n 3. USD - " + string(curs[2]);
    let outp = "1. " + round(rub * curs[0] / 100.0, 2) + "р. \n2. " + round(rub * curs[1] / 100.0, 2) + "€ \n3. " + round(rub * curs[2] / 100.0, 2) + "$";
    let wrong = outp;
    while (wrong == outp) {
        if (rand_bool()) {
        	wrong = "1. " + round((rub + float(rand_int(100) + 1)) * curs[0] / 100.0, 2) + "р. \n2. " + round((rub + float(rand_int(100) + 1)) * curs[1] / 100.0, 2) + "€ \n3. " + round((rub + float(rand_int(100) + 1)) * curs[2] / 100.0, 2) + "$";
        }
        else {
        	wrong = "1. " + round((rub - float(rand_int(100) + 1)) * curs[0] / 100.0, 2) + "р. \n2. " + round((rub - float(rand_int(100) + 1)) * curs[1] / 100.0, 2) + "€ \n3. " + round((rub - float(rand_int(100) + 1)) * curs[2] / 100.0, 2) + "$";
        }
    }
  
    let task = "Дана|Представлена|Выставлена|Указана|Видна|Показана|Подчёркнута|Выделена".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " таблица курса валют к 100₽. Её попросили " + whatDo + " " + string(rub) + "₽, в валюты в таблице. Сумма денежных средств округляется до сотых.";

    if (rand_bool()) {sc="Дана таблица курса валют к 100₽. Требуется определить " + string(rub) + "₽, в валюты в таблице. Сумма денежных средств округляется до сотых.";}
    let descr = sc + "\n Пример вывода следующий: \n1. 238.54р. \n2. 310.59€ \n3. 264.46$";

    let expl = "Рассчитываем BYN " + string(rub) + "*" + string(curs[0]) + "/100=" + round(rub * curs[0] / 100.0, 2) + 
        		"\nРассчитываем EUR " + string(rub) + "*" + string(curs[1]) + "/100=" + round(rub * curs[1] / 100.0, 2) +  
        		"\nРассчитываем USD " + string(rub) + "*" + string(curs[2]) + "/100=" + round(rub * curs[2] / 100.0, 2) + 
        		"\nСледовательно ответ: \n" + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/