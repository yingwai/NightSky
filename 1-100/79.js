//Генератор: количества букв
/*
Создайте генератор паззлов, который будет формировать ряд слов. Некоторые слова должны иметь равное количество букв. 
Генератор будет требовать рассчитать процент слов от всех, которые имеют определенное количество букв.
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
    
    let length = rand_int(level * 2 + 5) + 2;
    let words = [
        //3
    	["акт", "бал", "бык", "вор", "гам", "гол", "дно", "дух", "эго", "жар"],
    	//5
        ["абзац", "автор", "багаж", "байка", "атлас", "архив", "барон", "двери", "икона", "крест"],
    	//8
        ["аванпост", "автопарк", "банкнота", "балерина", "висюлька", "гвоздика", "дивиденд", "забавник", "жидкость", "иголочка"],
    	//13
        ["автодиспетчер", "автотранспорт", "боеподготовка", "восьмигранник", "гармоничность", "демобилизация", "действенность", "единообразный", "зашнуровывать", "интуитивность"],
    	//17
        ["аксонометрический", "безнравственность", "бессознательность", "ветроустойчивость", "взаимоисключающий", "водопроницаемость", "дифференцирование", "мультиплицировать", "многопредметность", "правосубъектность"]
    ];
    
    let arr: string[] = [];
    for (let i = 0; i < length; i += 1) {
        let word = words[rand_int(5)][rand_int(9)];
        for (let j = 0; j < arr.length(); j += 1) {
            while (word == arr[j]) {
            	word = words[rand_int(5)][rand_int(10)];
                j = 0;
            }
        }
    	arr.push(word);
    }
    let inpt = "";
    for (let i = 1; i <= length; i += 1) {
        if (i == length) {
        	inpt += arr[i - 1] + ".";
        }
        else if (i % 4 == 0) {
        	inpt += arr[i - 1] + ", \n";
        }
        else {
        	inpt += arr[i - 1] + ", ";
        }
    }
    let num = arr[rand_int(arr.length())].length();
    let count = 0.0;
    for (let i = 0; i < length; i += 1) {
        if (num == arr[i].length()) {
        	count += 1.0;
        }
    }
    let outp = round(count * 100.0 / float(arr.length()), 2) + "%";
    let wrong = outp;
    while (wrong == outp) {
    	wrong = round(count + float(rand_int(5) + 1) * 100.0 / float(arr.length()), 2) + "%";
        if (float(wrong.split("%")[0]) >= 100.0) {
        	wrong = "100.00%"
        }
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд слов, её попросили " + whatDo + " процент слов от всех, которые имеют только " + string(num) + " " + declOfNum(num, ["букву", "буквы", "букв"]) + ". Необходимо округлять ответ до сотых в любом случае.";

    if (rand_bool()) {sc="Дан ряд слов, требуется определить процент слов от всех, которые имеют только " + string(num) + " " + declOfNum(num, ["букву", "буквы", "букв"]) + ". Необходимо округлять ответ до сотых в любом случае.";}
    let descr = sc + "\n Пример вывода следующий: 16.00%";

    let expl = "Считаем количество слов равное только " + string(num) + " " + declOfNum(num, ["букве", "буквам", "буквам"]) + ": \n";
    let temp: string[] = [];
    for (let i = 0; i < length; i += 1) {
        if (num == arr[i].length()) {
            temp.push(arr[i]);
        }
    }
    for (let j = 0; j < temp.length(); j += 1) {
        if (j == temp.length() - 1) {
            expl += temp[j] + " = " + string(count);
            continue;
        }
    	expl += temp[j] + ", ";
	}
    expl += "\n Найдём процент слов от всех, которые имеют только " + string(num) + " " + declOfNum(num, ["букву", "буквы", "букв"]) + " " + string(count) + "*100/" + string(arr.length()) + "=" + outp.split("%")[0];
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/