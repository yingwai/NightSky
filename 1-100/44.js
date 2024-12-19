//Сериал 
/*
Сделайте генератор, который будет показывать, сколько всего серий в каком-нибудь сериале. Человеку нужно посчитать, сколько в процентном значении занимает 1 серия из всех в сериале. 
Например, в сериале 10 серий. Значит, 1 серия будет составлять 10% от всего сериала. Минимальное количество серий в сериале - 5. 
Если ответ получится с остатком, его необходимо округлить вверх до десятых.
*/

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: Empty,
    output: string,
    wrong_output: string,
    explanation: string
}

function round(p: float, after_dot: int) -> float {  
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
    
    return float(sign + string(int_p / coeff) + "." + after_string);
}

function declOfNum(n: int, text_forms: string[]) -> string {
  n = n % 100;

  let n1 = n % 10;

  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }

  return text_forms[2];
}

function rand_float(num: int, digit: int) -> float{
    let t = 10;
  for(let i = 1; i < digit; i += 1){
      t *= 10;
    }
  return float(float(rand_int(num * t))/float(t));
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let season = float(rand_int(level * 3) + 1);
    if (season <= 4.0) {season = 5.0};
    let serie = float(rand_int(int(season)) + 1);
    while (season == serie) {
    	serie = float(rand_int(int(season)) + 1);
    }
    let inpt = new Empty {};
    let outp = string(round(serie/season * 100.0, 1)) + "%";
    let wrong = string(round((serie + float(rand_int(5)))/(season + float(rand_int(10) + 1)) * 100.0, 1)) + "%";
    while (outp == wrong) {
    	wrong = string(round((serie + float(rand_int(5)))/(season + float(rand_int(10) + 1)) * 100.0, 1)) + "%";
    }
    
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " сериал в котором " + string(season) + " " + declOfNum(int(season), ["серия", "серии", "серий"]) + ", её попросили " + whatDo + " сколько в процентном значении занимает " + string(serie) + " " +  declOfNum(int(serie), ["серия", "серии", "серий"])+ " из всех в сериале. Ответ округляем до десятых при необходимости.";

    if (rand_bool()) {sc="Дан сериал в котором " + string(season) + " " + declOfNum(int(season), ["серия", "серии", "серий"]) + ". Требуется определить сколько в процентном значении занимает " + string(serie) + " " +  declOfNum(int(serie), ["серия", "серии", "серий"])+ " из всех в сериале. Ответ округляем до десятых при необходимости."}
    let descr = sc + "\n Пример вывода следующий: 74.1%, 40%, 44.4%, 75%";

    let expl = "Определяем сколько в процентном значении занимает " + string(serie) + " " +  declOfNum(int(serie), ["серия", "серии", "серий"])+ " из всех в сериале: \n" +
        		string(serie) + "/" + string(season) + "*100=" + string(round(serie/season * 100.0, 1));
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
