//Сравнение размеров файлов
/*
Создайте генератор, который создает паззлы, где даются 2,3 и более файлов, решающему нужно определить какой файл весит больше/меньше. 
Файлы могут измеряться по-разному, то есть один файл в мегабайтах, а другой в килобайтах и тп.
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

function convertToGigabytes(value: float, unit: string) -> float {
    let gigabytes = value;
    if (unit == "килобайт") {
        gigabytes = value / (1000.0 * 1000.0);
    } else if (unit == "мегабайт") {
        gigabytes = value / 1000.0;
    } else if (unit == "терабайт") {
        gigabytes = value * 1000.0;
    } else if (unit == "петабайт") {
        gigabytes = value * (1000.0 * 1000.0);
    } else {
        return gigabytes
    }
    return gigabytes;
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
    
    let length = rand_int(level) + 2;
    let files: string[] = [];
    let inpt = "";
    for (let i = 0; i < length; i += 1) {
        let size = float(rand_int(99) + 1)
        let file = string(size) + [declOfNum(int(size), [" килобайт", " килобайта", " килобайт"]), declOfNum(int(size), [" мегабайт", " мегабайта", " мегабайт"]), declOfNum(int(size), [" гигабайт", " гигабайта", " гигабайт"]), declOfNum(int(size), [" терабайт", " терабайта", " терабайт"]) , declOfNum(int(size), [" петабайт", " петабайта", " петабайт"])][rand_int(5)];
        
        for (let j = 0; j < files.length(); j += 1) {
            while (file == files[j]) {
                size = float(rand_int(99) + 1)
        		file = string(size) + [declOfNum(int(size), [" килобайт", " килобайта", " килобайт"]), declOfNum(int(size), [" мегабайт", " мегабайта", " мегабайт"]), declOfNum(int(size), [" гигабайт", " гигабайта", " гигабайт"]), declOfNum(int(size), [" терабайт", " терабайта", " терабайт"]) , declOfNum(int(size), [" петабайт", " петабайта", " петабайт"])][rand_int(5)];
                j = 0;
            }
        }
        
    	files.push(file);
        inpt += string(i + 1) + " файл весит  " + file + "\n"
    }
    let allGigabyte: float[] = [];
    for (let i = 0; i < length; i += 1) {
    	allGigabyte.push(convertToGigabytes(float(files[i].split(" ")[0]), files[i].split(" ")[1]))
    }
    
    let outp = "";
    let flag = rand_bool();
    if (flag) {
          let max = allGigabyte[0];
          let fl = 1;

          for (let i = 1; i < allGigabyte.length(); i += 1) {
            if (allGigabyte[i] > max) {
              max = allGigabyte[i];
              fl = i + 1;
            }
          }

          outp = string(fl) + " файл";
    }
    else {
    	let min = allGigabyte[0];
          let fl = 1;

          for (let i = 1; i < allGigabyte.length(); i += 1) {
            if (allGigabyte[i] < min) {
              min = allGigabyte[i];
              fl = i + 1;
            }
          }

          outp = string(fl) + " файл";
    }
    
    let wrong = outp;
    while (wrong == outp) {
    	wrong = string(rand_int(allGigabyte.length()) + 1) + " файл"
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд файлов, её попросили " + whatDo + " размер всех файлов и записать в ответ ";
    if (rand_bool()) {sc="Дан ряд файлов, требуется определить размер всех файлов и записать в ответ "}
    if (flag) {
    	sc += "наибольший файл.";
    }
    else {
    	sc += "наименьший файл.";
    }
    
    let descr = sc + "\n Пример вывода следующий: \"5 файл\", \"1 файл\", \"4 файл\"";

    let expl = "Сначала переведём все файлы в гигабайты: \n";
    for (let i = 0; i < files.length(); i += 1) {
    	let gigabytes = files[i].split(" ")[0];
        if (files[i].split(" ")[1] == "килобайт" || files[i].split(" ")[1] == "килобайта") {
            expl += gigabytes + "/1000000=" + string(allGigabyte[i]) + declOfNum(int(allGigabyte[i]), [" гигабайт", " гигабайта", " гигабайт"]) + " \n";
        } else if (files[i].split(" ")[1] == "мегабайт" || files[i].split(" ")[1] == "мегабайта") {
            expl += gigabytes + "/1000=" + string(allGigabyte[i]) + declOfNum(int(allGigabyte[i]), [" гигабайт", " гигабайта", " гигабайт"]) + " \n";
        } else if (files[i].split(" ")[1] == "терабайт" || files[i].split(" ")[1] == "терабайта") {
            expl += gigabytes + "*1000=" + string(allGigabyte[i])+ declOfNum(int(allGigabyte[i]), [" гигабайт", " гигабайта", " гигабайт"]) + " \n";
        } else if (files[i].split(" ")[1] == "петабайт" || files[i].split(" ")[1] == "петабайта") {
            expl += gigabytes + "*1000000=" + string(allGigabyte[i]) + declOfNum(int(allGigabyte[i]), [" гигабайт", " гигабайта", " гигабайт"]) + " \n";
        } else {
            expl += gigabytes + "=" + string(allGigabyte[i]) + declOfNum(int(allGigabyte[i]), [" гигабайт", " гигабайта", " гигабайт"]) + " \n";
        }
    }
    expl += "Ищем необходимый нам файт и получаем ответ: " + outp
    
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
