//Генератор задач на проценты в реальной жизни
/*
Создайте генератор пазлов, который будет генерировать задачи из реальной жизни, которые будут связанны с вычислением процентов из определённого числа. 
Пример: У Марины было 100 конфет, 10 конфет она дала Паше, а Саше 4. Сколько в сумме от первоначального числа Марина раздала конфет в процентах? Пример не использовать.
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

function declOfNum(n: int, text_forms: string[]) -> string {
  n = n % 100;

  let n1 = n % 10;

  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }

  return text_forms[2];
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
    
    let all = float(rand_int(level * 5) + 10);
    let ost = [float(rand_int(int(all)) + 1), float(rand_int(int(all)) + 1)];
    while (ost[0] + ost[1] > all) {
    	ost[0] = float(rand_int(int(all)) + 1);
        ost[1] = float(rand_int(int(all)) + 1);
    }
    
    let index_name = [rand_int(15), rand_int(15), rand_int(15)];
    while (index_name[1] == index_name[0]) {
    	index_name[1] = rand_int(15);
    }
    while (index_name[2] == index_name[0] || index_name[2] == index_name[1]) {
    	index_name[2] = rand_int(15);
    }
    let names = ["Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[index_name[0]], "Инны Ани Алины Оли Кати Полины Арины Веры Нади Сони Бьянки Василисы Ванессы Вероники Жанны".split(" ")[index_name[0]], "Инне Ане Алине Оле Кате Полине Арине Вере Наде Соне Бьянке Василисе Ванессе Веронике Жанне".split(" ")[index_name[1]], "Инне Ане Алине Оле Кате Полине Арине Вере Наде Соне Бьянке Василисе Ванессе Веронике Жанне".split(" ")[index_name[2]]];
    let inpt = new Empty{};
    let outp = round((ost[0] + ost[1]) * 100.0 / all, 2) + "%";
    let wrong = outp;
    while (wrong == outp || float(wrong.split("%")[0]) > 100.0) {
        if (rand_bool()) {
    		wrong = round((ost[0] + ost[1]) * 100.0 / all + float(rand_int(5) + 1), 2) + "%";
        }
        else {
        	wrong = round((ost[0] + ost[1]) * 100.0 / all - float(rand_int(5) + 1), 2) + "%";
        }
    }
  
    let descr = "У " + names[1] + " было " + string(all) + " " + declOfNum(int(all), ["конфета", "конфеты", "конфет"]) + ", " + string(ost[0]) + " " + declOfNum(int(ost[0]), ["конфета", "конфеты", "конфет"]) + " она дала " + names[2] + ", а " + names[3] + " " + string(ost[1]) + ". Сколько в сумме от первоначального числа " + names[0] + " раздала конфет в процентах? Ответ необходимо округлить до сотых.";
    let expl = "Найдём процент розданных конфет: ((" + string(ost[0]) + "+" + string(ost[1]) + ")*100)/" + string(all) + "=" + outp.split("%")[0];
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
