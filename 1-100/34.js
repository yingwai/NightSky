//Найти самое большое
/*
Создайте генератор, где у вас на входе будет генерироваться одно целое число и вокруг него много десятичных дробей. Нужно будет найти среди десятичных дробей наибольшую 
и поделить ее на единственное целое число.
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

function rand_float(num: int, digit: int) -> float{
    let t = 10;
  for(let i = 1; i < digit; i += 1){
      t *= 10;
    }
  return float(float(rand_int(num * t))/float(t));
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

function generateNumberWithDecimals(level: int) -> float[] {
    let wholeNum = float(rand_int(level * 5) + 1);
    let decimals: float[] = [];
    for (let i = 0; i < level + 2; i += 1) {
        let decimal = round(rand_float(level * 2, 2), 2);
        if (i == level + 1/2) {
            decimals.push(wholeNum);
        }
        decimals.push(float(decimal));
    }
    
    return decimals;
}

function findMinDividedByMiddle(numbers: float[]) -> string[] {
    let max = numbers[0]; 
    let middle = numbers.length()/2;
    for (let i = 0; i < numbers.length(); i += 1) {
        if (i != middle && numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    return [string(max), string(numbers[middle]), round(max/numbers[middle], 2)];
}


function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let nums = generateNumberWithDecimals(level);
    let inpt = "";
    for (let i = 0; i < nums.length(); i += 1) {
        if (i == nums.length() - 1) {
        	inpt += string(nums[i]) + "."
        }
        else {
        	inpt += string(nums[i]) + ", "
        }
    }
    let ans = findMinDividedByMiddle(nums)
    let outp = ans[2];
    while (outp.split(".")[1] == "00") {
    	outp = outp.split(".")[0] + ".01"
    }
    let whole = 0.0;
    let er = findMinDividedByMiddle(nums)
    let wrong = er[2];
    while (wrong == outp) {
    	whole = float(rand_int(level * 5) + 1);
        while (whole == nums[nums.length()/2]) {
            whole = float(rand_int(level * 5) + 1);
        }
        nums[nums.length()/2] = whole;
        er = findMinDividedByMiddle(nums);
        wrong = er[2]
        while (wrong.split(".")[1] == "00") {
            wrong = wrong.split(".")[0] + ".0" + string(rand_int(8) + 1);
        }
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд чисел, её попросили " + whatDo + " найти среди десятичных дробей наибольшую и поделить ее на единственное целое число, полученный ответ сократить до сотых.";

    if (rand_bool()) {sc="Дан ряд чисел, требуется найти среди десятичных дробей наибольшую и поделить ее на единственное целое число, полученный ответ сократить до сотых."}
    let descr = sc + "\n Пример вывода следующий: 0.69, 1.52";

    let expl = "Получаем ряд чисел в котором находим наибольшую десятичную дробь: " + ans[0] + "\n После делим это число на единственное целое число в ряду: " + ans[0] + "/" + ans[1] + "=" + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
