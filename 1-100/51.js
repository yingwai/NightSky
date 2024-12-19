//Слова в минуту
/*
Создайте генератор паззлов, который генерирует учеников и их скорость чтения в словах в минуту. Генератор будет просить указать суммарное количество слов которые прочитают все ученики за час.
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
    
    let count = rand_int(level) + 5;
    let speed: int[] = [];
    
    let ans = 0;
    let er = 0;
    let inpt = "";
    for (let i = 0; i < count; i += 1) {
        let word = rand_int(450) + 50;
        speed.push(word);
        ans += speed[i];
        er += rand_int(speed[i]) + 150;
        
    	inpt += string(i + 1) + " ученик читает " + string(word) + " " + declOfNum(word, ["слово", "слова", "слов"]) + " в минуту \n"
    }
    
    let outp = "Все ученики читают " + string(ans * 60) + " " + declOfNum(ans * 60, ["слово", "слова", "слов"]) + " в час";
    let wrong = "Все ученики читают " + string(er * 60) + " " + declOfNum(er * 60, ["слово", "слова", "слов"]) + " в час";
  
    let task = "Дано|Представлено|Указано|Видно|Показано".split("|")[rand_int(5)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " " + string(count) + " " + declOfNum(count, ["ученик", "ученика", "учеников"]) + ", её попросили " + whatDo + " суммарное количество слов которые прочитают все ученики за час.";

    if (rand_bool()) {sc="Дано " + " " + string(count) + " "+ declOfNum(count, ["ученик", "ученика", "учеников"]) + ". Требуется определить суммарное количество слов которые прочитают все ученики за час."}
    let descr = sc + "\n Пример вывода следующий: \"Все ученики читают 75960 слов в час\"";

    let expl = "Сначала посчитаем количество слов которые прочитают все ученики в минуту ";
    for (let i = 0; i < count; i += 1) {
        if (i == count - 1) {
        	expl += string(speed[i]) + "=" + string(ans);
            continue;
        }
        expl += string(speed[i]) + "+"
    }
    expl += "\n Посчитаем сколько слов было прочитано за час " + string(ans) + "*60=" + string(ans*60)
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
