var currentAge = 28, maxAge = 70;
var amount = 120;
var year = 365 * amount;
var livingAge = maxAge - currentAge;
var livingCost = livingAge * year;
console.log("You will need "+livingCost+" to last you until the ripe old age of " +maxAge);
