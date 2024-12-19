//Генератор степени
/*
Сделайте генератор выводящий несколько чисел в виде десятичной дроби. Каждая дробь, чтоб выводилась с каким-либо словом. 
Человек должен возвести во 2ую степень (умножить на себя) ту дробь, про которую идет речь. Пример: треугольник 0,5; шоколадка 1,2; условие - это название геометрической фигуры. 
Ответ: 0,5^2 = 0.25 - Не используйте этот пример.
*/

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: string,
    output: string,
    wrong_output: string,
    explanation: string
}

function rand_float(num: int, digit: int) -> float{
    let t = 10;
  for(let i = 1; i < digit; i += 1){
      t *= 10;
    }
  return float(float(rand_int(num * t))/float(t));
}

function round(p: float, after_dot: int) -> string {  
    let sign = "";
    if (p < 0.0) {
        sign = "-";
        p = -p;
    }

    let coeff = 1;
    for (let i = 0; i < after_dot; i += 1) {
        coeff *= 10;
    }
    
    p *= float(coeff);
    let int_p = int(p + 0.5);
  
  let after_string = string(int_p % coeff);
    for (let i = 0; after_string.length() < after_dot; i += 1) {
        after_string = "0" + after_string;
    }
    
    return sign + string(int_p / coeff) + "." + after_string;
}

function pow(num: float, power: int) -> string {
    if (num == 0.0 && power != 0) {return "0";};
    if (num == 0.0) {return "0";};
    let t = 1.0;
    for (let i = 0; i < power; i+=1){
        t *= num;
    };
    return round(t, 2);
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let words = [
        //3
    	["акт", "бал", "бык", "вор", "гам", "гол", "дно", "дух", "эго", "жар"],
    	//5
        ["абзац", "автор", "багаж", "байка", "атлас", "архив", "барон", "двери", "икона", "крест"],
    	//8
        ["аванпост", "автопарк", "банкнота", "балерина", "висюлька", "гвоздика", "дивиденд", "забавник", "жидкость", "иголочка"],
    	//13
        ["автодиспетчер", "автотранспорт", "боеподготовка", "восьмигранник", "гармоничность", "демобилизация", "действенность", "единообразный", "зашнуровывать", "интуитивность"],
    	//17
        ["аксонометрический", "безнравственность", "бессознательность", "ветроустойчивость", "взаимоисключающий", "водопроницаемость", "дифференцирование", "мультиплицировать", "многопредметность", "правосубъектность"]
    ];
    
    let length = rand_int(level * 2 - 1) + 2;
    let figure = ["квадрат", "треугольник", "прямоугольник", "четырёхугольник", "пятиугольник", "шестиугольник", "семиугольник", "восьмиугольник", "девятиугольник"][rand_int(9)];
    
    let inpt = "";
    let place = rand_int(length);
    let num = round(rand_float(5, 2) + 1.0, 2);
    
	for (let i = 0; i < length; i += 1) {
        if (i == length - 1) {
        	if (i == place) {
                inpt += figure + " " + string(num) + ".";   	
            }
            else {
                inpt += words[rand_int(5)][rand_int(9)] + " " + string(rand_float(5, 2)) + ".";  
            }
        }
        else {
        	if (i != 0 && i % 9 == 0) {
                if (i == place) {
                    inpt += figure + " " + string(num) + ", \n";   	
                }
                else {
                    inpt += words[rand_int(5)][rand_int(9)] + " " + string(rand_float(5, 2)) + ", \n";  
                }	
            }
            else {
            	if (i == place) {
                    inpt += figure + " " + string(num) + ", ";   	
                }
                else {
                    inpt += words[rand_int(5)][rand_int(9)] + " " + string(rand_float(5, 2)) + ", ";  
                }	
            }
		}        
    }
    
    let outp = pow(float(num), 2);
    let wrong = outp;
    while (wrong == outp) {
    	wrong = pow(rand_float(5, 2) + 1.0, 2);
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "указать|показать|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " несколько чисел в виде десятичной дроби, каждая дробь имеет слово. Её попросили " + whatDo + " число которое имеет рядом с собой название геометрической фигуры и возвести это число во вторую степень. Ответ необходимо округлить до сотых.";

    if (rand_bool()) {sc="Даны несколько чисел в виде десятичной дроби, каждая дробь имеет слово. Требуется определить число которое имеет рядом с собой название геометрической фигуры и возвести это число во вторую степень. Ответ необходимо округлить до сотых."}
    let descr = sc + "\n Пример вывода следующий: \"1.04\", \"20.52\", \"5.00\" (без кавычек)";
    
    let expl = string(figure) + " - " + string(num) + "*" + string(num) + "=" + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/