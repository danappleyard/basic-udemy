//section 2 (forEach)
var colors = ['red', 'blue', 'green'];

//es5
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//es6
colors.forEach(function (color) {
    console.log(color);
});

var numbers = [1, 2, 3, 4, 5];

var sum = 0;

function adder(number) {
    sum += number;
}
numbers.forEach(adder);

console.log(sum);

//section 3 (map)
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = [];

//es5
for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);

//es6

//map is like the select method in C#'s LINQ
var doubled = numbers.map(function (number) {
    return number * 2;
});
//doubled should contain [2,4,6,8,10];
console.log(doubled);

var cars = [
    {
        model: 'Buick', price: 'cheap'
    },
    {
        model: 'Camaro', price: 'expensive'
    }
];

var prices = cars.map(function (car) {
    return car.price;
});
//prices should contain ['cheap', 'expensive'];

var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(items, property) {
    return items.map(function (item) {
        return item[property];
    });
}

var colors = pluck(paints, 'color');
//colors should have ['red', 'blue', 'yellow'];

//section 4 (filter)

var products = [
    { name: 'egg', type: 'protein' },
    { name: 'chicken', type: 'protein' },
    { name: 'apple', type: 'fruit' },
    { name: 'grapes', type: 'fruit' }
];

//es5
var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}
console.log(filteredProducts);

//filter is like where in C#
var fruits = products.filter(function (product) {
    return product.type === 'fruit';
});

//fruits should contain the apple and grapes instances

function reject(items, iteratorFunction) {
    return items.filter(function (item) {
        return !iteratorFunction(item);
    });
}

//section 5 (find)

var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bob' }
];

//es5
var user;

for (var i = 0; i < users.length; i++) {
    if (user[i].name === 'Alex') {
        user = users[i];
    }
}

//es6

//find is like FirstOrDefault in C#
var alex = users.find(function (user) {
    return user.name === 'Alex';
});

function Car(model) {
    this.model = model;
}

var cars = [new Car('Buick'), new Car('Ford'), new Car('Camaro')];

cars.find(function (car) {
    return car.model === "Ford";
});



function findWhere(array, criteria) {
    var property = Object.keys(criteria)[0];
    return array.find(function (a) {
        return a[property] === criteria[property];
    });
}
var ladders = [
    { id: 1, height: 20 },
    { id: 2, height: 25 }
];

findWhere(ladders, { height: 25 }); //result: {id: 2, height: 25}

//section 6 (every and some)

var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

//es5
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var c = computers[i];
    if (c.ram < 16) {
        allComputersCanRunProgram = false;
    }
    else {
        onlySomeComputersCanRunProgram = true;
    }
}

console.log(allComputersCanRunProgram); //should be false
console.log(onlySomeComputersCanRunProgram); //should be true

//es6

//every is like All in C#
var allCan = computers.every(function (c) {
    return c.ram >= 16;
});

//some is like Any in C#
var someCan = computers.some(function (c) {
    return c.ram >= 16;
});

var names = ['Alex', 'Matthew', 'Joe'];

names.every(function (n) {
    return n.length >= 4;
});

names.some(function (n) {
    return n.length >= 4;
});

//section 7 (reduce)

var numbers = [10, 20, 30];
var sum = 0;

//es5
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

//es6

//reduce is like Aggregate in C#
numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);

var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

primaryColors.reduce(function (array, c) {
    array.push(c.color);
    return array;
}, []);


//section 8 (const/let)

//es5
var name = 'Jane';
var title = 'Software Engineer';
var hourlyWage = 40;

//es6
const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

//section 9 (template strings)

//es5
function getMessage() {
    const year = new Date().getFullYear();
    return "The year is " + year;
}

//es6
function getMessage() {
    const year = new Date().getFullYear();
    return `The year is ${year}`;
}

//back ticks and ${}

//section 10 (arrow functions)
const add = function (a, b) {
    return a + b;
}
add(1, 2);

const add = (a, b) => {
    return a + b;
}

const add = (a, b) => a + b;

const double = function (number) {
    return 2 * number;
}

double(8);

const double = (number) => 2 * number;
const double = number => 2 * number; //single parameter only
const double = () => 2; //0 or multiple parameters require ()

const numbers = [1, 2, 3];

numbers.map(function (number) {
    return 2 * number;
});

numbers.map(number => 2 * number);

const team = {
    members: ["Jane", "Bill"],
    teamName: "Super Squad",
    teamSummary: function () {
        return this.members.map(function (member) {
            return `${member} is on team ${this.teamName}`;
        });
    }
};
team.teamSummary();
//error = 'Cannot read property "teamName" of undefined'
const team = {
    members: ["Jane", "Bill"],
    teamName: "Super Squad",
    teamSummary: function () {
        return this.members.map(member => `${member} is on team ${this.teamName}`);
    }
};
team.teamSummary();

//section 11 (enhanced object literals)
function createBookShop(inventory) {
    return {
        inventory: inventory,
        inventoryValue: function () {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function (title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    { title: "Harry Potter", price: 10 },
    { title: "Eloquent JavaScript", price: 15 }
];

const bookShop = createBookShop(inventory);
bookShop.inventoryValue();
bookShop.priceForTitle("Harry Potter");

//a better way...
function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

function saveFile(url, data) {
    $.ajax({
        method: "POST",
        url: url,
        data: data
    });
}

const url = "http://fileupload.com";
const data = { color: "red" };

saveFile(url, data);

function saveFile(url, data) {
    $.ajax({ url, data, method: "POST" });
}

//section 12 (default function arguments)

//old way
function makeAjaxReqeust(url, method) {
    if (!method) {
        method = "GET";
    }
    //stuff
}
makeAjaxReqeust("google.com");
makeAjaxReqeust("google.com", "POST");

//es6
function makeAjaxReqeust(url, method = "GET") {
    //stuff
}
makeAjaxReqeust("google.com");
makeAjaxReqeust("google.com", "POST");

function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 999999;
}

function createAdminUser(user) {
    user.admin = true;

    return user;
}
const admin = createAdminUser(new User(generateId()));  //ugh

function User(id = generateId()) {
    this.id = id;
}

function generateId() {
    return Math.random() * 999999;
}

function createAdminUser(user = new User()) {
    user.admin = true;

    return user;
}
const admin = createAdminUser();


//section 13 (rest & spread operator)
function addNumbers(numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

addNumbers([1, 2, 3, 4, 5]);

//what if?
addNumbers(1, 2, 3, 4, 5);

//es6
// the ... is the rest operator
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}
addNumbers(1, 2, 3, 4, 5);
//numbers would be [1,2,3,4,5]

const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];
defaultColors.concat(userFavoriteColors);
//outputs ["red", "green", "orange", "yellow"]

const fallColors = ["brown", "fall orange"];

[...defaultColors, ...userFavoriteColors];
//outputs ["red", "green", "orange", "yellow"]

[...fallColors, ...defaultColors, ...userFavoriteColors];

["blue", ...fallColors, ...defaultColors, ...userFavoriteColors];

function validateShoppingList(...items) {
    if (items.indexOf("milk") < 0) {
        return ["milk", ...items];
    }
    return items;
}

validateShoppingList("oranges", "bread");

const MathLibrary = {
    calculateProduct(...rest) {
        console.log("please use the multiply method instead.");
        return this.multiply(...rest)
    },
    multiply(a, b) {
        return a * b;
    }
};

//section 14 (destructuring)
//es5
var expense = {
    type: "Business",
    amount: "$45 USD"
};

var type = expense.type;
var amount = expense.amount;

//es6
const { type } = expense;
const { amount } = expense;

const { type, amount } = expense;
//variables must be same name as properties

//es5
var savedFile = {
    extension: "jpg",
    name: "repost",
    size: 14040
};
function fileSummary(file) {
    return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}
fileSummary(savedFile);

//es6
function fileSummary({ name, extension, size }) {
    return `The file ${name}.${extension} is of size ${size}`;
}
fileSummary(savedFile);

const companies = ["Google", "Facebook", "Uber"];
const [name, name2, name3] = companies;
//name = Google
//name2 = Facebook
//etc.

//to destructure a property, you use the {}, [] for arrays
const [name, ...rest] = companies;
//reset = ["Facebook", "Uber"]

const companies = [
    { name: "Google", location: "Mountain View" },
    { name: "Facebook", location: "Menlo Park" },
    { name: "Uber", location: "San Francisco" }
];

const [{ location }] = companies;
//location = "Mountain View"
//[] get first item, {} gets the property
const Google = {
    locations: ["Mountain View", "New York", "London"]
};
const { locations: [location] } = Google;
//location = "Mountain View"

function signup({ username, password, email, dateOfBirth, city }) {
    //create new user
}

//other code
//other code

const user = {
    username: "myname",
    password: "password",
    email: "myemail@example.com",
    dateOfBirth: "1/1/1990",
    city: "New York"
};
signup(user);

const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

points.map(([x, y]) => {
    return { x, y };
});

const numbers = [1, 2, 3];
function double(numbers) {
    const [number, ...rest] = numbers;
    if (number === undefined) return [];
    return [number * 2, ...double(rest)];
}
//
function double([number, ...rest]) {
    if (number === undefined) return [];
    return [number * 2, ...double(rest)];
}
double(numbers);
//this should output [2, 4, 6]

//section #15 classes

function Car(options){
    this.title = options.title;
}

Car.prototype.drive = function() {
    return "vroom";
}

const car = new Car({title: "Focus"});
car.drive();

function Toyota(options){
    this.color = options.color;
}

const toyota = new Toyota({color: "red", title: "Daily Driver"});
//blah blah blah ugly code

//es6
class Car {
    constructor({title}) {
        this.title = title;
    }

    drive() {
        return "vroom";
    }
}

const car = new Car({title: "Toyota"});
car.drive();




