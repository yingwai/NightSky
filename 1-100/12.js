//нахождение числа
/*
Сделайте генератор пазлов, который будет выдавать два числа. Главное, чтобы число Х было больше, чем число А. 
Человеку нужно будет найти ближайшее число к Х, чтобы его можно было нацело поделить на А.
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
    
    let x = rand_int(level * 5 - 1) + 1;
    if (x <= 4) {x = rand_int(10 - 5) + 5}
    let a = rand_int(level * 5 - 1) + 1;
    while (a >= x) {
    	a = rand_int(level * 5 - 1) + 1;
    } 
    
    let inpt = string(x) + " и " + string(a);
    
    let b = [x, x];
    let correct = 0;
    for (let i = x; i > 0; i -= 1) {
        if (b[0] % a == 0) {
            correct = b[0];
            break;
        }
        if (b[1] % a == 0) {
            correct = b[1];
            break;
        }
        else {
        	b[0] -= 1;
        	b[1] += 1;        	
        }
    }
    let outp = string(correct);
    
    let c = rand_int(level * 5 - 1) + 1;
    while (c % a == 0 && c == b[0] || c == b[1]) {
    	c = rand_int(level * 5 - 1) + 1
    }
    let wrong = string(c);
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " два числа, её попросили " + whatDo + " ближайшее число к первому, чтобы его можно было нацело поделить на второе.";

    if (rand_bool()) {sc="Требуется определить ближайшее число к первому, чтобы его можно было нацело поделить на второе."}
    let descr = sc + "\n Формат вывода, следующий: число. \n Пример: 48.";
    
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