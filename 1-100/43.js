//Генератор: 2 квадрата
/*
Создайте генератор паззлов, который будет рисовать два квадрата со множеством фигур внутри. 
Генератор будет требовать суммировать определённые фигуры внутри первого квадрата с определёнными фигурами второго квадрата.
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

function gen_puzzle(level: int) -> Puzzle {
    if (level > 12) { level = 12; }
    let c = new Canvas{};
    let answer = 0;

    c.init(930, 470, rgba(rand_int(256), rand_int(256), rand_int(256), 1.0));
    
    let named_color = random_named_color();
    let named_color2 = random_named_color();
    while (named_color.name == named_color2.name) {
        named_color2 = random_named_color();
    }
    
    c.fill_rect(10, 10, 450, 450, rgb(0, 0, 0), named_color.color, 3);
    c.fill_rect(10 + 460, 10, 450, 450, rgb(0, 0, 0), named_color2.color, 3);
    
    let counting = [random_figure(), random_figure()];
    let sides = ["left", "right"];
    let colors = [named_color.name, named_color2.name];

    let chego = ["квадраты", "круги", "треугольники", "пятиугольники"];
    let f = 0;
    if (counting[0] == "square") {f = 0}
    else if (counting[0] == "circle") {f = 1}    
    else if (counting[0] == "triangle") {f = 2}
    else if (counting[0] == "pentagon") {f = 3}
    let chego1 = ["квадратов", "кругов", "треугольников", "пятиугольников"];
    let f1 = 0;
    if (counting[1] == "square") {f1 = 0}
    else if (counting[1] == "circle") {f1 = 1}    
    else if (counting[1] == "triangle") {f1 = 2}
    else if (counting[1] == "pentagon") {f1 = 3}
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " два квадрата. Её попросили суммировать количество всех " + chego1[f] + " в левом квадрате с количеством всех " + chego1[f1] + " в правом квадрате.";

    if (rand_bool()) {sc="Требуется суммировать количество всех " + chego1[f] + " в левом квадрате с количеством всех " + chego1[f1] + " в правом квадрате."}
    let descr = sc + "\n Пример вывода следующий: 4.";
    
    let all_points: Point2D[] = [];
    
    let num = rand_int(level * 2) + 6;
    let f_l = 0;
    let f_r = 0;
    for (let i = 0; i < num; i += 1) {
        let this_left = rand_bool();
        if (i == 0) { this_left = true };
        if (i == 1) { this_left = false };
        
        let x = rand_int(370) + 50;
        let y = rand_int(370) + 50;
        if (!this_left) { x += 450; }
        
        for (let attempt = 0; attempt < 10; attempt += 1) {
            let ok = true;
            for (let j = 0; j < all_points.length(); j = j + 1) {
                let dx = float(x) - all_points[j].x;
                let dy = float(y) - all_points[j].y;
                if (dx * dx + dy * dy < 2000.0) {
                    ok = false;
                    break;
                }
            }
            if (ok) { break }
            x = rand_int(370) + 50;
            y = rand_int(370) + 50;
            if (!this_left) {  x += 450; }
        }
        all_points.push(new Point2D { x: float(x), y: float(y) })

        
    	let figure = random_figure();
        if (i == 0 || this_left && rand_int(3) == 0) { figure = counting[0]; }
        if (i == 1 || !this_left && rand_int(3) == 0) { figure = counting[1]; }
        if (figure == counting[0] && this_left == true || figure == counting[1] && this_left == false) { answer += 1; };
        if (figure == counting[0] && this_left == true) { f_l += 1; };
        if (figure == counting[1] && this_left == false) { f_r += 1; };
        let bg = random_color();
        if (rand_bool()) { bg.a = 0.5; }
	    let size = rand_int(10) + 10;
        draw_figure(c, x, y, figure, size, random_color(), bg);
    }
    
    let expl = "Сначала ищем все " + chego[f] + " в левом квадрате и считаем их количество равное: " + string(f_l) + ". \n" + 
        		"Потом ищем все " + chego[f1] + " в правом квадрате и считаем их количество равное: " + string(f_r) + ". \n" + 
        		"После суммируем первое число с вторым: " + string(f_l) + "+" + string(f_r) + "=" + string(answer) + ".";
    
    let wrong = 0;
    if (answer >= 5 && rand_bool()) {wrong = rand_int(answer)}
    else {
        wrong = answer + rand_int(5) + 1;
        if (wrong > num) {
        	wrong = rand_int(answer)
        }
    }
    let z = rand_int(10) - 5;
    if (z == 0) { z = 5; }
    return new Puzzle { descr: descr, input: c, output: answer, wrong_output: wrong, explanation: expl }
}

function random_color() -> Color { return rgb(rand_int(256), rand_int(256), rand_int(256)); }
function random_named_color() -> NamedColor {
    let gr = rand_int(100) + 50;
    let options = [
        new NamedColor { name: "blue", color: rgb(0, 0, rand_int(151) + 105) },
        new NamedColor { name: "red", color: rgb(rand_int(151) + 105, 0, 0) },
        new NamedColor { name: "green", color: rgb(0, rand_int(151) + 105, 0) },
        new NamedColor { name: "yellow", color: rgb(255, 255, 0) },
        new NamedColor { name: "pink", color: [rgb(255, 192, 203), rgb(255, 105, 180), rgb(255, 20, 147)][rand_int(3)] },
        new NamedColor { name: "orange", color: [rgb(255, 140, 0), rgb(255, 165, 0), rgb(255, 127, 80)][rand_int(3)] },
        new NamedColor { name: "purple", color: rgb(128, 0, 128) },
        new NamedColor { name: "brown", color: [rgb(139, 69, 19), rgb(165, 42, 42), rgb(210, 105, 30)][rand_int(3)] },
        new NamedColor { name: "white", color: rgb(255, 255, 255) },
        new NamedColor { name: "black", color: rgb(0, 0, 0) },
        new NamedColor { name: "gray", color: rgb(gr, gr, gr) }
    ];
    return options[rand_int(options.length())];
}

function random_figure() -> string { return ["square", "circle", "triangle", "pentagon"][rand_int(4)] }

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
*/
