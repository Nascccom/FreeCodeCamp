/* Задача
Кодирование в функции grabDoll. функция принимает 1 параметр: dolls. это массив строк, список некоторых кукол.

Вам нужно пройти dolls, используя forцикл. Если элемент «Hello Kitty» или «Кукла Барби», вы должны поместить его в a bag(сумка — это массив, который я определил в функции); если это другие строки, мы должны использовать continueпропуск.

Когда bagимеет три элемента, bagон полон. Вы должны использовать breakвыпрыгнуть из петли; Если bagон не заполнен, вы должны пройти dollsдо последнего элемента.

Вернуть bagпосле завершения цикла for.

Вы должны использовать forи breakв continueсвоем коде. в противном случае ваше решение может не пройти этот ката.

Если вы забыли, как вставить элемент в массив, обратитесь к уроку 4 . */

function grabDoll(dolls){
    var bag=[];
    for (var i=0;i<dolls.length;i++) {
      if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
        bag.push(dolls[i]); 
      }
      if (bag.length === 3) {
        break;
      }
      if (bag.length !== 3) {
        continue;
      }
  }
    
    return bag;
  }