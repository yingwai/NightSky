//Генератор дорожного знака и пояснений
/*
Сделайте генератор пазлов, в котором программа будет генерировать пояснение нескольких указательных дорожных знаков и фотографию одного указательного дорожного знака, 
а человеку нужно будет выбрать правильное пояснение
*/ 

/*
struct Empty {}
struct Puzzle {
    descr: string,
    input: Canvas[],
    output: string,
    wrong_output: string,
    explanation: string
}

struct Image {
	canvas: Canvas,
    index: int
}

function declOfNum(n: int, text_forms: string[]) -> string {
  n = n % 100;

  let n1 = n % 10;

  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }

  return text_forms[2];
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let count = rand_int(level) + rand_int(5);
    if (count <= 0) {count = 1}
    if (count >= 10) {count = 10}
    
    let content = [
    	"",
        "Железнодорожный переезд со шлагбаумом.",
        "Светофорное регулирование.",
        "Опасные повороты.",
        "Скользкая дорога.",
        "Крутой подъём.",
        "Главная дорога.",
        "Пересечение равнозначных дорог.",
        "Движение без остановки запрещено.",
        "Уступить дорогу.",
        "Конец главной дороги.",
        "Движение грузовых автомобилей запрещено.",
        "Движение запрещено.",
        "Въезд запрещён.",
        "Обгон запрещён.",
        "Ограничение максимальной скорости.",
        "Ограничение минимальной скорости.",
        "Автозаправочная станция.",
        "Гостиница или мотель.",
        "Место отдыха.",
        "Круговое движение."
    ];
        
    let inpt: Canvas[] = [];
    let outp = "";
    let wrong = "";
    let add: Image[] = [];
    for (let i = 0; i < count; i += 1) {
        if (i >= 1) {
        	let rand = rand_int(19) + 1;
            let temp = false;
            
            for (let j = 0; j < add.length(); j += 1) {
                if (add[j].index == rand) {
                	temp = false;
                    break;
                }
                else {
                	temp = true;
                }
            }
            
            if (temp == true) {
                add.push(new Image{canvas: new Canvas{}, index: rand});
                
                inpt.push(add[add.length() - 1].canvas);
                inpt[add.length() - 1].init(120, 120, rgba(255, 255, 255, 1.0));
                inpt[add.length() - 1].draw_sprite(add[add.length() - 1].index, 0, 0);
                
            	outp += string(add.length() - 1) + ". " + content[add[add.length() - 1].index + 1] + "\n";
            	wrong += string(add.length() - 1) + ". " + content[add[add.length() - 1].index] + "\n";
            }
        } 
        else {
        	let rand = rand_int(19) + 1;
            add.push(new Image{canvas: new Canvas{}, index: rand});
            
        	inpt.push(add[i].canvas);
            inpt[i].init(120, 120, rgba(255, 255, 255, 1.0));
            inpt[i].draw_sprite(add[add.length() - 1].index, 0, 0);
            
            outp += string(i) + ". " + content[add[add.length() - 1].index + 1] + "\n";
            wrong += string(i) + ". " + content[add[add.length() - 1].index] + "\n";
        }        
    }
    
    
    
  
    let task = "Даны|Представлены|Выставлены|Указаны|Видны|Показаны|Подчёркнуты|Выделены".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "назвать|отметить|перечислить|определить|именовать".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " знаки дорожного движения: " + string(add.length()) + " " + declOfNum(add.length(), ["штука", "штуки", "штук"]) + ", её попросили " + whatDo + " все знаки.";

    if (rand_bool()) {sc="Требуется определить название всех знаков дорожного движения."}
    let descr = sc + "\n Формат вывода, следующий: номер знака. название знака. \n Пример: 4. Гостиница или мотель.";

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