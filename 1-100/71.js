//Произведение 
/*
Сделайте генератор паззлов, который на входе показывает несколько простых примеров. Требуется решить только те примеры, в которых нужно найти произведение. 
Затем все эти ответы выстроить в порядке возрастания.
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
    	nums.push(rand_int(100) + 1);
    	nums.push(rand_int(100) + 1);
    }
    
    let operator: string[] = [];
    for (let i = 0; i < nums.length(); i += 2) {
    	operator.push("/*+-"[rand_int(4)]);
    	operator.push(" ");
    }
    
    let inpt = "";
    let pr: int[] = [];
    for (let i = 0; i < nums.length(); i += 2) {
        if (i == nums.length() - 2) {
        	inpt += string(nums[i]) + " " + operator[i] + " " + string(nums[i + 1]) + ".";
            if (operator[i] == "*") {
                pr.push(i);
            }
            
            continue;
        }
        inpt += string(nums[i]) + " " + operator[i] + " " + string(nums[i + 1]) + ", ";
        
        if (operator[i] == "*") {
        	pr.push(i);
        }
    }
    let outp = "";
    let wrong = "";
	let expl = "";
    let ans: int[] = [];
    if (pr.length() >= 1) {
    	for (let i = 0; i < pr.length(); i += 1) {
            if (i == pr.length() - 1) {
                wrong += string(nums[pr[i]] * nums[pr[i] + 1]) + ".";
                ans.push(nums[pr[i]] * nums[pr[i] + 1]);
                continue;
            }
            ans.push(nums[pr[i]] * nums[pr[i] + 1]);
            wrong += string(nums[pr[i]] * nums[pr[i] + 1]) + ", "; 
        }
        
        if (ans.length() == 0) {
            expl += "Ответ: Нет примеров, в которых нужно найти произведение."
        }
        else {
            expl += "Посчитавем выражение в которых есть произведение: \n";
            for (let i = 0; i < ans.length(); i += 1) {
                expl += string(nums[pr[i]]) + " * " + string(nums[pr[i] + 1]) + " = " + string(ans[i]) + "\n"; 
            }
        }
        
        ans.sort();
        for (let i = 0; i < ans.length(); i += 1) {
            if (i == ans.length() - 1) {
                outp += string(ans[i]) + ".";
                expl += "Выстроим в порядке возрастания и получим ответ " + outp;
                continue;
            }
            outp += string(ans[i]) + ", "; 
        }
        
        if (wrong == outp) {
        	wrong = "Нет примеров, в которых нужно найти произведение.";
        }
    }
    else {
    	outp = "Нет примеров, в которых нужно найти произведение.";
        wrong = string(rand_int(100) * rand_int(100)) + "."; 
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд выражений, её попросили " + whatDo + " только те примеры, в которых нужно найти произведение. Затем все эти ответы выстроить в порядке возрастания.";

    if (rand_bool()) {sc = "Дан ряд выражений, требуется рассчитать только те примеры, в которых нужно найти произведение. Затем все эти ответы выстроить в порядке возрастания.";};
    let descr = sc + "\n Пример вывода следующий: \"696, 1836, 8811.\" или \"Нет примеров, в которых нужно найти произведение.\"";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/