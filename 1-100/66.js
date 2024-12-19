//Производительность труда
/*
Сделайте генератор задач, который выводит на экран 2 времени, представленных числами: с которого сократился рабочий день и до которого сократился рабочий день. 
Затем просит посчитать, на сколько процентов нужно повысить производительность труда, чтобы при тех же расценках заработная плата возросла бы на X%.
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

function calculateProductivity(startTime: float, endTime: float, salaryIncrease: float) -> string[] {
  	let originalDuration = endTime - startTime;
  	let desiredDuration = originalDuration / (1.0 + (salaryIncrease / 100.0));
  	let productivityIncrease = (1.0 - (desiredDuration / originalDuration)) * 100.0;
    
    return [round(productivityIncrease, 2), string(originalDuration), string(desiredDuration)]
}


function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let startTime = float(rand_int(28) + 1);
    while (startTime >= 28.0) {
    	startTime = float(rand_int(28) + 1);
    }
    let endTime = float(rand_int(28) + 1);
    while (endTime <= startTime) {
    	endTime = float(rand_int(28) + 1);
    }
    let salaryIncrease = float(rand_int(level * 5) + 1);
    if (salaryIncrease > 100.0) {
    	salaryIncrease = 100.0;
    }
    
    let inpt = string(startTime) + " и " + string(endTime);
    let outp = calculateProductivity(startTime, endTime, salaryIncrease)[0] + "%";
    let wrong = outp;
    while (wrong == outp) {
    	wrong = calculateProductivity(startTime, endTime, salaryIncrease + float(rand_int(5) + 1))[0] + "%";
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " два числа: с которого сократился рабочий день и до которого сократился рабочий день. Её попросили " + whatDo + 
        	", на сколько процентов нужно повысить производительность труда, чтобы при тех же расценках заработная плата возросла бы на " + string(salaryIncrease) + "%. Ответ необходимо в любом случае округлять до сотых.";

    if (rand_bool()) {sc="Даны два числа: с которого сократился рабочий день и до которого сократился рабочий день. Требуется определить, на сколько процентов нужно повысить производительность труда, чтобы при тех же расценках заработная плата возросла бы на " + string(salaryIncrease) + "%. Ответ необходимо в любом случае округлять до сотых."}
    let descr = sc + "\n Пример вывода следующий: 11.00%";

    let expl = "1. " + string(endTime) + "-" + string(startTime) + "=" + calculateProductivity(startTime, endTime, salaryIncrease)[1] +
        		"\n2. " + calculateProductivity(startTime, endTime, salaryIncrease)[1] + "/" + "(1+(" + string(salaryIncrease) + "/100))=" + calculateProductivity(startTime, endTime, salaryIncrease)[2] + 
        		"\n3. (1.0 - (" + calculateProductivity(startTime, endTime, salaryIncrease)[2] + "/" + calculateProductivity(startTime, endTime, salaryIncrease)[1] + ")) * 100.0=" + 
        		calculateProductivity(startTime, endTime, salaryIncrease)[0] + "\nСледовательно производительность труда требуется увеличить на " + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/

