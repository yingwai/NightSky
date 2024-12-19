//Генератор задач на сокращение пройденного времени
/*
Сделайте генератор задач, в котором на входе будет дано время, за которое человек прошел расстояние и его скорость, нужно будет на выходе получить время, 
за которое он пройдет тот же промежуток времени при увеличении скорости.
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

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let startSpeed = float(1 + rand_int(3));
    let endSpeed = float(int(startSpeed) + rand_int(4) + 1);
    let km = float(rand_int(level * 50) + 1);
    let firstTime = round(km / startSpeed * 60.0, 0);
    let endTime = round(km / endSpeed * 60.0, 0);
    
    let inpt = new Empty {};
    let outp = "За " + string(endTime) + " " + declOfNum(int(endTime), ["минуту", "минуты", "минут"]);
    let wrong = outp;
    while (wrong == outp) {
        if (rand_bool() && endTime >= 150.0) {
            let temp = endTime - float(rand_int(100) + 1);
        	wrong = "За " + string(temp) + " " + declOfNum(int(temp), ["минуту", "минуты", "минут"]);
            continue;
        }
        let temp = endTime + float(rand_int(100) + 1);
    	wrong = "За " + string(temp) + " " + declOfNum(int(temp), ["минуту", "минуты", "минут"]);
    }
  
    let task = "Дано|Представлено|Выставлено|Указано|Видно|Показано|Подчёркнуто|Выделено".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " время " + string(firstTime) + " " + declOfNum(int(firstTime), ["минут", "минуты", "минут"]) + " которое человек прошёл со скоростью " + string(startSpeed) + " км/ч, её попросили " + whatDo + " за сколько минут человек пройдёт это же расстояние, если его скорость изменится с " + string(startSpeed) + " км/ч на " + string(endSpeed) + " км/ч. Ответ необходимо округлить до целого числа.";

    if (rand_bool()) {sc="Дано время " + string(firstTime) + " " + declOfNum(int(firstTime), ["минут", "минуты", "минут"]) + " которое человек прошёл со скоростью " + string(startSpeed) + " км/ч. Требуется определить за сколько минут человек пройдёт это же расстояние, если его скорость изменится с " + string(startSpeed) + " км/ч на " + string(endSpeed) + " км/ч. Ответ необходимо округлить до целого числа."}
    let descr = sc + "\n Пример вывода следующий: \"За 2640 минут\", \"За 8244 минуты\", \"За 11461 минуту\"";

    let expl = "Сначала найдём сколько прошёл человек за это время (" + string(firstTime) + "/60)*" + string(startSpeed)  + "=" + string(km) +
        		"\nОпределим за сколько минут человек пройдёт " + string(km) + " км с изменённой скоростью " + string(km) + "/" + string(endSpeed) + "*60=" + string(endTime) + 
        		"\nСледовательно ответ: " + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/