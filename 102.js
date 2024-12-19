//несоответствие 
/*
Создайте генератор паззлов, который будет генерировать 3-5 геометрических фигур на плоскости, а внутри каждой фигуры будет написано название любой геометрической фигуры 
(названия могут совпадать с названием фигуры в которой находятся, а могут и не совпадать). Человек в ответе должен указать количество фигур, у которых название внутри не совпадает 
с названием самой фигуры, в которой находится слово.
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

function random_figure() -> string { return ["квадрат", "круг", "треугольник", "пятиугольник"][rand_int(4)] }

function drawFigure(inpt: Canvas, figure: string, posX: int, posY: int) {
    if (figure == "квадрат") {
    	inpt.fill_rect(posX, posY, 120, 120, rgb(0, 0, 0), rgb(255, 255, 255), 2);
    }
    else if (figure == "круг") {
    	inpt.fill_ellipse(posX, posY, 120, 120, rgb(0, 0, 0), rgb(255, 255, 255), 2);
    }
    else if (figure == "треугольник") {
        let points: Point2D[] = [];
        points.push(new Point2D{x: float(posX), y: float(posY + 120)});
        points.push(new Point2D{x: float(posX + 60), y: float(posY)});
        points.push(new Point2D{x: float(posX + 120), y: float(posY + 120)});
        inpt.fill_polygon(points, rgb(0, 0, 0), rgb(255, 255, 255), 2);
    }
    else if (figure == "пятиугольник") {
    	let points: Point2D[] = [];
    	points.push(new Point2D{x: float(posX + 60), y: float(posY)});
    	points.push(new Point2D{x: float(posX + 120), y: float(posY + 61)});
    	points.push(new Point2D{x: float(posX + 110), y: float(posY + 120)});
    	points.push(new Point2D{x: float(posX + 10), y: float(posY + 120)});
    	points.push(new Point2D{x: float(posX), y: float(posY + 61)});
    	
        inpt.fill_polygon(points, rgb(0, 0, 0), rgb(255, 255, 255), 2);
    }
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let length = rand_int(level * 2) + 2;
    let inpt = new Canvas {};
    let sizeX = 650;
    let sizeY = 130;
    for (let i = 1; i <= length; i += 1) {
    	if (i % 5 == 0) {
            sizeY += 130
        }
    }
    inpt.init(sizeX, sizeY, rgba(255, 255, 255, 1.0));
    let posX = 5;
    let posY = 5;
    let figure: string[] = [];
    
    let ans = 0;
    for (let i = 1; i <= length; i += 1) {
        figure.push(random_figure());
    	drawFigure(inpt, figure[i - 1], posX, posY);
        
        if (rand_bool()) {
			if (figure[i - 1] == "треугольник") {
                inpt.text(posX + 60, posY + 65, "тре-", 16, rgb(0, 0, 0), "center");
                inpt.text(posX + 60, posY + 80, "угольник", 16, rgb(0, 0, 0), "center");
            }
            else if (figure[i - 1] == "пятиугольник") {
                inpt.text(posX + 60, posY + 75, figure[i - 1], 16, rgb(0, 0, 0), "center");
            }
            else {
                inpt.text(posX + 60, posY + 65, figure[i - 1], 16, rgb(0, 0, 0), "center");
            }
        }
        else {
            let temp = ["квадрат", "круг", "треугольник", "пятиугольник"][rand_int(4)]
        	while (figure[i - 1] == temp) {
				temp = ["квадрат", "круг", "треугольник", "пятиугольник"][rand_int(4)];
			}
            
            if (figure[i - 1] == "треугольник") {
                if (temp == "пятиугольник") {
                	inpt.text(posX + 60, posY + 65, "пяти-", 16, rgb(0, 0, 0), "center");
                	inpt.text(posX + 60, posY + 80, "угольник", 16, rgb(0, 0, 0), "center");
                }
                else {
                	inpt.text(posX + 60, posY + 75, temp, 16, rgb(0, 0, 0), "center");
                }
            }
            else if (figure[i - 1] == "пятиугольник") {
                inpt.text(posX + 60, posY + 75, temp, 16, rgb(0, 0, 0), "center");
            }
            else {
                inpt.text(posX + 60, posY + 65, temp, 16, rgb(0, 0, 0), "center");
            }
            
            ans += 1;
        }
        
        posX += 130;
        if (i % 5 == 0) {
        	posX = 5;
            posY += 130
        }
    }
    
    let outp = string(ans);
    let wrong = outp;
    while (wrong == outp) {
        wrong = string(rand_int(length) + 1);
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд фигур, а внутри каждой фигуры написано название геометрической фигуры. Её попросили " + whatDo + " количество фигур, у которых название внутри не совпадает с названием самой фигуры, в которой находится слово.";
    
    if (rand_bool()) {sc="Дан ряд фигур, а внутри каждой фигуры написано название геометрической фигуры. Требуется определить количество фигур, у которых название внутри не совпадает с названием самой фигуры, в которой находится слово.";}
	let descr = sc + "\n Пример вывода следующий: 2";

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