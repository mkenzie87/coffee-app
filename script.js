console.log("Hello");
// https://www.evocationcoffee.com/pages/ratio




var inverseFactor = '0.0625'; // if measuring in metric

var strength = 16;




function coffeeGrams(weight) {
    var coffeeWeightInput = document.getElementById('coffee-weight').value;

    return weight * strength;
}