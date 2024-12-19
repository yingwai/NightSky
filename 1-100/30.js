//Загрузка 
/*
Создайте генератор паззлов, который генерирует скачивание определенной игры, генератор выводит память, которую занимает игра на компьютере и скорость интернета. 
Генератор будет просить посчитать время, за которое скачается игра.
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

function declOfNum(n: int, text_forms: string[]) -> string {
  n = n % 100;

  let n1 = n % 10;

  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }

  return text_forms[2];
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

function pow(num: int, power: int) -> int {
    if (num == 0 && power != 0) {return 0;};
    if (num == 0) {return 0;};
    let t = 1;
    for (let i = 0; i < power; i+=1){
        t *= num;
    };
    return t;
}

function downloadGame(gameSize: int, internetSpeed: int) -> string {
  let gameSizeBytes = gameSize * pow(1024, 3);
  let downloadTime = gameSizeBytes / (internetSpeed * pow(1024, 2));
    let minut = round(float(downloadTime)/60.0, 2).split(".")[0];
    if (minut[0] == "0") {
        let temp = "" 
        for (let i = 1; i < minut.length(); i+=1) {
        	temp += minut[i];
        }
        minut = temp;
    }
    
    let secund = round(float(downloadTime)/60.0, 2).split(".")[1];
    	if (secund.split("")[0] == "0") {
            let temp = "" 
            for (let i = 1; i < secund.length(); i+=1) {
                temp += secund[i];
            }
            secund = temp;
        }
    
    if (int(secund) >= 60) {
    	let temp = int(minut) + 1;
        let temp2 = int(secund) - 60;
        minut = string(temp);
        secund = string(temp2);
    }
    
    if (int(secund) <= 0) {
    	return "Время загрузки: " + minut + " " + declOfNum(int(minut), ["минута", "минуты", "минут"]) + ".";
    }
    else {
    	return "Время загрузки: " + minut + " " + declOfNum(int(minut), ["минута", "минуты", "минут"]) + " " + secund + " " + declOfNum(int(secund), ["секунда", "секунды", "секунд"]) + ".";
    }
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let gameSize = rand_int(level * 50 - 2) + 20;
    let internetSpeed = rand_int(level) + ((rand_int(10) + 1) * 10);
    let inpt = new Empty{};
    let outp = downloadGame(gameSize, internetSpeed);
    let wrong = downloadGame(gameSize + rand_int(5), internetSpeed + rand_int(2) + 1);
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " размер игры: " + string(gameSize) + " гб. и скорость интернета " + string(internetSpeed) + " Мбит/с, её попросили " + whatDo + " время, за которое скачается игра.";

    if (rand_bool()) {sc="Представлен размер игры: " + string(gameSize) + " гб. и скорость интернета " + string(internetSpeed) + " Мбит/с. Требуется определить время, за которое скачается игра."}
    let descr = sc + "\n Пример вывода следующий: Время загрузки: 18 минут 13 секунды./Время загрузки: 10 минут.";

    let expl = "Рассчитываем ответ следующим образом: \n 1. Находим размер игры в байтах " + string(gameSize) + "*1024^3=" + string(gameSize * pow(1024, 3)) + "\n" +
        		"2. Находим время загрузки (" + string(gameSize * pow(1024, 3)) + "/(" + string(internetSpeed) + "*1024^2))/60=";
    if (outp.split(" ").length() >= 5) {
        if (outp.split(" ")[4].length() == 1) {
        	expl += outp.split(" ")[2] + ".0" + outp.split(" ")[4]; 
        } 
        else {
        	expl += outp.split(" ")[2] + "." + outp.split(" ")[4]; 
        }
    }
    else {
    	expl += outp.split(" ")[2]; 
    }
    
    expl += "\n Таким образом время загрузки получается " + outp.split(":")[1];
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
