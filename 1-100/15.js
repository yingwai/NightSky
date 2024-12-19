//Дневник температуры
/*
Сделайте генератор, выводящий температуру тела человека за 10 дней (наподобие: день 1 - 36,5; день 2 - и т.д.). Человек должен сказать, 
сколько максимум дней подряд температура была выше 37 градусов.
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
    
    let count = rand_int(level * 2 - 1) + 1;
    if (count <= 9) {count = 10}
    if (count >= 32) {count = 31}
    
    let inpt = "";
    let amount:int[] = [];
    let p = 0
    for (let i = 0; i < count; i += 1) {
        let fl = rand_float(41, 1);
        while (fl <= 35.0) {
            fl = rand_float(41, 1);
        }
        
        if (fl > 37.0) {
            if (amount.length() != 0) {
            	amount[p] += 1
            }
            else {
            	amount.push(1)
            }
        }
        else if (fl <= 37.0) {
            if (amount.length() != 0) {
            	amount.push(0)
            	p += 1
            }
        }
        
        inpt += "День " + string(i + 1) + " - " + string(fl) + "°C \n";
    }
    
    amount.sort()
    let outp = string(amount[amount.length() - 1]) + " " + declOfNum(amount[amount.length() - 1], ["день", "дня", "дней"]) + " подряд.";
    
    let incor = rand_int(amount[amount.length() - 1] - 1) + 1 + rand_int(3);
    while (amount[amount.length() - 1] == incor) {
    	incor = rand_int(count - 1) + 1;
    }
    let wrong = string(incor) + " " + declOfNum(incor, ["день", "дня", "дней"]) + " подряд.";
    
  
    let task = [["Дан", "Даны", "Даны"], ["Представлен", "Представлены", "Представлены"], ["Выставлен", "Выставлены", "Выставлены"], ["Указан", "Указаны", "Указаны"], ["Виден", "Видны", "Видны"], ["Показан", "Показаны", "Показаны"], ["Подчёркнут", "Подчёркнуты", "Подчёркнуты"], ["Выделен", "Выделены", "Выделены"]][rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            declOfNum(count, task) + " " + string(count) + " " + declOfNum(count, ["день", "дня", "дней"]) + ", её попросили " + whatDo + " сколько максимум дней подряд температура была выше 37 градусов.";

    if (rand_bool()) {sc="Требуется определить сколько максимум дней подряд температура была выше 37 градусов."}
    let descr = sc + "\n Формат вывода, следующий: количество дней. \n Пример: 2 дня подряд.";
    
    let expl = "";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/