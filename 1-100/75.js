//Генератор: что же понравиться больше?
/*
Сделайте генератор, который генерирует несколько двузначных чисел из которых человеку нужно выбрать то, которое больше всего понравиться Алене исходя из нижестоящих фактов.
Не все из перечисленных чисел нравятся Алене. . В приоритете Алена выберет число которое больше. Но больше всего Алена не любит четные числа. Некоторые из больших чисел не нравятся Алене, 
в частности числа кратные 3. Выберите число которое больше всего понравиться Алене и вычтите его от суммы остальных чисел.
*/

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: Empty,
    output: string,
    wrong_output: string,
    explanation: string
}

function sumNum(arr: int[], not: int) -> int {
    let ans = arr[0];
    for (let i = 1; i < arr.length(); i += 1) {
        if (arr[i] != not) {
    		ans += arr[i];
        }
    }
    
    
    return ans;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let count = level + 5;
    let interval: int[] = [];
    for (let i = 0; i < count; i += 1) {
        let num = rand_int(50) + 1;
        for (let j = 0; j < interval.length(); j += 1) {
            while (num == interval[j]) {
                num = rand_int(90) + 10;
            	j = 0;
            }
        }
        
    	interval.push(num);
    }
    
    let inpt = new Empty {};
    let temp = 0;
    for (let i = 0; i < count; i += 1) {
        if (interval[i] > temp && interval[i] % 2 != 0 && interval[i] % 3 != 0) {
        	temp = interval[i];
        }
    }
    let outp = string(sumNum(interval, temp) - temp);
    let wrong = outp;
    while (wrong == outp) {
        let op = "+-"[rand_int(2)];
        if (op == "+") {
    		wrong = string(sumNum(interval, temp) + (temp + rand_int(10)));
        } 
        else {
    		wrong = string(sumNum(interval, temp) - (temp + rand_int(10)));
        }
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Показан|Подчёркнут|Выделен".split("|")[rand_int(7)];

    let name = [["Инна", "Инне"], ["Аня", "Ане"], ["Алина", "Алине"], ["Оля", "Оле"], ["Катя", "Кате"], ["Полина", "Полине"], ["Арина", "Арине"], ["Вера", "Вере"], ["Надя", "Наде"], ["Соня", "Соне"], ["Бьянка", "Бьянке"], ["Василиса", "Василисе"], ["Ванесса", "Ванессе"], ["Вероника", "Веронике"], ["Жанна", "Жанне"]][rand_int(15)]
    let sc = task + " ряд чисел: ";
    
    for (let i = 0; i < count; i += 1) {
        if (i == count - 1) {
        	sc += string(interval[i]) + ". ";
            continue; 
        }
        sc += string(interval[i]) + ", ";
    }
    
    sc += "Выберите число которое больше всего понравится " + name[1] + " и вычтите его от суммы остальных чисел. " + name[1] + " нравятся числа исходя из следующих фактов" + 
			". В приоритете " + name[0] + " выберет число которое больше. Но больше всего " + name[0] + " не любит четные числа. Некоторые из больших чисел не нравятся " + name[1] + 
			", в частности числа кратные 3. Если таких чисел нет, то число 0 является любимым."
    
    let descr = sc + "\n Пример вывода следующий: 41 или -69";

    let expl = "Сначала выберем наибольшее нечётное число и не кратное 3: " + string(temp) + 
        		"\n Вычтем число от суммы остальных чисел " + string(sumNum(interval, temp)) + "-" + string(temp) + "=" + outp;
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/