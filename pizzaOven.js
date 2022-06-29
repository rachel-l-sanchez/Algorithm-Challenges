
function pizzaOven(crustType, protein, cheeses, toppings, sauceType) {
    var pizza = {};
        pizza.crustType = ["deep dish", "traditional", "hand tossed"];
        pizza.protein =  ["pepperoni", "sausage"];
        pizza.cheeses= ["mozzarella", "feta"];
        pizza.toppings = ["mushrooms", "olives", "onions"];
        sauceType= ["marinara", "bbq"];
        return pizza;
}
var pizza1 = pizzaOven(["deep dish", "traditional"], ["pepperoni", "sausage"], "mozzarella", "marinara"); 
console.log(pizza1);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("deep dish", "bbq", "mozzarella","onions");
console.log(pizza3);

var pizza4 = pizzaOven("marinara", "traditional", ["pepperoni", "sausage"], "mozzarella");
console.log(pizza4);
