function Pizza(size, meat, tops){
  this.size = size;
  this.meat = meat;
  this.toppings = tops;
}

Pizza.prototype.calcPrice = function() {
  let cost = this.size+this.meat+this.toppings;
  console.log(cost);
}


$(document).ready(function () {
  $("form#submit").submit(function (event) { 
    event.preventDefault();
    let size = parseInt($("input:radio:checked").val());
    let meatsChecked = document.getElementsByName("meats");
    let mVals = 0;
    for (let i=0; i < meatsChecked.length ;i++) 
    {
        if (meatsChecked[i].checked) 
        {
          mVals += 3;
        }
    }

    let toppingsChecked = document.getElementsByName("toppings");
    let tVals = 0;
    for (let i=0; i < toppingsChecked.length ;i++) 
    {
        if (toppingsChecked[i].checked) 
        {
          tVals += 1;
        }
    }
    let myZa = new Pizza(size, mVals, tVals);
    myZa.calcPrice();
  });
});