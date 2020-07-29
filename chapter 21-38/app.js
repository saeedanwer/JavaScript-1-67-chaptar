//           (21-25)

//              (1)

// var first_Name = prompt("Enter Your First Name: ");
// var last_Name = prompt("Enter Your Second Name: ");
// var full_Name = first_Name+" "+last_Name;
// alert("Welcome "+full_Name+" to our website");



//                (2)

// var  Mobile = prompt("Enter Your Favorite Mobile Name: ")
// document.write(
//     "<strong> My favourite phone is : "+Mobile+
//     "<br/> length of string "+Mobile.length+"</br> <strong>"
// );

//                 (3)

// var country = "Pakistani";
// document.write(
//     "string: " +country+
//     "</br> index of 'n' is :"+
//     country.indexOf("n")+"<br/>"
// )

//                    (4)

// var find = "Hello World";
// document.write(
//     "string: " +find+
//     "<br/> last index of  'l' is "+
//     find.lastIndexOf('l')+"<br/>"
// )

//                      (5)


// var country = "pakistani";
// document.write(
//     "string: "+country+
//     "<br/> character at index 3: "+
//     country.charAt(3)+"<br/>"
// )


//                      (6)


// var first_Name = prompt("Enter Your First Name");
// var last_Name = prompt("Enter Your Second Name");
// var full_Name = first_Name.concat(" ", last_Name);
// alert("Welcome "+full_Name+" to our website");


//                      (7)

// var city = "Hyderabad";
// var replace = city.replace("Hyder","Islam")
// document.write("city name: "+city+"<br/> after replacement: "+replace+"<br/>");

//                      (8)



// var about = "Ali and Sami are best friends. They play cricket and football together";
// var replace = message.replace(/and/g,"&");
// document.write(
//     about+"<br/>"+replace+"<br/>"
// );
 
//                      (9)

// var str_value = "472";
// var num = Number(str_value);
// document.write("value: "+str_value+"<br/>type: "+typeof(str_value)+"<br/> value: "+num+"<br/>type: "+typeof(num)+"<br/>");


//                      (10)

// var lower_Case = "peanuts";
// document.write(
//     "user input: " + lowerCase+
//     "<br/> upper case: "+
//     lower_Case.toUpperCase()+"<br/>"

// );

//                      (11)

// var user_Input = "javacript";
// var titleCase = user_Input.charAt(0).toUpperCase() + user_Input.slice(1);
// document.write("user input: "+
// user_Input+"<br/> title case: "+
// titleCase +"<br/>"
// );

//                      (12)

// var number = 35.56;
// var str = number.toString();
// var result;
// for(var i = 0; i<number.toString().length; i++){
//     if(number.toString().slice(i,i+1) === "."){
//         result = number.toString().slice(0,i)+number.toString().slice(i+1);
//     }else{
//         console.log(" not found")
//     }
// }
// document.write("number: "+number+"<br/> result: "+result) +"<br/>";



//                      (13)

// var flag = true
// while (flag) {
//     var userName = prompt("Enter User Name : ")
//     var count = 0;
//     for (var i = 0; i < userName.length; i++) {
//         if (userName.slice(i, i + 1) === "@" | userName.slice(i, i + 1) === "," | userName.slice(i, i + 1) === "." | userName.slice(i, i + 1) === "!") {
//             count = count - 1
//         } else {
//             count = count + 1
//         }
//     }
//     var total = userName.length;
//     if (total === count) {
//         flag = false
//     }
//     else {
//         alert("Enter a valid User Name")
//     }
// }
// alert(userName)


//                          (14)

// var A = ["cake","apple pie", "cookie","chips","patties"]
// var user_Input =prompt("welcome  to ABC bakery, what do you want to order sir/ma'am")
// var lowerCase = user_Input.toLowerCase();
// var b = A.indexOf(lowerCase)
// if(b<0){
//     alert("we are sorry"+lowerCase+"is not available in our bakery")
// }
// else{
//     alert(lowerCase+"is available at index "+b+"in our bakery ") +"<br/>"

// }



//                          (15)


// var password = prompt("Enter a valid password \n" +
//     "a. It should contain alphabets and numbers\n " +
//     "b.  It should not start with a number\n" +
//     "c.  It must at least 6 characters long");
// if (password.length >= 6){
//     if(password.slice(0,1) <= String.fromCharCode(65)){
//         alert("Password  can not begin with number ")

//     }
//     else {
//         alert("Entered password 123cmd")
//     }
// }
// else{
//     alert("Please enter a valid password")+"<br/>"
// }



//                         (16)

// var university = "University Of Karachi";
// var arr = university.slice()
// document.write("<br/>")
// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i]+"<br/>");

// }

// 17.

// var input = prompt("Enter country name");
// var lastIndex = input.slice(-1);
// alert(lastIndex)+"<br/>";

// 18.


// var the_count = 0;
// var fox = "The quick brown fox jumps over the lazy dog";

// for(var i = 0; i<fox.length; i++){
//     if(fox.toLowerCase().slice(i,i+3) === "the"){
//         the_count++;
//     }
// }
// document.write("text: "+fox+
// "<br/> there are "+the_count+
// "occurence(s) of the word 'the'" +"<br/>"
// );

                // //chapter 26-30 

// 1.


// var number = 3.45214;
// var Round_off_Number = Math.round(3.45214);
// var Floor_Number = Math.floor(3.45214);
// var Ceil_Number = Math.ceil(3.45214);
// document.write("number: " +number+"<br/>"+
//       "Round off values:  " +Round_off_Number+"<br/>"+
//       "Floor values:  " +Floor_Number+"<br/>"+
//       "Ceil values:  " +Ceil_Number+"<br/>"
// );

// 2. 


// var number = -2.673;
// var Round_off_Number = Math.round(-2.673);
// var Floor_Number = Math.floor(-2.673);
// var Ceil_Number = Math.ceil(-2/673);
// document.write("number: " +number+"<br/>"+
//       "Round off values:  " +Round_off_Number+"<br/>"+
//       "Floor values:  " +Floor_Number+"<br/>"+
//       "Ceil values:  " +Ceil_Number+"<br/>"
// );

// // 3. 


// var number = -4;
// var absolute = Math.abs(-4);
// document.write(
//     "the absolute value of" +number+
//     " is " + absolute + " "
// );

// // 4. 



// var dice = Math.random();
// var n = (dice * 6)+1;
// var a = Math.round(n);
// document.write(
//     "The random value of dice" + a + " "
// );


// // 5.



// var h = Math.round((Math.random() * 6) + 1);
// var t = Math.round((Math.random() * 6) + 1);;
// document.write(+ h + "<br/> random coin value: Head <br/> <br/> <hr/>");
// document.write(+ t + "<br/> random coin value: Tails <br/>");

// // 6. 

// var random = Math.floor(Math.random()* 100 ) + 4;
// document.write("the random number between 1 to 100: " +random + "<br/>");

// // 7. 
 
// var weight =prompt("Enter your weight in kilogram");
// var parse = parseInt(weight);
// document.write("The weight of user is: " +parse+ "kgs")

// // 8. 

// var s = prompt("Enter any number between 1 to 10");
// var n = Math.floor(Math.random() * 10)+3;
// if(s ==! n){alert ("Congratulations");}
// else {alert("Sorry, better luck next time");}

//                     //chapter       31-34

// // 1.


// function dateNtime(){
// var date = new Date ();
// document.write(date);
// }
// dateNtime();

// // 2. 


//  var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December" ]
//  var now = new Date();
//  var month = now.getMonth();
//  var currentMonth = monthArray[month];
//  document.write("Current Month: " +currentMonth);


// //  3. 

// var dayNames = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is " + nameOfToday);

// // 4. 


// var dayNames = ["Sat","Mon","Tue","Wed","Thurs","Fri"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if (nameOfToday === dayNames[0] || nameOfToday === dayNames[1]) {
//     document.write("It's Funday");
// }else{
//     document.write("It's Working day :'(");
// }

// // 5.



//  var now = new Date ();
//  var theDay = now.getDate();
//  if (theDay < 16 ){
//      document.write("First fifteen days of the month");
//  }
//  else document.write("Last days of the month");


// //  6.


// var currentDate = new Date();
// var miliseconds = currentDate.getTime();
// var minutes = miliseconds / 60000;
// document.write("Current date: "+ currentDate + "<br/>" );
// document.write("Elapsed miliseconds since january 1, 1970: "+ miliseconds + "<br/>");
// document.write("Elapsed minutes since januray 1, 1970: " + minutes + "<br/>");


// // 7.


// var currentDate = new Date();
// var hours = currentDate.getHours();
// if (hours < 12) {
//     alert("It's AM");
// }
// else alert ("It's PM");


// // 8. 


// var laterDate = new Date("Decemer 31, 2020");
// document.write("Later Date: " + laterDate);


// // 9.


// var today = new Date();
// var oldDate = new Date("June 18, 2015");
// var msToday = today.getTime();
// var msOldDate = oldDate.getTime();
// var msDiff = msToday - msOldDate;
// var dDIFF = msDiff / (1000 *60 * 60 * 24);
// dDIFF = Math.floor(dDIFF);
// alert(dDIFF + "days have passed since 1st Ramadan, 2015");


// // 10. 



// var today = new Date();
// var oldDate = new Date("January 1, 2015");
// var msToday = today.getTime();
// var msOldDate = oldDate.getTime();
// var msDiff = msToday - msOldDate;
// var dDiff = msToday - msOldDate;
// var dDiff = msDiff / 1000 ;
// dDIFF = Math.floor(dDiff);
// document.write("on reference date" + today +"," + dDiff + "seconds had passed  since beginning of 2015");

// // 11.


// var today = new Date();
// document.write("Current Date: " + today + "<br/>");
// var oneHourAgo = today.setHours(14);
// document.write("1 hour ago, it was" +today);


// // 12. 


// var today = new Date();
// document.write("current date: " + today + "<br/>");
// var yearsAgo = today.setFullYear(1920);
// document.write("100 years back, it was " + today);



// // 13.


// var userAge = prompt("Enter your age");
// var birthYear = 2019 - userAge;
// document.write("Your age is " + userAge + "<br/>");
// document.write("Your birth year is " +birthYear);




// // 14. 



// var CustomerNam = "ABC Customer";
// var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December" ];
// var today = new Date();
// var theDay = today.getMonth();
// var nameOfMonth = monthNames[theDay-1];
// var numUnits = 410;
// var chargeUnit = 16;
// var netAmount = numUnits * chargeUnit;
// var latePayment = 350;
// var grossAmount = netAmount + chargeUnit;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: <b>ABC Customer</b><br />");
// document.write("Month: " + "<b>" + nameOfMonth + "</b><br />");
// document.write("Number of units: "+ "<b>" + numUnits + "</b><br />");
// document.write("Charges per unit: "+ "<b>" + chargeUnit + "</b><br />");
// document.write("Net amount payable (within due date): "+ "<b>" + netAmount + "</b><br />");
// document.write("Late payment surcharge: "+ "<b>" + latePayment+ "</b><br />");
// document.write("Gross amount payable (after due date): "+ "<b>" + grossAmount + "</b><br />");


//                 //                chapter 35-38

// // 1. 


// function dateNtime(){
//     var date = new Date();
//     document.write(date);
// }
// dateNtime();

// // 2. 

// function userGreeting () {
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     var fullName = firstName + " " + lastName;
//     alert("Welcome" + fullName);
// }
// userGreeting();

// // 3. 


// function sumNumbers(){
//     var firstNum = +prompt("Enter your first number");
//     var secNum = +prompt("Enter your second number");
//     var sum = firstNum + secNum;
//     alert(sum)

// }
// sumNumbers();



// // 4.


// function Calculator(num1 ,num2){
//     var a = num1;
//     var b = num2;
//     document.write(a + b);
// }

// Calculator(5, 5);

// // 5.

// function square(num) {
//     var square = Math.pow(num, 2);
//     document.write(square);
// }
// square(7);


// // 6. 


// function factorial(num) {
//     if (num === 0) {
//         return 1;
//     }
//     else return num * factorial(num - 1);
// }
// document.write(factorial(5));

// // 7.


// function counting(start, end) {
//     var start =prompt("Enter start number");
//     var end = prompt("Enter end number");
//     var array = [];
//     for (var i = start; i <= end; i++){
//         document.write(array.push(i));

//     }
//     return array;
// }
// counting();

// // 8.


// function calculateHypotenuse(base, perp) {
// base = prompt("Enter base length");
// perp = prompt("Perpendicular height");
// return Math.sqrt(Math.pow(base, 2) + Math.pow(perp, 2));

// }

// document.write("Hypotenuse of triangle is " +calculateHypotenuse());

// // 9. 


// var length = prompt("Enter the length of rectangle");
// var width = prompt("Enter the width of rectangle");

// function area(length,  width) {
//     return length * width;
// }
// document.write("The area of rectangle is " + area(length, width));

// // 10. 

// function palindrome(str){
//     var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//     var count= 0;
//     if(cstr === ""){
//         console.log("nothing found!");
//         return false;
//     }
//   if ((cstr.length) % 2 === 0){
//       count= (cstr.length) /2;

//   }else {
//       if ( cstr.length === 1){
//           console.log(str + "is a palindrome.");
//           return true;
//       }else {
//           count = (cstr.length -1) / 2;
//       }
//   }

// for (var i = 0; i < count;i++ ) {
//     if (cstr[i] != cstr.slice(-1-i)[0]){
//         console.log(str + "is not a palindrome");
//         return false;
//     }
// }
// console.log(str + "is a palindrome");
// return true;
// }

// palindrome("anum")

// // 11. 

// function upperCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++){
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring
//     (1);
//     }
//     return splitStr.join(' ');

// }

// document.write("STRING : 'the quick brown fox' <br>");
// document.write("OUTPUT: " + upperCase("the quick brown fox"));



// // 12.



// function longestWord(str) {
//     var array = str.match(/\w[a-z]{0,}/gi);
//     var result = array[0];

//     for(var i =1; i < array.length; i++) {
//         if(result.length < array[i].length){
//             result = array[i];
//         }
//     }
//     return result
// }

// document.write("String: web development tutorial<br>");
// document.write("The longest word: " + longestWord('web development tutorial'));




// // 13. 


// function charCount(str, letter) {
//     var letterCount = 0;
//     for(var i = 0; i < str.length; i++){
//         if(str.charAt(i) == letter) {
//             letterCount += 1;
//         }
//     } 
//     return letterCount;
// }

// document.write("string: JSResourceS.com <br> ")
// document.write("'o' occurs " + charCount("JSResources.com", "o") + "times within the string");




// // 14. 

// function calcCircumference(radius) {
//     var circumference =( Math.PI*2)*radius;
//     console.log("The circumference is " + circumference);
// }

// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     console.log("The area is " + area);
// }

// calcCircumference(5);
// calcArea(5);