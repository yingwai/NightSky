//Генератор задач: даты в предложениях
/*
Создайте генератор задач, который на входе показывает несколько предложений с датами в разные годы, возможно даже 
века в формате "20.08.1880" или просто годы "2058г", а человек должен расставить предложения в порядке очередности, как шли эти даты по хронологии.
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
	year: int,
    bc: bool,
    content: string
}

function genEventsBefore(count: int) -> Date[] {
    let AllEvent = [
        new Date {year: 776, bc: true, content: " в Древней Греции проведены первые Олимпийские игры."},
        new Date {year: 753, bc: true, content: " основан Рим."},
        new Date {year: 585, bc: true, content: " предсказано солнечное затмение (по саросу, Фалес Милетский)."},
        new Date {year: 490, bc: true, content: " происходила Марафонская битва."},
        new Date {year: 442, bc: true, content: " под руководством архитекторов Иптипа и Калмекрата построен Парфенон - храм Арфины Парфенос на Акрополе в Афинах."},
        new Date {year: 387, bc: true, content: " в Афинах Платон основал Академию - древнегреческую философскую школу."},
        new Date {year: 283, bc: true, content: " закончено строительство маяка на острове Фарос в Александрии - одно из \"семи чудес\" древнего мира."},
        new Date {year: 210, bc: true, content: " вспыхнула вторая Пуническая война."},
        new Date {year: 146, bc: true, content: ", Рим одержал победу над Карфагеном."},
        new Date {year: 49, bc: true, content: ", Юлий Цезарь захватил власть в Риме."}
    ];
    
    let event: Date[] = [];
    
    for (let i = 0; i < count; i += 1) {
        let block = false;
        let selected = AllEvent[rand_int(AllEvent.length())];
        
        if (event.length() != 0) {
            for (let s = 0; s < event.length(); s += 1) {
                if (selected.year == event[s].year) {block = true};
            };
        };
        
        if (!block) {event.push(selected);};
    }
    
    return event
}

function genEventsV(count: int) -> Date[] {
    let AllEvent = [
        new Date {year: 14, bc: false, content: " умер римский император Октавиан Август."},
        new Date {year: 15, bc: false, content: " походы римского полководца Германика за Рейн. Форсирование Рейна, нападение на марсов и победа Германика над германскими племенами во главе с Арминием."},
        new Date {year: 165, bc: false, content: " появилась Антонинова чума."},
        new Date {year: 224, bc: false, content: " основано Государство Сасанидов."},
        new Date {year: 225, bc: false, content: ", Кушанское царство разделено на западную и восточную части."},
        new Date {year: 301, bc: false, content: ", Великая Армения принимает христианство в качестве государственной религии. Армения становится первым христианским государством."},
        new Date {year: 313, bc: false, content: " Константин I принял законы об освобождении церкви от повинностей и налогов, защищающие рабов и заключённых, запрещающие казни на распятии и гладиаторские бои."},
        new Date {year: 320, bc: false, content: " основана Империя Гупта начинает расцвет индийской цивилизации."},
        new Date {year: 405, bc: false, content: " создан армянский алфавит Месропом Маштоцем."},
        new Date {year: 484, bc: false, content: " подписанан Нварсакский договор."}
    ];
    
    let event: Date[] = [];
    
    for (let i = 0; i < count; i += 1) {
        let block = false;
        let selected = AllEvent[rand_int(AllEvent.length())];
        
        if (event.length() != 0) {
            for (let s = 0; s < event.length(); s += 1) {
                if (selected.year == event[s].year) {block = true};
            };
        };
        
        if (!block) {event.push(selected);};
    }
    
    return event
}

function genEventsX(count: int) -> Date[] {
    let AllEvent = [
        new Date {year: 525, bc: false, content: ", Дионисий Малый ввёл летоисчисление от рождества Христова."},
        new Date {year: 552, bc: false, content: " образован Тюркский каганат."},
        new Date {year: 650, bc: false, content: " началась чеканка англосаксонской монеты в Лондоне."},
        new Date {year: 680, bc: false, content: " византийский император Константин IV собрал 6-й вселенский собор, восстановивший мир между восточной и западной церквями."},
        new Date {year: 768, bc: false, content: " франкский король Карл Великий начал правления, старшего сына Пипина Короткого."},
        new Date {year: 755, bc: false, content: " началось восстание Ань Лушаня в Танском Китае."},
        new Date {year: 862, bc: false, content: " началось правление династии Рюриковичей на Руси."},
        new Date {year: 890, bc: false, content: " началось правление норвежского короля Харальда I Хорфагера."},
        new Date {year: 955, bc: false, content: " император Оттон I разгромил вторжение венгров в Центральную Европу (битва на реке Лех)."},
        new Date {year: 988, bc: false, content: ", Крещение Руси."}
    ];
    
    let event: Date[] = [];
    
    for (let i = 0; i < count; i += 1) {
        let block = false;
        let selected = AllEvent[rand_int(AllEvent.length())];
        
        if (event.length() != 0) {
            for (let s = 0; s < event.length(); s += 1) {
                if (selected.year == event[s].year) {block = true};
            };
        };
        
        if (!block) {event.push(selected);};
    }
    
    return event
}

function genEventsXX(count: int) -> Date[] {
    let AllEvent = [
        new Date {year: 1056, bc: false, content: " Фердинанд I Великий провозглашён Императором всей Испании."},
        new Date {year: 1159, bc: false, content: " началась франко-анжуйской войны."},
        new Date {year: 1201, bc: false, content: " Альбрехтом фон Буксгевденом основан город Рига."},
        new Date {year: 1325, bc: false, content: " основан Теночтитлан, столица Ацтекской империи."},
        new Date {year: 1497, bc: false, content: " написан «Судебник» — свод законов Русского государства."},
        new Date {year: 1582, bc: false, content: " Григорианский календарь введён во многих католических землях."},
        new Date {year: 1661, bc: false, content: " основан Иркутск."},
        new Date {year: 1757, bc: false, content: ", «Закрытие» Китая."},
        new Date {year: 1809, bc: false, content: " началась Война пятой коалиции."},
        new Date {year: 1991, bc: false, content: ", распад СССР."}
    ];
    
    let event: Date[] = [];
    
    for (let i = 0; i < count; i += 1) {
        let block = false;
        let selected = AllEvent[rand_int(AllEvent.length())];
        
        if (event.length() != 0) {
            for (let s = 0; s < event.length(); s += 1) {
                if (selected.year == event[s].year) {block = true};
            };
        };
        
        if (!block) {event.push(selected);};
    }
    
    return event
}

function declOfNum(n: int, text_forms: string[]) -> string {
  n = n % 100;

  let n1 = n % 10;

  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }

  return text_forms[2];
}

function getWrong(list: int) -> string {
    let i = rand_int(6);
    let a = rand_int(5)
  
  	let array = [
        [
            "224 год, 15 год.",
            "525 год, 490 год до н. э.",
            "15 год, 283 год до н. э.",
            "955 год, 405 год.",
            "768 год, 210 год до н. э.",
            "890 год, 15 год до н. э."
        ],
        [
            "224 год, 15 год, 49 год до н. э.",
            "525 год, 490 год до н. э., 15 год.",
            "15 год, 283 год до н. э., 224 год.",
            "955 год, 405 год, 146 год до н. э.",
            "768 год, 210 год до н. э., 525 год.",
            "890 год, 15 год до н. э., 525 год."
        ],
        [
            "224 год, 15 год, 49 год до н. э., 552 год.",
            "525 год, 490 год до н. э., 15 год, 225 год.",
            "15 год, 283 год до н. э., 224 год, 165 год.",
            "955 год, 405 год, 146 год до н. э., 490 год до н. э.",
            "768 год, 210 год до н. э., 525 год, 49 год до н. э.",
            "890 год, 15 год до н. э., 525 год, 650 год."
        ],
        [
            "224 год, 15 год, 49 год до н. э., 552 год, 14 год.",
            "525 год, 490 год до н. э., 15 год, 225 год, 224 год.",
            "15 год, 283 год до н. э., 224 год, 165 год, 387 год до н. э.",
            "955 год, 405 год, 146 год до н. э., 490 год до н. э., 484 год.",
            "768 год, 210 год до н. э., 525 год, 49 год до н. э., 955 год.",
            "890 год, 15 год до н. э., 525 год, 650 год, 890 год."
        ],
        [
            "224 год, 15 год, 49 год до н. э., 552 год, 14 год, 680 год.",
            "525 год, 490 год до н. э., 15 год, 225 год, 224 год, 320 год.",
            "15 год, 283 год до н. э., 224 год, 165 год, 387 год до н. э., 955 год.",
            "955 год, 405 год, 146 год до н. э., 490 год до н. э., 484 год, 210 год до н. э.",
            "768 год, 210 год до н. э., 525 год, 49 год до н. э., 955 год, 862 год.",
            "890 год, 15 год до н. э., 525 год, 650 год, 890 год, 484 год."
        ],
        [
            "224 год, 15 год, 49 год до н. э., 552 год, 14 год, 680 год, 49 год до н. э.",
            "525 год, 490 год до н. э., 15 год, 225 год, 224 год, 320 год, 165 год.",
            "15 год, 283 год до н. э., 224 год, 165 год, 387 год до н. э., 955 год, 484 год.",
            "955 год, 405 год, 146 год до н. э., 490 год до н. э., 484 год, 210 год до н. э., 955 год.",
            "768 год, 210 год до н. э., 525 год, 49 год до н. э., 955 год, 862 год, 650 год.",
            "890 год, 15 год до н. э., 525 год, 650 год, 890 год, 484 год, 15 год."
        ],
        [
            "224 год, 15 год, 49 год до н. э., 552 год, 890 год, 15 год до н. э., 525 год.",
            "525 год, 490 год до н. э., 15 год, 225 год, 768 год, 210 год до н. э., 525 год.",
            "15 год, 283 год до н. э., 224 год, 165 год, 955 год, 405 год, 146 год до н. э.",
            "955 год, 405 год, 146 год до н. э., 490 год до н. э, 15 год, 283 год до н. э., 224 год.",
            "768 год, 210 год до н. э., 525 год, 49 год до н. э, 525 год, 490 год до н. э., 15 год.",
            "890 год, 15 год до н. э., 525 год, 650 год, 224 год, 15 год, 49 год до н. э."
        ]
    ];

    return array[i][a];
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let count = (rand_int(3) + 1) + (level / 2);
    if (count <= 1) {count = 2}
    if (count >= 9) {count = 9};
    
    let eventBefore = genEventsBefore(count);
    let eventV = genEventsV(count);
    let eventX = genEventsX(count);
    let eventXX = genEventsXX(count);
    
    let list = 1;
    let lay = rand_int(3) + 1;
    let lay1 = false;
    let lay2 = false;
    let lay3 = false;
    let lay4 = false;
    
    let yearbc: int[] = [];
    let yearV: int[] = [];
    let yearX: int[] = [];
    let yearXX: int[] = [];
    
    let inpt = "";
    
    while (lay1 == false && lay2 == false && lay3 == false && lay4 == false) {    
        if (lay == 1 && lay1 == false) {
            for (let i = 0; i < eventBefore.length(); i += 1) {
                inpt += "В " + string(eventBefore[i].year) + " году до н. э." + string(eventBefore[i].content) + "\n";
                yearbc.push(eventBefore[i].year);

                list += 1;
            }	

            lay1 = true;

            while (lay == 1) {
                lay = rand_int(3) + 1;
            }
        }

        if (lay == 2 && lay2 == false) {
            for (let i = 0; i < eventV.length(); i += 1) {
                inpt += "В " + string(eventV[i].year) + " году" + string(eventV[i].content) + "\n";
                yearV.push(eventV[i].year);

                list += 1;
            }	

            lay2 = true;

            while (lay == 2) {
                lay = rand_int(3) + 1;
            }
        }

        if (lay == 3 && lay3 == false) {
            for (let i = 0; i < eventX.length(); i += 1) {
                inpt += "В " + string(eventX[i].year) + " году" + string(eventX[i].content) + "\n";
                yearX.push(eventX[i].year);

                list += 1;
            }

            lay3 = true;

            while (lay == 3) {
                lay = rand_int(3) + 1;
            }
        }

        if (lay == 4 && lay4 == false) {
            for (let i = 0; i < eventXX.length(); i += 1) {
                inpt += "В " + string(eventXX[i].year) + " году" + string(eventXX[i].content) + "\n";
                yearXX.push(eventXX[i].year);

                list += 1;
            }

            lay4 = true;

            while (lay == 4) {
                lay = rand_int(3) + 1;
            }
        }
	}
    
    let outp = "";
    if (yearbc.length() != 0) {
        yearbc.sort(); 
        
        for (let i = 0; i < yearbc.length(); i += 1) {
    		outp += string(yearbc[yearbc.length() - 1 - i]) + " год до н. э., ";	
    	}
    };
    if (yearV.length() != 0) {
        yearV.sort(); 
        
        for (let i = 0; i < yearV.length(); i += 1) {
    		outp += string(yearV[i]) + " год, ";	
    	}
    };
    if (yearX.length() != 0) {
        yearX.sort(); 
        
        for (let i = 0; i < yearX.length(); i += 1) {
    		outp += string(yearX[i]) + " год, ";	
    	}
    };
    if (yearXX.length() != 0) {
        yearXX.sort(); 
        
        for (let i = 0; i < yearXX.length(); i += 1) {
    		outp += string(yearXX[i]) + " год, ";	
    	}
    };
    
    let mistake: string[] = [];
    
    for (let i = 0; i < outp.split(", ").length(); i += 1) {
        mistake.push(outp.split(", ")[i]);
	}
    
    let point = "";
    for (let i = 0; i < outp.length(); i += 1) {
        if (i == outp.length() - 2) {point += "."} else {point += string(outp[i]);};    	
	}
    outp = point;
  
    let wrong = getWrong(list);
    
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(7)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(3)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(14)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(5)] + ". " + 
          	task + " несколько предложений с датами, её попросили " + whatDo + " правильную последовательность дат.";

    if (rand_bool()) {sc="Требуется определить правильную последовательность дат."}
    let descr = sc + "\n Формат вывода, следующий: год, год и т.д. \n Пример: 1 год, 2 год и т.д.";

    let expl = "Получаем случайное количество предложений с датами. Необходимо расставить их в правильную последовательность.";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/