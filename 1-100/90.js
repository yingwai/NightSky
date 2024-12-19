//Генератор задач: арифметические последовательности
/*
Создайте генератор задач, который на входе показывает 4-8 арифметических равенств, где в правой части число, 
а в левой группа чисел и арифметических операций между (не менее 3 операций между числами). На выходе человек должен указать верные/неверные равенства при условии что в левой части 
отсутствует какая либо арифметическая операция, либо отсутствует/присутствует какое-либо конкретное число.
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

function createNumbers() -> int[] {
  let num1 = rand_int(100) + 4;
  let num2 = rand_int(100) + 4;
    
  return [num1, num2];
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let nums: int[][] = [];
    for (let i = 0; i < level; i += 1) {
    	nums.push(createNumbers());
    }
    
    let inpt = "";
	let expression: int[][] = [];
    for (let i = 0; i < level; i += 1) {
        let temp = [rand_int(100) + 1, rand_int(100) + 1, rand_int(100) + 1, rand_int(100) + 1];
                
        if (rand_bool()) {
            while (temp[0] + temp[1] + temp[2] + temp[3] != nums[i][1]) {
                temp[0] = rand_int(nums[i][1]);
                temp[1] = rand_int(nums[i][1]);
                temp[2] = rand_int(nums[i][1]);
                temp[3] = rand_int(nums[i][1]);
            }
        }
        else {
        	while (temp[0] >= nums[i][0]) {
                temp[0] = rand_int(100) + 1;
            }
            while (temp[1] >= nums[i][0]) {
                temp[1] = rand_int(100) + 1;
            }
            while (temp[2] >= nums[i][0]) {
                temp[2] = rand_int(100) + 1;
            }
            while (temp[3] >= nums[i][0]) {
                temp[3] = rand_int(100) + 1;
            }
        }
        
        expression.push(temp);
        
    	inpt += string(expression[i][0]) + "+" + string(expression[i][1]) + "+" + string(expression[i][2]) + "+" + string(expression[i][3]) + "=" + string(nums[i][1]) + "\n";
    }
    
    let outp = "";
    for (let i = 0; i < level; i += 1) {
        if (expression[i][0] + expression[i][1] + expression[i][2] + expression[i][3] == nums[i][1]) {
        	outp += "Равенство верно. \n";
        }
        else {
        	outp += "Равенство неверно. \n";
        }
    }
    let wrong = outp;
    while (wrong == outp) {
        wrong = "";
    	for (let i = 0; i < level; i += 1) {
            wrong += "Равенство верно. \n|Равенство неверно. \n".split("|")[rand_int(2)];
        }
    }
    
  
    let task = "Дан|Представлен|Выставлен|Указан|Показан|Подчёркнут|Выделен".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task;
    if (level > 1) {
    	sc += "о равенство. Её попросили " + whatDo + " левую арифметическую операцию, сравнить получившиеся число с правым числом и ответить, верно ли это равенство. Ответ на каждое равенство писать с новой строки.";
    	if (rand_bool()) {sc="Дано равенство. Требуется рассчитать левую арифметическую операцию, сравнить получившиеся число с правым числом и ответить, верно ли это равенство. Ответ на каждое равенство писать с новой строки."}
    }
    else {
    	sc += "ы равенства. Её попросили " + whatDo + " левую арифметическую операцию, сравнить получившиеся число с правым числом и ответить, верно ли это равенство. Ответ на каждое равенство писать с новой строки.";
    	if (rand_bool()) {sc="Даны равенства. Требуется рассчитать левую арифметическую операцию, сравнить получившиеся число с правым числом и ответить, верно ли это равенство. Ответ на каждое равенство писать с новой строки."}
    }
    
    let descr = sc + "\n Пример вывода следующий: \n\"Равенство верно.\n Равенство неверно.\", \n\"Равенство верно.\n Равенство верно.\", \n\"Равенство неверно.\n Равенство неверно.\" (записывать без кавычек)";

    let expl = "";
    for (let i = 0; i < level; i += 1) {
    	expl += string(expression[i][0]) + "+" + string(expression[i][1]) + "+" + string(expression[i][2]) + "+" + string(expression[i][3]) + "=" + string(expression[i][0] + expression[i][1] + expression[i][2] + expression[i][3]);
        if (expression[i][0] + expression[i][1] + expression[i][2] + expression[i][3] == nums[i][1]) {
        	expl += ", " + string(expression[i][0] + expression[i][1] + expression[i][2] + expression[i][3]) + "=" + string(nums[i][1]) + ", следовательно равенство верно. \n"
        }
        else if (expression[i][0] + expression[i][1] + expression[i][2] + expression[i][3] > nums[i][1]) {
        	expl += ", " + string(expression[i][0] + expression[i][1] + expression[i][2] + expression[i][3]) + ">" + string(nums[i][1]) + ", следовательно равенство неверно. \n"
        }
        else if (expression[i][0] + expression[i][1] + expression[i][2] + expression[i][3] < nums[i][1]) {
        	expl += ", " + string(expression[i][0] + expression[i][1] + expression[i][2] + expression[i][3]) + "<" + string(nums[i][1]) + ", следовательно равенство неверно. \n"
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