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
    // let meats = $(".meats option:selected").map(function() {
    //   return [this.text, this.value];
    // })
    // let toppings = $(".toppings option:selected").map(function() {
    //   return [this.text, this.value];
    // })

    // let checkBoxes = Array.from(document.getElementsByName("toppings"));
    let checkBoxes = document.getElementsByName("toppings");
    let vals = "";
    for (let i=0; i < checkBoxes.length ;i++) 
    {
        if (checkBoxes[i].checked) 
        {
            vals += ","+checkBoxes[i].value;
        }
    }
    if (vals) vals = vals.substring(1);
    console.log("Checkboxes are " + vals);
    // let checkbox = document.getElementById("vehicle1");
    // console.log(checkbox);

    // let myZa = new Pizza(toppings);
  });
});