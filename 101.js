//Счет в командной игре
/*
Сделайте генератор заданий, где будет дана таблица с итоговым счетом командной игры двух команд-противников. Решающему нужно указать, какая команда победила.
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

function sumNumbers(numbers: int[]) -> int {
    let sum = 0;
    for (let i = 0; i < numbers.length(); i += 1) {
        sum += numbers[i];
    }
    return sum;
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
    
    let commands = level + 2;
    let rounds = rand_int(level) + 3;
    let points: int[][] = [];
    for (let i = 0; i < commands; i += 1) {
    	let temp: int[] = [];
        for (let j = 0; j < rounds; j += 1) {
        	temp.push(rand_int(20));
        } 
        
        for (let j = 0; j < points.length(); j += 1) {
            while (sumNumbers(points[j]) == sumNumbers(temp)) {
                for (let t = 0; t < temp.length(); t += 1) {
                	temp[t] = rand_int(20);
                }
            }
        }
        
        points.push(temp)
    }
    
    let inpt = new Canvas{};
    let sizeX = 170 + (rounds * 120);
    let sizeY = 60 + (commands * 40);
	inpt.init(sizeX, sizeY, rgba(255, 255, 255, 1.0));
    
    inpt.fill_rect(10, 10, 150, 40, rgb(0, 0, 0), rgb(255, 255, 255), 2);
    inpt.text(85, 60 / 2 + 5, "Команды", 18, rgb(0, 0, 0), "center");
    for (let i = 1; i <= commands; i += 1) {
    	inpt.fill_rect(10, 10 + (i * 40), 150, 40, rgb(0, 0, 0), rgb(255, 255, 255), 2);
    	inpt.text(85, 60 / 2 + 5 + (i * 40), "Команда №" + string(i), 18, rgb(0, 0, 0), "center");
    }
    
    for (let i = 1; i <= rounds; i += 1) {
        let x = 160;
        for (let j = 1; j < i; j += 1) {
        	x += 120;
        }
    	inpt.fill_rect(x, 10, 120, 40, rgb(0, 0, 0), rgb(255, 255, 255), 2);
        inpt.text(60 + x, 60 / 2 + 5, "Раунд " + string(i), 18, rgb(0, 0, 0), "center");
        
        for (let j = 1; j <= commands; j += 1) {
            inpt.fill_rect(x, 10 + (j * 40), 120, 40, rgb(0, 0, 0), rgb(255, 255, 255), 2);
            inpt.text(60 + x, 60 / 2 + 5 + (j * 40), string(points[j - 1][i - 1]), 18, rgb(0, 0, 0), "center");
        }
    }
    
    let sum: int[] = [];
    let com: int[] = [];
    for (let i = 0; i < commands; i += 1) {
    	sum.push(sumNumbers(points[i]));
    	com.push(sumNumbers(points[i]));
    }
    
    sum.sort();
    
    let max = rand_bool();
    let outp = "";
    if (max) {
        for (let i = 0; i < com.length(); i += 1) {
            if (sum[sum.length() - 1] == com[i]) {
            	outp = "Команда №" + string(i + 1);
            }
        }
    }
    else {
    	for (let i = 0; i < com.length(); i += 1) {
            if (sum[0] == com[i]) {
            	outp = "Команда №" + string(i + 1);
            }
        }
    }
    let wrong = outp;
    while (wrong == outp) {
    	wrong = "Команда №" + string(rand_int(com.length()) + 1);
    }
  
    let task = "Дана|Представлена|Выставлена|Указана|Показана".split("|")[rand_int(5)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " таблица с " + string(commands) + " " + declOfNum(commands, ["командой", "командами", "командами"]) + " и " 
        	+ string(rounds) + " " + declOfNum(rounds, ["раундом", "раундами", "раундами"]) + ", её попросили " + whatDo + " у какой команды ";

    if (rand_bool()) {sc="Дана таблица с " + string(commands) + " " + declOfNum(commands, ["командой", "командами", "командами"]) + " и " 
        				+ string(rounds) + " " + declOfNum(rounds, ["раундом", "раундами", "раундами"]) + ". Требуется определить у какой команды "}
    if (max) {
    	sc += "наибольшее число очков."
    }
    else {
    	sc += "наименьшее число очков."
    }
    
    let descr = sc + "\n Пример вывода следующий: Команда №3";
    
    let expl = "Рассчитаем количество очков у каждой команды: ";
    for (let i = 0; i < commands; i += 1) {
        expl += "\nКоманда №" + string(i + 1) + ": ";
        for (let j = 0; j < rounds; j += 1) {
            if (j == rounds - 1) {
            	expl += string(points[i][j]) + "=" + string(com[i]);
                continue;
            }
        	expl += string(points[i][j]) + "+";
        }
	}
    expl += "\nСледовательно ответ: " + outp
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/