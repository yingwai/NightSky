//Генератор: маршрут с пробками
// Сделайте генератор паззлов, который на входе будет выдавать несколько маршрутов по городу, некоторые из них будут с пробками. Для каждого маршрута выдается 
//  время на его преодоление, также выдается время на преодоление пробки. Требуется выбрать наиболее быстрый маршрут по времени.

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: string,
    output: string,
    wrong_output: string,
    explanation: string
}
struct TrafJam {
	index: int,
    time: int,
    block: bool,
    block_time: int
}

function gen_trafJam() -> TrafJam {
	let i = rand_int(100) + 1;
    let t = rand_int(240) + 1;
    let b = rand_bool();
    let bt = 0;
    if (b) {bt = rand_int(120) + 1}
    
    return new TrafJam {
    	index: i,
        time: t,
        block: b,
        block_time: bt
    }
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
    
    let amount_road = (level + rand_int(10)) / 2;
    if (amount_road <= 1) {amount_road = 2};
    
    let road: TrafJam[] = [];
    
    let ipt = ""
    
    for (let i = 0; i < amount_road; i += 1) {
    	road.push(gen_trafJam())
        let block = road[i].block;
        let block_info = ""
        if (block) {block_info = "Имеется пробка, которая продлится ещё " + string(road[i].block_time) + " " + declOfNum(road[i].block_time, ["минуту", "минуты", "минут"]) + ". "} else {block_info = "Пробки нет."}
            
		ipt += string(i + 1) + ". Трасса №" + string(road[i].index) + "-" + string(rand_int(5) + 1) + ". Время проезда: "+ string(road[i].time) + " " + declOfNum(road[i].time, ["минута", "минуты", "минут"]) + ". " + block_info + " \n";
    };
    
    let correct = "";
    let wrong = "";
    let all_road: int[] = [];
    
    for (let i = 0; i < road.length(); i += 1) {
    	all_road.push(road[i].time + road[i].block_time);
    };
    
    all_road.sort();
    let min_time = all_road[0];
    for (let i = 0; i < all_road.length(); i += 1) {
    	if (min_time - road[i].time == road[i].block_time && min_time - road[i].block_time == road[i].time) {
            correct = string(i + 1) + " маршрут.";
        };
        
        if (rand_bool()) {if (min_time - road[i].time != road[i].block_time) {wrong = string(i + 1) + " маршрут.";}} else {if (min_time - road[i].block_time != road[i].time) {wrong = string(i + 1) + " маршрут.";}}
        
    };
    
    
    
    
    
        
    let task="Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)]
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(4)];
    
    let sc="Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
        " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". "
         + task + " " + string(amount_road) + " " + declOfNum(amount_road, ["маршрут", "маршрута", "маршрутов"]) + ", её попросили " +whatDo+ " самый быстрый маршрут.";
    if(rand_bool()){sc="Требуется определить самый быстрый маршрут из " + string(amount_road) + "."}
    let desc = sc + "\n Формат вывода, следующий: номер маршрута. \n Пример: 1 маршрут.";
 
    let expl = "Получаем случайное количество маршрутов с временем их прохождения. Если на маршруте есть пробка, то к основному времени прибавляем время в пробке a+b.";
    
   	return new Puzzle{
         descr: desc,
         input: ipt,
         output: correct,
         wrong_output: wrong,
         explanation: expl
     };
}
*/