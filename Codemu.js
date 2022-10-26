/* Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу и на само себя, и не делится на другие числа. */

function SimpleNumber (n) {
    let res = '';
    let is_composite = false;
    let sqrt = Math.sqrt(n);

    if (n <= 1) {
        return "Number is not Simple!";
    }
    if (n == 2 || n == 3){
        res = 'Simple';
    } else if (n % 2 == 0 || n % 3 == 0) {
        res = 'Composite';
    } else {

        for (let i = 5; i <= sqrt; i += 6)
            if (n % i == 0) {
                is_composite = true;
                break;
            }

        if (!is_composite) {
            for (let i = 7; i <= sqrt; i += 6) {
                if (n % i == 0) {
                    is_composite = true;
                    break;
            }
        }

    }

        if (is_composite) {
            res = 'Composite';
        } else {
            res = 'Simple';
        }

}
return res}
SimpleNumber (120)


