//генератор перевода дробей
/*
Сделайте генератор примеров, который переводит нецелые числа в дроби
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

function processString(str: string) -> int[] {
    let firstString = str.split(".")[0];
    let secondString =  str.split(".")[1];
    let endString = "";
    let length = 0;
    if (firstString.length() == 1) {
    	endString = firstString + secondString;
        length = 1;
    }
    if (firstString.length() == 2) {
        endString = firstString + secondString + "0";
        length = 2;
    }
    else if (firstString.length() == 3) {
        endString = firstString + secondString + "00";
        length = 3;
    }
  
    let fourthString = "1";
    for (let i = 0; i < endString.length() - length; i += 1) {
      fourthString += "0";
    }
 
    return [int(endString), int(fourthString)];
}

function findGcd(arr: int[]) -> int {
  let gcd = arr[0];
  for (let i = 1; i < arr.length(); i += 1) {
    let x = arr[i]; 
    let y = gcd;
    while (y > 0) {
        let t = y;
        y = x % y;
        x = t;
    }
    gcd = x;
  }
  return gcd;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let inpt = string(rand_int((level * 50 - 2) + 1)) + "." + string(rand_int((level * 50 - 2) + 1));
    let ans = processString(inpt);
    let gcd = findGcd(ans)
    let outp = string(ans[0] / gcd) + "/" + string(ans[1] / gcd);
    let wrong = "";
    if (rand_bool()) {
    	wrong = string(rand_int(ans[0] / gcd) + 1) + "/" + string(rand_int(ans[1] / gcd) + 1);
    }
    else {
        wrong = string((ans[0] / gcd) + rand_int(15) + 1) + "/" + string((ans[1] / gcd) + rand_int(15) + 1);
    }
  
    let task = "Дано|Представлено|Выставлено|Указано|Видно|Показано|Подчёркнуто|Выделено".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "перевести|переобразовать|пересчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " нецелое число, её попросили " + whatDo + " в обыкновенную дробь.";

    if (rand_bool()) {sc="Дано нецелое число, требуется перевести в обыкновенную дробь."}
    let descr = sc + "\n Пример вывода, следующий: 1756/25, 7341/100, 11/10, 280339/1000, 68901/200";

    let expl = "Получаем нецелое число " + inpt + " \n 1. Сначала превращаем десятичную дробь в обыкновенную " + inpt + "=" + string(ans[0]) + "/" + string(ans[1]) + "\n Где числитель показ как число без плавающей точки + количество нулей от количества цифр до точки - 1 \n" +
        		"2. Сокращаем дробь на общий делитель " + string(gcd) + " и получаем ответ " + string(outp);
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
