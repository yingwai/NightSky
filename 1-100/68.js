//Генератор кубики, общая сумма
/*
Создайте генератор паззлов, в которых генерируются 2 квадрата (кубики) на которых написано выпавшее число(от 1 до 6), и число, от n до 18? 
где n = (число на первом кубике)+(число на втором кубике)+1 . Необходимо определить какое число должно быть на третьем кубике, что бы сумма 3-х кубиков равнялась сгенерированному числу.
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
    
    let length = rand_int(level) + 2;
    let num: int[] = [];
    let inpt = new Canvas{};
    let sizeX = 0;
    let sizeY = 50;
    for (let i = 0; i < length; i += 1) {
        num.push(rand_int(6) + 1);
        if (i < 5) {
        	sizeX += 50;
        }
        else if (i % 5 == 0) {
        	sizeY += 50;
        }
    }
    inpt.init(sizeX, sizeY, rgba(255, 255, 255, 1.0));
    let posX = 5;
    let posY = 5;
    for (let i = 1; i <= length; i += 1) {
    	inpt.fill_rect(posX, posY, 40, 40, rgb(0, 0, 0), rgb(255, 255, 255), 2);
        
        if (num[i - 1] == 1) {
        	inpt.fill_ellipse(posX + 18, posY + 18, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        }
        else if (num[i - 1] == 2) {
        	inpt.fill_ellipse(posX + 8, posY + 8, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 28, posY + 28, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        }
        else if (num[i - 1] == 3) {
        	inpt.fill_ellipse(posX + 8, posY + 8, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 18, posY + 18, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 28, posY + 28, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        }
        else if (num[i - 1] == 4) {
        	inpt.fill_ellipse(posX + 8, posY + 8, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 28, posY + 8, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 8, posY + 28, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 28, posY + 28, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        }
        else if (num[i - 1] == 5) {
        	inpt.fill_ellipse(posX + 8, posY + 8, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 28, posY + 8, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 18, posY + 18, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 8, posY + 28, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 28, posY + 28, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        }
        else if (num[i - 1] == 6) {
        	inpt.fill_ellipse(posX + 8, posY + 8, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 28, posY + 8, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 8, posY + 18, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 28, posY + 18, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 8, posY + 28, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        	inpt.fill_ellipse(posX + 28, posY + 28, 5, 5, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        }
        
        posX += 50;
        if (i % 5 == 0 && i != 0) {
        	posX = 5;
            posY += 50;
        }
    }
    let sum = num[0];
    let dop = rand_int(6) + 1;
    for (let i = 1; i < length; i += 1) {
    	sum += num[i];
    }
    let outp = "Следующий кубик должен быть равен " + string(dop);
    let wrong = outp;
    while (wrong == outp) {
    	wrong = "Следующий кубик должен быть равен " + string(rand_int(6) + 1);
    }
    
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд кубиков, её попросили " + whatDo + " чему должен равняться следующий кубик, чтобы сумма всех кубиков равнялась " + string(sum + dop) + ".";

    if (rand_bool()) {sc="Дан ряд кубиков, требуется определить чему должен равняться следующий кубик, чтобы сумма всех кубиков равнялась " + string(sum + dop) + "."};
    let descr = sc + "\n Формат вывода следующий: Следующий кубик должен быть равен 3";

    let expl = "Рассчитаем сумму всех кубиков ";
    for (let i = 0; i < length; i += 1) {
        if (i == length - 1) {
        	expl += string(num[i]) + "=" + string(sum) + "\n" + 
                	"Выясним чему должен равняться следующий кубик " + string(sum + dop) + "-" + string(sum) + "=" + string(dop);
            continue;
        }
        expl += string(num[i]) + "+";
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