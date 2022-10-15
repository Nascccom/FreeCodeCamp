/* Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).

Например,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
Правильный ответ будет 17.

Подсказка: не забудьте проверить наличие неправильных значений, таких как null/undefined */

function countSheeps(arrayOfSheep) {
    var array1 = [true,  true,  true,  false,
                  true,  true,  true,  true ,
                  true,  false, true,  false,
                  true,  false, false, true ,
                  true,  true,  true,  true ,
                  false, false, true,  true ];
    
    return array1.filter(items => items === true).length;
    }