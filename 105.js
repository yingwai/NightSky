//Простые множители
/*
Придумайте генератор заданий, который будет выводить любое целое составное число. 
Человеку нужно будет разложить это число на простые множители и записать в ответ все простые множители этого числа.
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

function printCompositeNumber(n: int) -> bool {
  for (let i = 2; i < n; i += 1) {
    if (n % i == 0) {
      return true;
    }
  }
  return false;
}

function primeFactors(n: int) -> int[] {
  let factors: int[] = [];
  while (n % 2 == 0) {
    factors.push(2);
    n = n / 2;
  }

  for (let i = 3; float(i) <= sqrt(float(n)); i = i + 2) {
    while (n % i == 0) {
      factors.push(i);
      n = n / i;
    }
  }

  if (n > 2) {
    factors.push(n);
  }
  return factors;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let num = rand_int(level * 5) + 6;
    while (printCompositeNumber(num) == false) {
    	num = rand_int(level * 5) + 6;
    }
    let er = rand_int(level * 5) + 4;
    while (er >= num) {
    	er = rand_int(level * 5) + 4;
    }
    
    let inpt = new Empty {};
    let ans: int[] = [];
    for (let i = 0; i < primeFactors(num).length(); i += 1) {
    	let temp = primeFactors(num);
        
        let flag = true;
        for (let j = 0; j < ans.length(); j += 1) {
            if (temp[i] == ans[j]) {
            	flag = false;
                break;
            }
        }
        
        if (flag) {
        	ans.push(temp[i]);
        }
    }
    
    let ers: int[] = [];
    for (let i = 0; i < primeFactors(er).length(); i += 1) {
    	let temp = primeFactors(er);
        
        let flag = true;
        for (let j = 0; j < ers.length(); j += 1) {
            if (temp[i] == ers[j]) {
            	flag = false;
                break;
            }
        }
        
        if (flag) {
        	ers.push(temp[i]);
        }
    }
    let outp = "";
    for (let i = 0; i < ans.length(); i += 1) {
    	outp += string(ans[i]) + " ";
    }
    let wrong = outp;
    while (wrong == outp) {
        wrong = "";
    	for (let i = 0; i < ers.length(); i += 1) {
            wrong += string(ers[i]) + " ";
        }
        
        er = rand_int(level * 5) + 4;
        while (er >= num) {
            er = rand_int(level * 5) + 4;
        }
        
        ers = [];
        for (let i = 0; i < primeFactors(er).length(); i += 1) {
            let temp = primeFactors(er);

            let flag = true;
            for (let j = 0; j < ers.length(); j += 1) {
                if (temp[i] == ers[j]) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                ers.push(temp[i]);
            }
        }
    }
  
    let task = "Дано|Представлено|Выставлено|Указано|Показано".split("|")[rand_int(5)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "показать|указать|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " целое составное число " + string(num) + ", её попросили " + whatDo + " простые множители и записать в ответ все простые множители этого числа. Если множитель повторяется, то записываем его 1 раз. В ответ записать множители по возрастанию.";

    if (rand_bool()) {sc="Дано целое составное число " + string(num) + ", требуется определить простые множители и записать в ответ все простые множители этого числа. Если множитель повторяется, то записываем его 1 раз. В ответ записать множители по возрастанию."}
    let descr = sc + "\n Пример вывода следующий: \"3 5 7\" (без кавычек)";

    let expl = "Разложим " + string(num) + " на простые множители (нечётные числа больше единицы(за исключением числа 2) которые могут делиться на единицу и на само себя(следовательно 9 не подходит)): ";
    for (let i = 0; i < primeFactors(num).length(); i += 1) {
        if (i == primeFactors(num).length() - 1) {
        	expl += string(primeFactors(num)[i]) + ". " +
                	"\nВыписываем повторяющиеся множители и получаем ответ " + outp;
            continue;
        }
    	expl += string(primeFactors(num)[i]) + ", "
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