//порядок событий - фигуры
/*
Сделайте генератор паззлов, который рисует фигуры разных цветов в ряд в определённой последовательности и просит указать следующую фигуру. Например: круг квадрат треугольник и т.д.
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

struct NamedColor {
    name: string,
    color: Color,
}

function random_figure() -> string { return ["квадрат", "круг", "треугольник", "пятиугольник"][rand_int(4)] }
function random_named_color() -> NamedColor {
    let gr = 100;
    let options = [
        new NamedColor { name: "синий", color: rgb(0, 0, 155) },
        new NamedColor { name: "красный", color: rgb(155, 0, 0) },
        new NamedColor { name: "зелёный", color: rgb(0, 155, 0) },
        new NamedColor { name: "жёлтый", color: rgb(255, 255, 0) },
        new NamedColor { name: "розовый", color: [rgb(255, 192, 203), rgb(255, 105, 180), rgb(255, 20, 147)][rand_int(3)] },
        new NamedColor { name: "оранжевый", color: [rgb(255, 140, 0), rgb(255, 165, 0), rgb(255, 127, 80)][rand_int(3)] },
        new NamedColor { name: "фиолетовый", color: rgb(128, 0, 128) },
        new NamedColor { name: "коричневый", color: [rgb(139, 69, 19), rgb(165, 42, 42), rgb(210, 105, 30)][rand_int(3)] },
        new NamedColor { name: "белый", color: rgb(255, 255, 255) },
        new NamedColor { name: "чёрный", color: rgb(0, 0, 0) },
        new NamedColor { name: "серый", color: rgb(gr, gr, gr) }
    ];
    return options[rand_int(options.length())];
}

function drawFigure(inpt: Canvas, figure: string, color: NamedColor, posX: int, posY: int) {
    if (figure == "квадрат") {
    	inpt.fill_rect(posX, posY, 40, 40, rgb(0, 0, 0), color.color, 2);
    }
    else if (figure == "круг") {
    	inpt.fill_ellipse(posX, posY, 40, 40, rgb(0, 0, 0), color.color, 2);
    }
    else if (figure == "треугольник") {
        let points: Point2D[] = [];
        points.push(new Point2D{x: float(posX), y: float(posY + 40)});
        points.push(new Point2D{x: float(posX + 20), y: float(posY)});
        points.push(new Point2D{x: float(posX + 40), y: float(posY + 40)});
        inpt.fill_polygon(points, rgb(0, 0, 0), color.color, 2);
    }
    else if (figure == "пятиугольник") {
    	let points: Point2D[] = [];
    	points.push(new Point2D{x: float(posX + 20), y: float(posY)});
    	points.push(new Point2D{x: float(posX + 40), y: float(posY + 21)});
    	points.push(new Point2D{x: float(posX + 30), y: float(posY + 40)});
    	points.push(new Point2D{x: float(posX + 10), y: float(posY + 40)});
    	points.push(new Point2D{x: float(posX), y: float(posY + 21)});
    	
        inpt.fill_polygon(points, rgb(0, 0, 0), color.color, 2);
    }
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let length = rand_int(level * 2) + 2;
    let inpt = new Canvas {};
    let sizeX = 250;
    let sizeY = 50;
    for (let i = 1; i <= length; i += 1) {
    	if (i % 5 == 0) {
            sizeY += 50
        }
    }
    inpt.init(sizeX, sizeY, rgba(255, 255, 255, 1.0));
    let posX = 5;
    let posY = 5;
    let figure: string[] = [];
    let color: NamedColor[] = [];
    for (let i = 1; i <= length; i += 1) {
        figure.push(random_figure());
        color.push(random_named_color());
    	drawFigure(inpt, figure[i - 1], color[i - 1], posX, posY);
        posX += 50;
        if (i % 5 == 0) {
        	posX = 5;
            posY += 50
        }
    }
    
    let outp = "";
    let wrong = "";
    
    let place = rand_int(length);
    let side = "";
    let nsColor = random_named_color().name;
    let nsFigure = random_figure();
    if (place == 0) {
    	side = "справа";
        if (rand_bool()) {
        	nsColor = color[place + 1].name;
            nsFigure = figure[place + 1];
        }
        
        if (figure[place + 1] == nsFigure && color[place + 1].name == nsColor) {
        	outp = "Да";
            wrong = "Нет";
        }
        else {
        	outp = "Нет";
			wrong = "Да";
        }
    }
    else if (place == length - 1) {
    	side = "слева";
        if (rand_bool()) {
        	nsColor = color[place - 1].name;
            nsFigure = figure[place - 1];
        }
        
        if (figure[place - 1] == nsFigure && color[place - 1].name == nsColor) {
        	outp = "Да";
            wrong = "Нет";
        }
        else {
        	outp = "Нет";
			wrong = "Да";
        }
    }
    else {
    	side = "справа|слева".split("|")[rand_int(2)];
        if (side == "справа") {
            if (rand_bool()) {
                nsColor = color[place + 1].name;
                nsFigure = figure[place + 1];
            }
            
        	if (figure[place + 1] == nsFigure && color[place + 1].name == nsColor) {
                outp = "Да";
                wrong = "Нет";
            }
            else {
                outp = "Нет";
                wrong = "Да";
            }
        }
        else {
            if (rand_bool()) {
                nsColor = color[place - 1].name;
                nsFigure = figure[place - 1];
            }
            
        	if (figure[place - 1] == nsFigure && color[place - 1].name == nsColor) {
                outp = "Да";
                wrong = "Нет";
            }
            else {
                outp = "Нет";
                wrong = "Да";
            }
        }
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "понять|указать|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд фигур";
    if (length > 5) {
    	sc += ", где новая строка это продолжение одной строки. Её попросили " + whatDo + " имеется ли " + side + " " + string(place + 1) + " фигуры " + nsColor + " " + nsFigure + ".";
    }
    else {
    	sc += ". Её попросили " + whatDo + " имеется ли " + side + " " + string(place + 1) + " фигуры " + nsColor + " " + nsFigure + ".";
    }

    if (rand_bool()) {sc="Дан ряд фигур"};
    if (length > 5) {
    	sc += ", где новая строка это продолжение одной строки. Требуется определить имеется ли " + side + " " + string(place + 1) + " фигуры " + nsColor + " " + nsFigure + ".";
    }
    else {
    	sc += ". Требуется определить имеется ли " + side + " " + string(place + 1) + " фигуры " + nsColor + " " + nsFigure + ".";
    }
    let descr = sc + "\n Пример вывода следующий: \"Да\", \"Нет\"";

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