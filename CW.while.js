/* Задача
Полная функция padIt, которая принимает 2 параметра:

str: строка, представляющая строку для заполнения. Мы дополним его "*"символами с левой и с правой стороны.
n: число, указывающее, сколько раз дополнять строку.
Поведение
Вам нужно написать оператор цикла внутри функции, которая зацикливает nвремя. Каждый раз в цикле он будет добавлять единицу *к str, чередуя, с какой стороны он дополняется: в первый раз а добавляется *к левой стороне str, во второй раз *к правой стороне и так далее.

Наконец, верните дополненную строку. */


function padIt(str, n) {
  while(n>0) {
      if(n%2 === 0) {
          str = str + "*";
      }
      else{
          str = "*" + str;
      }
      n --;
  }
return str;
}