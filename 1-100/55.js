//Генератор задач на преобразование дроби в примеры на деление
/*
Сделайте генератор задач, который на входе дает дробь, в числители которой находится выражение (многочлен), а в знаменателе натуральное число N. 
Требуется почленно разделить выражение (многочлен) на данное число N, чтобы преобразовать дробь в линейное выражение.
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
 
    let num = [string(float(rand_int(level * 5) + 1)), string(float(rand_int(level * 5) + 1)), string(float(rand_int(level * 5) + 1)), string(float(rand_int(level * 5) + 2))];
    
    let numerator = "(" + num[0] + "x^2 + " + num[1] + "x + " + num[2] + ")";
    let inpt = numerator + "/" + num[3];
    let outp = string(round(float(num[0]) / float(num[3]), 2)) + "x^2 + " + string(round(float(num[1]) / float(num[3]), 2)) + "x + " + string(round(float(num[2]) / float(num[3]), 2));
    let err = string(float(rand_int(level * 5) + 2));
    while (err == num[3]) {
    	err = string(float(rand_int(level * 5) + 2));
    }
    let wrong = string(round(float(num[0]) / float(err), 2)) + "x^2 + " + string(round(float(num[1]) / float(err), 2)) + "x + " + string(round(float(num[2]) / float(err), 2));
  
    let task = "Дана|Представлена|Выставлена|Указана|Видна|Показана|Подчёркнута|Выделена".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "разделить|рассчитать|посчитать".split("|")[rand_int(3)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " дробь, в числителе которой находится многочлен, а в знаменателе натуральное число. Её попросили почленно " + whatDo + " многочлен на натуральное число в знаменателе, чтобы преобразовать дробь в линейное выражение. При необходимости расчёты округлять до сотых.";

    if (rand_bool()) {sc="Дана дробь, в числителе которой находится многочлен, а в знаменателе натуральное число. Требуется почленно разделить многочлен на натуральное число в знаменателе, чтобы преобразовать дробь в линейное выражение. При необходимости расчёты округлять до сотых."}
    let descr = sc + "\n Пример вывода следующий: \"1.29x^2 + 1.14x + 1.14\", \"2.5x^2 + 1.5x + 1\", \"0.13x^2 + 0.76x + 2.37\"";

    let expl = "Разделим почленно многочлен на знаменатель: \n" + 
        		"(" + num[0] + "/" + num[3] + ")x^2=" + string(round(float(num[0]) / float(num[3]), 2)) + "x^2 \n" + 
        		"(" + num[1] + "/" + num[3] + ")x=" + string(round(float(num[1]) / float(num[3]), 2)) + "x \n" + 
        		num[2] + "/" + num[3] + "=" + string(round(float(num[2]) / float(num[3]), 2)) + "\n" + 
        		"Получаем ответ " + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
