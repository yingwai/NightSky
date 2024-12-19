//Генератор: остаток от деления целых чисел
/*
Создайте генератор паззлов, который будет генерировать 2 целых числа и будет производить деление их друг на друга. 
Генератор будет просить определить и ввести остаток от деления большого целого числа на меньшее.
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

function divideAndReturnRemainder(a: int, b: int) -> int[] {
    if(a >= b){
        return [a / b, a % b];
    } else {
        return [b / a, b % a];
    }
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let num1 = rand_int(level * 5 - 1) + 2;
    let num2 = rand_int(level * 5 - 1) + 1;
    if (rand_bool()) {
    	while (num2 >= num1) {
            num2 = rand_int(level * 5 - 1) + 1;
        }
    }
    else {
    	while (num1 >= num2) {
            num1 = rand_int(level * 5 - 1) + 1;
        }
    }
    let inpt = string(num1) + " и " + string(num2);
    let ans = divideAndReturnRemainder(num1, num2);
    let outp = "";
    if (ans[1] == 0) {
    	outp = "Число делится без остатка"
    }
    else {
    	outp = "Остаток равен " + string(ans[1])
    }
    
    
    let wrong = "";
    if (outp == "Число делится без остатка") {
    	wrong = "Остаток равен " + string(rand_int(level * 2 - 2) + 1);
    }
    else {
        if (rand_bool()) {
        	wrong = "Число делится без остатка"
        }
        else {
        	wrong = "Остаток равен " + string(rand_int(level * 2 - 2) + 1);
            while (wrong == outp) {
            	wrong = "Остаток равен " + string(rand_int(level * 2 - 2) + 1);
            }
        }
    }
    
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " два числа, её попросили " + whatDo + " остаток от деления большого целого числа на меньшее.";

    if (rand_bool()) {sc="Даны два числа, требуется определить остаток от деления большого целого числа на меньшее."}
    let descr = sc + "\n Пример вывода следующий: \"Остаток равен 5\", \"Остаток равен 64\", \"Число делится без остатка\".";

    let expl = "Делим большее число на меньшее ";
    if (num1 >= num2) {
    	expl += string(num1) + "/" + string(num2) + "=" + string(ans[0]) + "(" + string(ans[1]) +")" + ". \n";
    }
    else {
    	expl += string(num2) + "/" + string(num1) + "=" + string(ans[0]) + "(" + string(ans[1]) +")" + ". \n";
    }
    if (outp == "Число делится без остатка") {
    	expl += "Число делится без остатка"
    }
    else {
    	expl += "Число делится с остатком " + outp.split(" ")[2]
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
