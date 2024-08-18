
// var userInp = prompt("Enter any word");

// var firstAlpha = userInp.slice(0,1).toUpperCase();
// var baqiAlpha = userInp.slice(1).toLowerCase();
// var final = firstAlpha+baqiAlpha;
// document.write(final)


//-----Str Method -----//

// var arr = ["asad","saad","osama","jalal","osama"];

// var check = arr.indexOf("osama")
// document.write(check)

// var arr = ["asad","saad","osama","jalal","osama"];

// var check = arr.indexOf("osama",3)
// document.write(check)

// var arr = ["asad","saad","osama","jalal","osama"];

// var check = arr.lastIndexOf("osama")
// document.write(check)

// var str = 'rehman'
// var check = str.charAt(2)
// document.write(check);

// var str = 'najeeb ahmed'
// var check = str.charAt(6);
// console.log(check);

// var str = 'hello world';
// var rep = str.replace('world','pakistan');

// document.write(rep);


// var daysNames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// var day = new Date().getDay()
// document.write(daysNames[day])

// var eid = prompt("enter your date of birth");
// var dobmili = new Date("16 june , 2024").getTime()
// var currentdate = new Date().getTime()
// var actuall = dobmili - currentdate
// var covert = Math.floor(actuall / (86400000))
// document.write(covert + " days left")


// var customerName = prompt( "Please enter your name" );
// currentMonth = prompt("Enter the month");
// numberOfunits = prompt("Enter number of units");
// chargersPerunits = prompt("How many chargers are in one unit?");

// netAmountpayable = numberOfunits*chargersPerunits;

// latePaymentCharges = 500;

// grossAmountPayable = netAmountpayable + latePaymentCharges; 

// document.write(customerName+currentMonth+numberOfunits+chargersPerunits+"<br>");
// document.write("Net Amount Payable is : "+netAmountpayable+"<br>");
// document.write("Gross amount  payable is: "+ grossAmountPayable);

// var day = new Date();

// console.log(day)

// var day = new Date(2020,11,5);

// document.write(day)

// var showDate = new Date();

// document.write(showDate)

// var days = ['sun','mon','tues', 'wed','thur','fri','sat']
// var todaysDay = new Date().getDate()

// document.write(days[todaysDay])

// var dob = new Date('12 sep, 1999').getTime()

// var todaysDate = new Date().getTime()

// var minusDate = todaysDate - dob

// var convertAge = minusDate / (1000 * 60 * 60 * 24 * 365)

// document.write(Math.floor (convertAge))

// var date = new Date()

// document.write(date)

// for(var a = 1; a < 100; a = a+10){
//     for(var b = a; b < a+10; b++){
//         document.write(b + " ")
//     }
//     document.write("<br>")
// }

// var city = prompt("Enter your City");

// var arr = ["karachi","hyderabad","quetta"];
// city  = city.toLowerCase();
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] === city){
//         alert("city has found")
// }
// else{
//     alert("city has not found")
// }
// }

// var num = 20;

// var  strNum = num.toString();
// document.write(strNum);

// var d = new Date("2015");

// document.write(d)

// var d = new Date();
// d.getMonth();

// document.write(d)

// var d = new Date();
// d.setFullYear(2020,11,3)
// document.write(d)

// var str = 'NAJEEB AHMED'

// document.write(str.toLowerCase());

// var str = 'najeeb ahmed';

// document.write(str.toUpperCase());

// var str = 'najeeb ahmed';

// document.write(str.slice(0,6))

// var str = 'najeeb ahmed';

// document.write(str.indexOf('ahmed'))

// Logical not operator ! //

// var eligible = false;
// var required = true;

// console.log(!eligible);
// console.log(!required);

// var mountains = ['Everest','Fuji','Nanga Parbat'];
// mountains[2] = 'K2'

// console.log(mountains);

// var seas = ['Black Sea','Caribbean','North Sea','Baltic Sea'];

// seas.push('Red Sea',);

// console.log(seas)

// console.log(Array.isArray(seas))

// var userInput = prompt("Enter a string");
// lastChar = userInput.charAt(userInput.length-1);

// document.write("The last character of the string is: " + lastChar)

///------DATE METHOD PRATICE-----//

// var d = Date .parse("jan 1,2024");

// document.write(d)

// Question 2 //

// var currentDate = new Date();

// var currentMonth = ['january','february','march','april','may','june','july','august','september','october','november','december'][currentDate.getMonth()];
// alert("Current month: "+ currentMonth)


// var date = new Date(2016, 1, 28);

// date.setDate(date.getDate()+2);

// document.write(date)

// var date = new Date(2023, 0);

// document.write(date)

// var date = new Date(9,11,24);

// document.write(date);

// var userName = prompt("Please enter your username");

// var specialSymbols = ["@",".",","];

// for(var i = 0; i < specialSymbols.length; i++){
//     if(userName.includes(specialSymbols[i])){
//         userName = prompt("Your username contains a special symbol. Please enter a valid username:");
//     }
// }
// var storedUsername = userName;

// document.write("Your username is:  " + storedUsername);

// while loop //

// var b = 0;
// while(b<10){
//     console.log(b);
//     b++;    
// }

// var fruits = ["Apple","Banana","Mango","Orange","Papaya"];

// document.write(fruits[0]);
// document.write(fruits[1]);
// document.write(fruits[2]);
// document.write(fruits[3]);
// document.write(fruits[4]);

// document.write(fruits[fruits.length - 1])


// var colors = ["Red","Green","Blue"];

// var removed = colors.splice(0,1);

// document.write(colors);

// var colors = ["Red","Green","Blue"];

// document.write(colors.join());
// document.write(colors.join(""));

// var i = 1;

// while(i <= 5){
//     document.write("<p> The number is " + i + "</p>")
//     i++;
// }

// var fruits = ["Apple","Banana","Mango","Orange","Papaya"];

// var fru = fruits.slice(1,3);

// document.write(fru)

// var colors = ["Red","Green","Blue"];

// colors.push("pink","Voilet");
// colors.unshift("Yellow","Gray");

// document.write(colors + "<br>");
// document.write(colors.length);

// var fruits = ["Apple","Banana","Mango","Orange","Papaya"];

// document.write(fruits.slice(2)+ "<br>");
// document.write(fruits.slice(-2) + "<br>");
// document.write(fruits.slice(1,2));

// var arr = [10,11,12,13,14];

// for (var i = 0; i < 5; i++){

//     document.write(arr[i] + "<br>");
// }

// var word = "mai ja rha hn";

// document.write(word.split(""));

// var nameWord = 'john,dave,mike,alex';

// var nameArry = nameWord.split(',');

// document.write(nameArry)

// var userInput = prompt("Enter your word");

// var check = "";

// for(var i = userInput.length-1; i >= 0; i--){
//     check += userInput[i];
// }

// if(userInput === check){
//     alert(userInput + " Its a palindrome word")
// }

// else{
//     alert("Try Again")
// }

// for(var i = 0; i < 2; i++){
//     console.log(i)
// }

// console.log(i)

// var arr = ["najeeb","ahmed","ali"];

// for(var i = 0;  i < arr.length; i++){
//     console.log(arr)
// }

// var isSunny = true;

// var isWarm = true;

// var isHot = false;

// if(isSunny && isWarm || isHot){
//     console.log("Perfect Weather for outdoor activites!")
// }
// else{
//     console.log("Maybe another day")
// }

// var userInput = "";

// var userName = userInput || "Guest";

// console.log("Welcome, " + userName)

// var num = [2,3,4,5,7,8,9,10];

// var min = num[0];

// for(var i = 0; num.length; i++){
// if( num[i] >  min){
// min = num[i]
// }
// }


// for(var i = 1; i <= 10; i++){
//     console.log(i)
//     console.log("")
// }




// var word = prompt("Enter the word");

// reverse = "";

// for(var i = word.length-1; i >= 0; i--){
//     reverse += word[i]
// }

// if(word === reverse){
//     console.log("It's a palindrome word")
// }
// else{
//     console.log("It's not a palindrome word")
// }

// var arr = [11,23,34,35,12,77,10];

// min = arr[0];

// for(var i = 0; i < arr.length; i++){
//     if(min > arr[i]){
//         min = arr[i]
//     }
// }

// console.log(min)

// var arr = [11,23,34,35,12,77,10];

// max = arr[0];

// for(var i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
// }

// console.log(max)

// var arr = [50,51,52,55,56,57,58];

// for(var i = 0; i < arr.length; i++) {
//     var diff = arr[i + 1] - arr[i]
//         if(diff > 1){
//             for(var j = 1; j < diff; j++) {
//                 console.log(arr[i] + j)
//             }
//         }


//     }


// let a = 0;
// let b = [0];
// console.log( a == b)

// var a = true;
// var b = false;
// var x = null;
// var result = (x == null)
// console.log( a = result)

// const type = null;
// console.log(typeof(type))

// let a = "5";
// let b = +a;
// console.log(typeof b)

// var x = true + false;
// console.log(x)

// var num = [1,2,3,4];

// for(var i = 0; i < num.length; i++) {
//     if( i == 2){
//         continue;
//     }
//     console.log(num[i])
// }

// var a = [1, ,3];
// console.log(a.length)

// console.warn(+true)

// console.warn(typeof +true)

// console.warn(!"name")

// var a = 3;

// var b = new Number(3)
// console.log(a == b);
// console.log(a === b);

// var number = 0;

// console.log(number++);
// console.log(++number);
// console.log(number);

// const sum = eval('10*10+5');

// console.warn(sum)

// for(var i = 1; i < 5; i++) {
//     if(i === 3) continue;
//     console.log(i)
// }

// var  numbers = [1,2,3];

// numbers[1] = numbers;

// console.log(numbers)

// var sum = 0;

// console.log(typeof sum)

// var arr = [1,2,3,4,6,7 ];

// for(var i = 0; i < arr.length; i++) {
//     diff = arr[i + 1] - arr[i]
//     if(diff > 1){
//         for(var j = 1; j < diff; j++) {
//             console.log(arr[i] + j)
//         }
//     }

// }

// sum = 0;

// for(var i = 1; i < 10; i++) {
//     sum -= i;
// }
// console.log(i)

// for(var i = 0; i < 10; i++) {
//     if(i != 5) continue;
//     console.log(i)
// }

// var number = + 1

// console.log(++number)

// var arr = [11,13,14,15,20];
// var missing = [];
// for(var i = 0; i < arr.length; i++) {
//         diff = arr[i + 1] - arr[i]
//         if(diff > 1){
//             for(var j = 1; j < diff; j++){
//                     arr.splice(i + j, 0 ,arr[i] + j)    
//             }
//         }
// }

// console.log(arr)


// var arr = ["najeeb","ahmed"]

// arr.splice(1,1)
// console.log(arr)

// for(var i = 0; i <= 10; i+=2) {
//     console.log(i + 1)
// }


// var arr = [20,21,24,25];

// for(var i = 0; i < arr.length; i++) {


//     for(var j = 1; j < arr[i + 1] - arr[i]; j++) {
//         console.log(j)
//     }
// }

// var arr = ["my name Najeeb Ahmed"];

// console.log(arr);

// console.log(null > 0)

// console.log(1 + '1' - 1)


// for(var i = 10; i >= 1; i--) {
//     for(var j = 1; j <= 10; j++) {
//         console.log(i,j)
//     }
// }



// sum = 0;
// for(var i = 1; i <= 5; i++){
//     sum += i;
//     console.log(sum)

// }

// var fullName = "meer hamza ali";

// var capital = "";
// var final = "";

// for(var i = 0; i < fullName.length; i++) {
//     if (i === 0 ) {
//         capital += fullName[i].toUpperCase()
//     }
//     else if (fullName[i] === " "){
//         final += fullName[i + 1].toUpperCase()
//     }
//     else{
//         if(final) {
//             capital += " " + final
//             final = "";

//         }else{

//             capital += fullName[i]

//         }
//     }
// }
// console.log(capital)

// var myName = "najeeb ahmed";
// var firstWord = myName[0].toUpperCase();
// console.log(firstWord)

// for(var i = 1; i < myName.length; i++) {
//     if(myName[i - 1] === " "){
//         firstWord += myName[i].toUpperCase()
//     }
//     else{
//         firstWord += myName[i]
//     }
// }
// console.log(firstWord)

// var arr = prompt("enter your word");

// var word =""; 

// for(var i = arr.length - 1; i >= 0; i-- ){
//     word += arr[i]
// }
// console.log(word)

// console.log("2" > 1)

// console.log( 2 > "1")

// console.log( 1 < 2 < 3)
// console.log( 3 > 2 > 1)

// var foo = [];

// foo[100] = "";

// console.log(foo.length)

// var arrA = [42,1,2];

// var arrB = arrA;

//  arrB[0] = 42;

// console.log(arrA)

// var value = 0;

// if(value === '0'){
//     console,console.log('Equal');
// }
// else{
//     console.log('not equal')
// }

// var number = 0;

// console.log(number++)
// console.log(++number)
// console.log(number)

// var str = "najeeb ahmed"

// console.log(str.slice(0,6))

// var text = "hi i am najeeb ahmed hello i am najeeb ahmed"

// var repeat = "haseeb ahmed"

// for( var i = 0; i < text.length; i++) {
//     if(text.slice(i,i + 12) === repeat) {
//         text = text.slice(0,i) + "haseeb ahmed" + text.slice(i + 12 )
//     }
// }
// console.log(text)

// var text = "world war II"

// for(var i = 0; i < text.length; i++) {
//     if(text.slice(i, i + 12) === "world war II") {
//         text = text.slice(0, 0) + "the second world war" + text.slice(i + 12)
//     }
// }
// console.log(text)

// var text = "I felt happy because I saw the others were happy and because I knew I should feel happy, but I wasn’t really happy"
// var happy = "happy"
// for(var i = 0; i < text.length; i++) {
//     if(text.slice(i,i + happy.length) === happy) {
//         text = text.slice(0, i) + "sad" + text.slice(i + happy.length)
//     }
// }
// console.log(text)

// var fullName = "najeeb ahmed"

// var firstName = fullName.slice(0, 7)   
// var lastName = fullName.slice(7)

// console.log(lastName)

// var num = 5.8

// var round = Math.random(num);

// console.log(round,"round")

// var num = "3.9999999";

// var num1 = parseFloat(num);

// var num2 = parseInt(num);

// console.log(num1 , "num1");

// console.log(num2 , "num2");


// var player1 = "head";

// var palyer2 = "tail";

// var  toss = Math.floor(Math.random() * 2);



// if(toss == 1) {
//     console.log("won player 1")
// }
// else{ 
//     console.log("won player 2")
// }

// var str = "saylani smit smit wel smit ada smit";

// var word = "smit";

// var rep = "saylani";

// var count = 0;

// for(var i = 0; i < str.length; i++) {
//     var find = str.slice(i, i + word.length);
//     if(find === word) {
//         count++
//         if(count === 3){
//             str = str.slice(0, i) + rep + str.slice(i + word.length)
//         }
//     }
// }
// console.log(str)

// var number = 0;

// console.log(number++)
// console.log(++number)
// console.log(number)

// var age = prompt("Enter your date of birth");

// var currentDate = new Date().getTime();

// var dob = new Date(age).getTime();

// var diff = currentDate - dob;

// var covertYear = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));

// var covertMonth = Math.floor(diff / (1000 * 60 * 60 * 24 * 31 ));

// var covertDay = Math.floor(diff / (1000 * 60 * 60 * 24));

// document.write(`You are ${covertYear} year and ${covertMonth} months and ${covertDay} days old.`)


// var date = new Date();

// var days = ["sun","mon","tues","wed","thus","fri","sat"];

// console.log(days[date.getDay()])

// var count = 0;
// function test(){
//     for(var i = 0; i < 5; i++) {
        
//         console.log (count)
//     }
// } 

// test();
 

// let x = 10;
// function increase(){
//     x += 3;
//     console.log(x)
// }

// increase();

// var a = 0;
// function fun(a){
//     console.log(a);
//     var a = 10;
// }
// fun(10);

// let a = 4 > 3 > 2;
// console.log(a);

// let a = "5";
// let b = +a;
// console.log(typeof b)

// let x = Infinity;
// console.log(typeof x)
// console.log(1 < 2 < 3);

// let outPut = 2 ** 3;
// console.log(outPut);

// var baby = [1,2,3];
// baby.pop();
// console.log(baby)

// var a = 10;
// var b = 'two';
// console.log(a/b);
// console.log('x'-'y'-2)
// console.log(2 * '3' + 3)

// var arr = [1,2,3];
// arr.pop();
// console.log(arr)//last element remove

// var arr = [1,2,3];
// arr.push(4);
// console.log(arr)// last element add

// var arr = [1,2,3,4];
// arr.shift(0);
// console.log(arr)// first element remove

// console.log(3 < 2 < 1)
// console.log(3 > 2 > 1)

// console.log(1 < 2 < 3)

// var x = 10;
// console.log(x++)

// var fname = ['banana','apple','orange'];
// var allFname = fname[fname.length-1];
// console.log(allFname);

// var x = 7;
// var y = (typeof x).length
// console.log(y);

// var x = 10;
// function foo(){
//     console.log(x);
// }
// function bar(){
//     var x = 20;
//     foo();

// }
// bar();

// var a = {};
// var b = [];
// var c = () => {};
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c)

// console.log(1 + '1' - 1)

// console.log(1 < 2 < 3)
// console.log(3 > 2 > 1)
// console.log(true == 1)

// var x = [1,2,3];
// var y = x;
// y.push(4);
// console.log(x === y)


// var day = prompt('Enter a day')
// switch(day){
//     case 'monday': 
//         console.log('work day');
//         break
//     case 'tuesday':
//         console.log('work day')
//         break
//     case 'wednesday':
//         console.log('work day')
//         break
//     case  'thusrday':
//         console.log('work day')
//         break
//     case 'friday':
//         console.log('half day')
//         break
//     case 'saturday':
//         console.log('off day')
//         break
//     default:
//         console.log('holiday')     

// } 

// function currentDateTime(){
//     var now = new Date();
//     var dateTime = now.toLocaleString();
//     document.write('The current date time is: ' + dateTime)
// }
// currentDateTime();

// function greetUser(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     var fullName = firstName + " " + lastName;
//     document.write("Hello, " + fullName + "!")
// }
// greetUser();

// function addNumber(){
//     var num1 = +prompt("Enter the first number");
//     var num2 = +prompt("Enter the second number");

//     var sum = num1 + num2;
//     document.write("The sum of " + num1 + " and " + num2 + " is " + sum);
// }
// addNumber();

// function computeOperator(){
//     var num1 = +prompt("Enter the first number");
//     var num2 = +prompt("Enter the second number");
//     var operator = prompt("Enter the operator (+, -, *, /):")
//     var result = (num1, num2, operator);
//     document.write("The result of " + num1 + " " + operator + " " + num2 + " is " + result);
//     return eval(num1 + operator + num2)
// }
// computeOperator()
// var x = 1;
// console.log(++x + x++)

// var arr = [];
// arr[0]= [1];
// console.log(arr) 
// var x = 1;
// var x = x++ + ++x;
// console.log(x)
// console.log("2" > 1)

// var x = "";
// cosole.log(x == undefined)
// var x = 10 % 3;
// console.log(x)
// var a = 3;
// var b = a ** 2;
// console.log(b)
    // var a = 0;
    // var b = [];
    // console.log(a == b);
// console.log(null == 0)
// var x = false;
// var y = !x;
// console.log(y)
// console.log(!![])
// var a = 0;
// function fun(){
//     console.log(a)
//     var a = 5;
// }
// fun();
// console.log(3 > 1 == 1)  

// var a = 5;
// function get(){
//     var a = 10 + 2
//     console.log(a)
// }
// get();
// var city = "karachi";
// console.log(city[0])
// var i = 0;
// while(i < 5){
//     console.log(i)
// }
// var match = true;
// var count = 0;
// while(match){
//     count += 1;
//     console.log(count)
//     if(count >= 2) {
//         match = false
//     }
// }
// console.log(true * 3 ** 3);
// var x = 5 + '9';
// var y = 10 - '5';
// console.log(x,y)
// var a = 4;
// var b = 2;
// var c = a * 2;
// console.log(a - b * c)
// console.log( "" == false)
// console.log("1" - - "1")
// console.log('banana' > 'Banana')
// console.log(typeof(8 + 3 + '2'))
// console.log(10 + "")
// console.log(+true);
// console.log(!'baby');

// var x = 10;
// console.log(x++ + ++x)
// console.log(10 > 9 == 9 > 8)

// var a = [1,2,3,4,5];
// console.log(a.slice(2,2))

// var bracket = "{[()]}"
// var bracket1 = "{[(])}"
// var bracket2 = "{{[[(())]]}}"


// function balance (){

//     var stack = [];
//     var opening = '{[(';
//     var closing = '})]';
//     var matching = 


// }
// for(var i = 0 ; i < 10 ; i++ ){
//     setTimeout(function(){
//     console.log(i)

// },2000)
// }

// var a = true;
// var b = false;
// var x = null;
// var result = (x == null);
// console.log(result);

// var name1 = ["baby"];
// var name2 = "baby";
//  console.log(name1 == name2);

// let sum = 0;
// for(let i = 0; i < 3; i++,sum++)
//     {sum += i}
// console.log(sum)

// var arr1 = [1,2,3,4];
// var arr2 = arr1.push(5);
// console.log(arr1.length);

// var x = 2;

// function fun(){
//     console.log(x);
//     var x = 8;
// }
// fun();

// for(var i = 1; i < 2; i++){
//     console.log(`baby ${i}`);
// }

// var x = 9 + ["4"];
// console.log(x);

// console.log("09">"19");
// console.log("9">"19");
// var x = "false";
// var y = !x;
// console.log(y);
// var a = true + true + true * 3;
// var b = true + true + true ** 3;
// console.log(a,b);
// var x = 2;
// x = x +(x += 2);
// console.log(x);
// var y = true + false;
// console.log(y)
// var numbers = [1,2,3];
// console.log(numbers[1]);
// var x = "50";
// var result = +x;
// console.log(result)
// var x = 7;
// var y = (typeof x).length;
// console.log(y);
// var name = 'javascript';
// function doSomething(){
//     var name = 'Angular'
//     console.log(this.name)
// }
// doSomething();
// var str = 'abcd';
// var str1 = str.split('').reverse().join('')
// console.log(typeof str == typeof str1)
// console.log(str == str1)
// var str = 'abcd';
// console.log(str[0]);
// str[0] = 'e';
// console.log(str[0]);
// console.log(+"2"+2)
// var numbers = [1,2,3,4,5];
// var [y] = numbers;
// console.log(y);
// var arr = ["eat","sleep","baby"];
// var a = arr.pop();
// console.log(a);
// console.log(2 + "2" - 1);
// var x =  parseInt(9 + '9' + 9);
// console.log(x)
// var x = true + true;
// var y = x + false;
// console.log(y)
// var x = 40 ;
// var y = "Love";
// console.log(x || y);
// console.log(x && y);



// var num = [10,20,30,40,50];
// num[0] = 70;
// num[7] = 30;
// console.log(num.length)
// var x = 5;
// var y = (x = 10)+3;
// console.log(x,y) 

// var numbers = [1,2,3];
// var [x,y,z] = numbers
// console.log(x,y,z);

// var  num = [0,1,2,3,4,5];
// console.log(num.length-1)

// var count = 3;
// var list = ["C","O","D","E"];
// console.log(list[count++])

//  function square(a,b) {
//     return a ** b
// }
// console.log(square(2,3))
// console.log("0" > 9)
// var a = 0;
// function fun(a){
//     console.log(a);
//     var a = 5;
// }
// fun(10)
// for(var x = 0; x < 5; x++){
//     if(x === 4){
//         continue;
//     }
//     console.log(x);
// }
// var x ;
// console.log(x == undefined)
// console.log("true" == true)
// console.log(true+true)
// console.log( {} == {})
// for(var i = 3; i > 2; i--){
//     console.log(`i have ${i} babies`)
// }
// var num = 2;
// var num = 8;
// console.log(num)
// var a = [1,2,3];
// var b = a;
// b[0] = 0;
// console.log(a) 
//   var x = true;
//   var y = false;
//   var a = null;
//   var result = (x == null);
//   console.log(a = result);
// function checkEquality(a,b){
//     if(a === b){
//         console.log("Equal");
//     }else{
//         console.log("Not Equal");
//     }
// }
// checkEquality(0,'0')
// function test(){
//     var x = 1;
//     if(true){
//         var x = 2;
//         console.log(x)
//     }
//     console.log(x)
// }
// test();
// var x = 0;
// var y = {};
// console.log(x == y)
// var num = 10;
// var x = 5 + num++;
// console.log(x)
// console.log(x)

// var baby = {name: "cyra"}
// var {name} = baby;
// console.log(name)
// let a = 3;
// function foo(){
//     let a = 8;
//     console.log(a);
// }
// foo();
// let a = [1,2,3];
// let b = a;
// b.push(4);
// console.log(a.length);
// function foo(){
//     let a = 7;
//     if(a === '7'){
//         return true;
//     }else{
//         return false;
//     }
// }
// foo();
// let a ='5';
// let b = +a;
// console.log(typeof b);
// let a = 5;
// {
//     let x = 6;
//     }
//     x += 0;
//     console.log(x)
// let obj = {name: 'Alice',
//      age: 20,
// };
// console.log(obj.name);
// var a = 1;
// function data(){
//     if(!a){
//         var a =10;
//     }
//     console.log(a);
// }
// data();
// console.log(a)

// function add(a,b){
//     return a + b;
// }
// console.log(add(5,3))

//
// var a = 10;
// function abc(){
//     var a = 20;
//     console.log(a);
// }
// abc();
// console.log(a)
// console.log(+'2'+3)
// var numbers = [1,2,3,4,5];
// var sum = 0;
// numbers.forEach(function(num){
//     sum += num;
//     });
// console.log(sum);
// let obj = {name: 1 };
// let arr = [obj];
// obj = null;
// console.log(arr[0].name);
// console.log(obj);
// var x = 40;
// var y = 'love';
// console.log(x || y);
// console.log(x && y);    
// let arr = {};
// console.log(arr.length)
// let arr = [1,2,3];
// console.log(arr[3]);
// let x = true + true;
// let y = x + false;
// console.log(y);
// console.log('5' + 3 -2);
// let val = 2 || 3;
// console.log(val);

// let a = 3;
// let b = a ** 2;
// console.log(b);
// var x = 5;
// var y = 2;
// var result = eval( x + y);
// console.log(result);
// var a = 0;
// function foo(a){
//     console.log(a)
//     var a = 5;
// }
// foo(10);
// function add(x,y){
//     return arguments.length;
// }
// console.log(add(1,2,3));
// var a = [1,2,3];
// var b = [4,5,6];
// var result = a.concat(b);
// console.log(result.length);
// var name = 'javascript';
// function doSomething(){
//     var name = 'Angular'
//     console.log(this.name)
// }
// doSomething(); 
// function convertToNumber(num){
// return +num;
// }
// console.log(convertToNumber(null));
// console.log(convertToNumber(undefined));
// const obj = {
//     name: 'hello'
// }
// obj.__proto__ = Array.prototype;
// console.log(obj instanceof Array);
// console.log(Array.isArray(obj))
// var name = function name(){
//     console.log('React js')
// }
// function name(){
//     console.log('javascript')
// }
// name()
// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2,3,4));
// let a = 1;
// let b = 2;
// {
//     let a = 3;
//     let b = 4;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);  

// let x = 2;
// function fun(){
//     let x = 10;
//     console.log(x);
// }
// fun();
// let arrA = [0,1,2,3,4,5];
// let arrB = arrA;
// arrB[0] = 42;
// console.log(arrA)
// let objA = {prop1: 42};
// let objB = objA;
// objB.prop1 = 90;
// console.log(objA.prop1);

//===============**Object** =============//

// var student = {
//     firstName: 'Najeeb',
//     lastName: 'Ahmed',
// }
// console.log(student.firstName);
// console.log(student['lastName']);
// var student = [
//     {name: 'Ali',age: 20},
//     {name: 'Ahmed',age: 22},
// ];
// console.log(student[0].name)
// var userProfile = {
//     firstName: 'Najeeb',
//     lastName: 'Ahmed',
//     dateOfBirth: 1994
// }
// console.log(userProfile);
// var userProfile = {
//     firstName: 'Najeeb',
//     lastName: 'Ahmed',
//     dateOfBirth: 1994,
//     getName: function(){
//         return "user's name: " + this.firstName + " " + this.lastName;
//     }
// };
// console.log(userProfile.getName());
// var userProfile1 = Object.create(userProfile);
// userProfile1.firstName = "Ahsan";
// userProfile1.lastName = "Ahmed";
// userProfile1.dateOfBirth = 1990;
// console.log(userProfile1);
// var person = {
//     name: 'jhon',
//     age: '30',
// };
// var address = {
//     street: '123 Main street',
//     city: 'Example City',
// };
// var personWithAddress = Object.assign({}, person, address);
// console.log(personWithAddress)
// var car = {
//     make: '',
//     model: '',
//     getDescription: function() {
//         return this.make + ' ' + this.model;
//     }
// }
// var myCar = Object.create(car);
// myCar.make = 'Toyota';
// myCar.model = 'Corolla';
// console.log(myCar.getDescription());
// var obj = {
//     name: 'Ahmed'
// }
// console.log('name' in obj)
// var user = {
//     firsrName: 'Ahmed',
//     lastName: 'Ali'
// }
// Object.freeze(user);
// console.log(user.firsrName);
// let obj = {a:1,b:2,c:3};
// const key = 'c';
// console.log(obj[key])
// var cars = {
//     honda: { civic: 2020
// },
//     suzuki: {
//         swift: 2015
//     }
// }
// for( var key in cars){
//     console.log(cars[key])
// }

// var person = {
//     firstName: 'Alice',
//     lastName: 'Johnson',
//     sayHello(){
//         console.log(`Hello, I 'm ${this.firstName} ${this.lastName}`);
//     },
//     }

// var obj = {
//     name: 'Javascript',
//     getName: function(){console.log(this.name)}
// }
// obj.getName.call({name:'React js'});
// var person = {
//     name: 'john',
//     age: '38',
//     greet: function(){
//         console.log('Hello, ' + this.name)
//     }
// };
// person.greet();

// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 50,
//     eyeColor: 'blue'
// }
// console.log(`${person.firstName} ${person.age}  year old.`)
// var user1 = {
//     firstName: 'Hello',
//     lastName: 'world',
// }
// var user2 = user1;
// console.log(user2);
// const object1 = {key: 'value'};
// const object2 = {key: 'value'};
// console.log(object1 == object2);
// console.log(object1 === object2);
// const obj = {
//     name: 'Js'
// }
// setTimeout(()=> {
//     doSomething(obj)
// })
// function doSomething(course){
//     course.name = 'React';
//     course.name = '5';
//     console.log(course == obj);
// }
// let obj = {};
// obj.length = 8;
// console.log(obj.length);
//================= End ==============//

// var a;
// console.log(a + 2);

// let a;
// console.log(a + 2);
// var a = 5;
// function foo(){
//     console.log(a);
//     var a = 10;
// }
// foo();
// const x = Symbol();
// const y = Symbol();
// console.log(x == y);
// const x = 0;
// console.log(null == x);
// let num = 8;
// let res = 4 + num++;
// console.log(res);
// console.log(res);
// let a = 3;
// function foo(){
//     let a = 10;
//     console.log(a);
// }
// console.log(a);
// foo();
// var a = 0;
// function foo(a) {
//     console.log(a);
//     var a = 5;
// }
// foo(10);
// const numbers = [33,2,8];
// numbers.sort();
// console.log(numbers[1])
// var arr1 = [];
// var arr2 = [0];
// console.log( arr1.length,arr2.length);
// var studentName = [['Ali',12,true],['Ahmed',10]];
// console.log(studentName[0][1]);
// var a = '20';
// var b = a = 30;
// console.log(a+b);
// console.log(typeof []);
// console.log(typeof {});
// console.log(Array.isArray([]));
// function last(arr){
//     return arr[arr.length - 1];
// }
// const items = ['a','b','c'];
// console.log(last(items));
// console.log("true" == true);
// let x = 10;
// let output = typeof(x + '5');
// console.log(output); // string
// var a = [1,2,3];
// var b = [4,5,6];
// var result = a.concat(b)
// console.log(result.length);
// function checkEqual(a,b){
//     if(a===b){
//         console.log('Equal')
//     }
//     else{console.log('Not equal')}
// }
// checkEqual(0,'0');
// var x = (10 + 20) * 5;
// console.log(x);
// const z = [1,2,3,4,5];
// const [a,b] = z;
// console.log(a,b);
// let a = [1,2,3];
// let b = [...a];
// b.push(4);
// console.log(b);
// function reverseString(str){
//     let newString = "";
//     for( let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// const string = prompt('Enter a string: ');
// const result = reverseString(string);
// console.log(result);
// function capitalizeFirstLetter(str){
//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    
//     return capitalized;
// }
// const string = prompt('Enter a string: ');
// const res = capitalizeFirstLetter(string);
// console.log(res);

// Remove Duplicate From Array //

// function getUnique(arr){
//     let uniqueArr = [];
//     for(let i of arr) {
//         if(uniqueArr.indexOf(i) === - 1){
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }
// const array = [1,2,3,2,3];
// getUnique(array);
// let name1 = ["baby"];
// let name2 = "baby";
// console.log(name1 == name2); 
// let num = [0,1,2,3,4,5];
// console.log(num.length -1);
// let x = 4;
// console.log(x++ + ++x);
// console.log(null == 0);
// console.log(null > 0);
// console.log(null >= 0);
// let f = '8';
// let a = 1;
// console.log((+f)+a+1);
// const arr = [1,2,3];
// arr.push(4);
// arr.pop();
// arr.push(5);
// console.log(arr);
// let a = 5;
// let b = a++;
// let c = a + b;
// console.log(c);
// const a = {x: 1};
// const b = {x: 1};
// console.log(a === b);
// console.log(a.x === b.x)
// const user = [
//     {
//     brand: 'samsung',
//     model:'galaxy m33'
//     }
// ]
// console.table(user);
// const arr = [1,2,3,4];
// const arr2 = arr;
// arr2.push(6);
// console.log(arr);
// console.log(arr2);
// let x = 0;
// console.log(x++);
// console.log(++x);   
// let x = 2;
// function foo(){
//     console.log(x);
//     let x = 8;
// }
// foo();
// const numbers = [1,2,3,4];
// const [x,y] = numbers;
// console.log(x,y)
// var scope = 'js scope';
// function checkscope(){
//     var scope = 'javascript scope';
//      function f() {
//         return scope;
//      }     
//      return f;                                             
// }
// console.log(checkscope()());
// const length = 4;
// const numbers = [];
// for ( var i = 0; i < length; i++) {
//     numbers.push(i + 1);
// }
// console.log(numbers);
// let arr = [1,2,3,4];
// arr.splice(2,1,'a','b');
// console.log(arr);
// const { length: len} = 'hello';
// console.log(len)
// let arr = [1,2,3];
// arr[5] = 5;
// console.log(arr.length);
// let a = '2';
// let b = '2';
// console.log(a-b);
// console.log("2" > 1);   
// let a = 1;
// a = a  ( a += 2);
// console.log(a);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.includes('mango');
// console.log(fruits)
// var arr = [1,2,3];
// arr[3] = 4;
// console.log(arr)
// function abc(){
//     var arr = ['Hello world']
//     for( var i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
//     return arr[i]
// }
// abc();
// let str = 'Hello, World!';
// console.log(str.slice(7,-1));
// const arr = [1,2,444,3,7,9,59];
// let largest = arr[0];
// if(arr.length === 1) {
//     console.log('largest',arr[0]); 
// } else {
//     for(var i = 0; i < arr.length; i++){
//         if(largest < arr[i]){
//             largest = arr[i];
//         }
//     }
//     console.log('largest',largest);
// }
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1,2,3,4));
// const animals = [ 'dog','cat','cow','horse','mouse'];
// let i = 0
// while(i < animals.length){
//     console.log(animals[i].toUpperCase());
//     i++;
// }
// let num = 5;
// console.log(num++);
// console.log(num);
// let str = "Hello Baby";
// let index = str.indexOf('Baby')
// console.log(index)
// function foo(){
//     let x = 1;
//     if(true) {
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// foo();
// let x = 2;
// let y = 3;
// [x,y] = [y,x];
// console.log(x,y);
// console.log(2 < 1 == 0);
// var array1 = ['a','b','c'];
// var array2 = array1;
// array2.length = 0;
// console.log(array1,array2);
// let a = 3;
// let b = new Number(3);
// console.log(a == b);
// console.log(a === b);
// let greeting = 'Hello';
// greeting += ' World';
// console.log(greeting);
// let isRaining = false;
// if(isRaining) {
//     console.log('Take an umbrella');
// }
// else {
//     console.log('No need to take an umbrella');
// }
// let a = 5;
// let b = a;
// b = 10;
// console.log(a);
// console.log(b);
// let a = 1;
// let b = 2;
// {
//     let a = 3;
//     let b = 4;
//     console.log(a,b);
// }
// console.log(a,b);
// let arr =[1,2,3,];
// arr[10] = 99;
// console.log(arr.length);
// let x = !!"false";
// let y = !!"";
// console.log(x,y);
// var str = "Find longest word from a sentence";
// var words = str.split(" ");
// var longest = "";
// for(var i = 0; i < words.length; i++) {
//     if (words[i].length > longest.length) {
//         longest = words[i];
//     }
// }
// console.log(longest);
// let x = 5;
// let y = x++;
// console.log(x,y);
// var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, nobis! Perferendis impedit autem pariatur optio rem vero id. Corporis, blanditiis quis ratione optio obcaecati dolore unde itaque consequuntur quos cumque.";
// var words = str.split(" ");
// var longest = "";
// for(var i = 0; i < words.length; i++) {
//     if(words[i].length > longest.length) {
//         longest = words[i];
//     }
// }
// console.log(longest);
// var x = 10;
// if(true){
//     var x = 20;
// }
// console.log(x);
// var num = 10;
// function addFive(x){
//     return x + 5;
// }
// console.log(addFive(num));
// let y = 5;
// y += 3;
// console.log(y);
// let a = 10;
// (function (){
//     console.log(a);
//     a = 20;
//     console.log(a);
// })()
// var num = 5;
// num += num++;
// console.log(num)
// let x = 1;
// x = x + ( x += 1);
// console.log(x);
// let a = 5;
// let b = a++;
// let c = a + 1;
// console.log(a,b,c);
// let x = 0;
// for( let i = 0; i <= 6; i += 2){
//     if( i === 4) {
//         continue
//     }
//     x += i;
// }
// console.log(x);
// let x = 5;
// let result = typeof (x + '10');
// console.log(result);
// function foo(){
//     let a = b = 0
//     a++
//     return a
// }
// foo()
// console.log(typeof a)
// console.log(typeof b)
// let x = 5;
// let y = (x = 10) + 3;
// console.log(x,y);
// let b = 3;
// let c = b++ + ++b;
// console.log(c);
// function foo() {
//     let a = 7;
//     if(a === '7'){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(foo());
// let arr = [1,2,3,4];
// arr.length = 4;
// console.log(arr);
// let str = 'racecar';
// let reversedStr = str.split('').reverse().join('');
// console.log(str === reversedStr);
// const age = 25;
// const hasDriverLicense = true;
// if(age >= 18 && hasDriverLicense) {
//     console.log('You are eligible to drive!')
// } else {
//     console.log('You are not eligible to drive.')
// }
// let m = 1;
// let n = ++m + m;
// console.log(n);
// const value = 0;
// if(value) {
//     console.log('Value is true');
// } else {
//     console.log('Value is false');
// }
// let arr = [10,20,30];
// let index = 0;
// console.log(arr[index++]);
// console.log(arr[++index]);
// const closureArray = [];
// for (let i = 0; i < 3; i++) {
//     closureArray.push(() => console.log(i))
// }
// closureArray[0]();
// closureArray[1]();
// closureArray[2]();
// var x = 3; 
// console.log(this.x);
// let x = "false";
// let y = !x;
// console.log(y);
// let x = [2];
// let y = 2;
// console.log(x == y);
// let a = 3;
// function foo() {
//     console.log(a);
//     let a = 8;
// }
// foo();
// let x = 5;
// console.log(++x, x++);
// console.log(x);
// function test() {
//     return "I am outer function";
// }
// function main() {
//     console.log(bar);
//     return test();
    
//     var bar = "I am a variable";

//     function test() {
//         return "I am inner function";
//     }
// }
// console.log(main());
// function test() {
//     return this;
// }
// console.log(typeof this);
// let x = "hello";
// let y = new String("hello");
// console.log(x == y);
// console.log( x === y);
// const person = {
//     name: "John Doe",
//     greet: function() {
//         console.log(this.name);
//         inerGreet: ()=> {
//             console.log(this.name);
//         }
//         inerGreet();
//     },
// };
// person.greet();
// let x = 10;
// let y = 20;
// console.log("total = " + x + y);
// let x = false;
// let y = "0";
// let z = 0;
// console.log(x == y);
// console.log(x == z);
// let x = 10.5;
// let y = parseInt(x);
// console.log(y);
// const num = 20;
// var fact = 1;
// for (let i = 0; i >= num; i++) {
//     fact = fact*i;
// }
// console.log(fact);
    // let arr1 = ["Hello world",true,null];
    // let arr2 = [10,20,30,40];
    // let arr3 = [...arr1,...arr2];
    // console.log(arr3);
    // function addToList(item, list) {
    //     return list.push(item);
    // }
    // const result = addToList('apple',['banana']);
    // console.log(result);
    // const course = {
    //     coursename: "Js in hindi",
    //     price: "999",
    //     courseInstructor: "Sir Ghous Ahmed"
    // }
    // const {courseInstructor} = course;
    // console.log(courseInstructor);
    //rest parameter;
    // function bikePrice(...num1){
    //     return num1
    // }
    // console.log(bikePrice(40000,50000,60000));
    // var a = 10;
    // function foo(){
    //     console.log(a);
    //     var a = 20;
    // }
    // foo();
    // const numbers = [1,2,3,4,5];
    // const [first,second,third] = numbers;
    // console.log(first);
    // let num = [1,2,3,4];
    // const [x] = num;
    // console.log(x);
    // var x = 5;
    // function changeX() {
    //     x = 10;
    // }
    // changeX();
    // console.log(x);

    // Arrow Funtion
    // const addTwo = (num1, num2) => {
    // return num1 + num2;
    // }
    // console.log(addTwo(10,20));
    // const addTwo = (num1, num2) => num1 + num2
    // console.log(addTwo(5,5));
    // const addTwo = (num1, num2) => (num1 + num2)
    // console.log(addTwo(2,2));
    // const arr1 = [1,2,3];
    // const arr2 = [...arr1, 4,5];
    // console.log(arr2);
    // const fruits = ['apple','banana','cherry'];
    // fruits.forEach((fruits,index, array) => {
    //     console.log(`Index: ${index},Fruits: ${fruits}`);
    //     console.log(array);
    // });
    //  function something(num) {
    //     for (let i = 0; i < num; i++) {
    //         if(num % i === 0) return false;
    //     }
    //     return num > 1;
    //  }
    //  console.log(something(10));
    // let str = 'hello';
    // str.length = 8;
    // console.log(str.length);
    // const data = [1,2,3,4,5];
    // data.forEach(n => {
    //     if(n % 2 === 0) 
    //         console.log(n); 
    // })
    // const numbers = [1,2,3,4,5];
    // const doubleNumbers = numbers.map(function(number){
    //     return number * 2;
    // });
    // console.log(doubleNumbers);
    // const myNums = [1,2,3,4,5,6,7,8,9,10];
    
    // const newNums = myNums.filter((num) => num > 5)
    // console.log(newNums);
    // const [a, ...b] = [1,2,3,4];
    // console.log(a);
    // var fullName = "John Doe";
    // function printName() {
    //     console.log(fullName);
    // }
    // printName();
    // const arr = [1,2,4,6,9];
    // arr.forEach((val, index) => {
    //     if(val === 5) {
    //             return index;
                
    //     }
    //     console.log(index);
    // })
    // let arr1 = [20,30,15,30,40,15];
    // let unique = [];
    // arr1.forEach((item, index, array) => {
    //     if(index === array.indexOf(item)) {
    //         unique.push(item);
    //     }
    // });
    // console.log(unique);
    // const arr = ['Ahmed','Ali','Khan'];
    // arr.forEach((item, index) => {
    //     console.log(item+' is at index '+index);
    // });
    // var a = 1;
    // function foo() {
    //     if(a) {
    //         var a = 10;
    //     }
    //     console.log(a);
    // }
    // foo();
    // let a = 3;
    // let b = a ** 2;
    // console.log(b);  
    // var a = 0;
    // function fun(a) {
    //     console.log(a);
    //     var a = 5;
    // }
    // fun(10);
// const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newNum = myNum.filter((num) => {
//    return num < 5;
// });
// console.log(newNum);
//  const myNum = [1,2,3,4,5,6,7,8,9,10];

//  const newNum = myNum.filter((num) => (num > 5));
//  console.log(newNum);
// const myNum = [1,2,3,4,5,6,7,8,9,10];
// const newNum = myNum.map( (num) => num + 2 );
// console.log(newNum);
// const myNums = [1,2,3];
// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval;
// }, 0)
// console.log(myTotal);
// let students = [1,2,3,4,5,6,7,8];
// let result = students.find((num) => {
//     return num > 6;
// })
// console.log(result);
//  let students = [1,2,3,4,5,6,7,8];
//  let result = students.some((num) => num >= 8);
//  console.log(result);
// const numbers = [1,2,3,4,5];
// const total = numbers.reduce((acc, num) => {
//     return acc + num
// },0)
// console.log(total);
// const myName = [1,2,3];
// const myTotal = myName.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} currval: ${currval}`);
//     return acc + currval
// },5)
// console.log(myTotal);
// const data = [[1,2,3],[4,5,6],[7,8,9]];
// const flatValues = data.reduce((total, value) => {
//     return total.concat(value);
// }, []);
// console.log(flatValues);
// const user = {
//     username: 'Ali',
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);
//     }
// }
// user.welcomeMessage();
// function one() {
//     let username = 'Ali';
//     console.log(this.username);
// }
// one();
// const {a, b = 2} = {a: 1};
// console.log(a, b);
// const myArray = [1,2,3,4];

// const myArrayTimesTwo = myArray.map((value, index, array) => {
//     return value * 2;
// } );
// console.log(myArrayTimesTwo);
// const numbers = [1,2,3,4,5];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);
// const arry = ['ali','ahmed',];
// const arry2 = arry.map((item) => item.charAt(0));
// console.log(arry2);
// let greeting = 'Hello';
// greeting += ' World';
// console.log(greeting);
// let arr1 = [1,2];
// let arr2 = [...arr1, 'Hello World'];
// console.log(arr2);
// const arr =[1,2,3,4,5];
// const result = arr.filter(x => x % 2 === 0);
// console.log(result);
// function foo(a, b) {
//     console.log(arguments);
// }
// foo('baby','baabs');
// let output = (function(x) {
//     delete x;
//     return x;
// })(3);
// console.log(output);

// const obj = {a: 1};
// Object.freeze(obj);
// obj.a = 2;
// console.log(obj.a);
// let array1 = ['a','b','c'];
// let array2 = array1;
// array2.length = 0;
// console.log(array1,array2);
// const person = {
//     firstName: 'Surbhi',
// };
// const {firstName = 'Henry'} = person;
// console.log(firstName);
    // const numbers = [1,2,3,4,5];
    // const [first, ,third, ...rest] = numbers;
    // console.log(first, third, rest);
    // console.log(Boolean('0'));
    // let a = [1,2,3,];
    // let b = a;
    // a = [4,5,6];
    // console.log(b);
    // const fruits = ['apple','banana','cherry'];

    // fruits.forEach(fruit => console.log(fruits));
    // const array = ['a','b','c','d','e'];
    // const hasLetterA = array.some(char => char === 'b');
    // console.log(hasLetterA);
    // const arr = [1,2,3,4,5,6];
    // const mapped = arr.map(element => element + 10);
    // console.log(mapped);
    // const arr =[1,2,3,4,5,6];
    // const filtered = arr.filter(element => element === 2 || element === 4);
    // console.log(filtered);
    // const arr = [1,2,3,4,5,6];
    // console.log(arr.includes(2));
    // console.log(arr.includes(7));
//      const myName = [1,2,3,4,5,6];
// const myTotal = myName.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} currval: ${currval}`);
//     return acc + currval
// });
// console.log(myTotal);
// const  age = 18;
// const message = age >= 18 ? "You are an adult" : "You are not an adult";
// console.log(message);
// const isEven = (num) => num % 2 === 0;
// const result = (isEven (4) ? "even" : "odd") + " number";
// console.log(result);
// let x = 15;
// let z;
// (x > 10) ? z = 'True' : z = 'False';
// console.log(z);
// let checkTrue = 10 > 2 ? 'True' : 'False';
// console.log(checkTrue);
// function sayHello () {
//     return 'Hello'
// }
// function callArgument (func) {
//     return func();
// }
// console.log(callArgument(sayHello));
// console.log([...[...'...']].length);
// const obj = {foo: 1};
// obj.bar = 2;
// console.log(obj);
// let greeting;
// greeting = {};
// console.log(greeting);
// const numbers = [1,2,3];
// numbers.forEach(function(num) {
//     setTimeout(function()  {
//         console.log(num);
//     }, 1000);
// });
// const fruits = ['Banana','Orange','Apple','Mango'];
// let fruit = fruits.at(1);
// console.log(fruit);
// let value = 10;
// function modifyValue(val) {
//     val = 20;
// }
// modifyValue(value);
//  console.log(value);
// function findMax(arr) {
//     return Math.max(...arr);
// }
// let numbers = [1,3,7,2,5];
// console.log(findMax(numbers));
// let fruits = ['apple','banana','cherry','date'];
// fruits.forEach(function(fruit, index) {
//     console.log(index, fruit);
// });
// function mystery(x) {
//     return function(y) {
//         return x + y;
//     };
// }
// const addFive = mystery(5);
// const result = addFive(10);
// console.log(result);
// const x = undefined;
// console.log(null == x);
// function checkAge(age) {
//     return age > 18 ? true : false;
// }
// console.log(checkAge(18));
// const foo = (x) => {
//     return x * x;
// };
// const bar = (x) => {
//     return foo(x + 0);
// };
// console.log(foo(2),bar(1));

// const value = 10;
// const add = () => {
//     return {
//         value: 20,
//         getValue: function () {
//             return this.value;
//         }
//     };
// };
// const result = add().getValue();
// console.log(result);
// const numbers = [1,2,3,4,5];
// const result = numbers
// .map(num => num * 2)
// .filter(num => num % 2 === 0)
// .reduce((acc, num) => acc + num, 0);

// console.log(result);
// console.log(numbers);
// let count = 0;
// const increment = () => count++;
// console.log(increment() == 0);
// let score = 100;
// const increment = () => score++;
// console.log(increment() === score);
// let numbers = [1,2,3];
// const result = numbers.reduce((acc,num) => acc + num, 1);
// console.log(result);
// const arr = [1,2,3,4];
// arr.length = 3;
// console.log(arr);
// const numbers = [1,2,3,4,5];
// const [first,second,third] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);

// const numbers = [1,2,3,4,5];
// const [first, ...rest] = numbers;
// console.log(first);
// console.log(rest);
// let x = 10;
// const updateX = (val) => {
//     x = val;
// }
// updateX(20);
// console.log(x);
// function test() {
//     return "I am outer function";
// }
// function main() {
//     console.log(bar);
//     return test();
//     var bar = 'I am avaribale';
//     function test(){
//         return "I am inner function";
//     }
// }
// console.log(main());
// setTimeout(() => console.log(1),0);
// console.log(2);
// new Promise( res => {
//     console.log(3);
//     res();
// }).then(() => console.log(4));
// console.log(5);
// let array = [1,2,3,4,5];
// array.forEach(function(element) {
//     console.log(element);
// });
// let x = false;
// let y =  '0';
// let z = 0;
// console.log(x == y);
// console.log(x == z);
// const arr = [1,2,3];
// arr[5] = 10;
// console.log(arr.length);
// console.log(arr[4]);
// let x = '1';
// let y = x++ + ++x;
// console.log(x,y);
// function getCar(message) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(`Finally purchased the car ${message}`);
//         }, 1000);
//     });
// }
// function worldTour(message) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`World Tour ${message}`);
//         },100)
//     });
// }
//  console.log(getCar('for my family'))
// const fetchData = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         const data = {name: 'David', age: '26'};
//         reslove(data);
//     }, 2000);
// });
// fetchData.then(data => {
//     console.log('Data received:',data);
// }).catch(error =>{
//     console.log('Error:', error);
// });
// let a = NaN;
// let  b = NaN;
// console.log(a == b);
// console.log(a === b);
// async function fn1(){
//     for(var i = 0; i < 4; i++) {
//         Promise.resolve(true)
//         .then((res) => console.log(i))
//     }
// }
// fn1();
// async function doSomething() {
//     console.log('1');
// }
// doSomething();
// console.log('2');
// let f = '8';
// let a = 1;
// console.log((+f)+a+1);
// const x = 3;
// const test = (x = 20) => {
//     console.log(x);
// }
// test();
// test(10);
// let arr = [1,2,3,5,6,4];
// let result = arr[arr.length-1];
// console.log(result);
// let arr = [1,2,3];
// let result = arr.map((ele) => ele * 2);
// console.log(result);
// async function foo() {
//     try {
//         let users = await getUsers();
//         console.log(users);
//     } catch(error) {
//         console.log(error)
//     }
// }
// foo();
// const arr1 = [1,2,3];
// const arr2 = [4,5];
// const arr3 = [...arr1, ...arr2, 6];

// arr3.push(7);
// arr3.pop();
// arr3.pop();
// console.log(arr3.length);
// let x = 0.1 + 0.2 === 0.3;
// console.log(x);
// let a = ['eat','sleep'];
// let b = a;
// b.push('drink');
// console.log(a);
// let x = [1,2,3];
// let y = x.map((x, i) => x + i);
// console.log(y);
// let demoFuntion;
// let a = 9;
// function init() {
//     let a = 5;
//     demoFuntion = function () {
//         console.log(a);
//     };
// }
// init();
// demoFuntion();
// let y = 'Hello';
// let z = y;
// y = 'World';
// console.log(z);
// const clothes = ['shirt','socks','jacket','pants','hat'];
// clothes.length = 0;
// console.log(clothes[3]);
// let arr = [4,2,3];
// arr.length = 0;
// console.log(arr[0]);
// const value = 0.3 + 0.4;
// console.log(value == 0.7);
// let num = 8;
// let result = num > 5 ? 'yes' : 'No';
// console.log(result);
// for(let i = 1; i < 2; i++) {
//     console.log(`baby ${i}`);
// } 
// let m = 4;
// let n = ++m + 2;
// console.log(m, n);
// let a = typeof 1;
// let b = typeof a;
// console.log(b);
// console.log([10] == 10);
// console.log([1,2,3] == '1,2,3');
// console.log('' + 1 + 2);
// console.log([] == 0);
// console.log({} == 0);
// let x = ['a','b','c'];
// x.length = 0;
// console.log(x.length);
// let c = { greeting: 'Hey!'};
// let d;
// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);
// const x = undefined;
// console.log(null == x);
// const arr = [1,2,3,4,5,6];
// const doubled = arr.map( num => num * 2);
// console.log(doubled.indexOf(6));
// function foo1(){
//     return {
//         bar: 'Hello'
//     };
// }
// function foo2() {
//     return {
//         bar: 'Hello'
//     };
// }
// console.log(foo1(),foo2());
// var variable = 10;
// (()=>{
//     console.log(variable);
//     let variable =20;
//     console.log(variable);
// })();
// var x = 1;
// function foo(x) {
//     x = x + x;
// }
// foo(x);
// console.log(x);
// let printAllNumbers = () => {
//     console.log(arguments);
// };
// function printAllNumbersNew () {
//     console.log(arguments);
// };
// printAllNumbers(1,2,3);
// printAllNumbersNew(1,2,3);
// const clothes = ['jacket','t-shirt'];
// clothes.length = 0;
// console.log(clothes[0]);
// let count = 0;
// const increment = () => ++count;
// console.log(typeof increment);
// let person = {
//     name: 'Leonardo'
// };
// Object.freeze(person);
// person.name = 'Lima';
// console.log(person.name);
// console.log({} == []);
// console.log(2 < 1 == 0);
// console.log(false == 0);
// function createCounter() {
//     let count = 0;
//     return function () {
//         count += 1;
//         return count;
//     };
// }
// const counter = createCounter();
// console.log(counter());
// let arr = [1,"",null,10,true,false];

// let result = arr.filter(Boolean);
// console.log(result);
// function sayHi() {
//     return (() => 0)();
// }
// console.log(typeof sayHi());
// const arr = [1,2,3,4];

// let pop = arr.pop();
// let shift = arr.shift();

// console.log(pop);
// console.log(shift);
// console.log(arr);
// let array = [1,2,3,4,5];
// const newArrayForEach = array.forEach((ele) => ele * 2);

// const newArrayMap = array.map((ele) => ele * 2);

// console.log(newArrayForEach, "for each");
// console.log(newArrayMap, "map");
// const x = undefined;
// const y = (null == x);
// console.log(typeof(y));
// let arr = ['you','are','baby'];
// let she = arr[2];
// console.log(she.length)

// function multiplyByTwo(num) {
//     return num * 2;
// }
// function applyOperation(num, operation) {
//     return operation(num);
// }
// const result = applyOperation(5, multiplyByTwo);
// console.log(result);
// let greeting = 'Hello';
// greeting += ' World';
// console.log(greeting);
// console.log(018 - 015);
// console.log('018' - '015');
// let str = 'Hello Baby';
// let x = str.indexOf('Baby');
// console.log(x);
// console.log(+true);
// console.log(+false);
// function fun() {
//     let num = 5;
//     if(num ==='5')
//         return true;
//     else 
//     return false;
// }
// console.log(fun());
// let num = 10;
// num--;
// console.log(num);
// console.log('10' > 9);
// var x = 10;
// if(x > 5) {
//     let x = 20;
//     console.log(x)
// }
// console.log(x);
// let x = 7;
// let y = x--;
// console.log(x, y)
// let arr = [1,2,3,4,5];

// let arr2 = arr.map((num) =>  {
//     return num * 2;
// });
// console.log(arr2);
// let arr = [1,2,3,4,5];
// let arr2 = [];

// for(let i = 0; i < arr.length; i++) {
//    arr2.push(arr[i] * 2);
// }
// console.log(arr2);
// let arr = ['a','b','c'];
// arr.push(... 'de');
// console.log(arr);
// let arr = [1,2,3,4];
// arr.length = 2;
// console.log(arr);
// {
//     var x = 2;
//     var y = '2';
//     console.log(x == y);
// }
// {
//     var obj = {name: 'Akansha', surname: 'Choudhary'

//     };
//     var obj = {name: 'Tanvi', surname: 'Priya'};
//     console.log(obj);
// }
// const cycleDetails = {
//     wheels: 2,
//     seat: 1,
//     carrier: 2
// };
// const { wheels: cycleWheels, seat: cycleSeat} = cycleDetails;
// console.log(cycleWheels);
// console.log(cycleSeat);
// console.log([...[...'...']].length);
// let point = [1,3],segment = [point,[5,5]], triangle = [...segment,[1,8]];
// console.log(triangle);
// function show(...args) {
//     let sum = 0;
//     for(let i of args) {
//         sum += i;
//     }
//     console.log('Sum ='+sum);
// }
// show(10,20,30);
// const obj1 ={first: 20, second: 30, first: 50};
// console.log(obj1);
// const example = ({a,b,c}) => {
//     console.log(a,b,c);
// };
// example(0,1,2);
// const fruits = ['apple','banana','cherry'];
// fruits.forEach((fruit, index, array) => {
//     console.log(`Index: ${index}, Fruit: ${fruit}`);
//     console.log(array);
// });
// const myString = 'Hello, World!';
// const searchString = 'World';

// if(myString.includes(searchString)) {
//     console.log('String contains the search term');
// } else {
//     console.log('String does not contain the search term');
// }
// function sum(a, b) {
//     return a + b;
// };
// console.log(sum(2,2,3,4));
// let x = 1;
// let y = 2;
// let result = x++ + ++y;
// console.log(result);
// console.log((typeof (new (class { class () {} }))));
// console.log(typeof `${{Object}}`.prototype);

// const numbers = [1,2,3,4,5];
// const doubleNumbers = numbers.map(num => num * 2);
// console.log(doubleNumbers);
// const person = { name: 'John', age: 25};
// const { name, age } = person;
// console.log(name);
// console.log(age);

// const add = (a, b) => a + b;
// console.log(add(2, 3));
// const orignal = [1,2,3];
// const clone = [...orignal];
// clone.push(true);
// console.log(clone);
// console.log(5 > '15'  < 5);
// console.log(7 < '15' < 7);
// console.log(7 < '85' > 5);
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 2000);
// setTimeout(() => {
//     console.log(3);
// }, 1000);
// console.log(4);
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 1000);

// setTimeout(() => {
//     console.log(3);
// }, 0);

// Promise.resolve(1).then(function reslove() {
//     setTimeout(() => {
//         console.log(4);
//     }, 0);
// });
// console.log(5);
// console.log(['a'] + ['b']);
// console.log([] + []);
// console.log(![]);
// console.log(![] + []);
// console.log(3 < 4 < 5);
// console.log(3 > 4 > 5);
// console.log(3 > 4 > -1);
// console.log('9' > '11');
// console.log('9' > 11);
// console.log('' > -1);
// var array = [1,2,3,4,5];
// console.log(array.length);
// array.length = 3;
// console.log(array.length);
// console.log(array);
// delete array[0];
// console.log(array);
// console.log(array[0]);
// console.log(array.length);
// abc();
// function abc() {
//     console.log('1');
// }
// function abc() {
//     console.log('2');
// }
// function abc() {
//     console.log('3');
// }
// const person = {
//     name: 'Ahmed',
//     age: 20,
//     name: 'Ali',
//     name: 'MR Ahmed'
// }   
// console.log(person);
// let arr = [0,1,2,3,4];
// console.log(arr.length-3);
// let deposits = [5,3,9,2];

// let total = deposits.reduce((acc,dep) => {
//     if(acc < 20) {
        
//         return acc + dep;
//     }else {
//         return 0;
//     }
// }, 3);
// console.log(total);
// const closureArray = [];
// for (let i = 0; i < 3; i++) {
//     closureArray.push(() => console.log(i));
// }
// closureArray[0]();
// closureArray[1]();
// closureArray[2]();
// let x = 50;
// if(x === 50){
//     let y = 100;
//     console.log(y);
// }
// const arr = ['Anas Dev','Eshaal Dev','Jul','Coding Ease','xdCoder'];

// const myArr = arr.map((e) => {
//     let result = e.toUpperCase();
//     console.log(result);
//     return result;
// }); 
// const arr = ['Anas Dev','Eshaal Dev','Jul','Coding Ease','xdCoder'];
// arr.forEach((e) => {
//     console.log(e.toUpperCase());
// });
// const arr = ['Anas Dev','Eshaal Dev','Jul','Coding Ease','xdCoder'];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i].toUpperCase());
// };
// function foo() {
//     let a =7;
//     if(a === '7'){
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(foo());
// function sum(a=5, b=7) {
//     return a+b;
// }
// console.log(sum(undefined, 20));
// let x = 0;
// let y = 0;
// console.log(++x === y++);
// let str1 = new String("IncludeHelp!");
// console.log(typeof str1);
// function greet(name = 'Guest') {
//     console.log(`Hello, ${name}!`);
// }
// greet('Alice')
// let val = [10] == [10] ? 'true' : 'false';
// console.log(val);
// var x = 5;
// (function () {
//     console.log(x);
//     var x = 10;
// })();
// var x = 10;
// function testNum() {
//     console.log(x);
//     if(true) {
//         var x = 20;
//     }
//     console.log(x);
// }
// testNum();
// var x = 5;
// function outer() {
//     var x = 10;
//     function inner() {
//         console.log(x);
//     }
//     return inner();
// }
// var finalResult = outer();
// finalResult();
// var x = 10;
// function testValue() {
//     console.log(x);
//     var x = 20;
// }
// testValue();
// let arr = [1,2,3,4];
// arr.splice(0,1  );
// console.log(arr);
// const colors = ['red','green','yellow','pink','black'];

// const [color1,color2,color3,color4] = colors;
// console.log(color1,color2,color3,color4);
// const colors = ['red','green','yellow','pink','black'];
// const [,,,color4] = colors;
// console.log(color4);

// ---------- Anagrams task -------------- //
// function anagrams(words) {
//     function sortString(str) {
//         return str.split('').sort().join('');
//     }
//     const addWords = {};

//     for(const word of words) {
//         const sorteWord = sortString(word);
//         if(!addWords[sorteWord]) {
//             addWords[sorteWord] = [];
//         }
//         addWords[sorteWord].push(word);
//     }
//     return Object.values(addWords)
// }
//  const input = ['bat','tap','cat','tab','pat'];
//  const output = anagrams(input);
//  console.log(output);
// ---------- Anagrams Task -----------//
//  function wordsAnagram(words) {
//     let arr = {};
    
//     words.forEach(word => {
//         let sorted = word.split('').sort().join('');

//         if(arr[sorted]) {
//             arr[sorted].push(word);
//         }else {

//             arr[sorted] = [word];        
//         }
//     });
//     return Object.values(arr)
//  }
 
//  const input = ['bat','tap','cat','tab','pat'];
//  const output = wordsAnagram(input);
//  console.log(output); 

// ----------Transpose Matrix Task --------//

// function transposeMatrix(inputArray) {


// const rows = inputArray.length;
// const cols = inputArray[0].length;

// const result = [];

// for(let i = 0; i < rows; i++) {
//     for(let j = 0; j < cols; j++) {
//         if(!result[j]) {
//             result[j] = [];
//         }
//         result[j][i] = inputArray[i][j]
//     }
// }
// return result;
// }

// const inputMatrix = [ [3,4,8],
//                       [5,6,9] ]
                      
// console.log(transposeMatrix(inputMatrix));

// ---------- Perfect Number Checker -------//

// function isPerfectNumber(inputNumber) {
    
//     const properDivisor  = [];
//     for(let i = 1; i < inputNumber; i++) {
//         if(inputNumber % i === 0) {
//             properDivisor.push(i);
//         }
//     }
    
//     let sum = 0;
//     properDivisor.forEach(d => sum = sum + d);
    
//     return sum === inputNumber;
// };
// console.log("6 is ", isPerfectNumber(6));
// ----------- Strong Password Checker ---------//

// function isStrongPassword(passwordString) {
//     passwordString = passwordString.trim();
//     if(passwordString.length < 8) {
//         return false;
//     }

//     const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
//     const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const digitCharacters = "0123456789";
//     const specialCharacters = "!@#$%^&*()_+";

//     let lowerCaseCharacterExists = false;
//     let upperCaseCharacterExists = false;
//     let digitCharacterExists = false;
//     let specialCharacterExists = false;
//     for(let char of passwordString) {
//     if(lowerCaseCharacters.includes(char)) {
//         lowerCaseCharacterExists = true;
//     }
//     else if(upperCaseCharacters.includes(char)) {
//         upperCaseCharacterExists = true;
//     }
//     else if(digitCharacters.includes(char)) {
//         digitCharacterExists = true;
//     }
//     else if(specialCharacters.includes(char)) {
//         specialCharacterExists = true;
//     }

// }
// if(lowerCaseCharacterExists && upperCaseCharacterExists && digitCharacterExists && specialCharacterExists){
//     return true;
// }
// return false;
// }
// console.log(isStrongPassword("Smit!1e2"));

// var x = 10;
// function foo() {
//     console.log(x);
//     var x = 20;
// }
// foo();
// console.log(x);

// let output = (function (x) {
//     return x;
// })(2);
// console.log(output);
// let a = typeof 1;
// let b = typeof a;
// console.log(b);

// var a = true;
// var b = false;
// var c = null;
// var result = (c == null);
// console.log( x = result);
// console.log('' + 1 + 2);

// var firstName = 'Javascript';
// function printName() {
//     const firsrNam = 'HTML';
//     console.log(firsrNam);
// }
// console.log(firstName);
// printName();
// const arrNum = [1,2,3,4,5,8,9,10];
// const missArray = []
// const missingValue = (arr) => {
//     const minValue = Math.min(...arr)
//     const maxValue = Math.max(...arr)
//     for(let i = minValue; i < maxValue; i++) {
//         if(arr.indexOf(i) < 0) {
//             missArray.push(i)
//         }
//     }
//     return missArray;
// }
// console.log(missingValue(arrNum));

// const numbers = [1,2,3,4,6,8,9,11,12,13,14];
// const  even = numbers.filter((item) => {
//     return item % 2 === 0;
// });
// console.log('Even numbers', even);

// const numbers = [1,2,3,4,6,8,9,11,12,13,14];
// const  odd = numbers.filter((item) => {
//     return item % 2 == !0;
// });
// console.log('Odd numbers', odd);
// function checkEvenOrOdd(a) {
//     return a % 2 === 0 ? 'Even': 'Odd';
// }
// console.log(checkEvenOrOdd(4));
// function smallestOfThree(a,b,c) {
//     let smallestNum = a;
//     if(b < smallestNum) {
//         smallestNum = b;
//     }
//     if(c < smallestNum) {
//     smallestNum = c;
//     }
//     return smallestNum;
// };
// console.log(smallestOfThree(1,2,-4));
// let str = 'racecar';
// let revstr = str.split('').reverse().join('');
// console.log(revstr);
// const arr = ['a','b','c'];
// const result = arr.splice(2,2);
// console.log(result);
// let a = {name: 'John'};
// let b = a;
// a = null;
// console.log(b);
// function reverseAString(inputString) {
//     let result = "";
//     for(let i = inputString.length - 1; i >= 0; i--) {
//         result += inputString[i];
//     }
//     return result;
// };
// console.log(reverseAString("School"));
// function calFactorial(inputNumber) {
//     let result = 1; 
//     for(let i = 1; i<= inputNumber; i++) {
//         result *= i
//         console.log(result);
        
//         return result
        
//     }
// };
// console.log(calFactorial(3));
// function multiTable(tableOf, tableTill) {

//     for(let i = 1; i <= tableTill; i++) {
//         console.log(`${tableOf} * ${i} = ${i * tableOf}`);
        
//     }
// };
// console.log(multiTable(3, 10));
// console.log(2 < 1 == 0);
// let a = 5;
// let b = a;
// a = 10;
// console.log(b);
// let data = [1,2,3,4,5];
// let result = data.slice(0,3);
// console.log(result);
// function calculatePower(base, exponent) {
//     let result = 1;
//     for( let i = 1; i <= exponent; i++) {
//         result *= base;
//     }
//     console.log(result);
// };
// console.log(calculatePower(2, 3));
// function calVowelAndConsonants(inputString) {
//     inputString = inputString.toLowerCase();
//     inputString = inputString.replace(/ /g,'');
//     const vowels = 'aeiou';
//     const consonant = 'bcdfghjklmnpqrstvwxyz';
//     let vowelCount = 0;
//     let consonantCount = 0;
//     for(let i = 0; i < inputString.length; i++) {
//         if(vowels.includes(inputString[i])) {
//             vowelCount++;
//         }
//         else if(consonant.includes(inputString[i])) {
//             consonantCount++;
//         } else {
//             console.log(inputString[i], 'Is neither vowel nor consonant');
            
//         }
//     }
//     console.log(vowelCount, consonantCount);
    
// };
// console.log(calVowelAndConsonants('Hello world'));

// function calFactor(inputNumber) {
//     if(inputNumber < 1) {
//         throw new Error("inputNumber should be greater than zero")
//     }
//     for(let i = 1; i <= inputNumber; i++) {
//         if(inputNumber % i === 0) {
//             console.log(i, 'is a factor');
//         } else {
//             console.log(i,'is Not a factor');
//         }
//     }
// };
// console.log(calFactor(4));
// function calAverage(inputArray) {
//     let sumOfElement = 0;
//     for(let i = 0; i < inputArray.length; i++) {
//         sumOfElement += inputArray[i];
//     }
//     result = sumOfElement / inputArray.length
//     console.log(result);
    
// };
// console.log(calAverage([1,5,7,35]));
// const arr = ['a','b','c'];
// arr.length = 1;
// console.log(arr);
// let str = 'Hello baby';
// let index = str.indexOf('baby');
// console.log(index);
// let array1 = ['a','b','c',];
// let array2 = array1;
// array2.length = 0;
// console.log(array1, array2);
// let x = [1,2,3];
// let y = x;
// x = [];
// console.log(y);
// function countWords(sentence) {
//     let splitSenten = sentence.split(' ');
//     const nonEmptyElement = splitSenten.filter((element) => element != '' );
//     console.log(nonEmptyElement.length);
// };

// console.log(countWords('this is a dev'));
// function isArmstrong(inputNumber){
// let number = inputNumber;
// let lastDigit = number % 10;
// console.log(lastDigit);
// };
// console.log(isArmstrong(153));
// console.log([1,2,3] == '1,2,3');
// let x = 'true';
// let y = !x;
// console.log(y);
// let a = 3;
// let b = new Number(3);
// console.log(a == b);
// console.log(a === b);
// console.log(0.1 + 0.2 === 0.3);
// console.log(0.3 + 0.3 === 0.6);
// let a = {};
// let b = a;
// a.name = 'Baby';
// console.log(b.name);
// let x = 1 + 2 + '3' - 1;
// console.log(x);
// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);
// let arr1 = [1,2,6,8,17];
// let arr2 = [4,8,6,19,12,17];
// let unionArr = [...arr1, ...arr2];
// console.log(unionArr);
// console.log(... new Set(unionArr));
// for(let i = 1; i <= 6; i++) {
//     for(let j = 1; j <= i; j++) {
//         document.write("*" + " ")
//     }
//     document.write('<br>')
// }
// function reverseString(input) {
//     let reversed = "";
//     for(let i = input.length-1; i >= 0; i--) {
//         reversed += input[i];
//     }
//     console.log(reversed);
// };
// console.log(reverseString("smit"));
// let a = 5;
// console.log(a++ + ++a);
// console.log(a);
// console.log(true + false);
// console.log(true - false);
// console.log(true * false);
// console.log(true / false);
// let x = { a: 1};
// let y = { ...x};
// y.a = 2;
// console.log(x.a);
// const obj = {
//     value: 42,
//     getValue: function() {
//         const inner = () => this.value;
//         return inner();
//     }
// };
// console.log(obj.getValue());
// let a = 0;
// let b = 5;
// console.log(a ?? b);
// let arr = [1,2,3];
// arr[10] = 5;
// console.log(arr.length);
// let a = 2;
// let b = a;
// let c = ( a + b) / 2;
// console.log((a + b + c) / 2);
// function data(){
//     return {
//         name: "Baby",
//         gender: "Girl"
//     };
// };
// console.log(data().name, data().gender);
// console.log( '' || 'world');
// // Q. to move all the nonzero value to the left side and the zeros value to the 
// right side of the array 

// var arr = [2,5,6,0,0,2,5];
// var result = [];
// for(var i = 0; i < arr.length; i++){
//     var num = arr[i]
//     if(num !== 0){
//         result.unshift(num)
//     }
//     else{
//         result.push(num)
//     }
        
// }
// console.log(result)

// duplicate numbers 
// const arrNumber = [1,2,8,2,9,8,9];
// const duplicates = arrNumber.filter((ele,index,arr)=> arr.indexOf(ele)!==index)
// console.log(duplicates);

// max/min 

// const arrNum = [1,9,87,65,65,99];
// const maxFunction = (arr)=>{
//     return arr.reduce(function(acc, cur){
//         return acc > cur ? acc:cur
//     })
// }
// console.log(maxFunction(arrNum));