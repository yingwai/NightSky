//Генератор: время года
/*
Создайте генератор паззлов, который будет генерировать ряд календарных дат. Генератор будет требовать определить и ввести те даты, которые не относятся к определенному времени года.
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

struct Date {
	d: string,
    m: string,
    y: string
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let cout = rand_int(level) + 2;
    let date: Date[] = []
    for (let i = 0; i < cout; i += 1) {
    	let day = string(rand_int(27) + 1);
        if (int(day) <= 9) {day = "0" + day}
        let month = string(rand_int(12) + 1);
        if (int(month) <= 9) {month = "0" + month}        
        let year = string(rand_int(23) + 2000);
        
        date.push(new Date {d: day, m: month, y: year})
    }
    let inpt = "";
    for (let i = 0; i < cout; i += 1) {
        inpt += date[i].d + "." + date[i].m + "." + date[i].y + "\n"
    }
    
    let asn_m = [["12", "01", "02"], ["03", "04", "05"], ["06", "07", "08"], ["09", "10", "11"]][rand_int(4)]; 
    
    let outp = "";
    for (let i = 0; i < cout; i += 1) {
        if (date[i].m != asn_m[0] && date[i].m != asn_m[1] && date[i].m != asn_m[2]) {
        	outp += date[i].d + "." + date[i].m + "." + date[i].y + "\n"
        }
    }
    if (outp == "") {outp = "Нет подходящей даты."}
    
    let wrong = "";
    for (let i = 0; i < cout; i += 1) {
        if (date[i].m == asn_m[0] || date[i].m == asn_m[1] || date[i].m == asn_m[2]) {
        	wrong += date[i].d + "." + date[i].m + "." + date[i].y + "\n"
        }
    }
    if (wrong == "") {wrong = "Нет подходящей даты."}
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|указать|написать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд дат, её попросили " + whatDo + " даты не относящиеся к ";
    
    if (rand_bool()) {sc="Дан ряд дат, требуется определить даты не относящиеся к "}
    if (asn_m[0] == "12") {
    	sc += "зиме. Записать ответ в том же порядке что и даны."
    }
    else if (asn_m[0] == "03") {
    	sc += "весне. Ззаписать ответ в том же порядке что и даны."
    }
    else if (asn_m[0] == "06") {
    	sc += "лету. Записать ответ в том же порядке что и даны."
    }
    else if (asn_m[0] == "09") {
    	sc += "осени. Записать ответ в том же порядке что и даны."
    }
    
    let descr = sc + "\n Формат вывода, следующий: \n 04.12.2011 \n 05.01.2016 \n или \"Нет подходящей даты.\"";
    
    let expl = "Т.к. нам нужно определить даты не относящиеся к ";
    if (asn_m[0] == "12") {
    	expl += "зиме, то мы ищем все даты у которых месяц равен 12, 01, 02."
    }
    else if (asn_m[0] == "03") {
    	expl += "весне, то мы ищем все даты у которых месяц не равен 03, 04, 05."
    }
    else if (asn_m[0] == "06") {
    	expl += "лету, то мы ищем все даты у которых месяц не равен 06, 07, 08."
    }
    else if (asn_m[0] == "09") {
    	expl += "осени, то мы ищем все даты у которых месяц не равен 09, 10, 11."
    }
    expl += "\n Таким образом мы получаем ответ: \n" + outp
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
