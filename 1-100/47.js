//Объекты, расположенные в таблицу: Процент
/*
Создайте генератор, который создает таблицу и заполняет её числами. Человеку нужно посчитать какой процент от всей стройки составляет значение в первой ячейке. 
Для этого необходимо посчитать сумму чисел во всей строке и узнать часть первого значения от всей строки, которую принимаем за 100 процентов.
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

struct Stroke {
	stroke: float[]
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

function createStroke(length: int) -> Stroke {
    let arr: float[] = [];
    for (let i = 0; i < length; i += 1) {
    	arr.push(float(rand_int(100) + 1));
    }
    
    while (arr[1] == arr[0]) {
    		arr[1] = float(rand_int(100) + 1);
        }
    
    return new Stroke{stroke: arr}
}

function sumNum(arr: float[]) -> string[] {
    let num1 = arr[0];
    let sum = num1;
    let ans = ""
    for (let i = 1; i < arr.length(); i += 1) {
    	sum += arr[i];
    }
    
    ans = round(num1/sum * 100.0, 2);
    let ans1 = string(num1/sum * 100.0);
    
    return [string(num1), string(sum), ans, ans1]
}

function shuffleArray(array: float[]) -> float[] {
  for (let i = 0; i < array.length(); i += 1) {
    let j = rand_int(i + 1);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
    
  return array;
}
function shuffleStroke(array: Stroke[]) -> Stroke[] {
  for (let i = 0; i < array.length(); i += 1) {
    let j = rand_int(i + 1);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
    
  return array;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let count = rand_int(level) + 1;
    let length = rand_int(level*2) + 2;
    let inpt = "";
    let table: Stroke[] = [];
    for (let i = 0; i < count; i += 1) {
    	table.push(createStroke(length));
        
        inpt += string(i + 1) + ". "
        for (let j = 0; j < length; j += 1) {
            if (j == length - 1) {
            	inpt += string(table[i].stroke[j]) + ". \n";
                continue;
            }
        	inpt += string(table[i].stroke[j]) + ", ";
        } 
    }
    let outp = "";
    for (let i = 0; i < count; i += 1) {
    	outp += string(i + 1) + ". " + sumNum(table[i].stroke)[2] + "% \n"
    }
      
    let task = "Дана|Представлена|Выставлена|Указана|Видна|Показана|Подчёркнута|Выделена".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " таблица с рядом чисел, её попросили " + whatDo + " какой процент от всей строки составляет значение первого числа. Ответ необходимо округлить до сотых.";

    if (rand_bool()) {sc="Дана таблица с рядом чисел, требуется определить какой процент от всей строки составляет значение первого числа. Ответ необходимо округлить до сотых."}
    let descr = sc + "\n Пример вывода следующий: \n \"1. 29.08% \n 2. 42.27% \n 3. 5.00%\"";

    let expl = "Рассчитаем все строки таблицы по очереди: \n";
    for (let i = 0; i < count; i += 1) {
    	expl += string(i + 1) + ". " + sumNum(table[i].stroke)[0] + "/(";
        for (let j = 0; j < length; j += 1) {
            if (j == length - 1) {
            	expl += string(table[i].stroke[j]) + ")=" + sumNum(table[i].stroke)[3] + "\n";
                continue;
            }
        	expl += string(table[i].stroke[j]) + "+";
        }
    }
    expl += "Округляем ответ до сотых и получаем: \n" + outp;
    
    let wrong = outp;
    while (wrong == outp) {
        wrong = ""
    	for (let i = 0; i < count; i += 1) {
            wrong += string(i + 1) + ". " + sumNum(shuffleArray(shuffleStroke(table)[i].stroke))[2] + "% \n"
        }	
    }
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
