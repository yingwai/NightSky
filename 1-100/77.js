//Вес людей
/*
Сделайте генератор задач, в котором будут генерироваться вес людей на напольных весах. Человеку нужно будет определить вес одного из людей. 
Например, Миша, Витя и Катя решили взвесится на весах, вес Кати 50 кг, вес Вити на 10 кг больше, а вес Миши на 15% меньше веса Вити. Определите, чему равен вес Миши.
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
    
    let name1 = [["Инна", "Инны"], ["Аня", "Ани"], ["Алина", "Алины"], ["Оля", "Оли"], ["Катя", "Кати"], ["Полина", "Полины"], ["Арина", "Арины"], ["Вера", "Веры"], ["Надя", "Нади"], ["Соня", "Сони"], ["Бьянка", "Бьянки"], ["Василиса", "Василисы"], ["Ванесса", "Ванессы"], ["Вероника", "Вероники"], ["Жанна", "Жанны"]][rand_int(15)];
    let name2 = [["Инна", "Инны"], ["Аня", "Ани"], ["Алина", "Алины"], ["Оля", "Оли"], ["Катя", "Кати"], ["Полина", "Полины"], ["Арина", "Арины"], ["Вера", "Веры"], ["Надя", "Нади"], ["Соня", "Сони"], ["Бьянка", "Бьянки"], ["Василиса", "Василисы"], ["Ванесса", "Ванессы"], ["Вероника", "Вероники"], ["Жанна", "Жанны"]][rand_int(15)];
    let name3 = [["Инна", "Инны"], ["Аня", "Ани"], ["Алина", "Алины"], ["Оля", "Оли"], ["Катя", "Кати"], ["Полина", "Полины"], ["Арина", "Арины"], ["Вера", "Веры"], ["Надя", "Нади"], ["Соня", "Сони"], ["Бьянка", "Бьянки"], ["Василиса", "Василисы"], ["Ванесса", "Ванессы"], ["Вероника", "Вероники"], ["Жанна", "Жанны"]][rand_int(15)];
    while (name2[0] == name1[0]) {
    	name2 = [["Инна", "Инны"], ["Аня", "Ани"], ["Алина", "Алины"], ["Оля", "Оли"], ["Катя", "Кати"], ["Полина", "Полины"], ["Арина", "Арины"], ["Вера", "Веры"], ["Надя", "Нади"], ["Соня", "Сони"], ["Бьянка", "Бьянки"], ["Василиса", "Василисы"], ["Ванесса", "Ванессы"], ["Вероника", "Вероники"], ["Жанна", "Жанны"]][rand_int(15)];
    }
    while (name3[0] == name2[0] && name3[0] == name1[0]) {
    	name3 = [["Инна", "Инны"], ["Аня", "Ани"], ["Алина", "Алины"], ["Оля", "Оли"], ["Катя", "Кати"], ["Полина", "Полины"], ["Арина", "Арины"], ["Вера", "Веры"], ["Надя", "Нади"], ["Соня", "Сони"], ["Бьянка", "Бьянки"], ["Василиса", "Василисы"], ["Ванесса", "Ванессы"], ["Вероника", "Вероники"], ["Жанна", "Жанны"]][rand_int(15)];
    }
    
    let inpt = new Empty {};
    let outp = "";
    let wrong = "";
    
    let ves1 = rand_int(level * 3) + 50;
    let sVes2 = "больше|меньше".split("|")[rand_int(2)];
    let ves2 = rand_int(level * 2) + 10;
    let sVes3 = "";
    let ves3 = rand_int(level) + 10;
    if (sVes2 == "меньше") {
    	sVes3 = "больше";
        outp = round(float(ves1 - ves2) + float(float(float(ves1 - ves2) * float(ves3)) / 100.0), 1) + " кг";
        wrong = round(float(ves1 + ves2) - float(float(float(ves1 + ves2) * float(ves3)) / 100.0), 1) + " кг";
    }
    else {
    	sVes3 = "меньше";
        outp = round(float(ves1 + ves2) - float(float(float(ves1 + ves2) * float(ves3)) / 100.0), 1) + " кг";
        wrong = round(float(ves1 - ves2) + float(float(float(ves1 - ves2) * float(ves3)) / 100.0), 1) + " кг";
    }
  
    let descr = name1[0] + ", " + name2[0] + " и " + name3[0] + " решили взвеситься на весах, вес " + name1[1] + " " + string(ves1) + " кг, вес " + 
        		name2[1] + " на " + string(ves2) + " кг " + sVes2 + ", а вес " + name3[1] + " на " + string(ves3) + "% " + sVes3 + " веса " + 
        		name2[1] + ". Вам необходимо определить, чему равен вес " + name3[1] + ". Ответ необходимо округлять до десятых. Пример вывода следующий: \"43.3 кг\", \"57.0 кг\"";
    let expl = "";
    if (sVes2 == "меньше") {
    	expl += "Рассчитаем вес " + name2[1] + ": " + string(ves1) + "-" + string(ves2) + "=" + string(ves1 - ves2) + 
            	"\nНайдём вес " + name3[1] + ": " + string(ves1 - ves2) + "+(" + string(ves1 - ves2) + "*"+ string(ves3) + "/100)=" + round(float(ves1 - ves2) + float(float(float(ves1 - ves2) * float(ves3)) / 100.0), 1) + 
            	"\nСледовательно, ответ " + outp;
    }
    else {
    	expl += "Рассчитаем вес " + name2[1] + ": " + string(ves1) + "+" + string(ves2) + "=" + string(ves1 + ves2) + 
            	"\nНайдём вес " + name3[1] + ": " + string(ves1 + ves2) + "-(" + string(ves1 + ves2) + "*"+ string(ves3) + "/100)=" + round(float(ves1 + ves2) - float(float(float(ves1 + ves2) * float(ves3)) / 100.0), 1) + 
            	"\nСледовательно, ответ " + outp;
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