//Самые большие/маленькие числа
/*
Сделайте генератор паззлов, который на входе показывает показывает ряд чисел и требует найти произведение трех самых больших/самых маленьких чисел.
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

struct ArrayList {
	array1: int[]
}

function createArrays(level: int) -> ArrayList {
  let length = rand_int(level - 1) + 1;
  if (length <= 3) {
    length = 4;
  }

  let array1: int[] = [];

  for (let i = 0; i < length; i += 1) {
      if (rand_bool()) {
          let num = rand_int(-100);
          if (num == 0) {
          	num = rand_int(-100);
          }
          for (let j = 0; j < array1.length(); j += 1) {
              while (num == array1[j]) {
              	num = rand_int(-100);
                if (num == 0) {
                    num = rand_int(-100);
                }
                j = 0;
              }
          }
          
          array1.push(num);
      } else {
          let num = rand_int(100);
          if (num == 0) {
          	num = rand_int(100);
          }
          for (let j = 0; j < array1.length(); j += 1) {
              while (num == array1[j]) {
              	num = rand_int(-100);
                if (num == 0) {
                	num = rand_int(100);
                }
                j = 0;
              }
          }
          
          array1.push(num);
      }
  }

    return new ArrayList {array1: array1};
}

function arrayToString(array: int[]) -> string {
  let str = "";
  for (let i = 0; i < array.length(); i += 1) {
    if (i < array.length() - 1) {
      str += string(array[i]) + ", ";
    } else {
      str += string(array[i]) + ".";
    }
  }
  return str;
}

function sortAndStringifyArray(array: int[]) -> string {
  array.sort();

  let str = "";
  for (let i = 0; i < array.length(); i += 1) {
    if (i < array.length() - 1) {
      str += string(array[i]) + ", ";
    } else {
      str += string(array[i]) + ".";
    }
  }
  return str;
}

function shuffleArray(array: int[]) -> int[] {
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
    
    let arrays = createArrays(level);
    let fix = false;
    if (rand_bool()) {
    	fix = true
    }
    let inpt = arrayToString(arrays.array1);
    
    let er = arrayToString(shuffleArray(arrays.array1)).split(", ")
    let wrong = 0;
    if (!fix) {
    	wrong = int(er[0]) * int(er[1]) * int(er[2]);
    }
    else {
    	wrong = int(er[er.length() - 1].split(".")[0]) * int(er[er.length() - 2]) * int(er[er.length() - 3])
    }
    
    let cor = sortAndStringifyArray(arrays.array1).split(", ")
    let outp = 0;
    if (!fix) {
    	outp = int(cor[0]) * int(cor[1]) * int(cor[2])
    }
    else {
    	outp = int(cor[cor.length() - 1].split(".")[0]) * int(cor[cor.length() - 2]) * int(cor[cor.length() - 3])
    }
    
    if (wrong == outp) {
    	wrong += rand_int(5) + 1;
    }
    
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан".split("|")[rand_int(6)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд чисел, её попросили " + whatDo + " произведение трех ";
    
	if (rand_bool()) {sc="Дан ряд чисел, требуется найти произведение трех "}
    
    if (!fix) {sc += "самых маленьких чисел."}
    else {sc += "самых больших чисел."}

    let descr = sc + "\n Формат вывода, следующий: 22275, -9576";
    let expl = "Находим ответ: ";
    if (!fix) {
    	expl += cor[0] + "*" + cor[1] + "*" + cor[2] + "=" + string(outp)
    }
    else {
    	expl += cor[cor.length() - 1].split(".")[0] + "*" + cor[cor.length() - 2] + "*" + cor[cor.length() - 3] + "=" + string(outp)
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
