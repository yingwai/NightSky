//Генератор задач на определение скорости с использованием дальности и времени
/*
Сделайте генератор задач, в котором будет проситься найти скорость какого либо живого или неживого объекта, имея дальность его пути и времени его движения.
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

function round(p: float, after_dot: int) -> float {  
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
    
    return float(sign + string(int_p / coeff) + "." + after_string);
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let km = float(rand_int(level * 50) + 1000);
    let length = level + 2;
	let speed: float[] = [];
	let time: float[] = [];
    
    let inpt = "";
    for (let i = 0; i < length; i += 1) {
    	let num = float(rand_int(level * 5) + 60);
        
        for (let j = 0; j < speed.length(); j += 1) {
            while (num == speed[j]) {
            	num = float(rand_int(level * 5) + 60);
                j = 0;
            }
        }
        
        speed.push(num);
        time.push(round(km/speed[i], 2));
        
        inpt += "Объект №" + string(i + 1) + " преодолевает данное расстояние за " + string(time[i]) + " ч.\n";
    }
    
    let expl = "\nОпределим с какой скоростью движется каждый объект: \n";
    for (let i = 0; i < length; i += 1) {
    	expl += "Объект №" + string(i + 1) + " " + string(km) + "/" + string(time[i]) + "=" + string(speed[i]) + " км/ч \n"
    }
    
    let outp = "";
    for (let i = 0; i < length; i += 1) {
        outp += "Объект №" + string(i + 1) + " со скоростью " + string(speed[i]) + " км/ч\n";
    }
    let wrong = outp;
    while (wrong == outp) {
        wrong = "";
        for (let i = 0; i < length; i += 1) {
            wrong += "Объект №" + string(i + 1) + " со скоростью " + string(rand_int(level * 5) + 60) + " км/ч\n";
        }
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " объекты и время за которое они преодолевают " + string(km) + " км. Её попросили " + whatDo + " скорость всех объектов. Ответ округляем до целого числа.";

    if (rand_bool()) {sc="Даны объекты и время за которое они преодолевают " + string(km) + " км. Требуется определить скорость всех объектов. Ответ округляем до целого числа."}
    
    let descr = sc + "\n Пример вывода следующий: \n Объект №1 со скоростью 61 км/ч \nОбъект №2 со скоростью 63 км/ч \nОбъект №3 со скоростью 66 км/ч \nОбъект №4 со скоростью 67 км/ч";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/