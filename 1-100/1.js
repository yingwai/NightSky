//А что потом?
// Сделайте генератор пазлов, в котором на входе выдается число и месяц, а на выходе человеку необходимо определить какая дата будет через 8 (рандомно) недель.

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
    day: int,
    month: string,
    leap_year: bool
}

function get_num(num:int) -> int {
    let temp = rand_int(num) + 1;
    return temp;
}

function GetDate() -> Date {
    let d = get_num(28);
    let ms = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "ноября", "декабря"];
    let ly = rand_bool();
    
    return new Date
    {
        day: d,
        month: ms[rand_int(ms.length())],
        leap_year: ly            
    }
}

function GetLastDate(day: int, mounth: string, leap_year: bool, period: int) -> Date {
    let d = day;
    let m = mounth;
    let p = period * 7;
    let limit = 28;
    let ly = leap_year;
    
    for (let i = 0; i < p; i += 1) {
    	d += 1;
        
        if(m == "февраля") {
            if (ly) {limit = 29} else {limit = 28}
        }
        if(m == "апреля" || m == "июня" || m == "сентября" || m == "ноября") {limit = 30}
        if(m == "января" || m == "марта" || m == "мая" || m == "июля" || m == "августа" || m == "октября" || m == "декабря") {limit = 31}
        
        if (d > limit) {
        	d = 1;
            
            if (m == "января") {m = "февраля"}
            else if (m == "февраля") {m = "марта"}
            else if (m == "марта") {m = "апреля"}
            else if (m == "апреля") {m = "мая"}
            else if (m == "мая") {m = "июня"}
            else if (m == "июня") {m = "июля"}
            else if (m == "июля") {m = "августа"}
            else if (m == "августа") {m = "сентября"}
            else if (m == "сентября") {m = "октября"}
            else if (m == "октября") {m = "ноября"}
            else if (m == "ноября") {m = "декабря"}
            else if (m == "декабря") {m = "января"}
        }
    };
    
	return new Date
    {
        day: d,
        month: m,
        leap_year: ly
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
    
    let get_first_date = GetDate();
    let first_date = string(get_first_date.day) + " " + get_first_date.month;

    let period = rand_int(level) + rand_int(10);
    if (period == 0) {period = 1};
    
    let get_last_date = GetLastDate(get_first_date.day, get_first_date.month, get_first_date.leap_year, period);
    let last_date = string(get_last_date.day) + " " + get_last_date.month;
    
    let get_ly = get_first_date.leap_year;
    let ly = "не високосным";
    if (get_ly) {ly = "високосным"}
    
    let wrong = string(rand_int(28) + 1) + " " + get_first_date.month;
    
    let task="отмечена|показана|выставлена|указана|видна|обведена|зачёркнута|выделена".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)]
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(4)];
    
    let sc="Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
        " получила "+ wher+" "+ "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] +". "
         + "На календаре " + task + " дата, её попросили " +whatDo+ " какая дата будет через " + string(period) + " " + declOfNum(period, ["неделю", "недели", "недель"]) + ", при том что год является " + ly + ".";
    if(rand_bool()){sc="Требуется определить дату через " + string(period) + " " + declOfNum(period, ["неделю", "недели", "недель"]) + ", при том, что известен определённый день, месяц и то что год ясвляется " + ly + "."}
    let desc = sc + "\n Формат вывода, следующий: число и месяц. \n Пример: 1 июня.";
 
    let expl = "Получаем случайную дату \"" + 
        first_date + 
        "\". После получаем количество дней в неделю " + 
        string(period) + 
        "*7. \n Если сумма дней превышает количество дней в месяце, то меняем месяц на следующий и сбрасываем день на 1.";
    
   	return new Puzzle{
         descr: desc,
         input: first_date,
         output: last_date,
         wrong_output: wrong,
         explanation: expl
     };
}
*/