//Добавление чисел в последовательности
/*
Создайте генератор, в котором на входе будет даваться 1 или несколько последовательностей и нужно будет ее (их) дополнить двумя числами. Например дана последовательность 5 10 15 20... 
и нужно будет добавить 25 30.
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

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let count = rand_int(level) + 1;
    
    let interval: int[] = [];
    for (let i = 0; i < count; i += 1) {
        let num = rand_int(50) + 1;
        for (let j = 0; j < interval.length(); j += 1) {
            while (num == interval[j]) {
                num = rand_int(50) + 1;
            	j = 0;
            }
        }
        
    	interval.push(num);
    }
    let inpt = "";
    for (let i = 0; i < interval.length(); i += 1) {
        inpt += string(i + 1) + ". "
        for (let j = 1; j <= 5; j += 1) {
            if (j == 5) {
            	inpt += string(interval[i] * j) + "... \n";
                continue;
            }
        	inpt += string(interval[i] * j) + ", ";	
        }
    }
    let outp = "";
    for (let i = 0; i < interval.length(); i += 1) {
        outp += string(i + 1) + ". " + string(interval[i] * 6) + ", " + string(interval[i] * 7) + ". \n";	
    }
    let wrong = outp;
    while (wrong == outp) {
        wrong = "";
    	for (let i = 0; i < interval.length(); i += 1) {
            wrong += string(i + 1) + ". " + string(interval[i] * (6 + rand_int(5))) + ", " + string(interval[i] * (7 + rand_int(5))) + ". \n";	
        }	
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Показан|Подчёркнут|Выделен".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "добавить|прибавить|присоединить".split("|")[rand_int(3)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task;

    if (count > 1) {
    	sc += " ряд последовательностей, её попросили " + whatDo + " к последовательностям два правильных числа.";
    	if (rand_bool()) {sc="Дан ряд последовательностей, требуется добавить к последовательностям два правильных числа."};
    }
    else {
    	sc += "а последовательность, её попросили " + whatDo + " к последовательности два правильных числа.";
    	if (rand_bool()) {sc="Дана последовательность, требуется добавить к последовательности два правильных числа."};
    }
    let descr = sc + "\n Пример вывода следующий: \n\"1. 102, 119. \n2. 240, 280.\", \n\n\"1. 126, 147. \n2. 282, 329. \n3. 162, 189. \n4. 192, 224.\"";

    let expl = "Выясняем на сколько прибавляется кажое число в последовательности: \n";
    for (let j = 0; j < interval.length(); j += 1) {
            expl += string(j + 1) + ". " + string(interval[j]) + "\n"
        }
    expl += "После находим первое число которое нужно добавить к последовательности: \n";
    for (let j = 0; j < interval.length(); j += 1) {
            expl += string(j + 1) + ". " + string(interval[j] * 5) + "+" + string(interval[j]) + "=" + string(interval[j] * 6) + "\n"
        }
    expl += "Теперь находим второе число которое нужно добавить к последовательности: \n";
    for (let j = 0; j < interval.length(); j += 1) {
            expl += string(j + 1) + ". " + string(interval[j] * 6) + "+" + string(interval[j]) + "=" + string(interval[j] * 7) + "\n"
        }
    expl += "Получаем ответ: \n" + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
