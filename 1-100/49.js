//Определение нужного здания по цвету
/*
Вам нужно создать генератор, в котором следует отобразить четыре квадрата разных цветов, они выполняют роль зданий, повторение цветов запрещено. 
Далее отобразите человека, в виде другой геометрической фигуры, к примеру: круг, но не квадрат. Эта фигура, которая будет обозначать человека, должна иметь один из цветов квадратов. 
Задача человека выбрать здание в городе, которое будет такого же цвета, как и он.
*/

/*
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
    
    let inpt = new Canvas {};
    let sizeX = 255;
    let sizeY = 450;
    inpt.init(sizeX, sizeY, rgba(255, 255, 255, 1.0));
	let indentX = 0;
    let indentY = 0;
    
    let length = rand_int(level * 2) + 4;
    if (length >= 30) {
    	length = 30;
    }
    let color:string[] = [];
    for (let i = 1; i <= length; i += 1) {
        let r = rand_int(256);
        let g = rand_int(256);
        let b = rand_int(256);
        
        for (let j = 0; j < color.length(); j += 1) {
            while (string(r) + " " + string(g) + " " + string(b) == color[j]) {
            	r = rand_int(256);
                g = rand_int(256);
                b = rand_int(256);
                j = 0;
            }
        }
        
        color.push(string(r) + " " + string(g) + " " + string(b));
        
        inpt.fill_rect(10 + indentX, 10 + indentY, 40, 40, rgb(0, 0, 0), rgb(r, g, b), 2);
        inpt.text(30 + indentX, 65 + indentY, string(i), 16, rgb(0, 0, 0), "center");
        indentX += 50;
        if (i % 5 == 0 && i != 0) {
        	indentX = 0;
            indentY += 60;
        }
    }
    
    let home = rand_int(color.length());
    let people = color[home];
    inpt.fill_ellipse(110, 400, 40, 40, rgb(0, 0, 0), rgb(int(people.split(" ")[0]), int(people.split(" ")[1]), int(people.split(" ")[2])), 2);
    
    let outp = string(home + 1);
    let wrong = outp;
    while (wrong == outp) {
    	wrong = string(rand_int(color.length()) + 1);
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан".split("|")[rand_int(6)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|указать|показать|выбрать|определить|найти".split("|")[rand_int(6)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд домов и человек, её попросили " + whatDo + " здание, которое будет такого же цвета, как и человек.";

    if (rand_bool()) {sc="Дан ряд домов и человек, требуется определить здание, которое будет такого же цвета, как и человек."}
    let descr = sc + "\n Пример вывода следующий: 1, 15, 29";

    let expl = "Здание которое имеет одинаковый цвет с человеком является " + string(home + 1) + ".";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
