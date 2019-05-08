/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding - this refers to the global object (global scope) 
* 2. Implicit Binding - When a dot is before a function the object before the dot is this. 
* 3. New Binding - Inside a constructor function = this refers to specific instance of that object
* 4. Exdplicit Binding - Allows methods like .call or .apply to say what this is implying. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function add () {
    console.log(this, x);
}
let x = 2+3;
add();

// Principle 2

// code example for Implicit Binding

const myFood = {
    filipino_food: 'Chicken Adobo',
    mexican_food: 'Tacos',
    toEat: function (eat) {
        console.log(`Should I eat ${this.filipino_food} or ${this.mexican_food}. I'm going to eat ${eat}.`);
        // console.log(this)
    }
};

myFood.toEat('Filipino Food');


// Principle 3

// code example for New Binding

function foodMeun(condiments, spice) {
    this.condiments = condiments;
    this.spice = spice; 
    this.order = function () {
        console.log(`I would like ${condiments} and ${spice} on the side.`)
        // console.log(this);
    }
}

const happyCustomer = new foodMeun('mustard', 'pepper');

happyCustomer.order();

// Principle 4

// code example for Explicit Binding

const weekendPlans = {
    favoriteMovie: 'Interstellar'
}

const foodOptions = ['tacos', 'steak', 'burger', 'salad']

function whatToDoThisWeekend (item1, item2, item3, item4) {
    return `This week I am going to watch ${this.favoriteMovie} with some friends. Should I make ${item1} or ${item2} or ${item3} or ${item4} ?`
}

console.log(whatToDoThisWeekend.call(weekendPlans, ...foodOptions));
