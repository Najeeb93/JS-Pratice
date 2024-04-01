
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

var date = new Date()

document.write(date)