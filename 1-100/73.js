//Неравенство 
/*
Создайте генератор пазлов, который генерирует неравенство, где вместо знака сравнения стоит звездочка. Человеку нужно будет заменить звездочку на верный знак «>, < или =», 
чтоб образовалось правильное равенство или неравенство.
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
  let num1 = rand_int(100) + 1;
  let num2 = rand_int(100) + 1;
    
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
    for (let i = 0; i < level; i += 1) {
        if (i == level - 1) {
    		inpt += string(nums[i][0]) + "*" + string(nums[i][1]) + ".";
            continue;
        }
    	inpt += string(nums[i][0]) + "*" + string(nums[i][1]) + ", ";
    }
    
    let outp = "";
    	for (let i = 0; i < level; i += 1) {
            if (i == level - 1) {
                if (nums[i][0] > nums[i][1]) {
                    outp += string(nums[i][0]) + ">" + string(nums[i][1]) + ".";	
                }
                else if (nums[i][0] < nums[i][1]) {
                    outp += string(nums[i][0]) + "<" + string(nums[i][1]) + ".";	
                }
                else if (nums[i][0] == nums[i][1]) {
                    outp += string(nums[i][0]) + "=" + string(nums[i][1]) + ".";	
                }
                continue;
            }
            if (nums[i][0] > nums[i][1]) {
                outp += string(nums[i][0]) + ">" + string(nums[i][1]) + ", ";	
            }
            else if (nums[i][0] < nums[i][1]) {
                outp += string(nums[i][0]) + "<" + string(nums[i][1]) + ", ";	
            }
            else if (nums[i][0] == nums[i][1]) {
                outp += string(nums[i][0]) + "=" + string(nums[i][1]) + ", ";	
            }
        }
    let wrong = "";
        for (let i = 0; i < level; i += 1) {
            if (i == level - 1) {
                if (nums[i][0] > nums[i][1]) {
                    wrong += string(nums[i][0]) + "<" + string(nums[i][1]) + ".";	
                }
                else if (nums[i][0] < nums[i][1]) {
                    wrong += string(nums[i][0]) + ">" + string(nums[i][1]) + ".";	
                }
                else if (nums[i][0] == nums[i][1]) {
                    wrong += string(nums[i][0]) + "<>"[rand_int(2)] + string(nums[i][1]) + ".";	
                }
                continue;
            }
            if (nums[i][0] > nums[i][1]) {
                wrong += string(nums[i][0]) + "<" + string(nums[i][1]) + ", ";	
            }
            else if (nums[i][0] < nums[i][1]) {
                wrong += string(nums[i][0]) + ">" + string(nums[i][1]) + ", ";	
            }
            else if (nums[i][0] == nums[i][1]) {
                wrong += string(nums[i][0]) + "<>"[rand_int(2)] + string(nums[i][1]) + ", ";	
            }
        }
    
  
    let task = "Дан|Представлен|Выставлен|Указан|Показан|Подчёркнут|Выделен".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "заменить|поменять|сменять".split("|")[rand_int(3)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task;
    if (level > 1) {
    	sc += "ы пары чисел, где вместо знака сравнения стоит звездочка. Её попросили " + whatDo + " звездочку на верный знак «>, < или =», чтоб образовалось правильное равенство или неравенство.";
    	if (rand_bool()) {sc="Даны пары чисел, где вместо знака сравнения стоит звездочка. Требуется заменить звездочку на верный знак «>, < или =», чтоб образовалось правильное равенство или неравенство."}
    }
    else {
    	sc += "а пара чисел, где вместо знака сравнения стоит звездочка. Её попросили " + whatDo + " звездочку на верный знак «>, < или =», чтоб образовалось правильное равенство или неравенство.";
    	if (rand_bool()) {sc="Дана пара чисел, где вместо знака сравнения стоит звездочка. Требуется заменить звездочку на верный знак «>, < или =», чтоб образовалось правильное равенство или неравенство."}
    }
    
    let descr = sc + "\n Пример вывода следующий: \"77>42, 49>16.\", \"93>11, 64>33, 42<55, 45=45, 41>15.\"";

    let expl = "";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/