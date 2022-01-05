console.log("Hi JS!"); //System.out.println() in Java
console.log('Hi JS!'); 

console.log(`Hi 
JS!`); //template literal, which allows spaces between strings and represented exactly as-is
//var can stand for any variable
var a_name="a name";
var number=4;
var array=[0,1,2];
var boolean= false;


// semicolons are not necessary * 

a_name=4;
a_name=[0,1,true];

a_name={
    first_name:"Jackie",
    last_name:"Crosswhite"
}
// a_name=fucntion(){
//     console.log("what?");
// }
// a_name();
// a_name=4;
// if(a_name){
//     console.log("How?");
// }
// a_name=0;
 

//when used == in comparison JS doesnt care about variable type 5 =="5" ->true
// when used === - JS cares about variable type 5 === "5" -> false

//control flow
var a=5;
var b=0;
if(a>b){
    console.log("Do something");
}
else{
    console.log("Something else");
}


function pythagoreanTheory(sidex, sidey){
    var result=Math.sqrt(sidex*sidex+sidey*sidey);
    return result;
}
function parent(){
    function child(){

    }
}


for(let i=0; i<10; i++){
    console.log(i);
}

/*

hoisting; JS pretends that all function & variables are declared at the beignning of the file
scopes:
global: can be seen globally by the application
funciton: can be seen within a funciton
block: can be seen within a block (for loop, if statement, case, trycatch)
lexical:function created in a function can have access to the variable in the parent funciton



variable types:
var- basic, global/funciton scope variable that can be anything
ES6:
let- all four types of scope
const- variable that can never be changed

*/


// Javascript problem solutions:

// Problem #18

//JavaScript program to check two given numbers and 
//return true if one of the number is 50 or if their sum is 50.
function return50(x, y){
    return ((x==50 || y==50) || (x+y==50))
}
console.log(return50(40,40))
console.log(return50(25, 25))
console.log(return50(50, 50))
console.log(return50(50, 25))

//-------------------------------
console.log("Printing Problem #20")
// Problem 20
/*
Write a JavaScript program to check from two given integers, 
whether one is positive and another one is negative. 
*/
function posAndNeg(x,y){
    return ((x>0 && y<0) || (x<0 && y>0))
}

console.log(posAndNeg(-1,4))
console.log(posAndNeg(-1,-1))
console.log(posAndNeg(1,4))
console.log(posAndNeg(0,-3))
console.log(posAndNeg(0,0))
console.log(posAndNeg(4,-3))

//-------------------------------
console.log("Printing Problem #26")
// Problem 26
/*
Write a JavaScript program to create a new string from a given 
string taking the last 3 characters and added at both the front 
and back.The string length must be 3 or more. 
*/
function sampleString(x){
    back=x.substring(x.length-3)
    return back+x+back  
}
console.log(sampleString("Guljemal"))

//-------------------------------
console.log("Printing Problem #27")
// Problem 27
/*
Write a JavaScript program to check 
whether a string starts with 'Java' and false otherwise.
*/
function trueJava(str){
if(str.length>=4){
    if(str.substring(0,4)=="Java" || str.substring(0,4)=="java") return true;
    else{
        return false;
    }
}
else return false
}
console.log(trueJava("JavaScript"))
console.log(trueJava("java"))
console.log(trueJava("javelement"))
console.log(trueJava("javascript"))


//-------------------------------
console.log("Printing Problem #9")
// Problem 9
//Write a JavaScript program to calculate days left until next Christmas. 
// today=new Date()
// now=(today.getFullYear(), today.getMonth(), today.getDate())
// console.log(now+ " now")
// console.log(today.getFullYear())
var december=new Date(2022, 11, 25)
console.log(december+ " December")
var difference=december-now
console.log(difference)

console.log("---------------")
today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
console.log(cmas)
console.log("  ")
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
console.log(cmas)
console.log("  ")
}  
var one_day=1000*60*60*24;
console.log(one_day)
console.log("  ")
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");


