//Объекты, расположенные в таблицу: замена элементов таблицы в зависимости от значений соседних элементов
/*
Создайте генератор заданий, который выводит таблицу, все ячейки которой заполнены нолями и единицами. По условию, если возле единицы находится четное (либо же нечетное) количество нолей, 
она сама становится нолем. Нужно указать, за сколько этапов вся таблица заполнится нолями либо сколько останется единиц после того, как ни для какой из единиц не будет соблюдаться условие 
превращения в ноль.
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

struct Table {
	row: int[]
}

function generateTable(size: int) -> Table[] {
    let table: Table[] = [];
    for (let i = 0; i < size; i += 1) {
        let row: int[] = [];
        for (let j = 0; j < size; j += 1) {
            row.push(rand_int(2));
        }
        table.push(new Table {row: row});
    }
    
    let odinka = false;
    for (let i = 0; i < size; i += 1) {
    	for (let j = 0; j < size; j += 1) {
            if (table[i].row[j] == 1) {
            	odinka = true;
                break;
            }
        }
    }
    
    if (odinka) {
    	table[rand_int(size)].row[rand_int(size)] = 1;
	}
    return table;
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
    
    let size = rand_int(level) + 2;
    let table = generateTable(size);
    let inpt = "";
    for (let i = 0; i < size; i += 1) {
        for (let j = 0; j < size; j += 1) {
        	inpt += string(table[i].row[j]) + " ";
        }
        inpt += "\n";
    }
    
    let odinki = [0, 0];
    for (let i = 0; i < size; i += 1) {
        for (let j = 0; j < size; j += 1) {
            if (table[i].row[j] == 1) {odinki[0] += 1; odinki[1] += 1};
        }
    }
    let outp = "";
    let expl = "Ищем все единицы и ищем количество 0 рядом с ними: \n";
    let steps = 0;
    let index = 1;
    let chet = rand_int(2);
    for (let i = 0; i < size; i += 1) {
		for (let j = 0; j < size; j += 1) {
            let zeroesAround = 0;
            //Сверху
            if (i > 0 && table[i-1].row[j] == 0) {zeroesAround += 1};
            //Снизу
            if (i < table.length()-1 && table[i+1].row[j] == 0) {zeroesAround += 1};
            //Слево
            if (j > 0 && table[i].row[j-1] == 0) {zeroesAround += 1};
            //Справа
            if (j < table[i].row.length()-1 && table[i].row[j+1] == 0) {zeroesAround += 1};
                
			if (table[i].row[j] == 1) {
                expl += string(index) + " единица, рядом с ней " + string(zeroesAround) + " " + declOfNum(zeroesAround, ["нуль", "нуля", "нулей"]) + " т.к. мы ищем " 
                    	+ "нечётное|чётное".split("|")[chet] + " количество нулей, ";
                index += 1;
                    
                if (zeroesAround == [1, 2][chet] || zeroesAround == [3, 4][chet]) {
                	table[i].row[j] = 0;
                    odinki[0] -= 1;
                    steps += 1;
                    
                    expl += "то меняем 1 на 0. \n";
                }
                else {
                	expl += "то не меняем 1 на 0. \n";
                }
        	}
    	}
    }
    
    if (odinki[0] == odinki[1]) {
    	outp = "Единиц осталось: " + string(odinki[0]);
    }
    else if (odinki[0] == 0) {
    	outp = "Шагов понадобилось: " + string(steps);
    }
    else {
        expl += "\n Вnорой раз проходим по таблице: \n"
    	for (let i = 0; i < size; i += 1) {
            for (let j = 0; j < size; j += 1) {
                let zeroesAround = 0;
                //Сверху
                if (i > 0 && table[i-1].row[j] == 0) {zeroesAround += 1};
                //Снизу
                if (i < table.length()-1 && table[i+1].row[j] == 0) {zeroesAround += 1};
                //Слево
                if (j > 0 && table[i].row[j-1] == 0) {zeroesAround += 1};
                //Справа
                if (j < table[i].row.length()-1 && table[i].row[j+1] == 0) {zeroesAround += 1};

                if (table[i].row[j] == 1) {
                expl += string(expl.split("\n").length() - index - 2) + " единица, рядом с ней " + string(zeroesAround) + " " + declOfNum(zeroesAround, ["нуль", "нуля", "нулей"]) + " т.к. мы ищем " 
                    	+ "нечётное|чётное".split("|")[chet] + " количество нулей, ";
                    
                if (zeroesAround == [1, 2][chet] || zeroesAround == [3, 4][chet]) {
                	table[i].row[j] = 0;
                    odinki[0] -= 1;
                    steps += 1;
                    
                    expl += "то меняем 1 на 0. \n";
                }
                else {
                	expl += "то не меняем 1 на 0. \n";
                }
        	}
            }
        }
        
        if (odinki[0] == 0) {
        	outp = "Шагов понадобилось: " + string(odinki[1]);
        }
        else if (odinki[0] < 0) {
        	outp = "Шагов понадобилось: " + string(odinki[1]);
        }
        else {
        	outp = "Единиц осталось: " + string(odinki[0]);
        }
    }
    
    let wrong = outp;
    let num = int(outp.split(" ")[2]);
    if (rand_bool()) {
    	num = rand_int(int(outp.split(" ")[2])) + 1;
    }
    else {
    	num += rand_int(5) + 1;
    }
    while (num > size) {
    	if (rand_bool()) {
            num = rand_int(int(outp.split(" ")[2])) + 1;
        }
        else {
            num += rand_int(5) + 1;
        }	
    }
    while (wrong == outp) {
        if (rand_bool()) {
            num = rand_int(int(outp.split(" ")[2])) + 1;
        }
        else {
            num += rand_int(5) + 1;
        }
        while (num > size) {
    	if (rand_bool()) {
            num = rand_int(int(outp.split(" ")[2])) + 1;
        }
        else {
            num += rand_int(5) + 1;
        }	
    }
    	wrong = outp.split(" ")[0] + " " + outp.split(" ")[1] + " " + string(num);
    }
  
    let task = "Дана|Представлена|Выставлена|Указана|Видна|Показана|Подчёркнута|Выделена".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " таблица, её попросили " + whatDo + " за сколько этапов вся таблица заполнится нулями либо сколько останется единиц после того, как для единицы не будет соблюдаться условие превращения в ноль. При условии что таблица проверяется слево на право, а нули нужно проверять сверху, справа, снизу и слева, а так же, чтобы 1 превратилась 0, рядом с 1 должно быть " + 
        	"нечётное|чётное".split("|")[chet] + " количество 0. Чтобы превратить таблицу в нули, проходим по таблице два раза при необходимости.";

    if (rand_bool()) {sc="Дана таблица, требуется определить за сколько этапов вся таблица заполнится нулями либо сколько останется единиц после того, как для единицы не будет соблюдаться условие превращения в ноль. При условии что таблица проверяется слево на право, нули нужно проверять сверху, справа, снизу и слева, а так же, чтобы 1 превратилась 0, рядом с 1 должно быть " +
                     	 "нечётное|чётное".split("|")[chet] + " количество 0. Чтобы превратить таблицу в нули, проходим по таблице два раза при необходимости."}
    
    let descr = sc + "\n Пример вывода следующий: \"Единиц осталось: 1\", \"Шагов понадобилось: 5\"";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
