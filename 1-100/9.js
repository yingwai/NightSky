//чтение прогноза погоды
/*
Сделайте генератор пазлов, который генерирует прогноз погоды на неделю или больше и человек должен определить какая погода будет через определенное количество дней. 
То, какой сегодня день, также генерирует генератор.
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

struct Weather {
	day: string,
    weather: string
}

function declOfNum(n: int, text_forms: string[]) -> string {
  n = n % 100;

  let n1 = n % 10;

  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }

  return text_forms[2];
}

function randWeather() -> string {
  return ["ясно", "безоблачно", "пасмурно", "дождливо"][rand_int(4)]
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let days = rand_int(level) + 1 + rand_int(5);
    let daysOfWeek = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"][rand_int(6)];
    
    let more_days = rand_int(level) + 1 + rand_int(5); 
    
    let weather: Weather[] = [];
    for (let i = 0; i < days + more_days; i += 1) {
        if (daysOfWeek == "понедельник") {
        	if (i == 0 || weather[weather.length() - 1].day == "Понедельник") {weather.push(new Weather {day: "Вторник", weather: randWeather()})}
            else if (weather[weather.length() - 1].day == "Вторник") {weather.push(new Weather {day: "Среда", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Среда") {weather.push(new Weather {day: "Четверг", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Четверг") {weather.push(new Weather {day: "Пятница", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Пятница") {weather.push(new Weather {day: "Суббота", weather: randWeather()})}
            else if (weather[weather.length() - 1].day == "Суббота") {weather.push(new Weather {day: "Воскресенье", weather: randWeather()})}
            else if (weather[weather.length() - 1].day == "Воскресенье") {weather.push(new Weather {day: "Понедельник", weather: randWeather()})}
        }
        else if (daysOfWeek == "вторник") {
            if (i == 0 || weather[weather.length() - 1].day == "Вторник") {weather.push(new Weather {day: "Среда", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Среда") {weather.push(new Weather {day: "Четверг", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Четверг") {weather.push(new Weather {day: "Пятница", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Пятница") {weather.push(new Weather {day: "Суббота", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Суббота") {weather.push(new Weather {day: "Воскресенье", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Воскресенье") {weather.push(new Weather {day: "Понедельник", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Понедельник") {weather.push(new Weather {day: "Вторник", weather: randWeather()})}
        }
        else if (daysOfWeek == "среда") {
            if (i == 0 || weather[weather.length() - 1].day == "Среда") {weather.push(new Weather {day: "Четверг", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Четверг") {weather.push(new Weather {day: "Пятница", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Пятница") {weather.push(new Weather {day: "Суббота", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Суббота") {weather.push(new Weather {day: "Воскресенье", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Воскресенье") {weather.push(new Weather {day: "Понедельник", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Понедельник") {weather.push(new Weather {day: "Вторник", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Вторник") {weather.push(new Weather {day: "Среда", weather: randWeather()})}
        }
        else if (daysOfWeek == "четверг") {
            if (i == 0 || weather[weather.length() - 1].day == "Четверг") {weather.push(new Weather {day: "Пятница", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Пятница") {weather.push(new Weather {day: "Суббота", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Суббота") {weather.push(new Weather {day: "Воскресенье", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Воскресенье") {weather.push(new Weather {day: "Понедельник", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Понедельник") {weather.push(new Weather {day: "Вторник", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Вторник") {weather.push(new Weather {day: "Среда", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Среда") {weather.push(new Weather {day: "Четверг", weather: randWeather()})}
        }
        else if (daysOfWeek == "пятница") {
            if (i == 0 || weather[weather.length() - 1].day == "Пятница") {weather.push(new Weather {day: "Суббота", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Суббота") {weather.push(new Weather {day: "Воскресенье", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Воскресенье") {weather.push(new Weather {day: "Понедельник", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Понедельник") {weather.push(new Weather {day: "Вторник", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Вторник") {weather.push(new Weather {day: "Среда", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Среда") {weather.push(new Weather {day: "Четверг", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Четверг") {weather.push(new Weather {day: "Пятница", weather: randWeather()})}
        }
        else if (daysOfWeek == "суббота") {
            if (i == 0 || weather[weather.length() - 1].day == "Суббота") {weather.push(new Weather {day: "Воскресенье", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Воскресенье") {weather.push(new Weather {day: "Понедельник", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Понедельник") {weather.push(new Weather {day: "Вторник", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Вторник") {weather.push(new Weather {day: "Среда", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Среда") {weather.push(new Weather {day: "Четверг", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Четверг") {weather.push(new Weather {day: "Пятница", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Пятница") {weather.push(new Weather {day: "Суббота", weather: randWeather()})}
        }
        else if (daysOfWeek == "воскресенье") {
            if (i == 0 || weather[weather.length() - 1].day == "Воскресенье") {weather.push(new Weather {day: "Понедельник", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Понедельник") {weather.push(new Weather {day: "Вторник", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Вторник") {weather.push(new Weather {day: "Среда", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Среда") {weather.push(new Weather {day: "Четверг", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Четверг") {weather.push(new Weather {day: "Пятница", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Пятница") {weather.push(new Weather {day: "Суббота", weather: randWeather()})}
			else if (weather[weather.length() - 1].day == "Суббота") {weather.push(new Weather {day: "Воскресенье", weather: randWeather()})}
        }
    };
    
    while (weather[0].weather == weather[1].weather) {
    	weather[0].weather = randWeather();
    }
    
    let correct_weather = weather[days - 1].weather;
    let outp = "Через " + string(days) + " " + declOfNum(days, ["день", "дня", "дней"]) + " будет " + correct_weather + ".";
    
    let wrong = "";
    let wrong_weather = weather[rand_int(weather.length() - 1)].weather;
    while (wrong_weather == correct_weather) {
    	wrong_weather = weather[rand_int(weather.length() - 1)].weather;
    }
    
    wrong = "Через " + string(days) + " " + declOfNum(days, ["день", "дня", "дней"]) + "  будет " + wrong_weather + ".";
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|просчитать".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " день недели: " + daysOfWeek + ", её попросили " + whatDo + " какая погода будет через " + string(days) + " " + declOfNum(days, ["день", "дня", "дней"]) + ". Если прогноз погоды на следующие " + string(days + more_days) + " " + declOfNum(days + more_days, ["день", "дня", "дней"]) + " гласит следующее: \n";

    if (rand_bool()) {sc="Требуется определить какая погода будет через " + string(days) + " " + declOfNum(days, ["день", "дня", "дней"]) + ", при условии что сегодня " + daysOfWeek + ". Если прогноз погоды на следующие " + string(days + more_days) + " " + declOfNum(days + more_days, ["день", "дня", "дней"]) + " гласит следующее: \n"};
    
    for (let i = 0; i < weather.length(); i += 1) {
    	sc += weather[i].day + " - " + weather[i].weather + ". \n";
	}
    
    let descr = sc + "\n Формат вывода, следующий: Через N дней будет \"погода\". \n Пример: Через 5 дней будет ясно.";
    
    let expl = "Получаем случайное количество дней через которое необходимо узнать погоду: " + string(days) + ". Считаем по порядку, и выясняем что в нужный нам день будет " + weather[days - 1].weather + ".";
    
   	return new Puzzle{
         descr: descr,
         input: new Empty{},
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/