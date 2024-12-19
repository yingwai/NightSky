//Генератор паззлов на проценты в банке
/*
Создайте генератор паззлов, который будет генерировать количество денег, который человек принес под проценты. И просить посчитать какое количество денег 
он будет получать ежемесячно в течении года, если каждый месяц проценты начисляются на новую сумму, за предыдущий месяц в десятичных дробях.
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

function rand_float(num: int, digit: int) -> float{
    let t = 10;
  for(let i = 1; i < digit; i += 1){
      t *= 10;
    }
  return float(float(rand_int(num * t))/float(t));
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

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let money = round(rand_float(level * 50 - 1, 2) + 1.0, 2);
    let percent = rand_int(19) + 1;
    let sum: float[] = [money, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
    let wrong_sum: float[] = [money, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
    let outp = "";
    let wrong = "";
    
    for (let i = 1; i < 13; i += 1) {
        sum[i] = round(sum[i - 1] + (sum[i - 1] * float(percent) / 100.0), 2);
        wrong_sum[i] = round(wrong_sum[i - 1] + (wrong_sum[i - 1] * float(rand_int(20)) / 100.0), 2);
    	outp += string(i) + " месяц - " + string(round(sum[i] - sum[i - 1], 2)) + "р. \n";
    	wrong += string(i) + " месяц - " + string(round(wrong_sum[i] - wrong_sum[i - 1], 2)) + "р. \n";
    }
  
    let task = "Даны|Представлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " " + string(money) + "р. и " + string(percent) + "%, её попросили " + whatDo + " какое количество денег будет получать клиент ежемесячно в течении года, если каждый месяц проценты начисляются на новую сумму, за предыдущий месяц.";

    if (rand_bool()) {sc="Требуется посчитать какое количество денег будет получать клиент ежемесячно в течении года, если каждый месяц проценты начисляются на новую сумму, за предыдущий месяц. При том что он внёс " + string(money) + "р. под " + string(percent) + "%."}
    let descr = sc + "\n Формат вывода, следующий: N месяц - сумма денежных средств, с сокращением до сотых если необходимо. \n Пример: 5 месяц - 37.9р. \n 6 месяц - 41.31р. \n и т.д.";

    let expl = "Получаем случайное количество денежных средств и процент вклада (" + string(money) + "р. и " + string(percent) + "%), которые необходимо посчитать ежемесячно в течении года: \n";
    
    for (let i = 1; i < 13; i += 1) {
    	expl += "За " + string(i) + " месяц необходимо " + string(sum[i - 1]) + "*" + string(percent) + "/100=" + string(round(sum[i] - sum[i - 1], 2)) + "р. \n";
    }
    
    expl += "Итого к 12 месяцу клиент получит " + string(round(sum[sum.length() - 1] - sum[sum.length() - 2], 2)) + "р.";
    
   	return new Puzzle{
         descr: descr,
         input: new Empty{},
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/