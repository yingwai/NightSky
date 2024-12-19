//Перевод чисел. СС. Генератор
// Создайте генератор паззлов, в которых будут даны 2 числа: одно в 2-ой СС, другое в 10-ой СС. 
//  Требуется сравнить их и сказать, какое больше/меньше. Желательно, чтобы данные числа были примерно одинаковыми.

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: string,
    output: string,
    wrong_output: string,
    explanation: string
}

*Двуичный
function gen_dec2bit(level: int, dec10bit: int) -> int {
	let dec_2bit: int[] = [];
    
    if (level <= 20) {dec_2bit = [1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111, 10000, 10001, 10010, 10011, 10100, 10101]};
    if (level <= 15) {dec_2bit = [1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111]};
    if (level <= 10) {dec_2bit = [1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010]};
    if (level <= 5) {dec_2bit = [1, 10, 11, 100, 101]};
    
    let num = rand_int(dec_2bit.length());
        
    while (num + 1 == dec10bit) {
    	num = rand_int(dec_2bit.length());
    }
        
    return dec_2bit[num];
}

function gen_dec10bit(level: int) -> int {
	let dec_10bit: int[] = [];
    
    if (level <= 20) {dec_10bit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]};
    if (level <= 15) {dec_10bit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]};
    if (level <= 10) {dec_10bit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]};
    if (level <= 5) {dec_10bit = [1, 2, 3, 4, 5]};
        
    return dec_10bit[rand_int(dec_10bit.length())]
}

function getResponse(dec2bit: int, dec10bit: int) -> string {
    let dec_2bit = [1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111, 10000, 10001, 10010, 10011, 10100, 10101];
    			  //1  2   3   4    5
    
    let bit2 = dec2bit;
    let bit10 = dec10bit;
    
    if (bit2 == dec_2bit[0]) {bit2 = 1}
    if (bit2 == dec_2bit[1]) {bit2 = 2}
    if (bit2 == dec_2bit[2]) {bit2 = 3}
    if (bit2 == dec_2bit[3]) {bit2 = 4}
    if (bit2 == dec_2bit[4]) {bit2 = 5}
    if (bit2 == dec_2bit[5]) {bit2 = 6}
    if (bit2 == dec_2bit[6]) {bit2 = 7}
    if (bit2 == dec_2bit[7]) {bit2 = 8}
    if (bit2 == dec_2bit[8]) {bit2 = 9}
    if (bit2 == dec_2bit[9]) {bit2 = 10}
    if (bit2 == dec_2bit[10]) {bit2 = 11}
    if (bit2 == dec_2bit[11]) {bit2 = 12}
    if (bit2 == dec_2bit[12]) {bit2 = 13}
    if (bit2 == dec_2bit[13]) {bit2 = 14}
    if (bit2 == dec_2bit[14]) {bit2 = 15}
    if (bit2 == dec_2bit[15]) {bit2 = 16}
    if (bit2 == dec_2bit[16]) {bit2 = 17}
    if (bit2 == dec_2bit[17]) {bit2 = 18}
    if (bit2 == dec_2bit[18]) {bit2 = 19}
    if (bit2 == dec_2bit[19]) {bit2 = 20}
    if (bit2 == dec_2bit[20]) {bit2 = 21}
    
    if (bit2 > bit10) {return ">"} else {return "<"}
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    
    let dec10bit = gen_dec10bit(level);
    let dec2bit = gen_dec2bit(level,  dec10bit);
    
    let inpt = string(dec2bit) + " и " + string(dec10bit);
    
    let outp = string(dec2bit) + " " + getResponse(dec2bit, dec10bit) + " " + string(dec10bit);
    
    
    let wrong = "";
    if (outp.split(" ")[1] == ">") {wrong = string(dec2bit) +" < " + string(dec10bit)} else {wrong = string(dec2bit) +" > " + string(dec10bit)};
    
    
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)]
    let whatDo = "сравнить|сопоставить|сверить|соотнести|соизмерить".split("|")[rand_int(4)];
    
    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
        " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " +
        task + " 2 числа: одно в 2-ой СС, другое в 10-ой СС. Её попросили " + whatDo + " эти два числа и определить какое больше/меньше.";
  
    if (rand_bool()) {sc="Требуется " + whatDo + " два числа и определить какое больше/меньше."}
    let descr = sc + "\n Формат вывода, следующий: первое число <> второе число. \n Пример: 1010 > 1.";
 
    let expl = "Получаем 2 числа одно в 2-ой СС, другое в 10-ой СС. После чего переводим число из 2-ой СС в 10-ой СС и сравниваем их.";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/