//Генератор умножения чисел больше нуля и меньше единицы
/*
Создайте генератор, в котором будут создаваться задания с умножением чисел, в ходящих в диапазон меньше единицы но больше нуля. Делайте задания, 
в которых будут использоваться жизненные ситуации. Делайте задания где данное число это некий коэффициент, необходимый для получения ответа в задании.
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
    
    let l = float("0." + string(rand_int(9) + 1));
    let S = float(rand_int(level * 50) + 500);
    
    let inpt = new Empty{};
    let outp = string(round(l * S, 1)) + " л.";
    let wrong = outp;
    while (wrong == outp) {
        if (rand_bool()) {
        	wrong = string(round(l * (S - float(rand_int(50) + 1)), 1)) + " л.";
            continue;
        }
    	wrong = string(round(l * (S + float(rand_int(50) + 1)), 1)) + " л.";
    }
  
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " решила полить сад, но перед этим ей необходимо " + whatDo + 
        	" количество воды, необходимое для полива сада. При условии что расход воды на 1 кв. метр сада составляет " + string(l) + " литра. Площадь сада равна " + string(S) + " кв. метров." + 
        	" Ответ необходимо округлить до десятых если имеются цифры после точки.";
    
    let descr = sc + "\n Пример вывода следующий: \"324 л.\", \"174.9 л.\"";

    let expl = "Рассчитать количество воды, необходимое для полива сада " + string(l) + "*" + string(S) + "=" + outp.split(" л.")[0];
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/