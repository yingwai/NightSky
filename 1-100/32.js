//Пара 
/*
Создайте генератор, который на входе будет генерировать маленькие и большие буквы. Нужно будет для маленькой буквы найти пару, а именно такую же только большую букву. 
На выходе нужно определить какие буквы остались без пары. То есть парой будут буквы "И" и "и", "А" и "а" и тд.
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

function generateLettersArray(length: int) -> string[] {
    let letters: string[] = [];
    for (let i = 0; i < length; i += 1) {
        let letter = chr(rand_int(31) + 1072);
        if (i % 2 == 1) {
            letter = chr(letter.charCodeAt(0) - 32);
        }
        
        for (let j = 0; j < letters.length(); j += 1) {
        	while (letter == letters[j]) {
                letter = chr(rand_int(31) + 1072);
                if (i % 2 == 1) {
                    letter = chr(letter.charCodeAt(0) - 32);
                }
        	}
    	}
        
        letters.push(letter)
    }
    return letters;
}

function checkSameLetters(letters: string[]) -> string[] {
    let sameLetters: string[] = [];
    let ans: string[] = [];
    for (let i = 0; i < letters.length(); i += 1) {
        for (let j = 0; j < letters.length(); j += 1) {
            if (chr(letters[i].charCodeAt(0) - 32) == letters[j]) {
                sameLetters.push(letters[i]);
                sameLetters.push(letters[j]);
                break;
            }
        }
    }
    
    return sameLetters;
}

function checkDifferentLetters(arr1: string[], arr2: string[]) -> string[] {
    let differentLetters: string[] = [];
    for (let i = 0; i < arr1.length(); i += 1) {
        let exists = false;
        for (let j = 0; j < arr2.length(); j += 1) {
            if (chr(arr1[i].charCodeAt(0) - 32) == chr(arr2[j].charCodeAt(0) - 32)) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            differentLetters.push(arr1[i]);
        }
    }
    return differentLetters;
}

function shuffleArray(array: string[]) -> string[] {
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
    
    let length = rand_int(level) + 4;
    
    
    let letters = generateLettersArray(length);
    let inpt = "";
    for (let i = 0; i < letters.length(); i += 1) {
        if (i == letters.length() - 1) {
        	inpt += letters[i] + "."
        }
        else {
        	inpt += letters[i] + ", "
        }
    }
    let outp = "";
    let ans = checkSameLetters(letters);
    
    let expl = "";
    if (ans.length() == 0) {
    	expl = "Т.к. в ряду одинаковых букв нет, получаем ответ: \n";
    }
    else {
    	expl = "Находим в ряду пары буквам: \n";
        for (let i = 0; i < ans.length(); i += 2) {
            expl += ans[i] + " = " + ans[i + 1] + "\n"
        }
        expl += "После записываем в ответ буквы без пары: \n";
    }
    
    let cor = checkDifferentLetters(letters, ans);
    for (let i = 0; i < cor.length(); i += 1) {
        if (i == cor.length() - 1) {
        	outp += cor[i] + "."
        }
        else {
        	outp += cor[i] + ", "
        }
    }
    let wrong = "";
    let er = shuffleArray(ans);
    if (er.length() != 0) {
    	for (let i = 0; i < er.length(); i += 1) {
            if (i == er.length() - 1) {
            	wrong += er[i] + "."
            }
            else {
            	wrong += er[i] + ", "
            }
        }
    }
    else {
        let ln = cor.length() - (rand_int(2) + 1);
    	for (let i = 0; i < ln; i += 1) {
            if (i == ln - 1) {
            	wrong += cor[i] + "."
            }
            else {
            	wrong += cor[i] + ", "
            }
        }
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|указать|отметить|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд букв, её попросили " + whatDo + " буквы у которых нет пары.";

    if (rand_bool()) {sc="Дан ряд букв. Требуется определить буквы у которых нет пары."}
    let descr = sc + "\n Пример вывода, следующий: т, Ж, Ф, л, в, З.";
    expl += outp
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
