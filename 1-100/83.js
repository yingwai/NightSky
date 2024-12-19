//Умножение найденного ответа
/*
Сделайте генератор пазлов который создает уравнение на целочисленное деление, ответ необходимо умножить на любое число больше 10
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

function createDivisibleNumbers() -> int[] {
  let num1 = rand_int(100) + 1;
  let num2 = rand_int(100) + 1;
  while (num1 % num2 != 0) {
	num1 = rand_int(100) + 1;
	num2 = rand_int(100) + 1;
  }
  return [num1, num2];
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let nums: int[][] = [];
    for (let i = 0; i < level; i += 1) {
    	nums.push(createDivisibleNumbers());
    }
    let inpt = "";
    for (let i = 0; i < level; i += 1) {
        if (i == level - 1) {
        	inpt += string(nums[i][0]) + "/" + string(nums[i][1]) + ".";
            continue;
        }
    	inpt += string(nums[i][0]) + "/" + string(nums[i][1]) + ", ";
    }
    let outp = "";
    let num = rand_int(100) + 11;
    let err = rand_int(100) + 11;
    while (err == num) {
    	err = rand_int(100) + 11;
    }
    for (let i = 0; i < level; i += 1) {
        if (i == level - 1) {
        	outp += string(nums[i][0]/nums[i][1]*num) + ".";
            continue;
        }
    	outp += string(nums[i][0]/nums[i][1]*num) + ", ";
    }
    let wrong = "";
    for (let i = 0; i < level; i += 1) {
        if (i == level - 1) {
        	wrong += string(nums[i][0]/nums[i][1]*err) + ".";
            continue;
        }
    	wrong += string(nums[i][0]/nums[i][1]*err) + ", ";
    }
    while (wrong == outp) {
    	err = rand_int(100) + 11;
        for (let i = 0; i < level; i += 1) {
            if (i == level - 1) {
                wrong += string(nums[i][0]/nums[i][1]*err) + ".";
                continue;
            }
            wrong += string(nums[i][0]/nums[i][1]*err) + ", ";
        }
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|решить".split("|")[rand_int(3)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(5)] + ". " + 
            task + " ряд примеров на целочисленное деление, её попросили " + whatDo + " пример, ответ необходимо умножить на " + string(num) + ".";

    if (rand_bool()) {sc="Дан ряд примеров на целочисленное деление, требуется рассчитать пример, ответ необходимо умножить на " + string(num) + "."}
    let descr = sc + "\n Пример вывода следующий: \"51, 799.\" (без ковычек)";

    let expl = "Рассчитываем все примеры и умножаем ответ на " + string(num) + ":\n";
    for (let i = 0; i < level; i += 1) {
    	expl += string(nums[i][0]) + "/" + string(nums[i][1]) + "*" + string(num) + "=" + string(nums[i][0]/nums[i][1]*num) + "\n";
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