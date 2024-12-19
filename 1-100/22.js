//Генератор задач на изменение агрегатного состояния веществ
/*
Сделайте текстовый генератор логических задач, который на входе будет давать варианты ответов и примеры реальных объектов. Требуется соотнести реальные объекты с вариантами ответов так, 
чтобы варианты ответа соответствовали агрегатному состоянию данных вам объектов. Например, даны: ручка, дым и чай; требуется соотнести объекты с их агрегатными состояниями: ручка - твердое, 
дым - газообразное, чай - жидкое. Пожалуйста, не используйте этот пример.
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

struct Object {
	index: int,
    obj: string
}

function createObjectsArray(level: int) -> Object[] {
  let length = rand_int(level);
  if (length <= 2) {length = 3}

  let AllObjects: Object[] = [];

  let solidObjects = ["камень", "сталь", "бетон", "золото", "серебро", "медь", "алмаз", "пластик", "дерево", "керамика", "стекло", "фарфор", "фанера", "железо", "пергамент", "кожа", "ткань", "шерсть", "шелк", "винил"];

  let gaseousObjects = ["водород", "неон", "азот", "угарный газ", "кислород", "озон", "ксеон", "дым", "этилен", "фтор", "метан", "гелий", "воздух", "хлор", "пропан", "бутан", "сероводород", "углекислый газ", "этан", "пентан"];

  let liquidObjects = ["вода", "масло", "бензин", "краска", "сок", "шампанское", "водка", "вино", "чай", "кофе", "газировка", "сироп", "молоко", "нефть", "лак", "ртуть", "уксус", "майонез", "сметана", "бульон"];

  for (let i = 0; i < length; i += 1) {
    let type = rand_int(3) + 1;
    let object = new Object {index: 0, obj: ""};
      
      if (type == 1) {
      	object.index = type;
      	object.obj = solidObjects[rand_int(20)];
        for (let j = 0; j < AllObjects.length(); j += 1) {
              while (object.obj == AllObjects[j].obj) {
              	object.obj = solidObjects[rand_int(20)];
                j = 0;
              }
        }
          
        AllObjects.push(object);
      }
      else if (type == 2) {
      	object.index = type;
      	object.obj = gaseousObjects[rand_int(20)];
        for (let j = 0; j < AllObjects.length(); j += 1) {
              while (object.obj == AllObjects[j].obj) {
              	object.obj = gaseousObjects[rand_int(20)];
                j = 0;
              }
        }
          
        AllObjects.push(object);
      }
      else if (type == 3) {
      	object.index = type;
      	object.obj = liquidObjects[rand_int(20)];
        for (let j = 0; j < AllObjects.length(); j += 1) {
              while (object.obj == AllObjects[j].obj) {
              	object.obj = liquidObjects[rand_int(20)];
                j = 0;
              }
        }
          
        AllObjects.push(object);
      }
   }
    
   return AllObjects;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let AllObject = createObjectsArray(level)
    let inpt = "";
    let outp = "";
    for (let i = 0; i < AllObject.length(); i += 1) {
            if (AllObject[i].index == 1) {
            	outp += string(AllObject[i].obj) + " - твердое \n" 
            }
            else if (AllObject[i].index == 2) {
            	outp += string(AllObject[i].obj) + " - газообразное \n" 
            }
            else if (AllObject[i].index == 3) {
            	outp += string(AllObject[i].obj) + " - жидкое \n" 
            }          	
    }
    let wrong = "";
    for (let i = 0; i < AllObject.length(); i += 1) {
            if (AllObject[i].index == 1) {
                wrong += string(AllObject[i].obj) + " - " + "газообразное|жидкое".split("|")[rand_int(2)] + " \n" 
            }
            else if (AllObject[i].index == 2) {
            	wrong += string(AllObject[i].obj) + " - " + "твердое|жидкое".split("|")[rand_int(2)] + " \n" 
            }
            else if (AllObject[i].index == 3) {
            	wrong += string(AllObject[i].obj) + " - " + "твердое|газообразное".split("|")[rand_int(2)] + " \n" 
            }          	
    }
  
    let obj = "";
    for (let i = 0; i < AllObject.length(); i += 1) {
        if (i == AllObject.length() - 1) {
        	obj += string(AllObject[i].obj) + "." 
        }
        else {
        	obj += string(AllObject[i].obj) + ", " 
        }
    	
    }
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны".split("|")[rand_int(6)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "соотнести|сопоставить|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " объекты: " + obj + " Её попросили " + whatDo + " объекты с вариантами ответов так, чтобы варианты ответа соответствовали агрегатному состоянию данных объектов.";

    if (rand_bool()) {sc="Даны объекты: " + obj + " Требуется соотнести объекты с вариантами ответов так, чтобы варианты ответа соответствовали агрегатному состоянию данных объектов."}
    let descr = sc + "\n Формат вывода, следующий: объект - его агрегатное состояние (каждый объект необходимо писать с новой строки). \n Пример:\n фтор - газообразное \n серебро - твердое \n сок - жидкое";
    
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