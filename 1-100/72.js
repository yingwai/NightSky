//Генератор: четные, нечетные
/*
Создайте генератор паззлов, который будет формировать произвольный ряд из чисел. Генератор будет просить посчитать средние значения чётных чисел и нечетных. 
Он просит ввести среднее значение, которое больше.
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

function round(p: float, after_dot: int) -> float {  
    let sign = "";
    if (p < 0.0) {
        sign = "-";
        p = -p;
    }

    let coeff = 1;
    for (let i = 0; i < after_dot; i += 1) {
        coeff *= 10;
    }
    
    p *= float(coeff);
    let int_p = int(p + 0.5);
  
  let after_string = string(int_p % coeff);
    for (let i = 0; after_string.length() < after_dot; i += 1) {
        after_string = "0" + after_string;
    }
    
    return float(sign + string(int_p / coeff) + "." + after_string);
}

function createArray(level:int) -> float[] {
	let arr:float[] = [];
    for (let i = 0; i < rand_int(level * 2) + 4; i += 1) {
        arr.push(float(rand_int(100) + 1));
    }
    
    let even = false
    for (let i = 0; i < arr.length(); i += 1) {
        if (arr[i] % 2.0 == 0.0) {
        	even = true;
            break;
        }
    }
    
    if (!even) {
        let num = float(rand_int(100) + 1);
        while (num % 2.0 == 0.0) {
        	num = float(rand_int(100) + 1);
        }
    	arr[rand_int(arr.length())] = num;
    }
    
    return arr;
}

function getEvenNumbers(numbers: float[]) -> float[][] {
    let evenNumbers: float[] = [];
    let notNumbers: float[] = [];
    for (let i = 0; i < numbers.length(); i += 1) {
        if (numbers[i] % 2.0 == 0.0) {
            evenNumbers.push(numbers[i]);
        }
        else {
        	notNumbers.push(numbers[i]);
        }
    }
    return [evenNumbers, notNumbers];
}

function sumNumbers(numbers: float[]) -> float {
    let sum = 0.0;
    for (let i = 0; i < numbers.length(); i += 1) {
        sum += numbers[i];
    }
    return sum;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let fullArray = createArray(level);
    let inpt = "";
    for (let i = 0; i < fullArray.length(); i += 1) {
        if (i == fullArray.length() - 1) {
        	inpt += string(fullArray[i]) + ".";
            continue;
        }
        inpt += string(fullArray[i]) + ", ";
    }
    let num = getEvenNumbers(fullArray);
    let ans: float[] = [];
    if (num[0].length() >= 1) {
    	ans.push(round(sumNumbers(num[0])/float(num[0].length()), 0));
    }
    else {
    	ans.push(0.0);
    }
    if (num[1].length() >= 1) {
    	ans.push(round(sumNumbers(num[1])/float(num[1].length()), 0));
    }
    else {
    	ans.push(0.0);
    }
    let outp = "";
    let wrong = "";
    if (float(ans[0]) > float(ans[1])) {
    	outp = string(ans[0]);
        wrong = string(ans[1]);
    }
    else {
    	outp = string(ans[1]);
        wrong = string(ans[0]);
    }
    
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд чисел, её попросили " + whatDo + " среднее число чётных и нечётных чисел, сравнить их и указать большее. Все расчёты округляем до целого числа.";

    if (rand_bool()) {sc="Дан ряд чисел, требуется рассчитать среднее число чётных и нечётных чисел, сравнить их и указать большее. Все расчёты округляем до целого числа."}
    let descr = sc + "\n Пример вывода следующий: 53";
    
    let expl = "";
    if (num[0].length() >= 1) {
    	expl += "Сначала найдём среднее чётных число (";
        for (let i = 0; i < num[0].length(); i += 1) {
            if (i == num[0].length() - 1) {
        		expl += string(num[0][i]) + ")/" + string(num[0].length()) + "=" + string(ans[0]);
                continue;
            }
        	expl += string(num[0][i]) + "+";
        }
    }
    else {
    	expl += "Чётные числа отсутствуют, следовательно их среднее число 0";
    }
    
    if (num[1].length() >= 1) {
    	expl += "\nНайдём среднее нечётных число (";
        for (let i = 0; i < num[1].length(); i += 1) {
            if (i == num[1].length() - 1) {
        		expl += string(num[1][i]) + ")/" + string(num[1].length()) + "=" + string(ans[1]);
                continue;
            }
        	expl += string(num[1][i]) + "+";
        }
    }
    else {
    	expl += "\nНечётные числа отсутствуют, следовательно их среднее число 0";
    }
    expl += "\nСравниваем два числа и получаем ответ " + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/