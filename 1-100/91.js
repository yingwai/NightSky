//Деньги 
/*
лайте генератор паззлов, в которых скорость - заработная плата, дистанция - сумма денег. При этом добавьте соотношения курса валют. 
К примеру: кто быстрее накопить 100 долларов, если Петя зарабатывает 100 рублей/месяц, а Гоша 10 евро/неделя. При этом будет дан курс валют. Не используйте данный пример.
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

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let name1 = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)]
    let name2 = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)]
    while (name2 == name1) {
    	name2 = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)]
    }
    
    let usd = float(rand_int(level * 10) + 100);
    let rub = float(rand_int(level * 20) + 100);
    let eur = float(rand_int(level * 2) + 10);
    
    let curs = [float(round(rand_float(level * 10, 2) + 70.0, 2)), float(round(rand_float(level * 5, 2) + 0.5, 2))];
    
    let inpt = new Empty{};
    let outp = "";
    let wrong = "";
    let sum = [float(round(rub / curs[0], 2)), float(round((eur/7.0*29.5) / curs[1], 2))];
    if (sum[0] == sum[1]) {
    	usd = float(rand_int(level * 10) + 100);
        rub = float(rand_int(level * 20) + 100);
        eur = float(rand_int(level * 2) + 10);
        curs = [float(round(rand_float(level * 10, 2) + 70.0, 2)), float(round(rand_float(level * 5, 2) + 0.5, 2))];
        sum[0] = float(round(rub / curs[0], 2));
        sum[1] = float(round((eur/7.0*29.5) / curs[1], 2));
    }
    else if (sum[0] > sum[1]) {
    	outp = name1;
        wrong = name2;
    }
    else {
    	outp = name2;
        wrong = name1;
    }
  
    let task = "определить|найти|указать|узнать|показать".split("|")[rand_int(5)];
    let whatDo = "кто быстрее накопит|кто быстрее отдаст долг|кто быстрее получит|кто быстрее сможет накопить".split("|")[rand_int(4)];
    let descr = "Вам нужно " + task + ", " + whatDo + " " + string(usd) + " долларов, если ";
    if (rand_bool()) {
    	descr += name1 + " зарабатывает " + string(rub) + " рублей/месяц, а " + name2 + " " + string(eur) + " евро/неделя. ";
        
        if (rand_bool()) {
        	descr += "При условии что курс доллара к рублю " + string(curs[0]) + ", а к евро " + string(curs[1]) + ". За среднее число дней в месяце берём 29.5. Сумму денежных средств необходимо округлять до сотых.";	
        }
        else {
        	descr += "При условии что курс доллара к евро " + string(curs[1]) + ", а к рублю " + string(curs[0]) + ". За среднее число дней в месяце берём 29.5. Сумму денежных средств необходимо округлять до сотых.";
        }
    }
    else {
    	descr += name2 + " зарабатывает " + string(eur) + " евро/неделя, а " + name1 + " " + string(rub) + " рублей/месяц. ";
        
        if (rand_bool()) {
        	descr += "При условии что курс доллара к рублю " + string(curs[0]) + ", а к евро " + string(curs[1]) + ". За среднее число дней в месяце берём 29.5. Сумму денежных средств необходимо округлять до сотых.";	
        }
        else {
        	descr += "При условии что курс доллара к евро " + string(curs[1]) + ", а к рублю " + string(curs[0]) + ". За среднее число дней в месяце берём 29.5. Сумму денежных средств необходимо округлять до сотых.";
        }
    }
    let expl = "Сначала определим сколько долларов зарабатывает " + name1 + " в месяц " + string(rub) + "/" + string(curs[0]) + "=" + round(rub / curs[0], 2) + 
        		"$\nРассчитаем сколько долларов зарабатывает " + name2 + " в месяц (" + string(eur) + "/7*29.5)/" + string(curs[1]) + "=" + round((eur/7.0*29.5) / curs[1], 2);
    if (sum[0] > sum[1]) {
    	expl += "$\n Т.к. " + name1 + " зарабатывает больше долларов в месяц, она первая накопит " + string(usd) + " долларов."
    }
    else {
    	expl += "$\n Т.к. " + name2 + " зарабатывает больше долларов в месяц, она первая накопит " + string(usd) + " долларов."
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