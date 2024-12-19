//Генератор задач на поиск верного процента
/*
Сделайте генератор задач, в котором решающему предложено избыточное количество информации. Он должен найти необходимую и с её помощью посчитать ответ.
Например:
У Пети было 36 желтых яблок, 15 шоколадок, он сегодня весь день играл в футбол, забил 2 гола. После футбола съел 15 желтых яблок и 2 шоколадки. Какой процент шоколадок он съел?
Можете делать сложнее и разнообразнее. Использовать пример с яблоками не обязательно.
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
    
    let appls = float(rand_int(level * 5) + 5);
    let ost_a = float(rand_int(int(appls)) + 1);
    let chocolate = float(rand_int(level * 5) + 5);
    let ost_c = float(rand_int(int(chocolate)) + 1);
    let work = rand_int(10) + 1;
    let choose = "шоколадок|яблок".split("|")[rand_int(2)];
    
    let inpt = new Empty {};
    let outp = "";
    let wrong = "";
    if (choose == "шоколадок") {
    	outp = string(round(ost_c/chocolate * 100.0, 1)) + "%";
        wrong = string(round((ost_c + float(rand_int(5)))/(chocolate + float(rand_int(10) + 1)) * 100.0, 1)) + "%";
        while (outp == wrong) {
            wrong = string(round((ost_c + float(rand_int(5)))/(chocolate + float(rand_int(10) + 1)) * 100.0, 1)) + "%";
    	}
    }
    else {
    	outp = string(round(ost_a/appls * 100.0, 1)) + "%";    
        wrong = string(round((ost_a + float(rand_int(5)))/(appls + float(rand_int(10) + 1)) * 100.0, 1)) + "%";
        while (outp == wrong) {
            wrong = string(round((ost_c + float(rand_int(5)))/(chocolate + float(rand_int(10) + 1)) * 100.0, 1)) + "%";
    	}
    }
    
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "была в школе|была на факультативе|была у репетитора|была на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислила|рассчитала|посчитала".split("|")[rand_int(3)];
    let sc = "У " + "Инны Ани Алины Оли Кати Полины Арины Веры Нади Сони Бьянки Василисы Ванессы Вероники Жанны".split(" ")[rand_int(15)] +
            " было " + string(appls) + " " + [declOfNum(int(appls), ["красное ", "красных ", "красных "]), declOfNum(int(appls), ["жёлтое ", "жёлтых ", "жёлтых "]), declOfNum(int(appls), ["зелёное ", "зелёных ", "зелёных "])][rand_int(3)] + declOfNum(int(appls), ["яблоко", "яблока", "яблок"]) + ", " + string(chocolate) + " " + 
    		declOfNum(int(chocolate), ["шоколадка", "шоколадки", "шоколадок"]) + ", она сегодня весь день " + wher + ", " + whatDo + " " + string(work) + " " + declOfNum(work, ["задачу", "задачи", "задач"]) + ". " +
    		"После учёбы она съела " + string(ost_a) + " " + declOfNum(int(ost_a), ["яблоко", "яблока", "яблок"]) + " и " + string(ost_c) + " " + declOfNum(int(ost_c), ["шоколадку", "шоколадки", "шоколадок"]) +". Какой процент " + choose + " она съела? Решение необходимо округлять до одного знака после точки при необходимости.";

    let descr = sc + "\n Пример вывода следующий: 74.1%, 40%, 44.4%, 75%";

    let expl = "Определяем какой процент " + choose + " съели: ";
    if (choose == "шоколадок") {
    	expl += string(ost_c) + "/" + string(chocolate) + "*100=" + outp;
    }
    else {
    	expl += string(ost_a) + "/" + string(appls) + "*100=" + outp;   
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
