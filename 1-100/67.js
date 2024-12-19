//порядок событий - таблица
/*
Сделайте генератор паззлов, который рисует таблицу с числами и просит найти какое-то число по заданным параметрам, например по строке, столбцу, либо наибольшее\ наименьшее и т.д.
*/

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: Canvas,
    output: string,
    wrong_output: string,
    explanation: string
}

function createTable(level: int, size: int) -> int[][] {
    let table: int[][] = [];
    for (let i = 0; i < size; i += 1) {
        let row: int[] = [];
        for (let j = 0; j < size; j += 1) {
            row.push(rand_int(level * 10));
        }
        table.push(row);
    }
    
    
    return table;
}

function findNumber(table: int[][], param: string, size: int, colValue: int, rowValue: int) -> string {
    let result = "";
    if (param == "строке") {
        result = string(table[colValue - 1][rowValue - 1]);
    } else if (param == "колонке") {
        result = string(table[rowValue - 1][colValue - 1]);
    } else if (param == "максимальное") {
        let arr: int[] = [];
        for (let i = 0; i < size; i += 1) {
            for (let j = 0; j < size; j += 1) {
            	arr.push(table[i][j]);
            }
        }
        arr.sort();
        result = string(arr[arr.length() - 1]);
    } else if (param == "минимальное") {
        let arr: int[] = [];
        for (let i = 0; i < size; i += 1) {
            for (let j = 0; j < size; j += 1) {
            	arr.push(table[i][j]);
            }
        }
        arr.sort();
        result = string(arr[0]);
    }
    
    return result;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let size = rand_int(level) + 2;
    let table = createTable(level, size);
    let inpt = new Canvas{};
    inpt.init(table[0].length() * 30, table[0].length() * 30, rgba(255, 255, 255, 1.0));
    
    let indentX = 0;
    let indentY = 0;
	for (let i = 0; i < size; i += 1) {
        for (let j = 0; j < size; j += 1) {
        	inpt.text(20 + indentX, 20 + indentY, string(table[i][j]) + " ", 16, rgb(0, 0, 0), "center");
            indentX += 30;
        }
        indentX = 0;
        indentY += 20;
    }
    
    let param = "минимальное|максимальное|колонке|строке".split("|")[rand_int(4)];
    let place = [rand_int(table.length()) + 1, rand_int(table.length()) + 1];
    let outp = findNumber(table, param, size, place[0], place[1]);
    let wrong = outp;
    while (wrong == outp) {
    	wrong = string(table[rand_int(table.length())][rand_int(table.length())])
    }
  
    let task = "Дана|Представлена|Выставлена|Указана|Видна|Показана|Подчёркнута|Выделена".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " таблица, её попросили " + whatDo + " ";
    if (rand_bool()) {sc="Дана таблица, требуется определить "}
    if (param == "минимальное") {
    	sc += "минимальное число в таблице.";
    } else if (param == "максимальное") {
    	sc += "максимальное число в таблице.";
    } else if (param == "колонке") {
    	sc += "какое число находится в(о) " + string(place[0]) + " колонке в(о) " + string(place[1]) + " позиции.";
    } else if (param == "строке") {
    	sc += "какое число находится в(о) " + string(place[0]) + " строке в(о) " + string(place[1]) + " позиции.";
    }

    let descr = sc + "\n Пример вывода следующий: 125";

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