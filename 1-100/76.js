//Интервалы чисел: Коэффициент
/*
Создать генератор, который выводит n-ое количество объектов/фигур/ячеек и т.д. (в которые можно будет поместить информацию, т.е. текст), в эти ячейки необходимо записать число, 
которое получилось в результате сложения всех допустимых целых чисел в записанном интервале( К примеру от 20 до 25). Однако затем эту сумму необходимо умножить на определенный коэффициент, 
например "2". (Такое значение не используйте)
*/

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: Canvas,
    output: string,
    wrong_output: string,
    explanation: string
}

function sumNumbers(numbers: int[]) -> int {
    let sum = 0;
    for (let i = 0; i < numbers.length(); i += 1) {
        sum += numbers[i];
    }
    return sum;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let interval: int[][] = [[rand_int(level * 5), rand_int(level * 5) + 1]];
    while (interval[0][1] <= interval[0][0]) {
    	interval[0][1] = rand_int(level * 5) + 1;
    }
    
    let count = interval[0][1] - interval[0][0];
	let temp: int[] = [];
    for (let i = 0; i <= count; i += 1) {
        temp.push(interval[0][0] + i);
        
        if (i == count) {
        	interval.push(temp);
        }
    }
    
    let inpt = new Canvas {};
    let sizeX = 400;
    let sizeY = 50;
    for (let i = 1; i <= count; i += 1) {
        if (i % 8 == 0) {
        	sizeY += 50;
        }
    }
    inpt.init(sizeX, sizeY, rgba(255, 255, 255, 1.0));
    
    let indentX = 5;
    let indentY = 5;
    for (let i = 0; i <= count; i += 1) {
    	inpt.fill_rect(indentX, indentY, 40, 40, rgb(0, 0, 0), rgb(255, 255, 255), 2);	
        inpt.text(indentX + 20, indentY + 27, string(interval[1][i]), 16, rgb(0, 0, 0), "center");
        indentX += 50;
        
        if (i % 8 == 0 && i != 0) {
        	indentY += 50;
            indentX = 5;
        }
    }
    
    let sum = sumNumbers(interval[1]);
    let coaf = rand_int(5) + 1;
    let outp = string(sum * coaf);
    let wrong = outp;
    while (wrong == outp) {
    	wrong = string(sum * (rand_int(5) + 1));
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Показан|Подчёркнут|Выделен".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд ячеек в которых записан интервал от " + string(interval[0][0]) + " до " + string(interval[0][1]) + ", её попросили " + whatDo + " сумму чисел в ячейках, после эту сумму необходимо умножить на коэффициент " + string(coaf) + " и записать в ответ.";

    if (rand_bool()) {sc="Дан ряд ячеек в которых записан интервал от " + string(interval[0][0]) + " до " + string(interval[0][1]) + ". Требуется рассчитать сумму чисел в ячейках, после эту сумму необходимо умножить на коэффициент " + string(coaf) + " и записать в ответ."}
    let descr = sc + "\n Пример вывода следующий: 8075";

    let expl = "Рассчитаем сумму чисел в ячейках ";
    for (let i = 0; i <= count; i += 1) {
        if (i == count) {
    		expl += string(interval[1][i]) + "=" + string(sum);
            continue;
        }
    	expl += string(interval[1][i]) + "+";
    }
    expl += "\nРассчитаем ответ умножев сумму на коэффициент " + string(sum) + "*" + string(coaf) + "=" + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/