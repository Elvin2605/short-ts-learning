let numb : number ;
numb = 10 ;

let string : string ;
string = "aaa" ;

let bool : boolean ;
bool = true ;

let ar : string[] ;
ar = ['a','b','c'] ;
//or we can do 
let ar2 : Array<string> ;
ar2 = ['a','b','c'] ;
//basic functions used in arrays -> filter,map
let numlist : number[] ;
numlist = [1,2,3,4,5] ;

let result = numlist.filter((num)=> num>2) ;
console.log(result) ;

enum Color {
    Orange,
    Blue,
    Red
}
let c : Color = Color.Red ;