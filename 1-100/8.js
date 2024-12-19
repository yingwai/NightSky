//Факториалы
/*
Разница двух факториалов
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

function factorial(value:int) -> int{
    if (value == 1 || value == 0) {
        return 1;
    }
    return value * factorial(value-1);
}

function getFactorialString(value:int) -> string{
    let result = "";
    for(let i = value; i > 0; i-=1){
        if (i == 1) {result += string(i)}
        else {result += string(i)+" * "}      
    }
    return result;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let num1 = rand_int(level + 1) + 1;
    let num2 = rand_int(level + 1) + 1;
    
    let inpt = string(num1) + "! - " + string(num2) + "!";
    let outp = string(factorial(num1) - factorial(num2));
    let wrong = string(factorial(num1) + factorial(num2));
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " два факторила, её попросили " + whatDo + " их разность.";

    if (rand_bool()) {sc="Требуется определить разность двух факториалов."}
    let descr = sc + "\n Формат вывода, следующий: число. \n Пример: 1.";
    
    let expl = "Даны 2 факториала: " + string(num1) + "!, " + string(num2) + "!. \n Необходимо найти факториал: \n 1. " + getFactorialString(num1) + " = " + string(factorial(num1)) + ".\n 2. "+ getFactorialString(num2)+ " = " + string(factorial(num2)) +".\n Необходимо найти их разность следующим образом: "+ string(factorial(num1))+" - "+string(factorial(num2)) + " = "+ outp;
    
     return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/