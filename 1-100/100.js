//Сумма скидки. generator
/*
Сделайте генератор, который выдаёт два числа, одно из них цена товара, а второе - процент скидки. Задача посчитать сумму скидки или цену товара со скидкой.
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
    
    let price = float(rand_int(level * 100) + 1000);
    let percent = float(rand_int(level * 5) + 1);
    
    let inpt = new Empty {};
    let outp = "Сумма скидки: " + round(price * percent / 100.0, 2) + "р. \n" +
        		"Цена с учётом скидки " +  round(price - (price * percent / 100.0), 2) + "р. \n";
    let wrong = outp;
    while (wrong == outp) {
        let temp = float(rand_int(level * 5) + 1);
		wrong = "Сумма скидки: " + round(price * temp / 100.0, 2) + "р. \n" +
        		"Цена с учётом скидки " +  round(price - (price * temp / 100.0), 2) + "р. \n";
    }
  
    let task = "Дана|Представлена|Выставлена|Указана|Показана".split("|")[rand_int(5)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " цена на товар " + string(price) + "р. и скидка в размере " + string(percent) + "%. Её попросили " + whatDo + " и записать в ответ сумму скидки и цену с учётом скидки. Все расчёты округляем до сотых.";

    if (rand_bool()) {sc="Дана цена на товар " + string(price) + "р. и скидка в размере " + string(percent) + "%. Требуется рассчитать и записать в ответ сумму скидки и цену с учётом скидки. Все расчёты округляем до сотых."}
    let descr = sc + "\n Пример вывода следующий: \n \"Сумма скидки: 109.83р. \nЦена с учётом скидки 1459.00р.\" (без кавычек)";

    let expl = "Рассчитаем сумму скидки: " + string(price) + "*" + string(percent) + "/100=" + round(price * percent / 100.0, 2) + "\n" +
        		"Рассчитаем цену с учётом скидки " + string(price) + "-" + round(price * percent / 100.0, 2) + "=" + round(price - float(round(price * percent / 100.0, 2)), 2) + "р. \n";;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/