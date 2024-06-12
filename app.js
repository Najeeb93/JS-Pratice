
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

// let obj = {a:1,b:2,c:3};
// const key = 'c';
// console.log(obj[key])
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
// var student = {
//     firstName: 'Najeeb',
//     lastName: 'Ahmed',
// }
// console.log(student.firstName);
// console.log(student['lastName']);
// let x = 2;
// function fun(){
//     let x = 10;
//     console.log(x);
// }
// fun();
let arrA = [0,1,2,3,4,5];
let arrB = arrA;
arrB[0] = 42;
console.log(arrA)
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