//Генератор: угадай день
/*
Создайте генератор паззлов, который будет генерировать названия 5-6 дней недели в порядке их следования в календаре, при этом 1 день будет пропущен. 
Человеку необходимо будет в ответе указать пропущенный день недели.
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
    
    let count = rand_int(level * 2) + 7
    let void = rand_int(count);
    while (void == count) {rand_int(count)}
    let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    let day = 0;
    let ans = ""
    let inpt = "";
    for (let i = 0; i < count; i += 1) {
        if (day == 7) {day = 0}
        if (i != void) {inpt += days[day] + "\n"}
        else {ans = days[day]}
        day += 1;
    }
    let outp = ans;
    let wrong = days[rand_int(7)];
    while (wrong == outp) {wrong = days[rand_int(7)]}
  
    let task = [["Дан", "Даны", "Дано"], ["Представлен", "Представлены", "Представлено"], ["Выставлен", "Выставлены", "Выставлено"], ["Указан", "Указаны", "Указано"], ["Виден", "Видны", "Видно"], ["Показан", "Показаны", "Показано"], ["Подчёркнут", "Подчёркнуты", "Подчёркнуто"], ["Выделен", "Выделены", "Выделено"]][rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|отыскать|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            declOfNum(count - 1, task) + " " + string(count - 1) + " " + declOfNum(count - 1, ["день", "дня", "дней"]) + ", её попросили " + whatDo + " пропущенный день.";

    if (rand_bool()) {sc=declOfNum(count - 1, ["Дан", "Даны", "Дано"]) + " " + string(count - 1) + " " + declOfNum(count - 1, ["день", "дня", "дней"]) + ". Требуется определить пропущенный день."}
    let descr = sc + "\n Пример вывода, следующий: Вторник";
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
