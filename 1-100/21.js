//Сколько времени в разных часовых поясах одна и та же дата? 
/*
Создайте генератор задач следующего вида:
Генерируется время двух разных часовых поясов. Решающий должен определить, сколько времени в сутки и в одном, и в другом одна и та же дата.
Например, в одном поясе 14:00, а в другом 20:00. Одинаковая дата была уже 14 часов с момента, когда в первом поясе начались следующите сутки. Она будет одинаковой ещё 4 часа, 
до момента пока изменится дата во втором поясе. То есть ответ - 18 часов. Не используйте нигде конкретно этот пример.
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

function createAndSolve(level: int) -> int[] {
  let difference = rand_int(level) + 1;
  let firstVariable = rand_int(23);
  let secondVariable = firstVariable + difference;
  while (secondVariable >= 24) {
   	firstVariable -= 1;
    secondVariable = firstVariable + difference;
  }
    
  let time1 = firstVariable;
  let time2 = secondVariable;
  let cor = 0;
  while (time2 < 24) {
    time2 += 1;
    cor += 1;
  }
  let answer = time1 + cor;
  return [firstVariable, secondVariable, difference, time1, time2, cor, answer];
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
    
    let time = createAndSolve(level)
        let inpt = new Empty{};
    let outp = string(time[6]) + ":00";
    let wrong = string(time[0] + rand_int(time[5])) + ":00";
    while (wrong == outp && int(wrong.split(":")[0]) <= time[0]) {
    	string(time[0] + rand_int(time[5])) + ":00";
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " 2 разных часовых пояса: в одном поясе " + string(time[0]) + ":00, а в другом " + string(time[1]) + ":00. Одинаковая дата была уже " + string(time[0]) + " " + declOfNum(time[0], ["час", "часа", "часов"]) + " с момента, когда в первом поясе начались следующие сутки, её попросили " 
        	+ whatDo + " какое время будет в первом поясе, когда во втором поясе изменится дата, если она изменится через " + string(time[5]) + " " + declOfNum(time[5], ["час", "часа", "часов"]) + ".";

    if (rand_bool()) {sc="Требуется определить какое время будет в первом поясе, когда во втором поясе изменится дата, если она изменится через " + string(time[5]) + " " + declOfNum(time[5], ["час", "часа", "часов"]) + ". При условии что в одном поясе " + string(time[0]) + ":00, а в другом " + string(time[1]) + ":00. Одинаковая дата была уже " + string(time[0]) + " " + declOfNum(time[0], ["час", "часа", "часов"]) + " с момента, когда в первом поясе начались следующие сутки."}
    let descr = sc + "\n Пример формата вывода следующий: 21:00, 18:00, 5:00.";

    let expl = "Добавляем к имеющему времени, время через которое изменится дата во втором поясе " + string(time[0]) + "+" + string(time[5]) + "=" + string(time[0] + time[5]) + ". Форматируем ответ в нужный формат " + outp + ".";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/