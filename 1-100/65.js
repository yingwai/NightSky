//Генератор примеров на вычитание
/*
Сделайте генератор паззлов, который на входе показывает два числа, и просит посчитать их разность. Первое число обязательно должно быть больше второго. Каждое из чисел не должно быть больше 10.
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
    
    let nums: int[] = [];
    for (let i = 0; i < level; i += 1) {
    	nums.push(rand_int(10) + 1);
    	nums.push(rand_int(10) + 1);
    }
    
    for (let i = 0; i < nums.length(); i += 2) {
    	while (nums[i + 1] >= nums[i] || nums[i] > 10 || nums[i + 1] > 10) {
            if (rand_bool()) {
                if (level == 1) {
                    nums[i] = rand_int(10) + 1;
                	nums[i + 1] = rand_int(10) + 1;
                	continue;
                }
                nums[i] = rand_int(10) + 1;
                nums[i + 1] = rand_int(10) + 1;
            }
            else {
                if (level == 1) {
                    nums[i] = rand_int(10) + 1;
                	nums[i + 1] = rand_int(10) + rand_int(3);
                	continue;
                }
                nums[i] = rand_int(10) + 1;
                nums[i + 1] = rand_int(10) + 1;
            }
        }	
    }
    
    let inpt = "";
    for (let i = 0; i < nums.length(); i += 2) {
        if (i == nums.length() - 2) {
        	inpt += string(nums[i]) + " - " + string(nums[i + 1]) + ".";
            continue;
        }
        inpt += string(nums[i]) + " - " + string(nums[i + 1]) + ", ";    	
    }
    let outp = "";
    for (let i = 0; i < nums.length(); i += 2) {
        if (i == nums.length() - 2) {
        	outp += string(nums[i] - nums[i + 1]) + ".";
            continue;
        }
		outp += string(nums[i] - nums[i + 1]) + ", ";
    }
    let wrong = outp;
    while (wrong == outp) {
        wrong = "";
    	for (let i = 0; i < nums.length(); i += 2) {
            let temp = rand_int(nums[i]);
            if (i == nums.length() - 2) {
                wrong += string(temp) +  ".";
                continue;
            }
            wrong += string(temp) + ", ";
        }
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task;
    if (level != 1) {
    	sc += " выражения, её попросили " + whatDo + " разность каждого и записать в ответ.";
    }
    else {
    	sc += " два числа, её попросили " + whatDo + " их разность.";
    }

    if (rand_bool()) {
        if (level != 1) {
            sc = "Даны выражения, требуется определить разность каждого и записать в ответ.";
        }
        else {
            sc = "Даны два числа, требуется определить их разность.";
        }
    };
    let descr = sc + "\n Пример вывода следующий: 1, 2.";
    let expl = "Решение выражения \n";
    for (let i = 0; i < nums.length(); i += 2) {
        if (i == nums.length() - 2) {
        	expl += string(nums[i]) + "-" + string(nums[i + 1]) + "=" + string(nums[i] - nums[i + 1]) + ".";
            expl += "\n Следовательно ответ " + outp;
            continue;
        }
    	expl += string(nums[i]) + "-" + string(nums[i + 1]) + "=" + string(nums[i] - nums[i + 1]) + ", ";
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
