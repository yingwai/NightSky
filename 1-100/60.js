//Генератор спичек
/*
Создайте генератор, в котором на входе будут даны спички. Некоторые из них будут сломаны. Также будут даны зажигалки. 
На выходе нужно будет сначала перемножить поломанные спички с зажигалками, а потом целые спички с зажигалками. Далее сравнить полученные числа.
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
    
    let matches = rand_int(level * 2) + 5;
    let ost_matches = rand_int(level * 2) + 1;
    while (ost_matches >= matches) {
    	ost_matches = rand_int(level * 2) + 1;
    }
    let lighter = rand_int(level) + 1;
    
    let inpt = string(matches) + " " + string(ost_matches);
    let ans = [ost_matches * lighter, (matches - ost_matches) * lighter];
    let err = [ost_matches * (lighter + rand_int(5)), (matches - ost_matches) * (lighter + rand_int(5))];
    let outp = "";
    if (ans[0] > ans[1]) {
    	outp = string(ans[0]) + ">" + string(ans[1])
    }
    else if (ans[0] == ans[1]) {
    	outp = string(ans[0]) + "=" + string(ans[1])
    }
    else {
    	outp = string(ans[0]) + "<" + string(ans[1])
    }
    let wrong = outp;
    while (wrong == outp) {
    	if (err[0] > err[1]) {
            wrong = string(err[0]) + ">" + string(err[1])
        }
        else if (err[0] == err[1]) {
            wrong = string(err[0]) + "=" + string(err[1])
        }
        else {
            wrong = string(err[0]) + "<" + string(err[1])
        }
        
        err[0] = ost_matches * (lighter + rand_int(5));
        err[1] = ost_matches * (lighter + rand_int(5));
    }
  
    let task = [declOfNum(matches, ["Дана", "Даны", "Даны"]), declOfNum(matches, ["Представлена", "Представлены", "Представлены"]), declOfNum(matches, ["Выставлена", "Выставлены", "Выставлены"]), declOfNum(matches, ["Указана", "Указаны", "Указаны"]), declOfNum(matches, ["Видна", "Видны", "Видны"]), declOfNum(matches, ["Показана", "Показаны", "Показаны"]), declOfNum(matches, ["Подчёркнута", "Подчёркнуты", "Подчёркнуты"]), declOfNum(matches, ["Выделена", "Выделены", "Выделены"])][rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "перемножить|умножить".split("|")[rand_int(2)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " " + string(matches) + " " + declOfNum(matches, ["спичка", "спички", "спичек"]) + " и " + string(lighter) + " " + declOfNum(lighter, ["зажигалка", "зажигалки", "зажигалок"]) + ". " + string(ost_matches) + " из " + 
        	string(matches) + " " + declOfNum(matches, ["спичка", "спички", "спичек"]) + " сломано. Её попросили " + whatDo + " сначала поломанные спички с зажигалками, а потом целые спички с зажигалками и сравнить полученные числа.";

    if (rand_bool()) {sc=declOfNum(matches, ["Дана", "Даны", "Даны"]) + " " + string(matches) + " " + declOfNum(matches, ["спичка", "спички", "спичек"]) + " и " + string(lighter) + " " + declOfNum(lighter, ["зажигалка", "зажигалки", "зажигалок"]) + 
        			". " + string(ost_matches) + " из " + string(matches) + " " + declOfNum(matches, ["спичка", "спички", "спичек"]) + 
        			" сломано. Требуется перемножить сначала поломанные спички с зажигалками, а потом целые спички с зажигалками и сравнить полученные числа."}
                                                                     
    let descr = sc + "\n Пример вывода следующий: \"36<198\", \"209>33\", \"25>4\", \"52<129\"";

    let expl = "Сначала перемножим поломанные спички с зажигалками " + string(ost_matches) + "*" + string(lighter) + "=" + string(ans[0]) +
        		"\n После перемножим целые спички с зажигалками (" + string(matches) + "-" + string(ost_matches) + ")*" + string(lighter) + "=" + string(ans[1]) +
        		"\n Сравниваем два числа и получаем ответ " + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
