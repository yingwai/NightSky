//Генератор. Действия с дробями
/*
Создайте генератор паззлов, в которых будут даны 2 обыкновенные дроби, при этом одну из дробей нужно будет возвести в степень. 
Требуется выполнить это возведение в степень, а затем сложить получившуюся дробь и вторую из данных.
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

function reduceFraction(fraction: string) -> string {
    let numerator = int(fraction.split("/")[0]);
    let denominator = int(fraction.split("/")[1]);
    let length = 0;
    if (numerator > denominator) {
    	length = numerator;
    }
    else {
    	length = denominator;
    }
    
    for (let i = length; i >= 2; i -= 1) {
        while (numerator % i == 0 && denominator % i == 0) {
          numerator /= i;
          denominator /= i;
        }
    }
    return string(numerator) + "/" + string(denominator);
}

function fractionToPowerOfTwo(fraction: string) -> string {
	let numerator = int(fraction.split("/")[0]) * int(fraction.split("/")[0]);
	let denominator = int(fraction.split("/")[1]) * int(fraction.split("/")[1]);
	return string(numerator) + "/" + string(denominator);
}

function addFractions(a: string, b: string) -> string {
  let numerator = (int(a.split("/")[0]) * int(b.split("/")[1])) + (int(b.split("/")[0]) * int(a.split("/")[1]));
  let denominator = int(a.split("/")[1]) * int(b.split("/")[1]);
  return string(numerator) + "/" + string(denominator);
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let fractions = [string(rand_int(level * 2) + 1 + rand_int(15)) + "/" + string(rand_int(level * 2) + 1 + rand_int(15)), string(rand_int(level * 2) + 1 + rand_int(15)) + "/" + string(rand_int(level * 2) + 1 + rand_int(15))];
    
    let inpt = fractions[0] + ", " + fractions[1] + ".";
    let pow = [rand_int(2)];
    if (pow[0] == 0) {
    	pow.push(1)
    }
    else {
    	pow.push(0)
    }
    let outp = reduceFraction(addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])), fractions[pow[1]]));
    let wrong = reduceFraction(addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[1]])), fractions[pow[0]]));
  
    let task = "Даны|Представлены|Выставлены|Указаны|Показаны".split("|")[rand_int(5)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "суммировать|сложить".split("|")[rand_int(2)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " две дроби, её попросили возвести " + string(pow[0] + 1) + " дробь во вторую степень и " + whatDo + " эту дробь с оставшейся дробью. Все дроби при расчёте (те что даны, не сокращать) необходимо сокращать, если есть возможность.";

    if (rand_bool()) {sc="Даны две дроби, требуется возвести " + string(pow[0] + 1) + " дробь во вторую степень и сложить эту дробь с оставшейся дробью. Все дроби при расчёте (те что даны, не сокращать) необходимо сокращать, если есть возможность."}
    let descr = sc + "\n Пример вывода следующий: 83/50";
    
    let expl = "Сначала возведём " + string(pow[0] + 1) + " дробь во вторую степень " + fractions[pow[0]] + "*" + fractions[pow[0]] + "=" + fractionToPowerOfTwo(fractions[pow[0]]);
    
    if (reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])) != fractionToPowerOfTwo(fractions[pow[0]])) {
    	expl += "\nСократим полученную дробь " + reduceFraction(fractionToPowerOfTwo(fractions[pow[0]]));	
        
        expl += "\n Сложим две дроби " + reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])) + "+" + fractions[pow[1]] + "=" + addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])), fractions[pow[1]]);
        
        if (addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])), fractions[pow[1]]) != reduceFraction(addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])), fractions[pow[1]]))) {
        	expl += "\nСократим полученную дробь и получаем ответ " + reduceFraction(addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])), fractions[pow[1]]));
        }
        else {
        	expl += "\nТ.к. дробь не сокращается, получаем ответ " + reduceFraction(addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])), fractions[pow[1]]));
        }
    }
    else {
    	expl += "\n Т.к. дробь не сокращается, сложим две дроби " + reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])) + "+" + fractions[pow[1]] + "=" + addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])), fractions[pow[1]]);
    	
        if (addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])), fractions[pow[1]]) != reduceFraction(addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])), fractions[pow[1]]))) {
        	expl += "\nСократим полученную дробь и получаем ответ " + reduceFraction(addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])), fractions[pow[1]]));
        }
        else {
        	expl += "\nТ.к. дробь не сокращается, получаем ответ " + reduceFraction(addFractions(reduceFraction(fractionToPowerOfTwo(fractions[pow[0]])), fractions[pow[1]]));
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