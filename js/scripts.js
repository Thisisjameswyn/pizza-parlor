//choose pizza size (Sparrow,Magpie,Laridae,Xiongguanlong,)
//choose sauce (red, white, bbq, salsa)
//choose toppings (cheese, pepperoni, salami, hamburger, sausage, pinneapple, olives, bell pepper, sun dried tomatoes)
//
//
//construct pizza, pass size value, build with toppings array
//forEach (topping) add to array and factor out cost + + ++ ++ ++ +
//return cost to user
//cat party in the sky!!!!!!!!

function Pizza(_toppings){
  this.size = 0;
  this.toppings = _toppings;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}


$(document).ready(function () {
  $("form#submit").submit(function (event) { 
    event.preventDefault();
    let meats = $(".meats option:selected").map(function() {
      return [this.text, this.value];
    })
    let toppings = $(".toppings option:selected").map(function() {
      return [this.text, this.value];
    })

    let myZa = new Pizza(toppings);

    console.log(meats);
    console.log(toppings);
    
  });
});