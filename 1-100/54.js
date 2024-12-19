//стулья 
/*
Сделайте генератор, который генерирует некоторое количество стульев. Известно, что стулья будут иметь разное количество ножек. 
Стулья с нечетным количеством ножек переворачивают, а стулья с четным количеством ножек отодвигают. Задача человека: указать на стулья, которые переворачивают/отодвигают.
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
    
    let length = rand_int(level) + 3;
    
    let inpt = "";
    let stul: string[] = [];
    for (let i = 0; i < length; i += 1) {
        let nojka = rand_int(6) + 1
        let str = "\n У " + string(i + 1) + " стула " + string(nojka) + " " + declOfNum(nojka, ["ножка", "ножки", "ножек"]);
        if (i == 0) {
        	str = " У " + string(i + 1) + " стула " + string(nojka) + " " + declOfNum(nojka, ["ножка", "ножки", "ножек"]);
        }
    	inpt += str;
        stul.push(str)
    }
    
    let action = "перевернуть/отодвинуть".split("/")[rand_int(2)];
    let outp = "";
    if (action == "перевернуть") {
        for (let i = 0; i < length; i += 1) {
            if (int(stul[i].split(" ")[4]) % 2 != 0) {
            	outp += stul[i].split(" ")[2] + " стул \n";
            }
        }
    }
    else if (action == "отодвинуть") {
        for (let i = 0; i < length; i += 1) {
            if (int(stul[i].split(" ")[4]) % 2 == 0) {
            	outp += stul[i].split(" ")[2] + " стул \n";
            }
        }
    }
    if (outp == "") {
    	outp = "Нет стульев которые необходимо " + action + "."
    }
        
    let wrong = outp;
    while (wrong == outp) {
        wrong = ""
		for (let i = 0; i <= rand_int(length); i += 1) {
            let num = rand_int(length) + 1;
            
            for (let j = 0; j < int(wrong.split("\n").length()); j += 1) {
            	while (num == int(wrong.split("\n")[j].split(" ")[0])) {
                    num = rand_int(length) + 1;
                    j = 0;
                }	
            }
            
			wrong += string(num) + " стул \n";
        }
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "указать|установить|показать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд стульев, её попросили " + whatDo + " какие стулья необходимо " + action + ". При условии что стулья с нечетным количеством ножек переворачивают, а стулья с четным количеством ножек отодвигают. Ответ должен быть представлен в том же порядке что и представлен ряд стульев.";

    if (rand_bool()) {sc="Дан ряд стульев, требуется определить какие стулья необходимо " + action + ". При условии что стулья с нечетным количеством ножек переворачивают, а стулья с четным количеством ножек отодвигают. Ответ должен быть представлен в том же порядке что и представлен ряд стульев."}
    let descr = sc + "\n Пример вывода следующий: \n \"1 стул \n 3 стул \n 2 стул\", \n \"Нет стульев которые необходимо перевернуть.\" \n или \"Нет стульев которые необходимо отодвинуть.\"";

    let expl = "Разбираем что необходимо сделать с каждым стулом: \n";
    for (let i = 0; i < length; i += 1) {
        expl += inpt.split("\n")[i] + " значит его необходимо ";
        if (int(stul[i].split(" ")[4]) % 2 != 0) {
        	expl += "перевернуть \n";
        }
        else if (int(stul[i].split(" ")[4]) % 2 == 0) {
        	expl += "отодвинуть \n";
        }
    }    
    expl += "Следовательно ответ: \n" + outp
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
