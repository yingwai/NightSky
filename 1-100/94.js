//Количество свеч
/*
Создайте генератор паззлов, который будет генерировать время горения одной свечи и общее время, в которое горели свечи. Человек должен указать количество использованных свечей.
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
    
    let count = rand_int(level * 15) + 2;
    let time = rand_int(18) + 2;
    
    let inpt = new Empty {};
    let outp = string(count);
    let wrong = outp;
    if (rand_bool() && count >= 4) {
    	wrong = string(count - (rand_int(3) + 1));
    }
    else {
    	wrong = string(count + (rand_int(3) + 1));
    }
  
    let task = "Дано|Представлено|Выставлено|Указано|Показано".split("|")[rand_int(5)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " время за которое сгорели все свечи: " + string(time * count) + " " + declOfNum(time, ["минута", "минуты", "минут"]) + ". Её попросили " + whatDo + " количество свеч, при условии что одна свеча горит " + string(time) + " " + declOfNum(time, ["минута", "минуты", "минут"]) + ".";

    if (rand_bool()) {sc="Дано время за которое сгорели все свечи: " + string(time * count) + " " + declOfNum(time, ["минута", "минуты", "минут"]) + ". Требуется рассчитать количество свеч, при условии что одна свеча горит " + string(time) + " " + declOfNum(time, ["минута", "минуты", "минут"]) + "."}
    let descr = sc + "\n Пример вывода следующий: 5";
    
    let expl = "Рассчитаем количество свеч " + string(count * time) + "/" + string(time) + "=" + string(count);
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/