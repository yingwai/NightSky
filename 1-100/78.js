//Генератор: значение 0 
/*
Создайте генератор паззлов, который сформирует ряд положительных и отрицательных чисел. Все числа в ряду должны иметь дробную часть. Не все из чисел должны быть отрицательными. 
Генератор будет просить ввести значение, которое наиболее близко к значению 0.
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

function maxInt(arr: int[]) -> int {
  let max = arr[0];

  for (let i = 1; i < arr.length(); i += 1) {
    if (arr[i] < max) {
      max = arr[i];
    }
  }

  return max;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let count = rand_int(level * 2) + 2;
    let interval: int[] = [];
    for (let i = 0; i < count; i += 1) {
        let num = rand_int(200) + 1;
        if (rand_bool()) {
        	num *= -1;
        }
        for (let j = 0; j < interval.length(); j += 1) {
            while (num == interval[j] || num*-1 == interval[j]) {
                num = rand_int(200) + 1;
                if (rand_bool()) {
                    num *= -1;
                }
            	j = 0;
            }
        }
        
    	interval.push(num);
    }
    let plus = false;
    for (let i = 0; i < count; i += 1) {
        if (interval[i] > 0) {
        	plus = true;
        }
    }
    
    if (!plus) {
    	interval[rand_int(interval.length())] = rand_int(200) + 1;
    }
    
    let inpt = "";
    for (let i = 0; i < count; i += 1) {
		if (i == count - 1) {
        	inpt += string(interval[i]) + ". ";
            continue;
		}
		inpt += string(interval[i]) + ", ";	
    }
    
    let outp = "";
    let ans: int[] = [];
    let ansOp: string[] = []
    for (let i = 0; i < count; i += 1) {
    	let temp = interval[i];
        let op = "+";
        
        if (temp < 0) {
        	temp *= -1;
            op = "-";
        }
        
        ans.push(temp);
        ansOp.push(op);
    }
    let min = maxInt(ans);
    for (let i = 0; i < count; i += 1) {
        if (min == ans[i]) {
            if (ansOp[i] == "-") {
            	outp = string(min*-1)
            }
            else {
            	outp = string(min);
            }
        }
    }
    
    let wrong = outp;
    while (wrong == outp) {
    	wrong = string(interval[rand_int(interval.length())])
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Показан|Подчёркнут|Выделен".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "показать|указать|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд чисел, её попросили " + whatDo + " число, которое наиболее близко к 0. Если в ряде есть такое же положительное и отрицательное число, в ответ записываем то, которое раньше встретилось в ряде.";

    if (rand_bool()) {sc="Дан ряд чисел, требуется определить число, которое наиболее близко к 0. Если в ряде есть такое же положительное и отрицательное число, в ответ записываем то, которое раньше встретилось в ряде."}
    let descr = sc + "\n Пример вывода следующий: 67";

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