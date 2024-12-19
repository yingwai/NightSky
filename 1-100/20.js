//Генератор таблицы. Сортировка строка
/*
Создайте генератор паззлов, в котором будет дана таблица, содержащая не более 5 строк. Таблица должна быть заполнена небольшими целыми числами: как положительными, 
так и отрицательными. Требуется отсортировать элементы таблицы в каждой строке по возрастанию.
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

struct ArrayList {
	array1: int[],
	array2: int[],
	array3: int[],
	array4: int[],
	array5: int[]
}

function createArrays(level: int) -> ArrayList {
  let length = rand_int(level - 1) + 1;
  if (length <= 2) {
    length = 3;
  }

  let array1: int[] = [];
  let array2: int[] = [];
  let array3: int[] = [];
  let array4: int[] = [];
  let array5: int[] = [];

  for (let i = 0; i < length; i += 1) {
      if (rand_bool()) {
          let num = rand_int(-100);
          for (let j = 0; j < array1.length(); j += 1) {
              while (num == array1[j]) {
              	num = rand_int(-100);
                j = 0;
              }
          }
          
          array1.push(num);
      } else {
          let num = rand_int(100);
          for (let j = 0; j < array1.length(); j += 1) {
              while (num == array1[j]) {
              	num = rand_int(-100);
                j = 0;
              }
          }
          
          array1.push(num);
      }
      
      if (rand_bool()) {
          let num = rand_int(-100);
          for (let j = 0; j < array2.length(); j += 1) {
              while (num == array2[j]) {
              	num = rand_int(-100);
                j = 0;
              }
          }
          
          array2.push(num);
      } else {
          let num = rand_int(100);
          for (let j = 0; j < array2.length(); j += 1) {
              while (num == array2[j]) {
              	num = rand_int(-100);
                j = 0;
              }
          }
          
          array2.push(num);
      }
      
      if (rand_bool()) {
          let num = rand_int(-100);
          for (let j = 0; j < array3.length(); j += 1) {
              while (num == array3[j]) {
              	num = rand_int(-100);
                j = 0;
              }
          }
          
          array3.push(num);
      } else {
          let num = rand_int(100);
          for (let j = 0; j < array3.length(); j += 1) {
              while (num == array3[j]) {
              	num = rand_int(-100);
                j = 0;
              }
          }
          
          array3.push(num);
      }
      
      if (rand_bool()) {
          let num = rand_int(-100);
          for (let j = 0; j < array4.length(); j += 1) {
              while (num == array4[j]) {
              	num = rand_int(-100);
                j = 0;
              }
          }
          
          array4.push(num);
      } else {
          let num = rand_int(100);
          for (let j = 0; j < array4.length(); j += 1) {
              while (num == array4[j]) {
              	num = rand_int(-100);
                j = 0;
              }
          }
          
          array4.push(num);
      }
      
      if (rand_bool()) {
          let num = rand_int(-100);
          for (let j = 0; j < array5.length(); j += 1) {
              while (num == array5[j]) {
              	num = rand_int(-100);
                j = 0;
              }
          }
          
          array5.push(num);
      } else {
          let num = rand_int(100);
          for (let j = 0; j < array5.length(); j += 1) {
              while (num == array5[j]) {
              	num = rand_int(-100);
                j = 0;
              }
          }
          
          array5.push(num);
      }
  }

    return new ArrayList {array1: array1, array2: array2, array3: array3, array4: array4, array5: array5};
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
    let inpt = "1. " + arrayToString(arrays.array1) + "\n" +
    			"2. " + arrayToString(arrays.array2) + "\n" +
    			"3. " + arrayToString(arrays.array3) + "\n" +
    			"4. " + arrayToString(arrays.array4) + "\n" +
    			"5. " + arrayToString(arrays.array5) + "\n";
    
    let wrong = "1. " + arrayToString(shuffleArray(arrays.array1)) + "\n" +
    			"2. " + arrayToString(shuffleArray(arrays.array2)) + "\n" +
    			"3. " + arrayToString(shuffleArray(arrays.array3)) + "\n" +
    			"4. " + arrayToString(shuffleArray(arrays.array4)) + "\n" +
    			"5. " + arrayToString(shuffleArray(arrays.array5)) + "\n";
    
    let outp = "1. " + sortAndStringifyArray(arrays.array1) + "\n" +
    			"2. " + sortAndStringifyArray(arrays.array2) + "\n" +
    			"3. " + sortAndStringifyArray(arrays.array3) + "\n" +
    			"4. " + sortAndStringifyArray(arrays.array4) + "\n" +
    			"5. " + sortAndStringifyArray(arrays.array5) + "\n";    
    
    let task = "Дана|Представлена|Выставлена|Указана|Видна|Показана".split("|")[rand_int(6)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "выбрать|показать|выделить|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " таблица с пятью строками и случайным количеством столбцов, её попросили " + whatDo + " расположить все числа в каждой строке по возрастанию.";

    if (rand_bool()) {sc="Дана таблица с пятью строками и случайным количеством столбцов, требуется расположить все числа в каждой строке по возрастанию."}
    let descr = sc + "\n Формат вывода, следующий: Первая таблица.";
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