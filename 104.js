//Генератор: дроби
/*
Сделайте генератор пазллов, который бы формировал набор обычных дробных чисел в случайном порядке. 
Попросите человека найти N-ную дробь в ряду по ряду условий: например, в знаменателе которой цифра 3, числитель больше знаменателя на 1. Пожалуйста, точно такой же пример не используйте.
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

function createFraction(length:int) -> string[] {
	let temp: string[] = [];
    
    let numerator = rand_int(200) + 1;
    let denomerator = rand_int(200) + 1;
    while (denomerator == numerator) {
    	denomerator = rand_int(200) + 1;
    }
    
    for (let i = 0; i < length; i += 1) {
        for (let j = 0; j < temp.length(); j += 1) {
            while (temp[j].split("/")[0] == string(numerator) && temp[j].split("/")[1] == string(denomerator)) {
            	numerator = rand_int(200) + 1;
                denomerator = rand_int(200) + 1;
                while (denomerator == numerator) {
                    denomerator = rand_int(200) + 1;
                }
                j = 0;
            }
        }
        
        temp.push(string(numerator) + "/" + string(denomerator));
    }
    
    return temp
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let length = rand_int(level * 2) + 2;
    
    let fractions = createFraction(length);
    let inpt = "";
    for (let i = 0; i < length; i += 1) {
        if (i == length - 1) {
    		inpt += fractions[i] + ". ";
        	continue;
        }
    	inpt += fractions[i] + ", ";
    }
    
    let part = rand_int(2);
    let max = rand_bool();
    
    let num: int[] = [];
    for (let i = 0; i < length; i += 1) {
    	num.push(int(fractions[i].split("/")[part]))
    }
    
    num.sort();
    let outp = "";
    if (max) {
        for (let i = 0; i < length; i += 1) {
            if (num[num.length() - 1] == int(fractions[i].split("/")[part])) {
            	outp = fractions[i]
            }
        }
    }
    else {
    	for (let i = 0; i < length; i += 1) {
            if (num[0] == int(fractions[i].split("/")[part])) {
            	outp = fractions[i]
            }
        }
    }
    
    let wrong = outp;
    while (wrong == outp) {
        wrong = fractions[rand_int(fractions.length())];
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Показан".split("|")[rand_int(5)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "показать|указать|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд дробей, её попросили " + whatDo + " дробь с ";
    if (rand_bool()) {sc="Дан ряд дробей, требуется определить дробь с "}
    
    if (max) {
    	sc += "наибольшим ";
        
        if (part == 0) {
        	sc += "числителем."
        } 
        else {
        	sc += "знаменателем."        	
        }
    }
    else {
    	sc += "наименьшим ";
        
        if (part == 0) {
        	sc += "числителем."
        } 
        else {
        	sc += "знаменателем."        	
        }
    }

    let descr = sc + "\n Пример вывода следующий: 92/190";

    let expl = "Сначала для удобства отберём числа с ";
    if (part == 0) {
        expl += "числителя "
    } 
    else {
    	expl += "знаменателя "        	
	}
    for (let i = 0; i < length; i += 1) {
        if (i == length - 1) {
    		expl += fractions[i].split("/")[part] + ". ";
        	continue;
        }
        expl += fractions[i].split("/")[part] + ", ";
	}
    if (max) {
    	expl += "\nТ.к. " + string(num[num.length() - 1]) + " наибольшее число. В ответ записываем дробь " + outp;
    }
    else {
    	expl += "\nТ.к. " + string(num[0]) + " наименьшее число. В ответ записываем дробь " + outp;
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