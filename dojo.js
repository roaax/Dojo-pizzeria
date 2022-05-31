function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
    Pizza.crustType = crustType;
    Pizza.sauceType = sauceType;
    Pizza.cheeses = cheeses;
    Pizza.toppings = toppings;
    return Pizza;
}

console.log("------ Pizza 1 ------")
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"],  ["pepperoni", "sausage"]);
console.log(pizza1);

console.log("------ Pizza 2 ------")
var pizza1 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza1);

console.log("------ Pizza 3 ------")
var pizza1 = pizzaOven("gluten free ", "bbq", "nacho cheese",  ["sausage","chicken","corn","olives"]);
console.log(pizza1);

console.log("------ Pizza 4 ------")
var pizza1 = pizzaOven("hawaiian bread", "white sauce", "goat cheese",  ["bell peppers", "onions","mushrooms","anchovies"]);
console.log(pizza1);

// ------------
var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomP(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomP(crustTypes);
    pizza.sauceType = randomP(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomP(cheeses));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomP(toppings));
    }
    return pizza;
}

console.log(randomPizza());
