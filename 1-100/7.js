//Преобразование периодической десятичной дроби в обыкновенную.
/*
Сделайте генератор заданий, который на входе показывает периодическую десятичную дробь, и просит преобразовать ее в обыкновенную.
*/ 

//!Задача не решена + в expl где-то ошибка 

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: string,
    output: string,
    wrong_output: string,
    explanation: string
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let whole = rand_int(level * 5 - 1); //99
    let tenths = rand_int(level * 50 - 2) + 1; //998
    let period = rand_int(level * 50 - 2) + 1; //998
    
    let inpt = "";
    if (tenths >= 10) {
        if (period >= 10) {inpt = string(whole) + "," + string(tenths) + "(" + string(period) + ")"}
        else {inpt = string(whole) + "," + string(tenths) + "(0" + string(period) + ")"}
    } 
    else {
        if (period >= 10) {inpt = string(whole) + ",0" + string(tenths) + "(" + string(period) + ")"}
        else {inpt = string(whole) + ",0" + string(tenths) + "(0" + string(period) + ")"}
    }
    
    let all = "";
    if (period >= 10) {all = string(tenths) + string(period)} else {all = string(tenths) + "0" + string(period)}
    
    let all_dp = tenths; 
    
    let znam = "";
    if (tenths <= 9) {znam += "99"}
    else {
    	for (let i = 0; i < string(tenths).length(); i += 1) {
            znam += "9";
        };	
    };
    
    if (period <= 9) {znam += "0"}
    else {
    	for (let i = 0; i < string(period).length(); i += 1) {
    		znam += "0";
    	};
    };
    
    let outp = "";
    if (whole != 0) {outp= string(whole) + "  " + string(int(all) - all_dp) + "/" + znam} else {outp= string(int(all) - all_dp) + "/" + znam};
    
    let wrong = "";  
    let wrong_tenths = string(int(all) - rand_int(all_dp));
    while (wrong_tenths == string(int(all) - all_dp)) {
    	wrong_tenths = string(int(all) - rand_int(all_dp));
    }
    if (whole != 0) {wrong= string(whole) + "  " + wrong_tenths + "/" + znam} else {wrong= wrong_tenths + "/" + znam};
  
    let task = "Дана|Представлена|Выставлена|Указана|Видна|Показана|Подчёркнута|Выделена".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(3)];
    let whatDo = "преобразовать|изменить|превратить|образовать|переделать".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(14)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(5)] + ". " + 
            task + " периодическая десятичная дробь, её попросили " + whatDo + " периодическую десятичную дробь в обыкновенную без сокращений.";

    if (rand_bool()) {sc="Требуется преобразовать периодическую десятичную дробь в обыкновенную дробь без сокращений.."}
    let descr = sc + "\n Формат вывода, следующий: обыкновенную дробь. \n Пример: 5  3183/9900 или просто 3183/9900 если нет целого.";

    let expl = "Получаем случайную периодическую десятичную дробь и преобразуем её в обыкновенную. \n" + "Исходная дробь " + outp + ". \n";
        
    
    if (tenths <= 9) {expl += "Считаем количество цифр в периоде десятичной дроби: P = 2. \n"} 
    else {expl += "Считаем количество цифр после запятой, но до периода: P = " + string(string(tenths).length()) + ". \n"}
    
    if (period <= 9) {expl += "Считаем количество цифр в периоде десятичной дроби: DP = 2. \n"} 
    else {expl += "Считаем количество цифр после запятой, но в периоде: DP = " + string(string(period).length()) + ". \n"}
    
    expl += "Число, состоящее из цифр после запятой, включая период (за исключением ведущих нулей): ALL = " + all + ". \n" +
        "Число, состоящее из цифр после запятой, но до периода (за исключением ведущих нулей): ALL_DP = " + string(all_dp) + ". \n" +
        "Числитель дроби: CHISL = ALL - ALL_DP = " + all + " - " + string(all_dp) + " = " + string(int(all) - all_dp) + ". \n";
    
    if (tenths <= 9) {expl += "Знаменатель дроби: ZNAM = " + znam + ", состоит из девяток в количестве P = 2"} 
    else {expl += "Знаменатель дроби: ZNAM = " + znam + ", состоит из девяток в количестве P = " +  string(string(tenths).length())}
    
    if (period <= 9) {expl += " и нулей в количестве DP = 2. \n"} 
    else {expl += " и нулей в количестве DP = " + string(string(period).length()) + ". \n"}
    
    expl += "Ответ =  " + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/