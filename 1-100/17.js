//Возведение дробей в степень
/*
Создайте генератор, который будет выдавать 4 дроби любого вида. Решающему нужно будет определить самую маленькую дробь и возвести ее в какую-то степень. Полученную дробь сокращать не нужно.
Пример: "Генератор выдал дроби "13/18", "9/10", "4/17", "1/2". Нужно найти наименьшую дробь и возвести ее во вторую степень". Ответ будет: "16/289". Данный пример не использовать.
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

function pow(a:float, b:int) -> string {
  let result = a;
  for (let i = 1; i < b; i += 1) {
    result *= a;
  }
  return string(result);
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let count = rand_int(level - 1) + 1;
    if (count <= 3) {count = 4}
    
    let drobi: float[] = [];
    for (let i = 0; i < count + count; i += 1) {
    	drobi.push(float(rand_int(level * 5 - 1) + 1))
    }
    
    let inpt = "";
    for (let i = 0; i <= count + 2; i += 2) {
    	inpt += string(drobi[i]) + "/" + string(drobi[i + 1]) + " "
    }
    
    let cor_drob = [0.0, 0.0];
    let test: float[] = []
    for (let i = 0; i <= count + 2; i += 2) {
        if (i == 0) {
        	cor_drob[0] = drobi[i];
            cor_drob[1] = drobi[i + 1];
            test.push(float(cor_drob[0] / cor_drob[1]))
        }
        else {
            if (float(cor_drob[0] / cor_drob[1]) > float(drobi[i] / drobi[i + 1])) {
            	cor_drob[0] = drobi[i];
            	cor_drob[1] = drobi[i + 1];
                test.push(float(drobi[i] / drobi[i + 1]))
            }
        }
    }
    
    let power = rand_int(3) + 1;
    let outp = pow(cor_drob[0], power) + "/" + pow(cor_drob[1], power);
    let wrong_power = rand_int(3) + 1;
    while (wrong_power == power) {
    	wrong_power = rand_int(3) + 1;
    }
    let wrong = pow(cor_drob[0], wrong_power) + "/" + pow(cor_drob[1], wrong_power);
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " несколько дробей, её попросили " + whatDo + " самую маленькую дробь и возвести ее ";

    if (rand_bool()) {sc="Требуется определить самую маленькую дробь и возвести ее "}
    if (power == 2) {sc += "во " + string(power) + " степень. Исходную и полученную дробь сокращать не нужно."}
    else {sc += "в " + string(power) + " степень. Исходную и полученную дробь сокращать не нужно."}
    let descr = sc + "\n Формат вывода, следующий: обыкновенная дробь. \n Пример: 16/289";

    let expl = "Сначала находим наименьшую дробь, сделать это можно элементарно поделив числитель и знаменатель каждой дроби, и сравнив ответы выясняем, что самой маленькой дробью является " + string(cor_drob[0]) + "/" + string(cor_drob[1]) + ". \n";
    
    if (power == 1) {
        expl += "Т.к. данная нам степень равна 1, мы получаем уже готовый ответ " + string(cor_drob[0]) + "/" + string(cor_drob[1]) + ", потому что при умножении на 1, мы получаем тоже число. \n"
    }
    else {
        expl += "После необходимо возвести её в данную нам степень, сделать это можно по очереди: \n" + 
         			"1. ";
    	
		for (let i = 0; i < power; i += 1) {
            if (i == power - 1) {expl += string(cor_drob[0]) + "=" + pow(cor_drob[0], power) + "\n 2. "}
            else {expl += string(cor_drob[0]) + "*"}
        }
        for (let i = 0; i < power; i += 1) {
            if (i == power - 1) {expl += string(cor_drob[1]) + "=" + pow(cor_drob[1], power) + "\n Узнаём что ответ будет: " + outp + "."}
            else {expl += string(cor_drob[1]) + "*"}
        }
    }
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/