//Генератор: геометрические фигуры
/*
Создайте генератор паззлов, который рисует два больших круга, которые содержат множество произвольных геометрических фигур. 
Генератор просит умножить количество определённых фигур в первом круге на количество определённых фигур во втором круге и ввести полученное значение.
*/ 

/*
struct Puzzle {
    descr: string,
    input: Canvas,
    output: int,
    wrong_output: int,
    explanation: string
}

struct NamedColor {
    name: string,
    color: Color,
}

function draw_figure(c: Canvas, x: int, y: int, figure: string, size: int, fg: Color, bg: Color) {
    let other_size = size * 2;
    if (rand_bool()) { other_size = size / 2; }
    
    let line = rand_int(3) + 1;
    if (figure == "square") {
        let points: Point2D[] = [];
        let ang = float(rand_int(360)) * 3.1415926 / 180.0;
        for (let i = 0; i < 4; i += 1) {
            ang += 90.0 * 3.1415926 / 180.0;
            points.push(new Point2D{x: float(x) + float(size) * cos(ang), y: float(y) + float(size) * sin(ang)});
        }
        c.fill_polygon(points, fg, bg, line);
    }
    if (figure == "circle") {
        c.fill_ellipse(x - size, y - size, size * 2, size * 2, fg, bg, line);
    }
    if (figure == "triangle" || figure == "equilateral triangle" || figure == "isosceles triangle" || figure == "right triangle") {
        let rand_kind = rand_int(4);
        let points: Point2D[] = [];
        let ang0 = float(rand_int(360)) * 3.1415926 / 180.0;
        let angs: float[] = [];
        if (figure == "equilateral triangle" || figure == "triangle" && rand_kind == 0) {
            angs = [ang0, ang0 + 120.0 * 3.1415926 / 180.0, ang0 + 240.0 * 3.1415926 / 180.0]
        } else if (figure == "isosceles triangle" || figure == "triangle" && rand_kind == 1) {
            let dang = float(rand_int(21) + 20);
            if (rand_bool()) { dang = float(rand_int(21) + 80); }
           	angs = [ang0, ang0 + (180.0 - dang) * 3.1415926 / 180.0, ang0 + (180.0 + dang) * 3.1415926 / 180.0]
        } else if (figure == "right triangle" || figure == "triangle" && rand_kind == 2) {
            let dang = float(rand_int(121) + 30);
           	angs = [ang0, ang0 + dang * 3.1415926 / 180.0, ang0 + (180.0 + dang) * 3.1415926 / 180.0]
        } else {
            let a1 = float(rand_int(21) + 4);
            let a2 = float(rand_int(21) + 4);
            let sum = float(rand_int(21) + 4) + a1 + a2;
            angs.push(ang0);
            ang0 += 2.0 * 3.1415926 * a1 / sum;
            angs.push(ang0);
            ang0 += 2.0 * 3.1415926 * a2 / sum;
            angs.push(ang0);
        }
        for (let i = 0; i < 3; i += 1) {
            points.push(new Point2D{x: float(x) + float(size) * cos(angs[i]), y: float(y) + float(size) * sin(angs[i])});
        }
        c.fill_polygon(points, fg, bg, line);
    } else if (figure == "pentagon") {
        let points: Point2D[] = [];
        let ang = float(rand_int(360)) * 3.1415926 / 180.0;
        for (let i = 0; i < 5; i += 1) {
            ang += 72.0 * 3.1415926 / 180.0;
            points.push(new Point2D{x: float(x) + float(size) * cos(ang), y: float(y) + float(size) * sin(ang)});
        }
        c.fill_polygon(points, fg, bg, line);
    }
}

function random_color() -> Color { return rgba(rand_int(256), rand_int(256), rand_int(256), 0.5); }

function random_figure() -> string { return ["square", "circle", "triangle", "pentagon"][rand_int(4)] }

function gen_puzzle(level: int) -> Puzzle {
    if (level > 20) { level = 20; }
    let c = new Canvas{};

    c.init(600, 310, rgba(rand_int(256), rand_int(256), rand_int(256), 1.0));
    
    let offset = rand_int(21) + 10;
    //c.fill_rect(offset, offset, 200 - offset * 3 / 2, 300 - offset * 2, rgb(0, 0, 0), named_color.color, 3);
    //c.fill_rect(200 + offset / 2, offset, 200 - offset * 3 / 2, 300 - offset * 2, rgb(0, 0, 0), named_color2.color, 3);
	c.fill_ellipse(offset, offset, 300 - offset * 3 / 2, 300 - offset * 2, rgb(0, 0, 0), random_color(), 3);
    c.fill_ellipse(300 + offset / 2, offset, 300 - offset * 3 / 2, 300 - offset * 2, rgb(0, 0, 0), random_color(), 3);
    
    let counting = [random_figure(), random_figure()];
    let sides = ["left", "right"];
    
    let all_points: Point2D[] = [];
    
    //квадрат  круг  треугольник  прямоугольник  пятиугольник 
    let left_figure: int[] = [0, 0, 0, 0, 0]
    let right_figure: int[] = [0, 0, 0, 0, 0]
    let num = rand_int(level) + 2;
    if (num >= 13) {num = 12}
    for (let i = 0; i < num; i += 1) {
        let this_left = rand_bool();
        if (i == 0) { this_left = true };
        if (i == 1) { this_left = false };
        
        let x = 0;
		let y = 0;
        if (rand_bool()) {
            if (rand_bool()) {
            	x = 150 + rand_int(80);
        		y = 155 + rand_int(15);
            }
            else {
            	x = 150 + rand_int(15);
        		y = 155 + rand_int(80);
            }
        }
        else {
        	if (rand_bool()) {
            	x = 150 - rand_int(80);
        		y = 155 - rand_int(15);
            }
            else {
            	x = 150 - rand_int(15);
        		y = 155 - rand_int(80);
            }
        }
        if (!this_left) { x += 300; }
        
        for (let attempt = 0; attempt < 10; attempt += 1) {
            let ok = true;
            for (let j = 0; j < all_points.length(); j = j + 1) {
                let dx = float(x) - all_points[j].x;
                let dy = float(y) - all_points[j].y;
                if (dx * dx + dy * dy < 3000.0) {
                    ok = false;
                    break;
                }
            }
            if (ok) { break }
            if (rand_bool()) {
                if (rand_bool()) {
                    x = 150 + rand_int(80);
                    y = 155 + rand_int(15);
                }
                else {
                    x = 150 + rand_int(15);
                    y = 155 + rand_int(80);
                }
            }
            else {
                if (rand_bool()) {
                    x = 150 - rand_int(80);
                    y = 155 - rand_int(15);
                }
                else {
                    x = 150 - rand_int(15);
                    y = 155 - rand_int(80);
                }
            }
            if (!this_left) { x += 300; }
        }
        all_points.push(new Point2D { x: float(x), y: float(y) })
        
    	let figure = random_figure();
        if (i == 0 || this_left && rand_int(3) == 0) { figure = counting[0]; }
        if (i == 1 || !this_left && rand_int(3) == 0) { figure = counting[1]; }
        let bg = random_color();
        if (rand_bool()) { bg.a = 0.5; }
	    let size = 10 + 7;
        draw_figure(c, x, y, figure, size, random_color(), bg);
        
        if (this_left) {
            if (figure == "square") {left_figure[0] += 1}
            else if (figure == "circle") {left_figure[1] += 1}
            else if (figure == "triangle") {left_figure[2] += 1}
            else if (figure == "pentagon") {left_figure[3] += 1}
        }
        else {
            if (figure == "square") {right_figure[0] += 1}
            else if (figure == "circle") {right_figure[1] += 1}
            else if (figure == "triangle") {right_figure[2] += 1}
            else if (figure == "pentagon") {right_figure[3] += 1}        
        }
    }
    
    let kakue = [rand_int(4), rand_int(4)];
    while (left_figure[kakue[0]] == 0) {
    	kakue[0] = rand_int(4);
    }
    while (right_figure[kakue[1]] == 0) {
    	kakue[1] = rand_int(4);
    }
    
    let outp = left_figure[kakue[0]] * right_figure[kakue[1]];
    
    let chego = ["квадраты", "круги", "треугольники", "пятиугольники"];
    let chego1 = ["квадратов", "кругов", "треугольников", "пятиугольников"];
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " два круга, её попросили умножить количество всех " + chego1[kakue[0]] + " в левом круге на количество всех " + chego1[kakue[1]] + " в правом круге.";

    if (rand_bool()) {sc="Требуется умножить количество всех " + chego1[kakue[0]] + " в левом круге на количество всех " + chego1[kakue[1]] + " в правом круге."}
    let descr = sc + "\n Формат вывода, следующий: число. \n Пример: 4.";
	let expl = "Сначала ищем все " + chego[kakue[0]] + " в левом круге и считаем их количество равное: " + string(left_figure[kakue[0]]) + ". \n" + 
        		"Потом ищем все " + chego[kakue[1]] + " в правом круге и считаем их количество равное: " + string(right_figure[kakue[1]]) + ". \n" + 
        		"После умножаем первое число на второе: " + string(left_figure[kakue[0]]) + "*" + string(right_figure[kakue[1]]) + "=" + string(left_figure[kakue[0]] * right_figure[kakue[1]]) + ".";
    
    let z = rand_int(10) - 5;
    if (z == 0) { z = 5; };
    let wrong = outp + z;
    if (wrong <= 0) {
    	wrong = 1;
        while (wrong == outp) {
        	wrong += 1;
        }
    }
    return new Puzzle { descr: descr, input: c, output: outp, wrong_output: wrong, explanation: expl}
}
*/