//деление обратно умножению - стадион
/*
Сделайте генератор паззлов, который рисует ряд стадиона с сиденьями. Спросить сколько минимум таких же рядов необходимо, чтобы разместить Х болельщиков. 
Ряд можно нарисовать прямоугольником, в котором сиденья будут квадратами.
*/

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: Canvas,
    output: string,
    wrong_output: string,
    explanation: string
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
    
    let row = level + rand_int(10); 
    let inpt = new Canvas {};
    inpt.init(row * 50, 50, rgba(110, 110, 110, 1.0));
    
    let indentX = 5;
    for (let i = 0; i < row; i += 1) {
    	inpt.fill_rect(indentX, 5, 40, 40, rgb(222, 51, 51), rgb(222, 51, 51), 2);
        indentX += 50
    }
    
        
    let people = rand_int(level * 5) + 5;
    
    let task = "Дан|Представлен|Выставлен|Указан|Показан|Подчёркнут|Выделен".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд с определённым количеством мест. Её попросили " + whatDo + " сколько таких же рядов необходимо, чтобы разместить " + string(people) + " " + declOfNum(people, ["болельщик", "болельщика", "болельщиков"]) + ".";

    if (rand_bool()) {sc="Дан ряд с определённым количеством мест. Требуется определить сколько таких же рядов необходимо, чтобы разместить " + string(people) + " " + declOfNum(people, ["болельщик", "болельщика", "болельщиков"]) + "."}
    let descr = sc + "\n Пример вывода следующий: \"1 ряд\", \"2 ряда\", \"5 рядов\"";
    
    let expl = "Рассчитаем сколько рядов необходимо: \n";
    
    let n = 0;
    for (let i = 1; i <= people; i += 1) {
        if (row * i >= people) {
            expl += string(row) + "*" + string(i) + " = " + string(row * i) + "\n Где " + string(row) + " - количество мест в ряду, " + string(i) + " - количество рядов необходимо для посадки всех болельщиков. \n";
        	n = i;
            break;
        }
    }
    
    
    let outp = string(n) + declOfNum(n, [" ряд", " ряда", " рядов"]);
    let wrong = outp;
    while (wrong == outp) {
        let temp = rand_int(5) + 1
    	wrong = string(temp) + declOfNum(temp, [" ряд", " ряда", " рядов"]);
    }
    
    expl += "Следовательно необходим(о) " + outp
        
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/