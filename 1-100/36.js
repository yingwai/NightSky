//Премия в валюте
/*
Создайте генератор паззлов, в которых будут дана зарплата человека, а также размер премии в % соотношении от зарплаты. Укажите курс для перевода рублей в доллары или наоборот. 
Требуется определить, сколько долларов составит премия, выплачиваемая человеку.
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

function calculateBonus(salary: float, bonusPercent: float, exchangeRate: float, RUB: bool) -> float {
    let bonusAmount = 0.0;
    let bonusInDollars = 0.0;
    
    if (RUB) {
    	bonusAmount = salary * bonusPercent / 100.0;
        bonusInDollars = bonusAmount / exchangeRate;
    }
    else {
    	bonusAmount = salary * bonusPercent / 100.0;
        bonusInDollars = bonusAmount / (1.0 / exchangeRate);
    }
    return bonusInDollars;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let RUB = rand_bool();
    let salary = 0.0;
    let bonusPercent = float(rand_int(40) + 10);
	let exchangeRate = float(string(rand_int(99) + 1) + "." + string(rand_int(99) + 1));
    if (RUB) {
    	salary = float(rand_int(level * 25000 - 1) + 1);
        while (salary <= 4000.0) {
        	salary = float(rand_int(level * 25000 - 1) + 1);
        }
    }
    else {
    	salary = float(rand_int(level * 50 - 1) + 1);
        while (salary <= 30.0) {
        	salary = float(rand_int(level * 50 - 1) + 1);
        }
    }
    let inpt = new Empty{};
    let outp = "";
    if (RUB) {
    	outp = round(calculateBonus(salary, bonusPercent, exchangeRate, RUB), 2) + "$";
    }
    else {
    	outp = round(calculateBonus(salary, bonusPercent, exchangeRate, RUB), 2) + "₽";
    }
    let wrong = "";
    if (RUB) {
    	wrong = round(calculateBonus(salary, bonusPercent, exchangeRate + float(rand_int(6) + 1), RUB), 2) + "$";
    }
    else {
    	wrong = round(calculateBonus(salary, bonusPercent, exchangeRate + float(rand_int(6) + 1), RUB), 2) + "₽";
    }
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила зарплату ";
    if (RUB) {
    	sc += string(salary) + "₽. Ей необходимо " + whatDo + " сколько долларов составляет её премия, при условии что она равна " + string(bonusPercent) + "% от заработной платы, а курс доллара составляет " + string(exchangeRate) + ". Заработная плата округляется до сотых, учитывая копейки и центы."
    }
    else {
    	sc += string(salary) + "$. Ей необходимо " + whatDo + " сколько рублей составляет её премия, при условии что она равна " + string(bonusPercent) + "% от заработной платы, а курс рубля составляет " + string(exchangeRate) + ". Заработная плата округляется до сотых, учитывая копейки и центы."
    }
    
    if (rand_bool()) {
        sc="Дана зарплата ";
        if (RUB) {
            sc += string(salary) + "₽. Требуется определить сколько долларов составляет премия, при условии что она равна " + string(bonusPercent) + "% от заработной платы, а курс доллара составляет " + string(exchangeRate) + ". Заработная плата округляется до сотых, учитывая копейки и центы."
        }
        else {
            sc += string(salary) + "$. Требуется определить сколько рублей составляет премия, при условии что она равна " + string(bonusPercent) + "% от заработной платы, а курс рубля составляет " + string(exchangeRate) + ". Заработная плата округляется до сотых, учитывая копейки и центы."
        }
    }
    
    
    let descr = sc + "\n Пример вывода следующий: 1229.65₽, 1374.05₽, 342.25$, 405.00$ и т.д.";

    let expl = "";
    if (RUB) {
    	expl += "1. Сначала необходимо рассчитать сколько рублей составляет премия " + string(salary) + "*" + string(bonusPercent) + "/100=" + round(salary*bonusPercent/100.0, 2) + "\n" +
            	"2. После переведём премию в доллары " + round(salary*bonusPercent/100.0, 2) + "/" + string(exchangeRate) + "=" + round(calculateBonus(salary, bonusPercent, exchangeRate, RUB), 2) + "\n" +
            	"Получаем ответ " + outp;
    }
    else {
        expl += "1. Сначала необходимо рассчитать сколько долларов составляет премия " + string(salary) + "*" + string(bonusPercent) + "/100=" + round(salary*bonusPercent/100.0, 2) + "\n" +
            	"2. После переведём премию в рубли " + round(salary*bonusPercent/100.0, 2) + "/(1/" + string(exchangeRate) + ")=" + round(calculateBonus(salary, bonusPercent, exchangeRate, RUB), 2) + "\n" +
            	"Получаем ответ " + outp;
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
