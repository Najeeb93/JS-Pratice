
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

var fullName = "najeeb ahmed";


var 