//Генератор задач на числа, расположенные в таблицу: деревья
/*
Сделайте генератор паззлов в виде таблицы, который на входе показывает количество посаженных разных деревьев (количество берёз, дубов и т.д.), 
которые посадили разные группы людей (например - могут быть какие-то экологические отряды) и просят определить разницу между общим количеством посаженных деревьев у отряда 
с большим и меньшим количеством.
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
    
    let length = rand_int(level * 2) + 2; 
    
    let inpt = "";
    let woods: int[] = [];
    let sum = 0;
    for (let i = 0; i < length; i += 1) {
    	woods.push(rand_int(level * 5) + 1);
        sum += woods[i];
        inpt += string(i + 1) + " отряд посадил " + string(woods[i]) + declOfNum(woods[i], [" дерево\n", " дерева\n", " деревьев\n"]);
    }
    
    let expl = "Сначала находим общее количество посаженных деревьев ";
    for (let i = 0; i < woods.length(); i += 1) {
        if (i == woods.length() - 1) {
        	expl += string(woods[i]) + "=" + string(sum);
            continue;
        }
        expl += string(woods[i]) + "+";
    }
    
    let outp = "";
    let wrong = "";
    woods.sort();
    outp = "Разница с большим количеством деревьев: " + string(sum - woods[woods.length() - 1]) + "\n" +
           "Разница с меньшим количеством деревьев: " + string(sum - woods[0]);
    wrong = outp;
	while (wrong == outp) {
    	wrong = "Разница с большим количеством деревьев: " + string(int(float(sum - woods[woods.length() - 1]) * [0.5, 1.5][rand_int(2)])) + "\n" +
           		"Разница с меньшим количеством деревьев: " + string(int(float(sum - woods[0]) * [0.5, 1.5][rand_int(2)]));
	}
    expl += "\nИщем разницу с большим количеством деревьев " + string(sum) + "-" + string(woods[woods.length() - 1]) + "=" + string(sum - woods[woods.length() - 1]) + "\n" +
        	"Ищем разницу с меньшим количеством деревьев " + string(sum) + "-" + string(woods[0]) + "=" + string(sum - woods[0]);
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "вычислить|рассчитать|посчитать|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд отрядов которые посадили деревья, её попросили " + whatDo + " разницу между общим количеством посаженных деревьев у отряда с большим и меньшим количеством деревьев.";
    if (rand_bool()) {sc="Дан ряд отрядов которые посадили деревья, требуется определить разницу между общим количеством посаженных деревьев у отряда с большим и меньшим количеством деревьев."};
    
    let descr = sc + "\n Пример вывода следующий: \n \"Разница с большим количеством деревьев: 12 \nРазница с меньшим количеством деревьев: 18\"";
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
