//Аренда квартиры
/*
Сделайте генератор паззлов, который генерирует на сколько месяцев человек снимает квартиру и сколько денег он платит за первый месяц аренды. 
Но сумма денег за каждый последующий месяц аренды растет на 10%. Генератор просит определить сколько всего денег заплатит человек за все время аренды квартиры.
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

function roundStr(p: float, after_dot: int) -> string {  
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

function declOfNum(n: int, text_forms: string[]) -> string {
  n = n % 100;

  let n1 = n % 10;

  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }

  return text_forms[2];
}

function sumArray(arr: float[]) -> string {
  let total = 0.0;
  for (let i = 0; i < arr.length(); i += 1) {
    total += arr[i];
  }
  return roundStr(total, 2);
}


function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let money = round(rand_float(level * 50 - 1, 2) + 500.0, 2);
    let percent = 10;
    let mounth = rand_int(level * 2) + 3;
    let sum: float[] = [money];
    let wrong_sum: float[] = [money];
    
    for (let i = 1; i < mounth; i += 1) {
            sum.push(round(sum[i - 1] + (sum[i - 1] * float(percent) / 100.0), 2));
            wrong_sum.push(round(wrong_sum[i - 1] + (wrong_sum[i - 1] * float(rand_int(20)) / 100.0), 2));
    }
    
    let outp = "За " + string(mounth) + " " + declOfNum(mounth, ["месяц", "месяца", "месяцев"]) + " арендатор заплатил " + sumArray(sum) + "р.";
    let wrong = "За " + string(mounth) + " " + declOfNum(mounth, ["месяц", "месяца", "месяцев"]) + " арендатор заплатил " + sumArray(wrong_sum) + "р.";
  
    let task = "Даны|Представлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " " + string(money) + "р. аренды за первый месяц, её попросили " + whatDo + " какое количество денег заплатит арендатор за все " + string(mounth) + " " + declOfNum(mounth, ["месяц", "месяца", "месяцев"]) + " аренды, если каждый месяц оплата увеличивается на " + string(percent) + "%. Расчёты необходимо округлять до сотых.";

    if (rand_bool()) {sc="Требуется посчитать какое количество денег заплатит арендатор за все " + string(mounth) + " " + declOfNum(mounth, ["месяц", "месяца", "месяцев"]) + " аренды, если каждый месяц оплата увеличивается на " + string(percent) + "%. При том что за первый месяц арендатор заплатил " + string(money) + "р. Расчёты необходимо округлять до сотых."}
    let descr = sc + "\n Формат вывода, следующий: \"За 6 месяцев арендатор заплатил 3934.08р.\", \"За 5 месяцев арендатор заплатил 3098.01р.\", \"За 3 месяца арендатор заплатил 590.00р.\" и т.д.";

    let expl = "Получаем сумму оплаты за первый месяц и процент повышение стоимости (" + string(money) + "р. и " + string(percent) + "%). Сначала посчитаем сколько платил арендатор за каждые " + string(mounth) + " " + declOfNum(mounth, ["месяц", "месяца", "месяцев"]) + ": \n";
    
    expl += "За " + string(1) + " месяц необходимо заплатить " + string(money) + "р. \n";
    for (let i = 1; i < mounth; i += 1) {
    	expl += "За " + string(i + 1) + " месяц необходимо заплатить " + string(sum[i - 1]) + "+(" + string(sum[i - 1]) + "*" + string(percent) + "/100)=" + string(sum[i]) + "р. \n";
    }
    
    expl += "Найдём сумму за все время аренды ";
    for (let i = 1; i < mounth; i += 1) {
        if (i == mounth - 1) {
        	expl += string(sum[i - 1]) + "+" + string(sum[i]) + "=" + sumArray(sum);
            continue;
        }
    	expl += string(sum[i - 1]) + "+"
    }
    
   	return new Puzzle{
         descr: descr,
         input: new Empty{},
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
