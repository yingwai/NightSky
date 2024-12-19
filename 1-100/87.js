//Телефонные заметки
/*
Сделайте генератор задач, который предлагает решающему список событий двух типов: добавление заметки в телефон и удаление i-той заметки. 
Решающий должен определить номер j-той заметки в телефоне, после выполнения всех событий.
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

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let add: string[] = [];
    for (let i = 0; i < rand_int(level * 3) + 4; i += 1) {
    	add.push("Добавлена заметка №" + string(i + 1) + "\n");
    }
    
    let remove: string[] = [];
    for (let i = 0; i < rand_int(add.length() - 1); i += 1) {
        let temp = "Удалена заметка №" + string(rand_int(add.length()) + 1) + "\n";
        for (let j = 0; j < remove.length(); j += 1) {
            while (temp == remove[j]) {
            	temp = "Удалена заметка №" + string(rand_int(add.length()) + 1) + "\n";
                j = 0;
            }
        }
    	remove.push(temp);
    }
    
    let inpt = "Добавление заметок: \n";
    for (let i = 0; i < add.length(); i += 1) {
    	inpt += add[i];
    }
    if (remove.length() == 0) {
    	inpt += "\nУдаление заметок: \n Отсутствуют. \n";
    }
    else {
        inpt += "\nУдаление заметок: \n";
        for (let i = 0; i < remove.length(); i += 1) {
            inpt += remove[i];
        }
    }
    
    let ji = rand_int(add.length() - remove.length());
    let ans: string[] = [];
    for (let i = 0; i < add.length(); i += 1) {
        let flag = true;
        
        for (let j = 0; j < remove.length(); j += 1) {
            if (add[i].split(" ")[2] == remove[j].split(" ")[2]) {
                flag = false;
                break;
            }
        }
        
        if (flag) {
			ans.push("Заметка " + add[i].split(" ")[2]);
        }
    }
    
    let outp = ans[ji];
    let wrong = outp;
    while (wrong == outp) {
    	wrong = ans[rand_int(ans.length())];
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Показан|Подчёркнут|Выделен".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "показать|указать|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " список событий двух типов: добавление заметки в телефон и удаление заметки. Её попросили " + whatDo + " номер " + string(ji + 1) + " заметки в телефоне, после выполнения всех событий. При условии, что \"№n\" заметки, считается как название, т.е. при удалении \"Заметка №1\" номер следующей не изменяется, а значит что первой заметкой становится \"Заметка №2\".";

    if (rand_bool()) {sc="Дан список событий двух типов: добавление заметки в телефон и удаление заметки. Требуется определить номер " + string(ji + 1) + " заметки в телефоне, после выполнения всех событий. При условии, что \"№n\" заметки, считается как название, т.е. при удалении \"Заметка №1\" номер следующей не изменяется, а значит что первой заметкой становится \"Заметка №2\"."}
    let descr = sc + "\n Пример вывода следующий: Заметка №3";
    let expl = "Сначала составим список из оставшихся заметок: \n";
    for (let i = 0; i < ans.length(); i += 1) {
    	expl += ans[i];
    }
    expl += "После запишем в ответ " + string(ji + 1) + " заметку: " + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/