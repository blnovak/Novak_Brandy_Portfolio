/**
JSON

 * JSON: JavaScript Object Notation.
 * JSON is a syntax for storing and exchanging data.
 * JSON is an easier-to-use alternative to XML.

 * JSON - Evaluates to JavaScript Objects
   The JSON format is syntactically identical to the code for creating JavaScript objects.

    Because of this similarity, instead of using a parser (like XML does), a JavaScript
    program can use standard JavaScript functions to convert JSON data into native JavaScript objects.

 * JSON Syntax Rules
 * JSON syntax is derived from JavaScript object notation syntax:

    Data is in name/value pairs
    Data is separated by commas
    Curly braces hold objects
    Square brackets hold arrays

*** JSON names require double quotes. JavaScript names don't. ***
        "firstName":"John"
              vs
        firstName: "John";

 * JSON values can be:

    A number (integer or floating point)
    A string (in double quotes)
    A Boolean (true or false)
    An array (in square brackets)
    An object (in curly braces)
    null

 * JSON objects are written inside curly braces.
        {"firstName":"John", "lastName":"Doe"}

 * JSON Arrays
 * JSON arrays are written inside square brackets.
    Just like JavaScript, a JSON array can contain multiple objects:
        "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter","lastName":"Jones"}
        ]

 */


//PARSE A JSON TEXT(STRING) INTO A JAVASCRIPT OBJECT
//USE data.js object "employees"
//converts JSON text (string) into a javascript object
//JSON.parse(var name assigned to the JSON object)
var obj = JSON.parse(text);
console.log(obj);

console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);


//ACCESSING A JSON ARRAY
//Use data.js object "people"
//Use json_weather.js

console.log(myJSON.people[0].job);
console.log(jsonObj.data[0].date);


//Load JSON data in the HTML using DOM



/**********   PRACTICE EXERCISES   *******************/
//1. Create a JSON object in the blank json_weather.js file using the provided weatherData.txt file.
// Use the following line if code to test your new file: 
// console.log(data.results.forecast[2].day);
console.log(json_weather.results.forecast[2].day);


// 2. Console.log the forecast for the next 3 days in sentence (String) format
// example: Today is Saturday. The high is 82. The low is 65. It will be partly cloudy.

var myObj = JSON.parse(results);
console.log(myObj);

console.log(“Today is " + myObj.results[0].day + ". " + "The high is " + myObj.results[0].high + ". " + "The low is " + myObj.results[0].low + ". " + "The weather will be " + myObj.results[0].text + ".");
console.log(“Today is " + myObj.results[1].day + ". " + "The high is " + myObj.results[1].high + ". " + "The low is " + myObj.results[1].low + ". " + "The weather will be " + myObj.results[1].text + ".");
console.log(“Today is " + myObj.results[2].day + ". " + "The high is " + myObj.results[2].high + ". " + "The low is " + myObj.results[2].low + ". " + "The weather will be " + myObj.results[2].text + ".");

// 3. Console.log each of the employees showing their full names (from the object "employees"
// and jobs (from the object "people").

var obj2 = JSON.parse(people);
console.log(obj2);
console.log(obj.employees[0].firstName + " " + obj.employees[0].lastName + " is a ” + obj2.people[0].job);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName + " is a ” + obj2.people[1].job);
console.log(obj.employees[2].firstName + " " + obj.employees[2].lastName + " is a ” + obj2.people[2].job);




