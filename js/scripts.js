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
    let meatsChecked = document.getElementsByName("meats");
    let mVals = 0;
    for (let i=0; i < meatsChecked.length ;i++) 
    {
        if (meatsChecked[i].checked) 
        {
          mVals ++;
        }
    }

    let toppingsChecked = document.getElementsByName("toppings");
    let tVals = 0;
    for (let i=0; i < toppingsChecked.length ;i++) 
    {
        if (toppingsChecked[i].checked) 
        {
          tVals ++;
        }
    }
    console.log("Meat checkboxes are " + mVals);
    console.log("Toppings checkboxes are " + tVals);

    // let myZa = new Pizza(toppings);
  });
});