/* Задача
Завершите функцию howManydays. Он принимает 1 параметр month, означающий месяц года. Разные месяцы имеют разное количество дней, как показано в таблице ниже. Возвращает количество дней, которые находятся в month. Нет необходимости в проверке ввода: месяц всегда будет больше 0 и меньше или равен 12. */

function howManydays(month){
    var days;
  
    switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      return days = 30;
      break;
    default:
    return days = 28;
  }
  }