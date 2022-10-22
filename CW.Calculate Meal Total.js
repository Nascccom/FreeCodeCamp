/* Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places. */

function calculate_total(subtotal, tax, tip) {
    var a = subtotal;
    var b = tax;
    var c = tip;
    var d = 0;
  
    d = ((a + (a / 100 * b)) + ((a + (a / 100 * c) - a)))
    return Number(d.toFixed(2))
}

