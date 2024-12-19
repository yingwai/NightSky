//причина-следствие - столкновение
/*
Сделайте генератор паззлов, где необходимо определить следствие от столкновения двух предметов разной массы, определить какой объект отлетит дальше при одинаковой скорости до их столкновения. 
То есть, если два квадрата с массой 10 кг и 100 кг, столкнуться с одинаковой скоростью, то квадрат с меньшей массой отлетит дальше.
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

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let count = rand_int(level) + 2;
    
    let inpt = new Canvas {};
    let sizeY = 140;
    for (let i = 1; i <= count; i += 1) {
        if (i % 6 == 0) {
            sizeY += 140;
        }
    }
    inpt.init(790, sizeY, rgba(255, 255, 255, 1.0));
    
    let ves: int[] = [];
    let ans: int[] = [];
    for (let i = 1; i <= count; i += 1) {
        let temp = rand_int(level * 50) + 1;
        for (let j = 1; j <= ves.length(); j += 1) {
            while (temp == ves[j - 1]) {
        		temp = rand_int(level * 50) + 1;
                j = 1;
            }
        }
        
    	ves.push(temp);
    	ans.push(temp);
    }
    
    let indentX = 10;
    let indentY = 10;
    for (let i = 1; i <= count; i += 1) {
    	inpt.fill_rect(indentX, indentY, 120, 120, rgb(0, 0, 0), rgb(255, 255, 255), 2);
        inpt.text(indentX + 65, indentY + 65, string(ves[i - 1]) + " кг.", 20, rgb(0, 0, 0), "center");
        indentX += 130;
        if (i % 6 == 0) {
        	indentX = 10;
            indentY += 130;
        }
    }
    
    ans.sort()
    let outp = "";
    for (let i = 1; i <= count; i += 1) {
        if (ans[0] == ves[i - 1]) {
        	outp = string(i) + " предмет"
        }
    }
    let wrong = outp;
    while (wrong == outp) {
    	wrong = string(rand_int(ves.length()) + 1) + " предмет"
    }
    
  
    let task = "Дан|Представлен|Выставлен|Указан|Показан|Подчёркнут|Выделен".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд предметов разной массы, её попросили " + whatDo + " какой предмет отлетит дальше, при условии, что они столкнутся с одинаковой скоростью.";

    if (rand_bool()) {sc="Дан ряд предметов разной массы. Требуется определить какой предмет отлетит дальше, при условии, что они столкнутся с одинаковой скоростью.";}
    let descr = sc + "\n Пример вывода следующий: \"1 предмет\", \"5 предмет\"";
    
    let expl = "Найдём предмет с наименьшим вес: " + outp + " = " + string(ans[0]) + " кг.\n Т.к. данный предмет самый лёгкий, именно он отлетит дальше, следовательно ответ " + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/