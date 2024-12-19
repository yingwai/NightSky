//Генератор покупок
/*
Сделайте генератор пазлов, который будет генерировать задачи по примеру: Василий получил зарплату равную 30000 р, и сразу же отправился в магазин. 
В магазине он купил телевизор за 10000 р и наушники за 2000 р, сколько денег после покупок осталось у Василия, если ему в этот же день друг отдал долг равный 3000 р. 
Данный пример не использовать.
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

struct Trade {
    name: string,
    money: int,
    debt: int,
    item1: string,
    cost1: int,
    item2: string,
    cost2: int
}

function createObject(level: int) -> Trade {
  // создаем объект со случайным именем, суммой от 2000 до 40000 и долгом от 500 до 3000, список из двух случайных покупок со случайной стоимостью от 100 до 1000
  let obj = new Trade {
    name: "Инна Аня Алина Оля Катя Полина Арина Вера Надя Соня Бьянка Василиса Ванесса Вероника Жанна".split(" ")[rand_int(15)],
    money: level * 1000 + rand_int((999)),
    debt: level * 250 + rand_int(99),
    item1: [["молоко", "батон", "хлеб", "печенье"][rand_int(4)], ["телевизор", "монитор", "наушники", "телефон"][rand_int(4)], ["молоток", "дрель", "ящик инструментов", "рулетку"][rand_int(4)]][rand_int(3)],
    cost1: level * 50 + rand_int(99),
    item2: [["молоко", "батон", "хлеб", "печенье"][rand_int(4)], ["телевизор", "монитор", "наушники", "телефон"][rand_int(4)], ["молоток", "дрель", "ящик инструментов", "рулетку"][rand_int(4)]][rand_int(3)],
    cost2: level * 50 + rand_int(99)
  };
    
    while (obj.item2 == obj.item1) {
    	obj.item2 = [["молоко", "батон", "хлеб", "печенье"][rand_int(4)], ["телевизор", "монитор", "наушники", "телефон"][rand_int(4)], ["молоток", "дрель", "ящик инструментов", "рулетку"][rand_int(4)]][rand_int(3)]
    }
    
    //денег осталось
    let remainingMoney = obj.money + obj.debt - obj.cost1 - obj.cost2;

  return obj;
}

function gen_puzzle(level:int) -> Puzzle {
    if (level <= 0) {level = 1};
    if (level >= 21) {level = 20};
    
    let trade = createObject(level);
    let outp = string(trade.money + trade.debt - trade.cost1 - trade.cost2) + "р.";
    let wrong = string(trade.money + trade.debt - trade.cost1 - trade.cost2 + rand_int(999) + 1) + "р.";
  
    let wher = "зарплату|сумму|перевод на|дополнительный заработок".split("|")[rand_int(4)];
    let sc = trade.name + " получила " + wher + " " + string(trade.money) + "р. и сразу же отправилась по магазинам. Там она купила " + trade.item1 + " за " + string(trade.cost1) + "р. и " + trade.item2 + " за " + string(trade.cost2) + "р., сколько денег у неё осталось после покупок, если ей в этот же день друг отдал долг равный " + string(trade.debt) + "р.";

    let descr = sc + "\n Формат вывода, следующий: Nр. \n Пример: 1512р.";

    let expl = "Получаем случайную сумму денег " + string(trade.money) + "р. \n" + 
        		"После вычитаем из этой суммы покупки " + string(trade.money) + "-" + string(trade.cost1) + "-" + string(trade.cost2)  + "=" + string(trade.money - trade.cost1 - trade.cost2) + "р. \n" +
        		"Полученный ответ суммируем с долгом который отдали и получаем ответ " + string(trade.money - trade.cost1 - trade.cost2) + "+" + string(trade.debt) + "=" + outp;
    
   	return new Puzzle{
         descr: descr,
        input: new Empty{},
         output: outp,
         wrong_output: wrong,
         explanation: expl
     };
}
*/