//Определение процента осадков
/*
Вам предстоит создать генератор, который выдаст несколько чисел в диапазоне от 0.1 до 1, они выступают в роли показателей на осадки. 
Далее человеку нужно будет перемножить эти показатели и итоговый результат умножить на 100, в ответе получиться процент осадков. 
Задача человека определить с каким процентом пойдут осадки. К примеру: 0.6*0.3*0.9 =0.162, далее умножаем число на 100 и получим 16.2% осадков. Конкретный пример не использовать.
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

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let count = rand_int(level) + 2;
    
    let inpt = "";
    let nums:float[] = [];
    for (let i = 0; i < count; i += 1) {
        let num = rand_float(1, 1);
        if (num == 0.0) {
        	num = 1.0;
        }
        nums.push(num);
        if (i == count - 1) {
        	inpt += string(num) + ".";
            continue;
        }
    	inpt += string(num) + ", ";
    }
    let outp = "";
    let sum = nums[0];
    for (let i = 1; i < count; i += 1) {
        if (i == count - 1) {
        	sum *= nums[i] * 100.0;
            if (sum > 100.0) {
            	sum = 100.0;
            }
            outp += string(sum/100.0) + "%";
            continue;
        }
    	sum *= nums[i]
    }
    let wrong = outp;
    while (wrong == outp) {
    	wrong = string(rand_int(100) + 1) + "%";
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " показатели осадков, её попросили " + whatDo + " с каким процентом пойдут осадки. Если ответ после точки больше двух чисел, то округляем до сотых.";

    if (rand_bool()) {sc="Даны показатели осадков, требуется определить с каким процентом пойдут осадки. Если в ответе есть числа после точки, то округляем до сотых."}
    let descr = sc + "\n Пример вывода следующий: 5%, 16.20%, 54%, 0.05%, 0%";

    let expl = "Рассчитаем общий показатель осадков ";
    for (let i = 0; i < count; i += 1) {
    	if (i == count - 1) {
            let temp = round(sum, 2);
            if (temp.split(".")[1] == "00") {
            	temp = temp.split(".")[0];
            }
        	expl += string(nums[i]) + "=" + outp.split("%")[0] + "\n Рассчитаем с каким процентом пойдут осадки " + temp + "%" + "\n Следовательно ответ " + temp + "%";
            outp = temp + "%";
            continue;
        }
    	expl += string(nums[i]) + "*";
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
