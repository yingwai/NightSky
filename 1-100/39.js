//Генератор. Исключения
/*
Сделайте генератор, которому на вход даётся от 3-х до 6-ти дат рождения некоторых людей. 
Определить время года, в котором нет ни одного дня рождения. Сформировать условия таким образом, чтобы ответ всегда был однозначным.
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

struct Date {
	d: string,
    m: string,
    y: string
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let cout = rand_int(level) + 3;
    let date: Date[] = []
    for (let i = 0; i < cout; i += 1) {
    	let day = string(rand_int(27) + 1);
        if (int(day) <= 9) {day = "0" + day}
        let month = string(rand_int(12) + 1);
        if (int(month) <= 9) {month = "0" + month}        
        let year = string(rand_int(13) + 2010);
        
        date.push(new Date {d: day, m: month, y: year})
    }
    let inpt = "";
    for (let i = 0; i < cout; i += 1) {
        inpt += date[i].d + "." + date[i].m + "." + date[i].y + "\n"
    }
    
    let asn_m = [["12", "01", "02"], ["03", "04", "05"], ["06", "07", "08"], ["09", "10", "11"]]; 
    
    let outp = "";
    let time: string[] = [];
    for (let i = 0; i < asn_m.length(); i += 1) {
        let flag = true
        for (let j = 0; j < cout; j += 1) {
        	if (date[j].m == asn_m[i][0] || date[j].m == asn_m[i][1] || date[j].m == asn_m[i][2]) {
                flag = false
            }
        }
        
        if (flag) {
            if (i == 0) {
                time.push("зима");
            }
            else if (i == 1) {
                time.push("весна");
            }
            else if (i == 2) {
                time.push("лето");
            }
            else if (i == 3) {
                time.push("осень");
            }
        }
    }
    if (time.length() != 0) {
        if (time.length() == 1) {
        	outp = "Время года в котором нет дней рождений: ";
        }
        else if (time.length() >= 2) {
        	outp = "Времена года в которых нет дней рождений: ";
        }
        for (let i = 0; i < time.length(); i += 1) {
            if (i == time.length() - 1) {
            	outp += time[i] + ".";
                continue;
            }
        	outp += time[i] + ", "
        }
    }
    else {
    	outp = "Во всех временах года есть дни рождения."
    }
    
    let wrong = "";
    if (time.length() == 1) {
        wrong = "Время года в котором нет дней рождений: ";
        if (time[0] == "зима") {
        	wrong += "весна. лето. осень.".split(" ")[rand_int(3)];
        }
        else if (time[0] == "весна") {
        	wrong += "зима. лето. осень.".split(" ")[rand_int(3)];
        }
        else if (time[0] == "лето") {
        	wrong += "зима. весна. осень.".split(" ")[rand_int(3)];     
        }
        else if (time[0] == "осень") {
        	wrong += "зима. весна. лето.".split(" ")[rand_int(3)];      
        }
    }
    else if (time.length() == 2) {
        wrong = "Времена года в которых нет дней рождений: ";
        if (time[0] == "зима") {
            if (time[1] == "весна") {
            	wrong += "лето, осень.";
            }       
            else if (time[1] == "лето") {
            	wrong += "весна, осень.";
            }
            else if (time[1] == "осень") {
            	wrong += "весна, лето.";
            }
        }
        else if (time[0] == "весна") {
        	if (time[1] == "лето") {
            	wrong += "зима, осень.";
            }     
            else if (time[1] == "осень") {
            	wrong += "зима, лето.";
            }
        }
        else if (time[0] == "лето") {
        	if (time[1] == "осень") {
            	wrong += "зима, весна.";
            } 
        }
    }
    else if (time.length() == 3) {
        wrong = "Времена года в которых нет дней рождений: ";
        if (time[0] == "зима") {
            if (time[1] == "весна" && time[2] == "лето") {
            	wrong += "зима, весна, осень.";
            }  
            else if (time[1] == "весна" && time[2] == "осень") {
            	wrong += "зима, весна, лето.";
            }  
        }
        else if (time[0] == "весна") {
            if (time[1] == "лето" && time[2] == "осень") {
            	wrong += "зима, весна, лето.";
            }
        }
    }
    else {
    	let num = rand_int(3) + 1;
        if (num == 1) {
        	wrong = "Время года в котором нет дней рождений: ";
        }
        else if (num >= 2) {
        	wrong = "Времена года в которых нет дней рождений: ";
        }
        let er: string[] = []
        for (let j = 1; j <= num; j += 1) {
        	if (j == 1) {
                er.push("зима");
            }
            else if (j == 2) {
                er.push("весна");
            }
            else if (j == 3) {
                er.push("лето");
            }
            else if (j == 4) {
                er.push("осень");
            }
        }
        for (let i = 0; i < er.length(); i += 1) {
            if (i == er.length() - 1) {
            	wrong += er[i] + ".";
                continue;
            }
        	wrong += er[i] + ", "
        }
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|указать|написать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд дней рождений, её попросили " + whatDo + " время года, в котором нет ни одного дня рождения.";
    
    if (rand_bool()) {sc="Дан ряд дней рождений, требуется определить время года, в котором нет ни одного дня рождения."}
    
    let descr = sc + "\n Пример вывода следующий: \"Времена года в которых нет дней рождений: весна, лето.\", \"Время года в котором нет дней рождений: зима.\", \"Во всех временах года есть дни рождения.\"";
    
    let expl = "Т.к. нам нужно определить времена года в которых нет дней рождений: \n";
	expl += "Ищем даты с месяцем рождения 12, 01, 02: зимой: \n";
    let flag = true;    
    	for (let j = 0; j < cout; j += 1) {
        	if (date[j].m == asn_m[0][0] || date[j].m == asn_m[0][1] || date[j].m == asn_m[0][2]) {
                expl += date[j].d + "." + date[j].m + "." + date[j].y + "\n";
                flag = false;
            }
            
            if (j == cout - 1 && flag) {expl += "Отсутствуют. \n"; flag = true;}
            else if (j == cout - 1) {flag = true;}
        }
    expl += "Даты с месяцем рождения 03, 04, 05: весной. \n";
    	for (let j = 0; j < cout; j += 1) {
        	if (date[j].m == asn_m[1][0] || date[j].m == asn_m[1][1] || date[j].m == asn_m[1][2]) {
                expl += date[j].d + "." + date[j].m + "." + date[j].y + "\n"
                flag = false;
            }
    		
            if (j == cout - 1 && flag) {expl += "Отсутствуют. \n"; flag = true;}
            else if (j == cout - 1) {flag = true;}
        }
    expl += "Даты с месяцем рождения 06, 07, 08: летом. \n";
    	for (let j = 0; j < cout; j += 1) {
        	if (date[j].m == asn_m[2][0] || date[j].m == asn_m[2][1] || date[j].m == asn_m[2][2]) {
                expl += date[j].d + "." + date[j].m + "." + date[j].y + "\n"
                flag = false;
            }
    		
            if (j == cout - 1 && flag) {expl += "Отсутствуют. \n"; flag = true;}
            else if (j == cout - 1) {flag = true;}
        }
    expl += "Даты с месяцем рождения 09, 10, 11: осени. \n";
    	for (let j = 0; j < cout; j += 1) {
        	if (date[j].m == asn_m[3][0] || date[j].m == asn_m[3][1] || date[j].m == asn_m[3][2]) {
                expl += date[j].d + "." + date[j].m + "." + date[j].y + "\n"
                flag = false;
            }
    		
            if (j == cout - 1 && flag) {expl += "Отсутствуют. \n"; flag = true;}
            else if (j == cout - 1) {flag = true;}
        }
    
    
    
    expl += "Таким образом мы получаем ответ: \n" + outp
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
