//Четные и нечетные
/*
Создайте генератор, в котором на входе будут генерироваться четные и нечетные цифры. Нужно будет определить каких цифр больше, четных или нечетных и затем их все просуммировать.
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
        arr.push(float(rand_int(10)));
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
        	num = float(rand_int(10));
        }
    	arr[rand_int(arr.length())] = num;
    }
    
    return arr;
}

function getEvenNumbers(numbers: float[]) -> float[][] {
    let evenNumbers: float[] = [];
    let notNumbers: float[] = [];
    for (let i = 0; i < numbers.length(); i += 1) {
        if (numbers[i] % 2.0 == 0.0 || numbers[i] == 0.0) {
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
    
    let outp = "";
    if (num[0].length() > num[1].length()) {
    	outp = "Чётных - " + string(sumNumbers(num[0]) + sumNumbers(num[1]));
    }
    else if (num[0].length() < num[1].length()) {
    	outp = "Нечётных - " + string(sumNumbers(num[0]) + sumNumbers(num[1]));
    }
    else {
    	outp = "Одинаковое количество - " + string(sumNumbers(num[0]) + sumNumbers(num[1]));
    }
    let wrong = outp;
    while (wrong == outp) {
    	let temp = sumNumbers(num[0]) + sumNumbers(num[1]);
        
        if (rand_bool() && temp >= 60.0) {
        	temp -= float(rand_int(50)) + 1.0;
            wrong = outp.split("-")[0] + " - " + string(temp);
        }
        else {
        	temp += float(rand_int(50)) + 1.0;
            wrong = outp.split("-")[0] + " - " + string(temp);
        }
    }
    
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд чисел, её попросили " + whatDo + " каких цифр больше, четных или нечетных и затем их все просуммировать.";

    if (rand_bool()) {sc="Дан ряд чисел, требуется рассчитать каких цифр больше, четных или нечетных и затем их все просуммировать."}
    let descr = sc + "\n Пример вывода следующий: \"Чётных - 427\", \"Нечётных - 120\", \"Одинаковое количество - 316\" (без кавычек)";
    
    let expl = "";
    if (num[0].length() > num[1].length()) {
    	expl += "Т.к. чётных чисел больше, найдём сумму ряда чисел ";
        for (let i = 0; i < fullArray.length(); i += 1) {
            if (i == fullArray.length() - 1) {
                expl += string(fullArray[i]) + " = " + string(sumNumbers(num[0]) + sumNumbers(num[1])) + "\n" + 
                    	"Получим ответ: " + outp;
                continue;
            }
            expl += string(fullArray[i]) + " + ";
        }
    }
    else if (num[0].length() < num[1].length()) {
    	expl += "Т.к. нечётных чисел больше, найдём сумму ряда чисел ";
        for (let i = 0; i < fullArray.length(); i += 1) {
            if (i == fullArray.length() - 1) {
                expl += string(fullArray[i]) + " = " + string(sumNumbers(num[0]) + sumNumbers(num[1])) + "\n" + 
                    	"Получим ответ: " + outp;
                continue;
            }
            expl += string(fullArray[i]) + " + ";
        }
    }
    else {
    	expl += "Т.к. у нас одинаковое количество четных или нечетных чисел, найдём сумму ряда чисел ";
        for (let i = 0; i < fullArray.length(); i += 1) {
            if (i == fullArray.length() - 1) {
                expl += string(fullArray[i]) + " = " + string(sumNumbers(num[0]) + sumNumbers(num[1])) + "\n" + 
                    	"Получим ответ: " + outp;
                continue;
            }
            expl += string(fullArray[i]) + " + ";
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