//Генератор задач числа с остатком (дробные)
/*
Создайте генератор задач, который на входе предлагает деление объектов с получением остатка, записанного в виде дробного числа. На выходе человек должен ответить, 
получилось ли число с остатком, имеет ли число десятые, сотые доли в остатке?
*/ 

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: Empty,
    output: string,
    wrong_output: string,
    explanation: string
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

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let inpt = "";
    let num = [float(rand_int(level * 5 - 2) + 1), float(rand_int(level * 5 - 2) + 1)];
    if (num[0] <= 2.0) {num[0] = 3.0}
    while (num[1] >= num[0]) {
    	num[1] = float(rand_int(level * 5 - 1) + 1);
    }
    
    let outp = "";
    let wrong = "";
    let cor = round(num[0] / num[1], 2);
    let ost = 0;
    if (cor.split(".")[1] == "00") {
        cor = cor.split(".")[0];
        outp = "Число делится без остатка.";
        wrong = ["Число имеет десятые в доле в остатке.", "Число имеет сотые в доле в остатке."][rand_int(2)]
    }
    else if (cor.split(".")[1].split("")[1] == "0") {
        ost = 1;
        cor = cor.split(".")[0] + "." + cor.split(".")[1].split("")[0];
        outp = "Число имеет десятые в доле в остатке.";
    	wrong = ["Число делится без остатка.", "Число имеет сотые в доле в остатке."][rand_int(2)]
    }
    else {
        ost = 2;
    	outp = "Число имеет сотые в доле в остатке.";
    	wrong = ["Число делится без остатка.", "Число имеет десятые в доле в остатке."][rand_int(2)]
    }
  
    let task = "Дана|Представлена|Выставлена|Указана|Видна|Показана|Подчёркнута|Выделена".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|понять".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " дробь " + string(num[0]) + "/" + string(num[1]) +", её попросили " + whatDo + ", получилось ли число с остатком, имеет ли число десятые, сотые доле в остатке.";

    if (rand_bool()) {sc="Дана дробь " + string(num[0]) + "/" + string(num[1]) + ", требуется ответить, получилось ли число с остатком, имеет ли число десятые, сотые доли в остатке. Число может быть как с плавающей точкой: 2 цифры после запятой, так целое число. Если число имеет тысячные, сокращаем до сотых."}
    let descr = sc + "\n Пример формата вывода: Число делится без остатка. \n Число имеет десятые в доле в остатке. \n Число имеет сотые в доле в остатке.";

    let expl = "Рассмотрим дробь: " + string(num[0]) + "/" + string(num[1]) + "=" + cor + ". \n";
    if (ost == 0) {
        expl += "В ответе видим целое число, соответсвенно число делится без остатка.";
    }
    else if (ost == 1) {
        expl += "В ответе видим 1 цифру после запятой, соответсвенно число имеет десятые в доле в остатке.";
    }
    else if (ost == 2) {
    	expl += "В ответе видим 2 цифры после запятой, соответсвенно число имеет сотые в доле в остатке.";
    }
    
   	return new Puzzle{
         descr: descr,
         input: new Empty{},
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/