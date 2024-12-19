//Буквы 
/*
Сделайте генератор паззлов, который генерирует буквы вразброс. Человеку нужно будет расположить буквы так, чтоб получилось слово.
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

function shuffleWord(word: string) -> string {
  let a = word.split("");
  let n = a.length();

  for (let i = n - 1; i > 0; i -= 1) {
    let j = rand_int(i + 1);
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let words = [
        //3
    	["акт", "бал", "бык", "вор", "гам", "гол", "дно", "дух", "эго", "жар"][rand_int(9)],
    	//5
        ["абзац", "автор", "багаж", "байка", "атлас", "архив", "барон", "двери", "икона", "крест"][rand_int(9)],
    	//8
        ["аванпост", "автопарк", "банкнота", "балерина", "висюлька", "гвоздика", "дивиденд", "забавник", "жидкость", "иголочка"][rand_int(9)],
    	//13
        ["автодиспетчер", "автотранспорт", "боеподготовка", "восьмигранник", "гармоничность", "демобилизация", "действенность", "единообразный", "зашнуровывать", "интуитивность"][rand_int(9)],
    	//17
        ["аксонометрический", "безнравственность", "бессознательность", "ветроустойчивость", "взаимоисключающий", "водопроницаемость", "дифференцирование", "мультиплицировать", "многопредметность", "правосубъектность"][rand_int(9)]
    ];
    let word = ""
    if (level <= 20) {word = words[4]}
    if (level <= 13) {word = words[3]}
    if (level <= 8) {word = words[2]}
    if (level <= 5) {word = words[1]}
    if (level <= 3) {word = words[0]}
    
    let inpt = shuffleWord(word);
    let outp = "";
    for (let i = 0; i < word.length(); i += 1) {
    	outp += string(i + 1) + ". " + word.split("")[i] + "\n"
    }
    let er = shuffleWord(inpt);
    let wrong = "";
    for (let i = 0; i < er.length(); i += 1) {
    	wrong += string(i + 1) + ". " + er.split("")[i] + "\n"
	}
    while (wrong == outp) {
        wrong = "";
        er = shuffleWord(inpt);
    	for (let i = 0; i < er.length(); i += 1) {
            wrong += string(i + 1) + ". " + er.split("")[i] + "\n"
        }
    }    
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "расположить|поставить|переставить|распределить".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд букв, её попросили " + whatDo + " буквы так, чтоб получилось слово.";

    if (rand_bool()) {sc="Дан ряд букв, требуется расположить буквы так, чтоб получилось слово."}
    let descr = sc + "\n Пример вывода следующий: \n 1. г \n 2. о \n 3. л";

    let expl = "Получаем ряд букв и располагаем их так чтобы получилось слово: \n" + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
