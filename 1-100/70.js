//Генератор реальных объектов 2.0
/*
Создайте генератор, который будет выдавать машины, поезда и стройматериалы, 
а человек должен написать к чему это относится и что это ( пример: "на картинке кирпич", в ответ человек пишет - это стройматериал - кирпич и тд.)
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

  let solidObjects = ["Tesla Model S", "BMW 7 Series", "Audi A8", "Mercedes-Benz S-Class", "Porsche 911", "Lamborghini Huracan", "Bugatti Chiron", "McLaren 720S", "Ford Mustang", "Chevrolet Camaro", "Honda Civic", "Toyota Camry", "Nissan GTR", "Mazda MX-5", "Jeep Wrangler", "Land Rover Range Rover", "Volvo XC90", "Audi Q5", "Porsche Macan", "Mercedes-Benz G-Class"];

  let gaseousObjects = ["Amtrak", "TGV (Высокоскоростной поезд)", "Shinkansen (Японский сверхскоростной поезд)", "Eurostar", "Deutsche Bahn ICE", "Amtrak Northeast Regional", "Caltrain", "RER (Региональная экспресс-сеть)", "SNCF (Национальное общество французских железных дорог)", "CTA 'L' (Транзитное управление Чикаго)", "MTA Subway (Нью-Йорк)", "Metrolink (Southern California)", "SEPTA (Южная Калифорния)", "GO Transit (Большой Торонто и район Гамильтона)", "KTM (Малайская железная дорога)", "MRT (Массовый скоростной транспорт)", "LIRR (Железная дорога Лонг-Айленда)", "NJ Transit", "MARC (Региональный пригородный поезд Мэриленда)", "VIA Rail (Канада)"];

  let liquidObjects = ["Цемент", "Бетон", "Кирпич", "Древесина", "Стали", "Стекло", "Алюминий", "Мрамор", "Гранит", "Песок", "Гравий", "Асфальт", "Скотч", "Гипсокартон", "Черепица", "Медные трубы", "Трубы из ПВХ", "Гипс", "Известь", "Арматура"];

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
            	outp += string(AllObject[i].obj) + " - автомобили \n" 
            }
            else if (AllObject[i].index == 2) {
            	outp += string(AllObject[i].obj) + " - поезда \n" 
            }
            else if (AllObject[i].index == 3) {
            	outp += string(AllObject[i].obj) + " - стройматериалы \n" 
            }          	
    }
    let wrong = "";
    for (let i = 0; i < AllObject.length(); i += 1) {
            if (AllObject[i].index == 1) {
                wrong += string(AllObject[i].obj) + " - " + "поезда|стройматериалы".split("|")[rand_int(2)] + " \n" 
            }
            else if (AllObject[i].index == 2) {
            	wrong += string(AllObject[i].obj) + " - " + "автомобили|стройматериалы".split("|")[rand_int(2)] + " \n" 
            }
            else if (AllObject[i].index == 3) {
            	wrong += string(AllObject[i].obj) + " - " + "автомобили|поезда".split("|")[rand_int(2)] + " \n" 
            }          	
    }
  
    let obj = "";
    for (let i = 0; i < AllObject.length(); i += 1) {
        if (i == AllObject.length() - 1) {
        	inpt += string(AllObject[i].obj) 
        }
        else {
        	inpt += string(AllObject[i].obj) + "\n" 
        }
    	
    }
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны".split("|")[rand_int(6)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "соотнести|сопоставить|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " объекты. Её попросили " + whatDo + " объекты с вариантами ответов так, чтобы варианты ответа соответствовали их типу: автомобили, поезда, стройматериалы.";

    if (rand_bool()) {sc="Даны объекты. Требуется соотнести объекты с вариантами ответов так, чтобы варианты ответа соответствовали их типу: автомобили, поезда, стройматериалы."}
    let descr = sc + "\n Формат вывода, следующий: объект - его тип (каждый объект необходимо писать с новой строки). \n Пример:\n Amtrak - поезда \n Мрамор - стройматериалы \n Jeep Wrangler - автомобили";
    
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