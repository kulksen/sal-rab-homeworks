function calcShipping(sum, min, shipping) {
    let productSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    // создайте переменную shippingSum
let shippingSum;
    // если productsSum равно 0,
    // то shippingSum присвоить значение 0
    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0
    if (productSum == 0 || productSum >= freeShippingMinSum) {
        shippingSum = 0;
    }  
    // если productsSum больше 0 и меньше freeShippingMinSum,
if (productSum > 0 && productSum < freeShippingMinSum) {
    // то shippingSum присвоить значение shippingPrice
shippingSum = shippingPrice;
}
    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    // создайте переменную discountPrice
let discountPrice;
    // если productsSum больше или равно discountMinSum,
    if (productsSum >= discountMinSum) {
    // то присвойте discountPrice значение discountPart процентов от productsSum,
    discountPrice =  (discountPart * productsSum) / 100;
} else {
    // иначе присвойте discountPrice значения 0
  discountPrice = 0;
}
    // Конец решения задания №2.2./

    return discountPrice;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине/

    // создайте переменную totalSum
let totalSum;
    // присвойте totalSum значение productsSum
    totalSum = productsSum;
    // уменьшите totalSum на discountSum
totalSum = totalSum - discountSum;
    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    // прибавьте к totalSum значение shippingSum
totalSum = totalSum + shippingSum;
    // создайте переменную freeShipping
    let freeShipping = shippingSum == 0;
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
