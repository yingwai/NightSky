//Проценты: Распределение работы сотрудников
/*
Сгенерируйте пазлы, которые показывают какой процент от общей работы выполняет тот или иной сотрудник в компании или фирме.
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

struct Worker {
	name: string,
    det: float
}

function randomNameAndNumber() -> Worker {
  let names = "Инне Ане Алине Оле Кате Полине Арине Вере Наде Сони Бьянке Василисе Ванессе Веронике Жанне".split(" ")[rand_int(15)]
  let random_num = float(rand_int(2500) + 1000);
    return new Worker {name: names, det: random_num};
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
    
    let performance = float(rand_int(level * 10000) + 10000);
    let worker = randomNameAndNumber()
    
    let inpt = new Empty{};
    let outp = round(worker.det / performance * 100.0, 2) + "%";
    let wrong = "";
    if (float(round(worker.det / performance * 100.0, 2)) >= 5.0 && rand_bool()) {
    	wrong = string(rand_int(int(round(worker.det / performance * 100.0, 2).split(".")[0]))) + "." + round(worker.det / performance * 100.0, 2).split(".")[1] + "%";
    }
    else {
    	wrong = string(int(round(worker.det / performance * 100.0, 2).split(".")[0]) + rand_int(10) + 1) + "." + round(worker.det / performance * 100.0, 2).split(".")[1] + "%";
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Компания производит " + " " + string(performance) + " " + declOfNum(int(performance), ["деталь", "детали", "деталей"]) + " деталей в год. " + worker.name + " требуется " + whatDo + " какой процент от общей работы она выполнила, если она произвела " + string(worker.det) + " " + declOfNum(int(worker.det), ["деталь", "детали", "деталей"]) + " деталей. Ответ округлить до сотых.";

    if (rand_bool()) {sc="Компания производит " + string(performance) + " " + declOfNum(int(performance), ["деталь", "детали", "деталей"]) + " в год. Требуется определить какой процент от общей работы выполнил работник, если он произвёл " + string(worker.det) + " " + declOfNum(int(worker.det), ["деталь", "детали", "деталей"]) + ". Ответ округлить до сотых."}
    let descr = sc + "\n Пример вывода следующий: 10.51%, 5.00%, 9.04%, 1.10%";

    let expl = "Находим какой процент от общей работы выполнил работник: \n" + string(worker.det) + "/" + string(performance) + "*" + "100%=" + outp.split("%")[0] + "\n Получаем овтет " + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
    }
}
*/
