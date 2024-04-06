// let person_name= "Nida" // This saves the name
// console.log(`Hello ${person_name}, would you like to learn some CSS today?`) // This shows the message
// ---------------------------------------------------------------------------------------------------------
// let person_name= "Nida" // This saves the name
// console.log(person_name.toLowerCase()) // Shows the name in all small letters
// console.log(person_name.toUpperCase()) // Shows the name in ALL BIG LETTERS
// console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase()) // Shows the name with the First Letter Big
// ------------------------------------------------------------------------------------------------------------------------------------
// console.log('Newtons once said, "For every action ther is an eaqual and opposite reaction."')
// ------------------------------------------------------------------------------------------------
// let famous_person= "Newtons"
// let message= `${famous_person} once said, "For every action ther is an eaqual and opposite reaction."`
// console.log(message)
// ---------------------------------------------------------------------------------------------------------
// let person_name= "\t\n Nida \t\n" // This saves the name with whitespace
// console.log(person_name) // Shows the name with whitespace
// console.log(person_name.trim()) // Shows the name without whitespace
// ---------------------------------------------------------------------------
// console.log(5 + 3) // Addition
// console.log(10 - 2) // Substraction
// console.log(4 * 2) // Multiplication
// console.log(16 / 2) // Division
// ---------------------------------------------------------------------------
// console.log(5 + 3) // Addition
// console.log(23 - 15) // Substraction
// console.log(2 * 4) // Multiplication
// console.log(32 / 4) // Division
// ---------------------------------------------------------------------------
// let favoriteNumber= 4 // This saves your favorite number
// console.log(`My favorite number is ${favoriteNumber}.`) // This shows the message with your favorite number
// --------------------------------------------------------------------------------------------------------------
// Nida, 2024-03-05
// This program prints a personal message
// let myName= "Nida"
// console.log(`Hello ${myName}, would you like to learn some CSS today?`)
// --------------------------------------------------------------------------------------------------------------
// let names= ["Mehak", "Nazia", "Sobia"]
// for (let i = 0; i < names.length; i++) {
//    console.log(names[i])
// }
// -----------------------------------------------------------------------------------------------------------------
// let names= ["Mehak", "Nazia", "Sobia"]
// for (let name of names) {
//    console.log(`Hello ${name}, would you like to learn some CSS today?`)
// }
// --------------------------------------------------------------------------------------------------------------------
// let transports= ["Toyota motorcycle", "Yamha car", "bykia bicycle"]
// transports.forEach(transport => {
//    console.log(`I would like to own a ${transport}.`)
// })
// ----------------------------------------------------------------------------------------------------------------------
// let guests= ["Newtons", "John Jackson", "Queen Victoria"]
// guests.forEach(guest => {
//    console.log(`Dear ${guest}, would you like to join me for dinner?`)
// })
// ----------------------------------------------------------------------------------------------------------------------
// let unableToAttend= "Newtons"
// console.log(`${unableToAttend} can't make it to dinner.`)
// Replace the guest
// let newGuest= "John Jackson"
// guests[guests.indexOf(unableToAttend)] = newGuest
// New invitations
// guests.forEach(guest => {
//    console.log(`Dear ${guest}, would you like to join me for dinner?`)
// })
// ----------------------------------------------------------------------------------------------------------------------
// let guests= ["Newtons", "John Jackson", "Queen Victoria"]
// console.log("Great news! I found a bigger dinner table!")
// Adding more guests
// guests.unshift("Maria Epic")
// guests.splice(guests.length / 2, 0, "Olevia David")
// guests.push("Eda Yaldis")
// guests.forEach(guest => {
//    console.log(`Dear ${guest}, would you like to join me for dinner?`)
// })
// ----------------------------------------------------------------------------------------------------------------------
// console.log("Unfortunately, I can only invite two people for dinner.")
// while (guests.length > 2) {
//    let removedGuest = guests.pop()
//    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`)
// }
// guests.forEach(guest => {
//    console.log(`Dear ${guest}, you're still invited to dinner.`)
// })
// guests.splice(0, guests.length)
// console.log(guests) // Shows an empty list
// ----------------------------------------------------------------------------------------------------------------------
// let places= ["Sigapore", "China", "United States", "United Kingdom", "Island" ]
// console.log("Orignal order:", places)
// console.log("Alphabetical order:", [...places].sort())
// console.log("Orignal order:", places)
// console.log("Reverse alphabetical order:", [...places].sort().reverse())
// console.log("Orignal order:", places)
// places.reverse()
// console.log("Reversed order:", places)
// places.reverse()
// console.log("Original order:", places)
// places.sort()
// console.log("Alphabetical order:", places)
// places.reverse()
// console.log("Reverse alphabetical order:", places)
// ----------------------------------------------------------------------------------------------------------------------
// let guests= ["Newtons", "John Jackson", "Queen Victoria", "Eda Yaldis", "Olevia Eric"]
// console.log(`I am inviting ${guests.length} people to dinner.`)
// ----------------------------------------------------------------------------------------------------------------------
// let countries= ["Singapore", "England", "Malayshia", "Europe", "India"]
// console.log("Countries I'd like to visit:", countries)
// ----------------------------------------------------------------------------------------------------------------------
// let book= { title: string; author: string; yearPublished: number } = {
//    title: "The Horror Stories",
//    author: "Minhaj Ali Askari",
//    yearPublished: 1940
// }
// console.log(`Book Info: ${book.title} by ${book.author}, published in
// ${book.yearPublished}`)
// ----------------------------------------------------------------------------------------------------------------------
// let friends = ["John", "Eda", "Maria"]
// console.log(friends[3]) // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
// friends[2] = "Maria" // Correcting the error by accessing a valid index.
// ----------------------------------------------------------------------------------------------------------------------
// let car= 'mehran'
// console.log("Is car == 'mehran'? I predict True.")
// console.log(car == 'mehran') // True
// console.log("Is car == 'honda'? I predict False.")
// console.log(car == 'honda') // False
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// ----------------------------------------------------------------------------------------------------------------------
// Equality with strings
// console.log("Testing equality with strings:");
// console.log("orange" == "orange"); // True
// console.log("orange" == "orange"); // False
// Using the lower case function
// console.log("Testing with lower case:");
// console.log("Orange".toLowerCase() == "orange"); // True
// Numerical tests
// console.log("Numerical tests:");
// console.log(20 > 15); // True
// console.log(4 < 3); // False
// Tests using "and" and "or" operators
// console.log("Tests with 'and' and 'or':");
// console.log(true && false); // False
// console.log(true || false); // True
// Test whether an item is in a array
// let fruits = ["orange", "apple", "papaya"];
// console.log("Is 'orange' in fruits?");
// console.log(fruits.includes("orange")); // True
// Test whether an item is not in a array
// console.log("Is 'watermelon' not in fruits?");
// console.log(!fruits.includes("watermelon")); // True
// ----------------------------------------------------------------------------------------------------------------------
// let alien_color = "green"
// if (alien_color == "green") {
//    console.log("You just earned 10 points!")
// }
// alien_color = "red"
// if (alien_color == "green") {
// No output because the condition is false
// }
// ----------------------------------------------------------------------------------------------------------------------
// alien_color = "green"
// if (alien_color == "green") {
//    console.log("You just earned 10 points for shooting the alien!")
// } else {
//    console.log("You just earned 5 points.")
// }
// alien_color = "yellow"
// if (alien_color == "green") {
//    console.log("You just earned 10 points for shooting the alien!")
// } else {
//    console.log("You just earned 5 points.")
// }
// ----------------------------------------------------------------------------------------------------------------------
// alien_color = "green"
// if (alien_color == "green") {
//    console.log("You earned 10 points.");
// } else if (alien_color == "yellow") {
//    console.log("You earned 5 points.")
// } else if (alien_color == "red") {
//    console.log("You earned 20 points.")
// }
// alien_color = "yellow";
// if (alien_color == "green") {
//    console.log("You earned 10 points.");
// } else if (alien_color == "yellow") {
//    console.log("You earned 5 points.");
// } else if (alien_color == "red") {
//    console.log("You earned 20 points.");
// }
// alien_color = "red";
// if (alien_color == "green") {
//    console.log("You earned 10 points.");
// } else if (alien_color == "yellow") {
//    console.log("You earned 5 points.");
// } else if (alien_color == "red") {
//    console.log("You earned 20 points.");
// }
// ----------------------------------------------------------------------------------------------------------------------
// let age: number = 28;
// if (age < 4) {
//    console.log("The person is a baby.");
// } else if (age < 8) {
//    console.log("The person is a toddler.");
// } else if (age < 14) {
//    console.log("The person is a kid.");
// } else if (age < 24) {
//    console.log("The person is a teenager.");
// } else if (age < 70) {
//    console.log("The person is an adult.");
// } else {
//    console.log("The person is an elder.");
// }
// ----------------------------------------------------------------------------------------------------------------------
// let favorite_fruits: string[] = ["watermelon", "papaya", "orange"];
// for (let i = 0; i < favorite_fruits.length; i++) {
//    if (favorite_fruits[i] == "watermelon") {
//        console.log("watermelon is available");
//    }
//    else if (favorite_fruits[i] == "papaya") {
//        console.log("papaya is available");
//    }
//    else if (favorite_fruits[i] == "orange") {
//        console.log("orange is available");
//    }
//    else {
//        console.log("that fruit does not available");
//    }
// }
// ----------------------------------------------------------------------------------------------------------------------
// let userNames: string[] = ["admin", "neha", "iqra", "sobia", "laiba"];
// userNames.forEach(userNames => {
//    if (userNames === "admin") {
//        console.log("Hello admin, would you like to see a status report?");
//    } else {
//        console.log(`Hello ${userNames}, welcome to my home.`);
//    }
// });
// ----------------------------------------------------------------------------------------------------------------------
// let usernames: string[] = [];
// if (usernames.length === 1) {
//    console.log("We need to find some users!");
// } else {
// Greet users
// }
// Removing all usernames ensures the message "We need to find some users!" is printed.
// ----------------------------------------------------------------------------------------------------------------------
// let current_names: string[] = ["nazia", "admin", "ayeza", "noreen", "rabia"];
// let new_names: string[] = ["fiza", "huda", "hadaf", "sadaf", "shibra"];
// new_names.forEach(newName => {
//    if (current_names.some(currentName => currentName.toLowerCase() === newName.toLowerCase())) {
//        console.log(`${newName} will need to enter a new username.`);
//    } else {
//        console.log(`${newName} is available.`);
//    }
// });
// ----------------------------------------------------------------------------------------------------------------------
// let numbers: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// numbers.forEach(number => {
//    let suffix = "th";
//    if (number === 10) {
//        suffix = "st";
//    } else if (number === 20) {
//        suffix = "nd";
//    } else if (number === 30) {
//        suffix = "rd";
//    }
//    console.log(`${number}${suffix}`);
// });
// ----------------------------------------------------------------------------------------------------------------------
// let pizzas: string[] = ["fajita", "cheesi pizza", "malai boti"];
// pizzas.forEach(pizza => {
//    console.log(`I like ${pizza} pizza.`);
// });
// console.log("I really love pizza!");
// ----------------------------------------------------------------------------------------------------------------------
// let animals: string[] = ["duck", "cow", "pigeon"];
// animals.forEach(animal => {
//    console.log(`A ${animal} would make a great pet.`);
// });
// console.log("Any of these animals would make a great pet!");
// ----------------------------------------------------------------------------------------------------------------------
// function make_shirt(size: string, message: string) {
//    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }
// make_shirt("large", "Life is Coding without experience");
// ----------------------------------------------------------------------------------------------------------------------
// function make_shirt(size: string = "medium", message: string = "I love CSS") {
//    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }
// make_shirt(); // Default large and message
// make_shirt("small"); // Default message, medium size
// make_shirt("large", "Coding is my passion"); // Custom message, small size
// ----------------------------------------------------------------------------------------------------------------------
// function describe_city(city: string, country: string = "Pakistan") {
//    console.log(`${city} is in ${country}.`);
// }
// describe_city("Hyderabad");
// describe_city("Islamabad");
// describe_city("China", "Korea");
// ----------------------------------------------------------------------------------------------------------------------
// function city_country(city: string, country: string): string {
//    return `${city}, ${country}`;
// }
// console.log(city_country("Karachi", "Pakistan"));
// console.log(city_country("China", "Korea"));
// console.log(city_country("London", "Singapore"));
// ----------------------------------------------------------------------------------------------------------------------
// function make_album(artist: string, title: string, tracks?: number) {
//    let album = { artist, title };
//    if (tracks) {
//        album['tracks'] = tracks;
//    }
//    return album;
// }
// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 44));
// ----------------------------------------------------------------------------------------------------------------------
// let magicians: string[] = ["John", "Eda", "Maria"];
// function show_magicians(magicians: string[]) {
//    magicians.forEach(magician => {
//        console.log(magician);
//    });
// }
// show_magicians(magicians);
// ----------------------------------------------------------------------------------------------------------------------
// function make_great(magicians: string[]) {
//    for (let i = 0; i < magicians.length; i++) {
//        magicians[i] = magicians[i] + " The Love Ones CSS";
//    }
// }
// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names
// ----------------------------------------------------------------------------------------------------------------------
// let magicians: string[] = ["John", "Eda", "Maria"];
// function make_great(magicians: string[]): string[] {
//  let greatMagicians = [];
//  magicians.forEach((magician) => {
//    greatMagicians.push(`${magician} The Love Once CSS`);
// });
// return greatMagicians;
// }
// function show_magicians(magicians: string[]) {
//  magicians.forEach((magician) => {
//    console.log(magician);
//  });
// }
// let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
// console.log("Real magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Unique magicians:");
// show_magicians(greatMagicians); // Shows modified names
// ----------------------------------------------------------------------------------------------------------------------
// function make_sandwich(...items: string[]) {
//    console.log(`Making a sandwich with: ${items.join(', ')}.`);
// }
// make_sandwich("zinger", "kabab");
// make_sandwich("japan", "boti", "chicken");
// make_sandwich("shimla", "chatpata", "maiyonese", "chilli");
// ----------------------------------------------------------------------------------------------------------------------
// function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
//    let car = { manufacturer, model };
//    options.forEach(([key, value]) => car[key] = value);
//    return car;
// }
// console.log(make_car("Honda", "Mehran", ["color", "black"], ["year", 2021]));
// console.log(make_car("Civics", "Sanobar", ["color", "yellow"], ["sunroof", true]));
// ----------------------------------------------------------------------------------------------------------------------
// let laptop = {
//    make: "hp",
//    model: "4th Generation",
//    year: 2022,
//    describe: function() {
//        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
//    }
// };
// laptop.describe();
// ----------------------------------------------------------------------------------------------------------------------
// let laptops = [
//    { make: "hp", model: "4th Generation", year: 2022 },
//    { make: "lenovo", model: "3rd Generation", year: 2021 },
//    { make: "thinkpad", model: "5th Generation", year: 2020 }
// ];
// let [laptop1, laptop2] = laptops;
// console.log(laptop1);
// console.log(laptop2);
// ----------------------------------------------------------------------------------------------------------------------
// let pricesSet1 = [1400, 1700, 1300];
// let pricesSet2 = [3000, 1500, 1800];
// let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
// console.log(combinedPrices);
// ----------------------------------------------------------------------------------------------------------------------
// Defines a function that accepts multiple hobbies as arguments
// function logHobbies(...hobbies: string[]) {
//    // Loops through each hobby in the array
//    hobbies.forEach(hobby => {
//        // Logs a statement for each hobby
//        console.log(`I enjoy ${hobby}.`);
//    });
// }
// Calls the function with three hobbies
// logHobbies("Music", "Playing Games", "My Hard Work");
// ----------------------------------------------------------------------------------------------------------------------
// Using template literals to define a multiline string
// let myIdealDay = `My ideal day would involve:
// 1. Early morning prayer.
// 2. Each time is about pets time.
// 3. Recently 12 hours fasting.`;
// Logging the multiline string to the console
// console.log(myIdealDay);
// ----------------------------------------------------------------------------------------------------------------------
// Original function for calculating the area of a rectangle
// function calculateArea(width: number, height: number): number {
//    return width * height;
// }
// Refactored into an arrow function
// let calculateAreaArrow = (width: number, height: number): number => width * height;
// Example usage of the arrow function
// console.log(calculateAreaArrow(10, 100)); // Logs the area of the rectangle
// ----------------------------------------------------------------------------------------------------------------------
// Sets up details about a smartphone
// let smartphone = {
//    make: "OPPO",
//    model: "Af17",
//    specs: {
//        storage: "10GB",
//        screenSize: "4.2 inches",
//        batteryLife: "14 hours"
//    }
// };
// Shows what we've set up about the smartphone
// console.log(smartphone);
// ----------------------------------------------------------------------------------------------------------------------
// A list showing a programmer's skills in detail
// let developerSkills = {
//    languages: ["C++", "Rust", "CSS"],
//    frameworks: ["Action", "Singular", "Yahoo"],
//    tools: ["Fiverr", "Trick", "Greek"]
// };
// Getting specific skills from the list
// let { languages, frameworks, tools } = developerSkills;
// Showing a skill from each category
// console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
// ----------------------------------------------------------------------------------------------------------------------
// A way to make a flexible list
// function createObjectWithDynamicKey(key: string, value: string) {
//    let dynamicObject = {};
//    // Setting up a section in the list with a changeable name
//    dynamicObject[key] = value;
//    return dynamicObject;
// }
// Using the flexible list setup for a user's preference
// let userPreference = createObjectWithDynamicKey("light", "light-screen");
// Showing the user's choice
// console.log(userPreference);
// ----------------------------------------------------------------------------------------------------------------------
// Starts with a list of numbers
// let numbers = [1, 2, 3, 4, 5];
// Doubles each number
// let doubledNumbers = numbers.map(number => number * 2);
// Shows the new list of doubled numbers
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// This line takes each number, doubles it, and puts it in a new list.
// ----------------------------------------------------------------------------------------------------------------------
// A mixed bag of items
// let mixedArray = [1, "orange", 2, "papaya", true, "watermelon"];
// Picks out only the words
// let stringsArray = mixedArray.filter(item => typeof item === "string");
// Shows the list of just words
// console.log(stringsArray); // Output: ["orange", "papaya", "watermelon"]
// This line checks each item: if it's a word, it goes into the new list.
// ----------------------------------------------------------------------------------------------------------------------
// A list of grades
// let grades = [88, 94, 72, 99, 53, 77];
// Calculates the average grade
// let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
// Shows the average grade
// console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.
// ----------------------------------------------------------------------------------------------------------------------
// This program calculates the average of all scores given
// function averageScore(...scores: number[]): number {
//    // Adds all scores together and divides by the number of scores
//    let total = scores.reduce((sum, score) => sum + score, 0);
//    return total / scores.length;
// }
// Example: finding the average of four scores
// console.log(averageScore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.
// ----------------------------------------------------------------------------------------------------------------------
// This program makes a function that adds a specific number
// function makeAdder(valueToAdd: number): (number) => number {
//    // This is the magic box. It takes a number and adds your special number to it
//    return function(number: number): number {
//        return number + valueToAdd;
//    };
// }
// Making a magic box that adds 5
// let addFive = makeAdder(5);
// console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.
// ----------------------------------------------------------------------------------------------------------------------
// This profile sets itself up and can share info about the user
// let userProfile = (function() {
// The user's details are kept inside
//    let name = "Eda";
//    let age = 24;
//    // This part shares the user's details
//    return {
//        displayInfo: function() {
//            console.log(`Name: ${name}, Age: ${age}`);
//        }
//    };
// })();
// Asking the profile to tell us about the user
// userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
// ----------------------------------------------------------------------------------------------------------------------
// Making a list (enum) for different types of vehicles
// enum VehicleType {
//    Car,
//    Truck,
//    Motorcycle
// }
// Showing one type of vehicle from the list
// console.log(VehicleType.Car); // It shows 0 because enums start counting from 0
// Here, we're just checking what number the Car category got in our list.
// ----------------------------------------------------------------------------------------------------------------------
// Creating a blueprint (interface) for student information
// interface Student {
//    name: string;
//    age: number;
//    courses: string[];
// }
// Filling in the blueprint with an example student
// let student: Student = {
//    name: "Maria",
//    age: 19,
//    courses: ["Physics", "Social Studies", "English"]
// };
// Showing the student's information
// console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.
// ----------------------------------------------------------------------------------------------------------------------
// Creating a custom type (type alias) for shapes that could be circles or rectangles
// type Shape = {
//    kind: "circle" | "rectangle";
//    radius?: number; // Only for circles
//    width?: number; // Only for rectangles
//    height?: number; // Only for rectangles
// };
// Describing a circle using our Shape type
// let circle: Shape = {
//    kind: "circle",
//    radius: 10
// };
// Describing a rectangle using our Shape type
// let rectangle: Shape = {
//    kind: "rectangle",
//    width: 15,
//    height: 25
// };
// Showing what we described
// console.log(circle); // Here's the circle
// console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
// ----------------------------------------------------------------------------------------------------------------------
// This function mixes a text and a number into one text
// function combineStringAndNumber(text: string, number: number): string {
//    // Joins the text and number into a single text
//    return text + number;
// }
// Trying it out with "Age: " and 30
// console.log(combineStringAndNumber("Age: ", 30)); // Shows "Age: 30"
// Here, we put together the text and number.
// ----------------------------------------------------------------------------------------------------------------------
// This function finds the leftover of dividing two numbers
// function remainder(num1: number, num2: number): number {
//    // Gives back the leftover of num1 divided by num2
//    return num1 % num2;
// }
// Trying it with 5 divided by 2
// console.log(remainder(5, 2)); // Shows 1
// This tells us the leftover, which is 1 here.
// ----------------------------------------------------------------------------------------------------------------------
// This function sees if both inputs are true
// function checkBothTrue(val1: boolean, val2: boolean): boolean {
//    // Only says true if both val1 and val2 are true
//    return val1 && val2;
// }
// Trying it with true and false
// console.log(checkBothTrue(true, false)); // Shows false
// It checks two things, but since one is false, the answer is false.
// ----------------------------------------------------------------------------------------------------------------------
// This function adds a number and a string that represents a number
// function addNumberAndString(number1: number, numberString: string): number {
//    // Converts the string to a number and adds it to the first number
//    return number1 + Number(numberString);
// }
// Trying it with 10 and "5"
// console.log(addNumberAndString(10, "5")); // Shows 15
// The string "5" is turned into the number 5, and then added to 10.
// ----------------------------------------------------------------------------------------------------------------------
// This function multiplies two decimal numbers
// function multiplyDecimals(num1: number, num2: number): number {
//    // Multiplies the numbers and rounds the result to two decimal places
//    return Math.round((num1 * num2) * 100) / 100;
// }
// Trying it with 0.1 and 0.2
// console.log(multiplyDecimals(0.1, 0.2)); // Shows 0.02
// After multiplying, we round to make the result easier to read.
// ----------------------------------------------------------------------------------------------------------------------
// This function divides two numbers and finds the quotient and remainder
// function divideAndRemainder(dividend, divisor) {
//    // Calculates the quotient and remainder
//    var quotient = Math.floor(dividend / divisor);
//    var remainder = dividend % divisor;
//    // Returns both in an object
//    return { quotient: quotient, remainder: remainder };
// }
// Trying it with 10 divided by 3
// console.log(divideAndRemainder(10, 3)); // Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.
// ----------------------------------------------------------------------------------------------------------------------
// "use strict";
// This function prints numbers from 1 to 5 using a loop
// function printNumbersWithLet() {
//    for (let i = 1; i <= 5; i++) {
//        // Uses `let` for loop variable `i`
//        console.log(i); // Logs numbers 1 through 5
//    }
//    // `i` is not accessible here, outside the loop, because it's defined with `let`
// }
// printNumbersWithLet();
// This shows that `let` limits `i` to the loop, preventing errors from using `i` where it's not intended.
// --------------------------------------------------------------------------------------------------------------
// "use strict";
// Using `let` for a variable that can be reassigned
// let age = 40;
// age = 41; // Works fine because `let` allows reassignment
// console.log(age); // Shows 41
// Trying to reassign a `const`-declared variable
// const name = "John";
// try {
//    name = "Eda"; // This line will cause an error
// }
// catch (error) {
//    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
// }
// This example illustrates that `const` prevents changing the variable once it's set.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// Demonstrating block scope
// {
//    let blockLet = "visible inside the block";
//    const blockConst = "also only inside the block";
//    console.log(blockLet); // Works fine here
//    console.log(blockConst); // Also works fine here
// }

// try {
//    console.log(blockLet); // This will fail
// } catch (error) {
//    console.log("`blockLet` is not accessible outside the block.");
// }

// try {
//    console.log(blockConst); // This will also fail
// } catch (error) {
//    console.log("`blockConst` is not accessible outside the block.");
// }
// This shows that `let` and `const` keep variables safe inside the block where they're defined.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function shows how to assign and update variable values
// function updateVariable() {
//    let number = 40; // Initially assigns the value 40
//    console.log("Initial value:", number); // Logs the initial value
//    number = 50; // Updates the value to 50
//    console.log("Updated value:", number); // Logs the updated value
// }
// updateVariable();
// We assign a value to a variable and then update it, showing how values can change.
// -----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function swaps the values of two variables
// function swapValues() {
//    let a = 10, b = 20; // Initially, a is 10 and b is 20
//    console.log("Before swap: a =", a, "b =", b);
//    let temp = a; // Temporarily stores the value of a
//    a = b; // Sets a to b's value
//    b = temp; // Sets b to a's original value stored in temp
//    console.log("After swap: a =", a, "b =", b); // Logs the swapped values
// }
// swapValues();
// We use a temporary variable to hold one value while we swap them, like a magic trick!
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function uses compound assignment operators for different operations
// function useCompoundOperators() {
//    let x = 6; // Starts with x equal to 6
//    console.log("Initial x:", x);
//    x += 3; // Adds 3 to x
//    console.log("After addition:", x); // Shows x after addition
//    x -= 2; // Subtracts 2 from x
//    console.log("After subtraction:", x); // Shows x after subtraction
//    x *= 5; // Multiplies x by 5
//    console.log("After multiplication:", x); // Shows x after multiplication
//    x /= 1; // Divides x by 1
//    console.log("After division:", x); // Shows x after division
// }
// useCompoundOperators();
// We simplify arithmetic operations on x using compound assignment operators, like a shortcut.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function adds two numbers and returns the result
// function addNumbers(num1, num2) {
//    // Calculates the sum of num1 and num2
//    return num1 + num2;
// }
// Calling the function with two numbers and logging the result
// console.log(addNumbers(6, 8)); // Outputs 14
// Here, we ask our function to add 6 and 8, and it tells us the answer is 14.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function greets a user by name, or greets an anonymous user if no name is provided
//function greetUser(name = "anonymous") {
//    // Says hello to the given name or to an anonymous user
//    console.log(`Hello, ${name}!`);
// }
// Trying the function with a name and without
// greetUser("John"); // Outputs: Hello, John!
// greetUser(); // Outputs: Hello, anonymous!
// We see how our function can say hello to someone by name, or just say hello if we don't know the name.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// Function declaration for squaring a number
// function squareDeclaration(number) {
//    return number * number;
// }
// Function expression for squaring a number
// const squareExpression = function (number) {
//    return number * number;
// };
// Using both functions to square the number 10
// console.log(squareDeclaration(10)); // Outputs: 100
// console.log(squareExpression(10)); // Outputs: 100
// Both methods give us the same result, showing two different ways to create functions that do the same thing.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This sets up an object for a car with specific details
// let car = {
//    make: "Honda",
//    model: "Mehran",
//    year: 2024
// };
// Accessing and showing the car's model
// console.log(car.model); // Outputs: Mehran
// We use dot notation (car.model) to get the model of the car from our object.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// Starting with our car object
// let car = {
//    make: "Honda",
//    model: "Mehran",
//    year: 2023
// };
// Adding a new property 'color' and updating 'year'
// car.color = "black"; // Adds a new property 'color'
// car.year = 2023; // Updates the 'year' property
// Showing the updated car object
// console.log(car); // Outputs the car object with the new color and updated year
// Now our car is black and its model year is updated to 2023.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function shows every detail about an object
// function logObjectProperties(obj) {
//    for (let property in obj) {
//        // Loops through each property in the object
//        console.log(`${property}: ${obj[property]}`);
//        // Shows the property name and its value
//    }
// }
// Using the function with a car object
// logObjectProperties({ make: "Honda", model: "Mehran", year: 2023, color: "black" });
// It tells us each piece of information stored about the car.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function counts how many characters are in a string
// function stringLength(str) {
//    return str.length; // Returns the number of characters in the string
// }
// Example: Measuring the length of a name
// console.log(stringLength("John")); // Outputs: 4
// We're simply asking how long the string "John" is, and it tells us there are 4 characters.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function changes a string to uppercase and then to lowercase
// function convertCase(str) {
//    let upperStr = str.toUpperCase(); // Converts to uppercase
//    let lowerStr = str.toLowerCase(); // Converts to lowercase
//    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
// }
// Example: Changing the case of "Hello Nida"
// convertCase("Hello Nida"); // Outputs: "Uppercase: HELLO NIDA Lowercase: hello nida"
// We're showing the same text in all uppercase and then all lowercase.
// --------------------------------------------------------------------------------------------------------------
// "use strict";
// This function swaps "CSS" with "Python" in a sentence
// function replaceCSSWithPython(sentence) {
//    return sentence.replace(/CSS/g, "Python");
//    // Uses a regular expression with the 'g' flag for a global replacement
// }
// Example: Changing a programming language name in a sentence
// console.log(replaceCSSWithPython("I love CSS and CSS is awesome!"));
// Outputs: "I love Python and Python is awesome!"
// Every "CSS" in the sentence is changed to "Python".
// ---------------------------------------------------------------------------------------------------------------
// "use strict";
// This function finds where "code" first shows up in a text
// function findCodePosition(str) {
//    return str.indexOf("code"); // Looks for "code" and tells where it found it
// }
// Example: Searching within a sentence
// console.log(findCodePosition("Learn to code with CSS")); // Outputs the start position of "code"
// It tells us the position number where "code" starts.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function checks if a sentence has "CSS" in it
// function hasCSS(str) {
//    return str.includes("CSS"); // Checks for "CSS" and returns true or false
// }
// Example: Seeing if a text mentions CSS
// console.log(hasCSS("I love coding in CSS!")); // Outputs true or false based on the check
// It simply says true if "CSS" is there, or false if it's not.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function takes out the first 3 characters from any text
// function extractFirstTenChars(str) {
//    return str.substring(0, 3); // Gets characters from start to position 3
// }
// Example: Taking the first 3 characters of a sentence
// console.log(extractFirstTenChars("Hello, CSS nida!")); // Shows the first 3 characters
// It gives us a smaller piece of the original text, just the beginning part.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function rounds a decimal number to the nearest whole number
// function roundToNearestInteger(num) {
//    return Math.round(num); // Rounds the number
// }
// Example: Rounding a decimal
// console.log(roundToNearestInteger(5.8)); // Outputs: 6
// console.log(roundToNearestInteger(5.5)); // Outputs: 6
// This shows how the function rounds numbers either up or down.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function changes a string into a number
// function convertStringToNumber(str) {
//    return parseFloat(str); // Converts the string to a number
// }
// Example: Turning a numeric string into a real number
// console.log(convertStringToNumber("678.91")); // Outputs: 678.91
// console.log(convertStringToNumber("99")); // Outputs: 99
// We're taking strings that look like numbers and turning them into actual numbers.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function checks if a value is Not a Number (NaN)
// function isValueNaN(value) {
//    return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
// }
// Examples: Checking different values
// console.log(isValueNaN("hello")); // Outputs: true, because "hello" isn't a number
// console.log(isValueNaN(456)); // Outputs: false, because 456 is a number
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// Defines an array with three favorite fruits
// let favoriteFruits = ["Orange", "Watermelon", "Pinnapple"];
// favoriteFruits.push("Kiwi"); // Adds "Kiwi" to the end of the array
// console.log(favoriteFruits); // Outputs: ['Orange', 'Watermelon', 'Pinnapple', 'Kiwi']
// This line adds a new fruit to our list of favorites.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function removes the last element from an array and returns it
// function removeLastElement(arr) {
//    return arr.pop(); // Removes and returns the last element of the array
// }
// Example: Removing the last fruit from the array
// const fruits = ["Orange", "Watermelon", "Pinnapple"];
// console.log(removeLastElement(fruits)); // Outputs: 'Pinnapple'
// console.log(fruits); // Outputs: ['Orange', 'Watermelon']
// Here, we take out the last fruit and show the updated list.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function finds "Watermelon" in the fruits array and replaces it with "Kiwi"
// function replaceWatermelonWithKiwi(fruits) {
//    const index = fruits.indexOf("Watermelon"); // Finds the index of "Watermelon"
//    if (index !== -1)
//        fruits[index] = "Kiwi"; // Replaces "Watermelon" with "Kiwi" if found
// }
// Example: Replacing "Watermelon" in the array
// const fruits = ["Orange", "Watermelon", "Pinnapple"];
// replaceWatermelonWithKiwi(fruits);
// console.log(fruits); // Outputs: ['Orange', 'Kiwi', 'Pinnapple']
// We're swapping "Banana" for "Mango" in our fruit list.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// Defines an array with some words
// const words = ["Hello", "Nida", "Python", "CSS"];
// Uses .map() to create a new array with the length of each word
// const lengths = words.map(word => word.length);
// console.log(lengths); // Outputs: [5, 4, 6, 3]
// Each number in the new array represents the length of the corresponding word in the original array.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function filters an array, keeping only numbers greater than 20
// function filterGreaterThanTen(numbers) {
//    return numbers.filter(number => number > 20);
// }
// Example: Filtering an array of numbers
// const numbers = [5, 10, 15, 20, 25];
// console.log(filterGreaterThanTen(numbers)); // Outputs: [25]
// The new array contains only the numbers that are greater than 20.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function calculates the sum of all numbers in an array
// function calculateSum(numbers) {
//    return numbers.reduce((accumulator, current) => accumulator + current, 0);
// }
// Example: Calculating the sum of an array of numbers
// const numbers = [1, 2, 3, 4, 5];
// console.log(calculateSum(numbers)); // Outputs: 15
// It adds up all the numbers in the array, resulting in a single sum value.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function formats the current date as DD-MM-YYYY
// function getCurrentDateFormatted() {
//    const now = new Date();
//    const day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
//    const month = String(now.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
//    const year = now.getFullYear();
//    return `${day}-${month}-${year}`;
// }
// console.log(getCurrentDateFormatted()); // Outputs the current date in DD-MM-YYYY format
// Shows today's date, neatly formatted.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// Calculates how many days are left until New Year's Day
// function daysUntilNewYear() {
//    const today = new Date();
//    const newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
//    const diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
//    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
//    return days;
// }
// console.log(daysUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's Day.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// Generates a Date object for the next occurrence of a specific birthday
// function getNextBirthday(month, day) {
//    const today = new Date();
//    let year = today.getFullYear();
//    const birthday = new Date(year, month - 1, day); // Months are 0-indexed
//    if (birthday < today) {
//        // If the birthday this year has already passed, use next year's date
//        birthday.setFullYear(year + 1);
//    }
//    return birthday;
// }
// Replace with your birth month and day
// const nextBirthday = getNextBirthday(12, 25); // Example: December 25th
// console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.
// --------------------------------------------------------------------------------------------------------------
// "use strict";
// Finds the square root of 144 using Math.sqrt()
// const squareRoot = Math.sqrt(144);
// console.log(squareRoot); // Outputs: 12
// This line effectively calculates and shows the square root of 144.
// --------------------------------------------------------------------------------------------------------------
// "use strict";
// Generates a random integer between 1 and 10
// function getRandomInt() {
//    return Math.floor(Math.random() * 10) + 1;
// }
// console.log(getRandomInt()); // Outputs a random integer between 1 and 10
// This function combines Math.random() with Math.floor() to create a random integer within our range.
// --------------------------------------------------------------------------------------------------------------
// "use strict";
// Calculates the absolute difference between -5 and 5
// const difference = Math.abs(-5 - 5);
// console.log(difference); // Outputs: 10
// This line shows the absolute value of the difference between -5 and 5, ignoring the sign.
// ---------------------------------------------------------------------------------------------------------------
// "use strict";
// This function returns a random boolean value
// function getRandomBoolean() {
//    return Math.random() > 0.4; // Returns true if the random number is greater than 0.4
// }
// console.log(getRandomBoolean()); // Outputs either true or false randomly
// By comparing a random number to 0.4, we effectively get a true or false value randomly.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function generates a random hexadecimal color code
// function getRandomHexColor() {
//    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
//    return color; // Returns the random color code
// }
// console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function simulates rolling a dice and returns a number between 1 and 6
// function rollDice() {
//    return Math.floor(Math.random() * 6) + 1; // Calculates a random integer from 1 to 6
// }
// console.log(rollDice()); // Outputs a random number between 1 and 6
// Here, we mimic the action of rolling a dice and getting a result.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function checks if a year is a leap year
// function isLeapYear(year) {
//    // Checks the conditions for a leap year
//    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }
// console.log(isLeapYear(2020)); // Outputs: true
// console.log(isLeapYear(1900)); // Outputs: false
// By using comparison operators, we can easily determine if a year is a leap year or not.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function checks if a number is divisible by both 2 and 3
// function isDivisibleByTwoAndThree(number) {
//    // Uses the modulo operator to check for no remainder
//    return number % 2 === 0 && number % 3 === 0;
// }
// console.log(isDivisibleByTwoAndThree(12)); // Outputs: true
// console.log(isDivisibleByTwoAndThree(14)); // Outputs: false
// Logical operators help us verify the number's divisibility by both 2 and 3.
// ----------------------------------------------------------------------------------------------------------------
// "use strict";
// This function compares two strings, ignoring case sensitivity
// function areStringsEqualIgnoreCase(str1, str2) {
//    // Converts both strings to lowercase before comparison
//    return str1.toLowerCase() === str2.toLowerCase();
// }
// console.log(areStringsEqualIgnoreCase("hard", "Hard")); // Outputs: true
// console.log(areStringsEqualIgnoreCase("work", "Word")); // Outputs: false
// We make both strings lowercase to ensure the comparison ignores case differences.
// ----------------------------------------------------------------------------------------------------------------
