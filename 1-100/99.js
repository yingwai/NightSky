//Длина линии
/*
Смоделируйте генератор линий, который создает несколько линий разной длины и просит пользователя выбрать самую длинную линию
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
    
    let length = rand_int(level * 2) + 2;
    let segments: int[] = [];
    let maxSegments: int[] = [];
    for (let i = 0; i < length; i += 1) {
    	let num = rand_int(1795) + 5;
        
        for (let j = 0; j < segments.length(); j += 1) {
            while (num == segments[j]) {
    			num = rand_int(1795) + 5;
            }
        }
        
        segments.push(num);
        maxSegments.push(num);
    }
    maxSegments.sort()
    
    let inpt = new Canvas {};
    let sizeX = maxSegments[maxSegments.length() - 1];
    let sizeY = 0;
    for (let i = 0; i < length; i += 1) {
        sizeY += 50;
    }
    inpt.init(sizeX, sizeY, rgba(255, 255, 255, 1.0));
    
    let posY = 25;
    for (let i = 0; i < length; i += 1) {
        inpt.text(0, posY - 5, string(i + 1) + ". " + string(segments[i]) + " у.е.", 15, rgb(0, 0, 0), "left");
        
        let points: Point2D[] = [];
        points.push(new Point2D{x: float(0), y: float(posY)});
        points.push(new Point2D{x: float(segments[i]), y: float(posY)});
        inpt.fill_polygon(points, rgb(0, 0, 0), rgb(0, 0, 0), 2);
        
        posY += 25;
    }
    
    let outp = "";
    for (let i = 0; i < length; i += 1) {
        if (maxSegments[maxSegments.length() - 1] == segments[i]) {
        	outp = string(i + 1)
        }
    }
    let wrong = outp;
    while (wrong == outp) {
    	wrong = string(rand_int(segments.length()) + 1)
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Показаны".split("|")[rand_int(5)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "показать|указать|выбрать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " несколько линий разной длины в условных единицах, её попросили " + whatDo + " самую длинную линию.";

    if (rand_bool()) {sc="Даны несколько линий разной длины в условных единицах, требуется определить самую длинную линию."}
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