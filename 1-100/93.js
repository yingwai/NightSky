//Генератор задач на перевод полученного значения после деления столбиком в дробь
/*
Сделайте генератор паззлов, в котором в начале дается некое значение после деления вида остаток, целая часть и просит обратить ее в дробный вид.
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
    while (num2 >= num1) {
    	num2 = rand_int(level * 5 - 1) + 1;
    }
    
    let ans = divideAndReturnRemainder(num1, num2);
    
    let inpt = string(ans[0]) + "(" + string(ans[1]) +")";
    
    let outp = string(num1) + "/" + string(num2);
    let wrong = outp;
    while (wrong == outp) {
        if (rand_bool() && num1 > 6) {
        	wrong = string(num1 - (rand_int(5) + 1)) + "/" + string(num2);
        }
        else {
        	wrong = string(num1 + (rand_int(5) + 1)) + "/" + string(num2);
        }
    }
    
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Выделены".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "преобразовать|обратить|видоизменить".split("|")[rand_int(3)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " два числа: целая часть и остаток после деления. Её попросили " + whatDo + " в дробный вид, если известно что знаменатель был " + string(num2) + ". Полученную дробь сокращать не надо.";

    if (rand_bool()) {sc="Даны два числа: целая часть и остаток после деления. Требуется преобразовать в дробный вид, если известно что знаменатель был " + string(num2) + ". Полученную дробь сокращать не надо."}
    let descr = sc + "\n Пример вывода следующий: 7/2";

    let expl = "Приведём числа в дробь ";
    expl += string(ans[0]) + " " + string(ans[1]) + "/" + string(num2) + "\n" + 
            	string(ans[0]) + "*" + string(num2) + "+" + string(ans[1]) + "=" + string(num1) + "/" + string(num2) + "\n";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/