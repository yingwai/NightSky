//Последовательный алгоритм прочности металлов
/*
Вам предстоит создать генератор, который напишет несколько случайных названий металлов и задаст каждому разное количество прочности в виде цифр. Повторение названий металла запрещено. 
Далее по каждому металлу был нанесен удар одинаковой силы, но каждый металл деформировался по-разному, информацию о том сколько стало прочности у металла после удара не нужно. 
Человеку предстоит создать последовательный алгоритм прочности металлов.
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

struct Metal {
	name: string,
    end: int
}

function generateRandomMetals(length: int) -> string[] {
	let metals = ["Железо", "Алюминий", "Сталь", "Медь", "Бронза", "Титан", "Никель", "Свинец", "Олово", "Кадмий", "Хром", "Марганец", "Молибден", "Цинк", "Кальций", "Орех", "Латунь", "Серебро", "Золото", "Платина"];
    let result: string[] = [];
  for (let i = 0; i < length; i += 1) {
      let metal = metals[rand_int(metals.length())]
      for (let j = 0; j < result.length(); j += 1) {
              while (metal == result[j]) {
              	metal = metals[rand_int(metals.length())];
                j = 0;
              }
        }
      result.push(metal);
  }
    
  return result;
}

function generateRandomMetalsStrength(length: int) -> int[] {
  let result: int[] = [];
  for (let i = 0; i < length; i += 1) {
    result.push(rand_int(2000) + 600);
  }
  return result;
}

function sortMetalsByStrength(metals: Metal[], fix: bool) -> Metal[] {
  let strength: int[] = []
  for (let i = 0; i < metals.length(); i += 1) {
    	strength.push(metals[i].end)
  } 
  strength.sort();
    let metals_sort: Metal[] = [];
    if (!fix) {
    	for (let i = 0; i < strength.length(); i += 1) {
            let j = 0;
            while (strength[i] != metals[j].end) {
                j += 1
            }
            metals_sort.push(metals[j]);
        } 
    }
    else {
    	for (let i = 0; i < strength.length(); i += 1) {
            let j = strength.length() - 1;
            while (strength[strength.length() - 1 - i] != metals[j].end) {
                j -= 1
            }
            metals_sort.push(metals[j]);
        } 
    }
    
    return metals_sort
}

function shuffleArray(array: Metal[]) -> Metal[] {
  for (let i = 0; i < array.length(); i += 1) {
    let j = rand_int(i + 1);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
    
  return array;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let length = rand_int(level) + 2;
    let metals = generateRandomMetals(length);
    let start_strength = generateRandomMetalsStrength(length);
    let hitting = start_strength[0];
    let end:Metal[] = [];
    let fix = false;
    if (rand_bool()) {
    	fix = true
    }
    let inpt = "";
    for (let i = 0; i < length; i += 1) {
    	inpt += metals[i] + " - " + string(start_strength[i]) + "\n";
        if (hitting > start_strength[i]) {
        	hitting = start_strength[i]
        }
    }
    hitting = rand_int(hitting);
    if (hitting <= 199) {
    	hitting = 200;
    }
    for (let i = 0; i < length; i += 1) {
        end.push(new Metal{name: metals[i], end: start_strength[i] - hitting})
    }
    
    let outp = "";
    for (let i = 0; i < length; i += 1) {
    	outp += sortMetalsByStrength(end, fix)[i].name + "\n";
    }
    let wrong = "";
    let ans = shuffleArray(end);
    for (let i = 0; i < length; i += 1) {
    	wrong += ans[i].name + "\n";
    }
    while (wrong == outp) {
        wrong = ""
    	ans = shuffleArray(end);
        for (let i = 0; i < length; i += 1) {
            wrong += ans[i].name + "\n";
        }
        
    }
  
    let task = "Дан|Представлен|Выставлен|Указан|Виден|Показан|Подчёркнут|Выделен".split("|")[rand_int(8)];
    let wher = "в школе|на факультативе|у репетитора|на олимпиаде".split("|")[rand_int(4)];
    let whatDo = "установить|задать|назначить|определить|найти".split("|")[rand_int(5)];

    let sc = "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)] +
            " получила " + wher + " " + "задачу|задачу на внимательность|упражнение|тест, в котором есть задача|дополнительное задание|задание".split("|")[rand_int(6)] + ". " + 
            task + " ряд металлов и их прочность, её попросили " + whatDo + " металлы и их прочность ";

    if (rand_bool()) {sc="Дан ряд металлов и их прочность. Требуется определить металлы и их прочность "}
    if (!fix) {
    	sc += "от наименьшей к большей с учётом того, что по каждому из них ударили с силой " + string(hitting) + "."
    }
    else {
    	sc += "от наибольшей к наименьшей с учётом того, что по каждому из них ударили с силой " + string(hitting) + "."
    }
    
    let descr = sc + "\nПример вывода следующий:\n Латунь \n Платина\nЗолото";
 
    let expl = "Определяем прочность каждого металла после удара: \n";
    for (let i = 0; i < length; i += 1) {
    	expl += metals[i] + ": " + string(start_strength[i]) + "-" + string(hitting) + "=" + string(start_strength[i] - hitting) + "\n"
    }
    expl += "Таким образом выясняем что правильная последовательность металлов будет: \n" + outp
    
   	return new Puzzle{
         descr: descr,
         input: inpt,
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/
