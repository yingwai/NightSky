//Генератор: срез дерева
// Создайте генератор паззлов, в котором будет дан срез ствола дерева с импровизированными годовыми кольцами, 
//  а также соответствие 1 кольца на срезе - временному промежутку (1 год, пол года, 1,5 года и т.д.), а человек должен в ответ записать возраст дерева.

/*
//rgb(248, 223, 183);
//rgb(230, 184, 110);

struct Empty {}
struct Puzzle {
    descr: string,
    input: Canvas,
    output: string,
    wrong_output: string,
    explanation: string
}

struct Wood {
    age: int,
    size: int
}

function draw_figure(inpt: Canvas, x: int, y: int, size: int, fg: Color, bg: Color) {
    let line = 2;
    inpt.fill_ellipse(x - size, y - size, size * 2, size * 2, fg, bg, line);
}

function drawWood(level: int) -> Wood {
    let age = 0;
    if (level <= 20) {age = 1 + rand_int(level)};
    if (level <= 15) {age = 1 + rand_int(level)};
    if (level <= 10) {age = 1 + rand_int(level)};
    if (level <= 5) {age = 1 + rand_int(level)};
    
    let size = 8 + rand_int(5);
    
    return new Wood {
    	age: age,
        size: size
    }
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
    
    let inpt = new Canvas{};
    inpt.init(500, 500, rgba(255, 255, 255, 1.0));
    
    let get_wood = drawWood(level);
    let wood_age = get_wood.age;
    let wood_size = get_wood.size;
    
    while (wood_age != 0) {
    	wood_size += get_wood.size;
        
        wood_age -= 1;
    }
    
    wood_age = get_wood.age;
    
    for (let i = 0; i < wood_age; i += 1) {
        if (i % 2 == 0) {
            draw_figure(inpt, 250, 250, wood_size, rgb(0, 0, 0), rgb(248, 223, 183)); 
        } else {
            draw_figure(inpt, 250, 250, wood_size, rgb(0, 0, 0), rgb(230, 184, 110)); 
        }
        
        wood_size -= get_wood.size;
    }
    
    let outp = "Дереву " + string(wood_age) + " " + declOfNum(wood_age, ["год", "года", "лет"]) + ".";
    
    let wrong_age = rand_int(wood_age);
    if (wood_age == 1) {wrong_age = 2}
    while (wrong_age == 0 || wrong_age == wood_age) {
    	wrong_age = rand_int(wood_age);
        if (wood_age == 1) {wrong_age = 2}
    }
    
        
    let wrong = "Дереву " + string(wrong_age) + " " + declOfNum(wrong_age, ["год", "года", "лет"]) + ".";
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Выделен".split("|")[rand_int(6)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(3)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(4)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
     		task + " рисунок с срезом ствола дерева, её попросили " + whatDo + " возраст дерева.";

    if (rand_bool()) {sc="Требуется определить возраст дерева."}
    let descr = sc + "\n Формат вывода, следующий: возраст дерева. \n Пример: Дереву 5 лет.";

    let expl = "Получаем случайный рисунок с срезом дерева. Считаем возраст дерева по количеству колец.";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/