//Окружности 
/*
Создайте генератор, который будет выводить несколько окружностей разных цветов. Человеку нужно будет определить, если в какую-то одну окружность помещаются все остальные так, 
чтобы их контуры не соприкасались, то указать цвет этой окружности. Если хотя бы одна окружность не поместится в самую большую окружность так, чтобы контуры всех окружностей не соприкасались, 
то указать в ответе цвет самой маленькой окружности.
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

function random_named_color() -> NamedColor {
    let gr = rand_int(100) + 50;
    let options = [
        new NamedColor { name: "Синий", color: rgb(0, 0, rand_int(151) + 105) },
        new NamedColor { name: "Красный", color: rgb(rand_int(151) + 105, 0, 0) },
        new NamedColor { name: "Зелёный", color: rgb(0, rand_int(151) + 105, 0) },
        new NamedColor { name: "Жёлтый", color: rgb(255, 255, 0) },
        new NamedColor { name: "Розовый", color: [rgb(255, 192, 203), rgb(255, 105, 180), rgb(255, 20, 147)][rand_int(3)] },
        new NamedColor { name: "Оранжевый", color: [rgb(255, 140, 0), rgb(255, 165, 0), rgb(255, 127, 80)][rand_int(3)] },
        new NamedColor { name: "Фиолетовый", color: rgb(128, 0, 128) },
        new NamedColor { name: "Коричневый", color: [rgb(139, 69, 19), rgb(165, 42, 42), rgb(210, 105, 30)][rand_int(3)] },
        new NamedColor { name: "Белый", color: rgb(255, 255, 255) },
        new NamedColor { name: "Чёрный", color: rgb(0, 0, 0) },
        new NamedColor { name: "Серый", color: rgb(gr, gr, gr) }
    ];
    return options[rand_int(options.length())];
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let length = rand_int(level) + 2;
    let inpt = new Canvas{};
    let sizeX = 110;
    let sizeY = 110;
    for (let i = 1; i <= length; i += 1) {
        if (i < 5) {
        	sizeX += 110;
        }
        if (i % 5 == 0) {
        	sizeY += 110;
        }
    }
    inpt.init(sizeX, sizeY, rgba(255, 255, 255, 1.0));
    
    let indentX = 5;
    let indentY = 5;
    let figure: int[] = [];
    let figure2: int[] = [];
    let color: NamedColor[] = [];
    for (let i = 1; i <= length; i += 1) {
    	figure.push(rand_int(90) + 10);
		color.push(random_named_color());
    }
    for (let i = 0; i < length; i += 1) {
    	figure2.push(figure[i])
    }
	for (let i = 1; i <= length; i += 1) {
    	inpt.fill_ellipse(indentX, indentY, figure[i - 1], figure[i - 1], rgb(0, 0, 0), color[i - 1].color, 2);
        
        indentX += 110;
        if (i % 5 == 0) {
        	indentX = 5;
        	indentY += 110;
        }
    }
    
    let outp = "";
    figure.sort();
    if (figure[figure.length() - 1] >= figure[figure.length() - 2] + 2) {
        for (let i = 0; i < length; i += 1) {
            if (figure2[i] == figure[figure.length() - 1]) {
            	outp = string(i + 1) + ". " + color[i].name;
            }
        }
    }
    else {
        for (let i = 0; i < length; i += 1) {
            if (figure2[i] == figure[0]) {
            	outp = string(i + 1) + ". " + color[i].name;
            }
        }
    }
    let wrong = outp;
    while (wrong == outp) {
    	let i = rand_int(length);
        wrong = string(i + 1) + ". " + color[i].name;
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "указать|определить|найти".split("|")[rand_int(3)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " несколько окружностей разных цветов и размером: ";
    for (let i = 1; i <= length; i += 1) {
        if (i == length) {
    		sc += string(figure2[i - 1]) + " каждая с контуром 2. ";
            continue;
        }
    	sc += string(figure2[i - 1]) + ", ";
    }
    sc += "Её попросили " + whatDo + ", в какую одну окружность помещаются все остальные так, чтобы их контуры не соприкасались, указать номер и цвет этой окружности. Если хотя бы одна окружность не поместится в самую большую окружность так, чтобы контуры окружностей не соприкасались, указать в ответе номер и цвет самой маленькой окружности."

    if (rand_bool()) {
        sc="Даны несколько окружностей разных цветов и размером: ";
    	for (let i = 1; i <= length; i += 1) {
            if (i == length) {
                sc += string(figure2[i - 1]) + " каждая с контуром 2. ";
                continue;
            }
            sc += string(figure2[i - 1]) + ", ";
        }
        sc += "Требуется определить, в какую одну окружность помещаются все остальные так, чтобы их контуры не соприкасались, указать номер и цвет этой окружности. Если хотя бы одна окружность не поместится в самую большую окружность так, чтобы контуры окружностей не соприкасались, указать в ответе номер и цвет самой маленькой окружности."
    }
    
    let descr = sc + "\n Пример вывода следующий: 1. Красный";

    let expl = "Выбираем самую большую окружность: " + string(figure[figure.length() - 1]) + 
        		"\nРассчитываем не соприкасаются ли контуры окружностей \n";
    
    for (let i = 0; i < length; i += 1) {
        if (figure2[i] != figure[figure.length() - 1]) {
        	expl += string(figure[figure.length() - 1]) + " >= " + string(figure2[i]) + " + 2 \n"
        }
	}
    
    expl += "Если рассчитываемые окружности больше самой большой, значит окружность пересекается с контуром наибольшей, из расчётов можно понять ответ " + outp
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/