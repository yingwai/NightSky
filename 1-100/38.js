//Генератор задач: вес по 2 признакам
/*
Создайте генератор задач, который на входе предлагает несколько предметов (названий предметов) с указанным весом. 
Человек на выходе должен определить, какие предметы имеют вес, указанный только целым четным числом и выраженный только в граммах.
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

struct Item {
	ves: string,
    name: string
}

function addRandomWeight(arr: Item[]) {
  let weightUnits = ["т.", "кг.", "г.", "мг."];
  let randomNum = float(rand_int(100) + 1);
  let randomUnit = weightUnits[rand_int(4)];
  let items = ["стул", "стол", "диван", "кровать", "комод", "книжная полка", "письменный стол", "лампа", "коврик", "шторы", 
              "подушка", "одеяло", "ваза", "картина", "часы", "свеча", "растение", "зеркало", "рамка для фото", 
              "полотенце", "посуда", "столовое серебро", "кастрюля", "сковорода", "духовка", "холодильник", "микроволновка", "кофеварка", 
              "тостер", "телевизор", "компьютер", "телефон", "колонки", "игровая приставка", "dvd-плеер", "камера", 
              "mp3-плеер", "гитара", "фортепиано", "ударная установка", "саксофон", "садовый стол", "садовый стул", "барбекю", 
              "садовый инвентарь", "фонтан", "садовый гном", "скворечник", "газонокосилка", "электроинструменты", "верстак", 
              "ящик для инструментов", "дрель", "пила", "молоток", "отвертка", "плоскогубцы", "гаечный ключ", "лестница", "малярный валик",
              "кисть", "лоток для краски", "салфетка", "рулетка"];
    if (randomUnit == "т.") {
    	randomNum /= 1000.0
    }
    else if (randomUnit == "г.") {
    	randomNum *= 1000.0
    }
    else if (randomUnit == "мг.") {
    	randomNum *= 1000000.0
    }
  arr.push(new Item {ves: string(randomNum) + " " + string(randomUnit), name: items[rand_int(items.length() - 1)]});
}

function findEvenGrams(weightArr: Item[]) -> Item[] {
  let evenGrams: Item[] = [];
  for (let i = 0; i < weightArr.length(); i += 1) {
    let weight = weightArr[i];
    let weightNum = float(weight.ves.split(" ")[0]);
    let weightUnit = weight.ves.split(" ")[1];
    if (weightNum % 2.0 == 0.0 && weightUnit == "г.") {
      evenGrams.push(weight);
    }
  }
  return evenGrams;
}

function findEvenNeGrams(weightArr: Item[]) -> Item[] {
  let evenGrams: Item[] = [];
  for (let i = 0; i < weightArr.length(); i += 1) {
    let weight = weightArr[i];
    let weightNum = float(weight.ves.split(" ")[0]);
    let weightUnit = weight.ves.split(" ")[1];
    if (weightUnit != "г.") {
      evenGrams.push(weight);
    }
  }
  return evenGrams;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let item: Item[] = []
    let inpt = "";
    for (let i = 0; i < rand_int(level * 2 - 1) + 2; i += 1) {
    	addRandomWeight(item)
    }
    for (let i = 0; i < item.length(); i += 1) {
    	inpt += item[i].ves + " " + item[i].name + "\n"
    }
    let ans = findEvenGrams(item)
    let outp = "";
    if (ans.length() != 0) {
    	for (let i = 0; i < ans.length(); i += 1) {
            outp += ans[i].ves + " " + ans[i].name + "\n"
        }
    }
    else {
    	outp = "Такие предметы отсутствуют."
    }
    let er = findEvenNeGrams(item)
    let wrong = "";
    if (er.length() != 0) {
    	for (let i = 0; i < rand_int(er.length()) + 1; i += 1) {
            wrong += er[i].ves + " " + er[i].name + "\n"
        }
    }
    else if (er.length() == 0 && ans.length() != 0) {
    	wrong = "Такие предметы отсутствуют."
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|выбрать|указать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд предметов, её попросили " + whatDo + " какие предметы имеют вес, указанный только целым четным числом и выраженный только в граммах.";

    if (rand_bool()) {sc="Дан ряд предметов, требуется определить какие предметы имеют вес, указанный только целым четным числом и выраженный только в граммах."}
    let descr = sc + "\n Пример вывода следующий: \"41000 г. зеркало\", \"56000 г. барбекю\", \"Такие предметы отсутствуют.\".";

    let expl = "Ищем все предметы которые не подходят по условию: \n";
    if (er.length() != 0) {
    	for (let i = 0; i < er.length(); i += 1) {
            expl += er[i].ves + " " + er[i].name + "\n"
        }
    } else {expl += "- \n"}
    expl += "Таким образом получаем ответ: \n" + outp
    
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
