//Ренератор задач на направление движения объектов
/*
Сделайте генератор паззлов, в котором будет задан какой-либо объект движения(человек, машина и т.д.) и его направление движения(используется только 4 направления: влево, вправо, вверх, вниз) 
на рисунке в виде стрелочки, а на выходе необходимо написать, в каком направлении он будет двигаться.
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

function declOfNum(n: int, text_forms: string[]) -> string {
  n = n % 100;

  let n1 = n % 10;

  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }

  return text_forms[2];
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let inpt = new Canvas {};
    let length = rand_int(level * 2) + 2;
    let sizeX = 50;
    let sizeY = 50;
    for (let i = 1; i < length; i += 1) {
        if (i >= 6) {
        	sizeY += 50;
        }
        else {
        	sizeX += 50;
        }
    }
    inpt.init(sizeX, sizeY, rgba(255, 255, 255, 1.0));
    
    let posX = 10;
    let posY = 10;
    let side: string[] = [];
    for (let i = 1; i <= length; i += 1) {
    	side.push("вверх|вниз|влево|вправо".split("|")[rand_int(4)]);
        
        if (side[i - 1] == "вверх") {
            inpt.draw_sprite(0, posX, posY);
            inpt.text(posX, posY + 10, string(i), 15, rgb(0, 0, 0), "center");
        }	
        else if (side[i - 1] == "вниз") {
            inpt.draw_sprite(1, posX, posY);
            inpt.text(posX, posY + 10, string(i), 15, rgb(0, 0, 0), "center");
        }
        else if (side[i - 1] == "влево") {
            inpt.draw_sprite(2, posX, posY);
            inpt.text(posX, posY + 10, string(i), 15, rgb(0, 0, 0), "center");
        }
        else if (side[i - 1] == "вправо") {
            inpt.draw_sprite(3, posX, posY);
            inpt.text(posX, posY + 10, string(i), 15, rgb(0, 0, 0), "center");
        }
        
        posX += 50;
        if (i % 6 == 0) {
        	posX = 10;
            posY += 50;
        }
    }
    
    let outp = "";
    for (let i = 1; i <= length; i += 1) {
        if (i == length) {
    		outp += side[i - 1] + ". ";
        	continue;
    	}
    	outp += side[i - 1] + ", ";
    }
    let wrong = outp;
    while (wrong == outp) {
        wrong = "";
    	
        for (let i = 1; i <= length; i += 1) {
            if (i == length) {
                wrong += "вверх|вниз|влево|вправо".split("|")[rand_int(4)] + ". ";
                continue;
            }
            wrong += "вверх|вниз|влево|вправо".split("|")[rand_int(4)] + ", ";
        }
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Показаны".split("|")[rand_int(5)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "показать|указать|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " " + string(length) + " " + declOfNum(length, ["объект", "объекта", "объектов"]) + " движения и их направление движения(влево, вправо, вверх, вниз) на рисунке в виде стрелочки. Её попросили " 
        	+ whatDo + " в каком направлении будет двигаться каждый объект.";

    if (rand_bool()) {sc="Даны " + string(length) + " " + declOfNum(length, ["объект", "объекта", "объектов"]) + " движения и их направление движения(влево, вправо, вверх, вниз) на рисунке в виде стрелочки. Требуется определить в каком направлении будет двигаться каждый объект."}
    let descr = sc + "\n Пример вывода следующий: \"влево, вверх, вправо, вверх.\" (без кавычек)";
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