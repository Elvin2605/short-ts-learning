"use strict";
let numb;
numb = 10;
let string;
string = "aaa";
let bool;
bool = true;
let ar;
ar = ['a', 'b', 'c'];
//or we can do 
let ar2;
ar2 = ['a', 'b', 'c'];
//basic functions used in arrays -> filter,map
let numlist;
numlist = [1, 2, 3, 4, 5];
let result = numlist.filter((num) => num > 2);
console.log(result);
var Color;
(function (Color) {
    Color[Color["Orange"] = 0] = "Orange";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
let c = Color.Red;
