//Генератор слов с буквами разными регистрами. Усложненный уровень
/*
Сделайте генератор паззлов, в котором будет дано слово, состоящее из букв разного регистра. Попросите посчитать количество гласных букв, которые стоят после заглавных букв.
*/

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: string,
    output: int,
    wrong_output: int,
    explanation: string
}

*большие буквы, рандом капс
function randomCaps(word: string, num: int) -> string {
    let newWord = "";
    for (let i = 0; i < word.length(); i += 1) {
        if (rand_bool()) {
            newWord += chr(word.charCodeAt(i) - 32);
        } else {
            newWord += word[i];
        }
    }
    return newWord;
}

*счёт букв, капс, подсчёт маленьких букв, подсчёт больших букв
function countVowelsAfterCaps(word: string) -> int {
    let count = 0;
    let isPreviousUpper = false;
    for (let i = 0; i < word.length(); i += 1) {
        let letter = word[i];
        if (isPreviousUpper && isVowel(letter)) {
            count += 1;
        }
        isPreviousUpper = letter.charCodeAt(0) < 1072;
    }
    return count;
}

function isVowel(letter: string) -> bool {
    let bl = false
    let vowels = "ауоиэыяюеёАУОИЭЫЯЮЕЁ";
    for (let j = 0; j < vowels.split("").length(); j += 1) {
        if (letter == vowels.split("")[j]) {
        	bl = true;
            break;
        }
    }
    
    return bl;
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
    
    let inpt = randomCaps(word, word.length() - 1);
    let outp = countVowelsAfterCaps(inpt);
    let wrong = 0;
    if (outp >= 3 && rand_bool()) {
    	wrong = outp - (rand_int(3) + 1)
    }
    else {
    	wrong = outp + (rand_int(4) + 1)
    }
  
    let task = "Дано|Представлено|Выставлено|Указано|Видно|Показано|Подчёркнуто|Выделено".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " слово у которого в случайном месте стоят заглавные буквы, её попросили " + whatDo + " количество гласных букв, которые стоят после заглавных букв.";

    if (rand_bool()) {sc="Дано слово у которого в случайном месте стоят заглавные буквы. Требуется посчитать количество гласных букв, которые стоят после заглавных букв."}
    let descr = sc + "\n Пример вывода следующий: 2";
    let expl = "";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
