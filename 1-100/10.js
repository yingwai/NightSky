//Сложение 
/*
Сделайте генератор пазлов, который генерирует множество чисел, человек должен совершить с ними определенное действие (сложение, вычитание и т.п), полученный ответ перевести в римское число.
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


function convert(num:int) -> string {
    let c=[
		["","I","II","III","IV","V","VI","VII","VIII","IX"],
		["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
		["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
		["","M","MM","MMM"]
	];
    
    if (num == 0) {return "0"}
    
    return c[3][num / 1000 % 10]+c[2][num / 100 % 10]+c[1][num / 10 % 10]+c[0][num % 10];
}


function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let num = [rand_int(level * 50 - 1) + 1, rand_int(level * 50 - 1) + 1, rand_int(level * 50 - 1) + 1];
    while (num[1] > num[0]) {
    	num[1] = rand_int(level * 50 - 3) + 1;
    }
     while (num[2] > num[1]) {
    	num[2] = rand_int(level * 50 - 1) + 1;
    }
    
    let wrong_num = [rand_int(level * 50 - 1) + 1, rand_int(level * 50 - 1) + 1, rand_int(level * 50 - 1) + 1];
    
    while (num[0] == wrong_num[0]) {
    	wrong_num[0] = rand_int(level * 50 - 1) + 1;
    }
    
    while (wrong_num[1] > wrong_num[0]) {
    	wrong_num[1] = rand_int(level * 50 - 1) + 1;
    }
     while (wrong_num[2] > wrong_num[1]) {
    	wrong_num[2] = rand_int(level * 50 - 1) + 1;
    }
    
    let inpt = "";
    let arabic = 0;
    let wrong_arabic = 0;
    
    if (rand_bool()) {
        if (rand_bool()) {
            inpt = string(num[0]) + " + " + string(num[1]) + " + " + string(num[2]); 
            arabic = num[0] + num[1] + num[2]; 
            wrong_arabic = num[0] - num[1] + num[2]; 
        }
        else {
            inpt = string(num[0]) + " + " + string(num[1]) + " - " + string(num[2]); 
            arabic = num[0] + num[1] - num[2]; 
            wrong_arabic = num[0] + num[1] + num[2]; 
        }
    }
    else {
		inpt = string(num[0]) + " - " + string(num[1]) + " + " + string(num[2]); 
		arabic = num[0]- num[1] + num[2];
		wrong_arabic = num[0]+ num[1]- num[2];
    }

    let outp = convert(arabic);
    let wrong = convert(wrong_arabic);
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд чисел, её попросили " + whatDo + " выражение, а полученный ответ перевести в римское число.";

    if (rand_bool()) {sc="Требуется вычислить выражение, а полученный ответ перевести в римское число."}
    let descr = sc + "\n Формат вывода, следующий: римское число. \n Пример: CLIV.";

    let expl = "Получаем выражение " + inpt + " из которого следует ответ: " + string(arabic) + ". \n Пользуясь правилами: \n" +
        "1 = I, 2 = II, 3 = III, 4 = IV, 5 = V, 6 = VI, 7 = VII, 8 = VIII, 9 = IX, 10 = X, 20 = XX, 30 = XXX, \n 40 = XL, 50 = L, 60 = LX, 70 = LXX, 80 = LXXX, 90 = XC, 100 = C, 200 = CC, 300 = CCC, \n 400 = CD, 500 = D, 600 = DC, 700 = DCC, 800 = DCCC, 900 = CM, 1 000 = M, 2 000 = MM, 3 000 = MMM."
        + "\n  ";
    
    if (arabic <= 9) {
        expl += "Переводим число в римское по примеру: " + convert(arabic)
    }
    else if (arabic <= 99) {
        //10
        if (string(arabic).split("")[1] == "0") {
            expl += "Переводим число в римское по примеру: " + convert(arabic)
        }
        //11
        else {
            expl += "Сначала переводим десятые: " + convert(int(string(arabic).split("")[0]) * 10) 
                + "\n После переводим единицы: " + convert(int(string(arabic).split("")[1]))
                + "\n Такми образом мы соединяем все числа, и получаем ответ " + outp
        }
    }
    else if (arabic <= 999) {
        //100
        if (string(arabic).split("")[2] == "0" && string(arabic).split("")[1] == "0") {
            expl += "Переводим число в римское по примеру: " + convert(arabic)
        }
        //101
        else if (string(arabic).split("")[1] == "0") {
            expl += "Сначала переводим сотые: " + convert(int(string(arabic).split("")[0]) * 100) 
                + "\n Так как десятые отсутствуют, переводим единицы: " + convert(int(string(arabic).split("")[2]))
                + "\n Такми образом мы соединяем все числа, и получаем ответ " + outp
        }
        //110
        else if (string(arabic).split("")[2] == "0") {
            expl += "Сначала переводим сотые: " + convert(int(string(arabic).split("")[0]) * 100) 
                + "\n После переводим десятые: " + convert(int(string(arabic).split("")[1]) * 10)
                + "\n Такми образом мы соединяем все числа, и получаем ответ " + outp
        }
        //111
        else {
            expl += "Сначала переводим сотые: " + convert(int(string(arabic).split("")[0]) * 100) 
                + "\n После переводим десятые: " + convert(int(string(arabic).split("")[1]) * 10) 
                + "\n Следующие идут единицы: " + convert(int(string(arabic).split("")[2]))
                + "\n Такми образом мы соединяем все числа, и получаем ответ " + outp
        }
    }
    else if (arabic <= 3000) {
        //1000
        if (string(arabic).split("")[3] == "0" && string(arabic).split("")[2] == "0" && string(arabic).split("")[1] == "0") {
            expl += "Переводим число в римское по примеру: " + convert(arabic)
        }
        //1001
        else if (string(arabic).split("")[1] == "0" && string(arabic).split("")[2] == "0") {
            expl += "Сначала переводим тысячные: " + convert(int(string(arabic).split("")[0]) * 1000) 
            	+ "\n Так как сотые и десятые отсутствуют, переводим единицы: " + convert(int(string(arabic).split("")[1]))
                + "\n Такми образом мы соединяем все числа, и получаем ответ " + outp
        }
        //1010
        else if (string(arabic).split("")[1] == "0" && string(arabic).split("")[3] == "0") {
            expl += "Сначала переводим тысячные: " + convert(int(string(arabic).split("")[0]) * 1000) 
            	+ "\n Так как сотые отсутствуют, переводим десятые: " + convert(int(string(arabic).split("")[1]) * 10)
                + "\n Такми образом мы соединяем все числа, и получаем ответ " + outp
        }
        //1011
        else if (string(arabic).split("")[1] == "0") {
            expl += "Сначала переводим тысячные: " + convert(int(string(arabic).split("")[0]) * 1000) 
            	+ "\n Так как сотые отсутствуют, переводим десятые: " + convert(int(string(arabic).split("")[1]) * 10) 
            	+ "\n После переводим единицы: " + convert(int(string(arabic).split("")[3]))
                + "\n Такми образом мы соединяем все числа, и получаем ответ " + outp
        }
        //1100
        else if (string(arabic).split("")[2] == "0" && string(arabic).split("")[3] == "0") {
            expl += "Сначала переводим тысячные: " + convert(int(string(arabic).split("")[0]) * 1000) 
            	+ "\n Так как десятые и единицы отсутствуют, переводим сотые: " + convert(int(string(arabic).split("")[1]) * 100)
                + "\n Такми образом мы соединяем все числа, и получаем ответ " + outp
        }
        //1101
        else if (string(arabic).split("")[2] == "0") {
            expl += "Сначала переводим тысячные: " + convert(int(string(arabic).split("")[0]) * 1000) 
            	+ "\n После переводим сотые: " + convert(int(string(arabic).split("")[1]) * 100) 
            	+ "\n Так как десятые отсутствуют, переводим единицы: " + convert(int(string(arabic).split("")[3]))
                + "\n Такми образом мы соединяем все числа, и получаем ответ " + outp
        }
        //1110
        else if (string(arabic).split("")[3] == "0") {
            expl += "Сначала переводим тысячные: " + convert(int(string(arabic).split("")[0]) * 1000) 
            	+ "\n После переводим сотые: " + convert(int(string(arabic).split("")[1]) * 100) 
            	+ "\n Так же переводим десятые: " + convert(int(string(arabic).split("")[2]) * 10)
                + "\n Такми образом мы соединяем все числа, и получаем ответ " + outp
        }
        //1111
        else {
            expl += "Сначала переводим тысячные: " + convert(int(string(arabic).split("")[0]) * 1000) 
                	+ "\n После переводим сотые: " + convert(int(string(arabic).split("")[1]) * 100) 
                	+ "\n Так же переводим десятые: " + convert(int(string(arabic).split("")[2]) * 10) 
                	+ "\n Следующие идут единицы: " + convert(int(string(arabic).split("")[3]))
                + "\n Такми образом мы соединяем все числа, и получаем ответ " + outp
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