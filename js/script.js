let num = +prompt('Введите число');
let exponent = +prompt('Введите степень, в которую нужно возмести число');
let exponResult;

function calcPow(num, exponent = 1) {

    if (isFinite(num) && isFinite(exponent)) {
        exponResult = Math.pow(num, exponent);
        return exponResult;
    }

    else {
        console.log('Некорректные введенные данные');
    }
}

let finalResult = calcPow(num, exponent);

console.log(finalResult);