//генератор: расчёт доли
/*
Создайте генератор паззлов, который будет генерировать ряд чисел. Генератор будет требовать посчитать сумму чётных значений ряда и разделить на сумму всех значений ряда, а значение ввести.
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

function getEvenNumbers(numbers: float[]) -> float[] {
    let evenNumbers: float[] = [];
    for (let i = 0; i < numbers.length(); i += 1) {
        if (numbers[i] % 2.0 == 0.0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

function sumNumbers(numbers: float[]) -> float {
    let sum = 0.0;
    for (let i = 0; i < numbers.length(); i += 1) {
        sum += numbers[i];
    }
    return sum;
}

function round(p: float, after_dot: int) -> string {  
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
    
    return sign + string(int_p / coeff) + "." + after_string;
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
    let ans = getEvenNumbers(fullArray);
    let outp = string(sumNumbers(ans) / sumNumbers(fullArray));
    let wrong = "";
    if (float(outp) >= 0.6 && rand_bool()) {
    	wrong = round(float(outp) - float("0." + string(rand_int(5) + 1)), 2);
    }
    else {
    	wrong = round(float(outp) + float("0." + string(rand_int(5) + 1)), 2);
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд чисел, её попросили " + whatDo + " сумму чётных значений ряда и разделить на сумму всех значений ряда. Ответ округлить до сотых.";

    if (rand_bool()) {sc="Дан ряд чисел, требуется рассчитать сумму чётных значений ряда и разделить на сумму всех значений ряда. Ответ округлить до сотых."}
    let descr = sc + "\n Пример вывода следующий: 0.65, 0.40, 0.01, 1.40, 1.00";
    
    let expl = "";
    if (ans.length() >= 2) {
        expl += "Сначала найдём сумму всех чётных чисел ";
		for (let i = 0; i < ans.length(); i += 1) {
            if (i == ans.length() - 1) {
                expl += string(ans[i]) + "=" + string(sumNumbers(ans)) + "\n После найдём сумму всех чисел ";
                continue;
            }
            expl += string(ans[i]) + "+";
        }
    }
    else {expl += "Имеется только одно чётное число " + string(sumNumbers(ans)) + ", значит сначала найдём сумму всех чисел "}
    	for (let i = 0; i < fullArray.length(); i += 1) {
            if (i == fullArray.length() - 1) {
                expl += string(fullArray[i]) + "=" + string(sumNumbers(fullArray));
                continue;
            }
            expl += string(fullArray[i]) + "+";
        }
    expl += "\n После поделим сумму чётных, на сумму всех чисел " + string(sumNumbers(ans)) + "/" + string(sumNumbers(fullArray)) + "=" + outp;
    outp = round(sumNumbers(ans) / sumNumbers(fullArray), 2);
    expl += "\n Округляем число до сотых и получаем ответ " + outp;    
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
