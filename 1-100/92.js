//Выбор аппарата
/*
Сделайте генератор, где показаны различные дистанции и время, за которые аппарат должен их преодолеть. 
Пользователь должен будет выбрать аппарат с подходящей скорость для прохождения маршрута на время.
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
	let time2: float[] = [];
    
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
        time2.push(round(km/speed[i], 2));
        
        inpt += "Аппарат №" + string(i + 1) + " со скоростью " + string(speed[i]) + " км/ч \n"
    }
    
    let expl = "\nОпределим сколько времени необходимо каждому аппарату: \n";
    for (let i = 0; i < length; i += 1) {
    	expl += "Аппарат №" + string(i + 1) + " " + string(km) + "/" + string(speed[i]) + "=" + string(time[i]) + " ч. \n"
    }
    
    time2.sort();
    let max = rand_bool();
    let outp = "";
    let wrong = "";
    if (max) {
        for (let i = 0; i < length; i += 1) {
            if (time2[time2.length() - 1] == time[i]) {
            	outp = "Аппарат №" + string(i + 1) + " со скоростью " + string(speed[i]) + " км/ч";
                expl += "Следовательно, ответ: " + outp;
            }
        }
    }
    else {
    	for (let i = 0; i < length; i += 1) {
            if (time2[0] == time[i]) {
            	outp = "Аппарат №" + string(i + 1) + " со скоростью " + string(speed[i]) + " км/ч";
                expl += "Следовательно, ответ: " + outp;
            }
        }
    }
    wrong = outp;
    while (wrong == outp) {
        let temp = rand_int(speed.length());
    	wrong = "Аппарат №" + string(temp + 1) + " со скоростью " + string(speed[temp]) + " км/ч";
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "показать|указать|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " аппараты с определённой скоростью. Её попросили " + whatDo + " аппарат, который преодолеет " + string(km) + " км ";

    if (rand_bool()) {sc="Даны аппараты с определённой скоростью. Требуется определить аппарат, который преодолеет " + string(km) + " км "}
    if (max) {
    	sc += "за самое долгое время."
    }
    else {
    	sc += "за самое короткое время."
    }
    let descr = sc + "\n Пример вывода следующий: Аппарат №1 со скоростью 60 км/ч";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/