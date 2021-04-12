## James Wyn

# Pizza Parlor


### Description
This is my fourth week project for Epicodus.  The objective is to take an input for pizza and return a price based on size and toppings chosen.

### Technologies Used
* Bootstrap
* JavaScript
* jQuery
* HTML
* CSS
* MD

## Setup/Installation Requirements

### Without Github template clone:
* Clone Repo
* Delete .git if needing a clean commit history
* Initilize git
* Add remote repository to new git
* Make first commit only adding .gitignore to commit
* Open new repo to begin npm initilization

### With Github
* Press use this template
* Create new repo
* Clone new repo down to
* Open new repo to begin npm initilization


## Link where to find my GitHub link

https://github.com/Thisisjameswyn/pizza-parlor


### Specs

* Describe: Pizza()
Test: "It should correctly build a pizza object with given parameters"
Expect(new Pizza(size, meats, tops).toEqual(size, meats, tops);

* Describe: Pizza.prototype.calcCharge()
Test: "It should calculate only the cost of the size if no meats or toppings are selected"
Expect(calcCharge(m, 0, 0).toEqual(5);

* Test: "It should calculate only the cost of the size and meats if no toppings are selected"
Expect(calcCharge(m, 1, 0).toEqual(8);

* Test: "It should calculate the cost of the size, meats and toppings if each is selected"
Expect(calcCharge(m, 1, 1).toEqual(9);

* Test: "It should calculate the cost to be 43 if med size and all meats and all toppings are selected"
Expect(calcCharge(m, 8, 14).toEqual(43);


## License
[MIT License](https://opensource.org/licenses/MIT)
&copy; James Wyn 2021