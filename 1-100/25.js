//Онлайн-магазин
/*
Сделайте генератор, который будет выводить на экран число пользователей, совершивших покупку в интернет-магазине за 1 будний день. Человеку нужно посчитать, 
сколько покупок делается каждую неделю, если по выходных покупки совершаются в 3 раза чаще, чем по будним дням.
*/

/*
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

function generateWeeklyCustomerData(level: int) -> string[] {
  let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
  let weeklyCustomerData: int[] = [];
  let str = "";

  for (let i = 0; i < daysOfWeek.length(); i += 1) {
    if (daysOfWeek[i] == "Суббота" || daysOfWeek[i] == "Воскресенье") {
      weeklyCustomerData.push(weeklyCustomerData[rand_int(weeklyCustomerData.length() - 1)] * 3);
      str += daysOfWeek[i] + " - " + string(weeklyCustomerData[i]) + " " + declOfNum(weeklyCustomerData[i], ["покупка", "покупки", "покупок"]) + "\n";
    } else {
      weeklyCustomerData.push(rand_int(level * level * 2) + 4);
      str += daysOfWeek[i] + " - " + string(weeklyCustomerData[i]) + " " + declOfNum(weeklyCustomerData[i], ["покупка", "покупки", "покупок"]) +"\n";
    }
  }
    
  let num = "";
    for (let i = 0; i < daysOfWeek.length(); i += 1) {
        if (i == daysOfWeek.length() - 1) {
        	num += string(weeklyCustomerData[i]);
        }
        else {
    		num += string(weeklyCustomerData[i]) + " ";      
        }
    }

  return [str, num];
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let days = generateWeeklyCustomerData(level);
    let num = 0
    let inpt = days[0];
    for (let i = 0; i < days[1].split(" ").length(); i += 1) {
        num += int(days[1].split(" ")[i])
    }
    let outp = string(num) + " " + declOfNum(num, ["покупка", "покупки", "покупок"]);
    let wrong = "";
    if (int(outp.split(" ")[0]) >= 20 && rand_bool()) {
        num -= rand_int(10) + 1
    	wrong = string(num) + " " + declOfNum(num, ["покупка", "покупки", "покупок"]);
    }
    else {
        num += rand_int(10) + 1
    	wrong = string(num) + " " + declOfNum(num, ["покупка", "покупки", "покупок"]);
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " дни недели и количество покупок в эти дни, её попросили " + whatDo + " сколько покупок делается в неделю.";

    if (rand_bool()) {sc="Даны дни недели и количество покупок в эти дни. Требуется определить сколько покупок делается в неделю."}
    let descr = sc + "\n Формат вывода, следующий: N покупок \n Пример: 56 покупок";

    let expl = "Получаем дни недели и количество покупок в эти дни, считаем количество покупок в неделю: \n ";
    for (let i = 0; i < days[1].split(" ").length(); i += 1) {
        if (i == days[1].split(" ").length() - 1) {
        	expl += days[1].split(" ")[i] + "=" + outp.split(" ")[0] + " " + declOfNum(int(outp.split(" ")[0]), ["покупка", "покупки", "покупок"]) + ".";
        }
        else {
        	expl += days[1].split(" ")[i] + "+"        
        }
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
