// // <!-- chap# 38-42 -->

//      1


// function power(a, b) {
//     return Math.pow(a, b)
// }

// console.log(power(2, 3))

// // 2. 



// function leapYear() {
//     var year = +prompt("Enter Year")
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         alert(year + "is leap year")
//     }
//     else {
//         alert(year + "is not a leap year")
//     }
// }


// // 3.



// function triangle(a, b, c) {
//     var s = (a + b + c) / 2
//     return s
//     function area() {
//         var area = s(s - a)(s - b)(s - c);

//         return area
//     }

// }
// console.log("The Area of Trianlge is :" + triangle(5, 4, 6))


// // 4.




// function marks(chemistry, physics, maths) {
//     function average() {
//         var avg = (chemistry + physics + maths) / 3
//         return avg


//     }
//     function percentage() {
//         var per = (chemistry + physics + maths) / 300 * 100
//         return per
//     }
//     console.log(`Marks avg ${average()} Marks Percentage ${percentage()}`)
// }
// marks(80, 70, 70)



// // 5.


// function indexOf(str, queryStr) {
//     for (var i = 0; i < str.lenght; i++) {
//         for (var j = 0; j < queryStr.lenght; j++) {
//             if (str[i + j] !== queryStr[j]) {
//                 break
//             }
//             if (j == queryStr.lenght - 1) {
//                 return i
//             }
//         }
//     }
//     return -1
// }
// var index = indexOf("Hello world", "w")
// console.log(index)



// // 6. 



// function sentence(str) {
//     var vowels = ["a", "e", "i", "o", "u"]
//     return str.split("").filter(
//         function (elm) {
//             return vowels.indexOf(elm.toLowerCase()) == -1
//         }
//     ).join("")
// }
// console.log(sentence("Good Night"))



// //       7.



// // <!-- “Pleases read this application and give me gratuity”
// // Such occurrences are ea, ea, ui.

// var sentence = "Pleases read this application and give me gratuity";
// var vowel = 0;
// function switchVowel(str) {
//     var strArr = str.split('');
//     for (var i = 0; i < strArr.length; i++) {
//         switch (strArr[i]) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//                 switch (strArr[i + 1]) {
//                     case 'a':
//                         vowel++;
//                         break;
//                     case 'e':
//                         vowel++;
//                         break;
//                     case 'i':
//                         vowel++;
//                         break
//                     case 'o':
//                         vowel++;
//                         break;
//                     case 'u':
//                         vowel++;
//                         break;
//                     default:
//                         break
//                 }
//                 break

//             default:
//                 break
//         }

//     }
// }
// switchVowel(sentence)




// // 8. 


// function distance() {
//     var input = +prompt("Enter distance in KM");
//     function meter() {
//         var meter = input * 1000;
//         return meter;
//     }

//     function feet() {
//         var feet = input * 3280.84;
//         return feet;
//     }


//     function inches() {
//         var inches = input * 39370.1;
//         return inches;
//     }

//     function centimeters() {
//         var centimeters = input * 100000;
//         return centimeters;
//     }

//     document.write("Distance in meter: " + meter() + "<br>");
//     document.write("Distance in feet: " + feet() + "<br>");
//     document.write("Distance in inches: " + inches() + "<br>");
//     document.write("Distance in centimeter: " + centimeters());

// }
// distance();



// // 9. 


// function calPyout() {
//     var workingHours = prompt("Enter total working hours");
//     switch (true) {
//         case workingHours > 40: {
//             var amountPaid = (workingHours - 40) * 12;
//             alert("Your overtime is " + amountPaid);
//             break;
//         }
//         default: {
//             alert("Sorry not sufficient working hours");
//         }
//     }
// }
// calPyout();


// // 10.


// // -->



// function currencyNotes() {
//     var amount = prompt("Enter amount to withdraw");
//     var hundred = Math.floor(amount / 100);
//     var fifty = Math.floor((amount % 100) / 50);
//     var ten = Math.floor((amount % 100) % 50) / 10;
//     var remaining = Math.floor(((amount % 100) % 50) % 10);
//     document.write("You will have" + hundred + "hundred notes" + fifty + "fifty notes" + ten + "ten notes");

// }
// currencyNotes();



            // // <!-- chap#43-48 -->


// // <!-- 3.



// function removeRow(child) {
//     var row = child.parentNode.parentNode.rowIndex;
//     document.getElementById('myTable').deleteRow(row);
// }


// // 5. 


// var counter = document.getElementById('counter')
// var num = 0;
// counter.innerHTML = 0
// function increase() {
//     num++;
//     counter.innerHTML = num

// }
// function decrease() {
//     num--;
//     counter.innerHTML = num

// }

// // <!-- 

                // // chap#49-52

// // 1.

// var userName = document.getElementById('userName')
// var email= document.getElementById('email')
// var pass = document.getElementById('pass')
// var cpass = document.getElementById('cpass')
// var singUpDiv = document.getElementById('singUpDiv')
// function singup(){
//     if (userName.value === '' && email.value === '' && pass.value ==='' && cpass.value === ''){
//         singUpDiv.innerHTML = "Kindly Inster all Value"
//     }
//     if(pass.value===cpass.value){
//         singUpDiv.innerHTML = `Thank you ${userName.value} for registration`
//     }
//     else{
//         singUpDiv.innerHTML="Password is not match"
//     }
// }


// // 2. 



// var text1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima ducimus cupiditate dignissimos nobis a rerum soluta ut dolore esse nam, quas, quod vitae optio, itaque vel incidunt in ex.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, nisi nulla! Consequuntur in minus ipsa labore exercitationem, rem vel delectus itaque molestiae modi, unde non officia ipsam, minima ea dolor?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium sapiente dolorem minus esse totam ratione beatae, amet explicabo ipsum delectus hic nihil possimus eius tempore pariatur accusamus aspernatur aperiam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem amet incidunt accusantium voluptates eius minus saepe. Maxime numquam inventore, assumenda illum, impedit excepturi, sed aperiam labore nam saepe adipisci tempore. <<<`
// var text2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam repudiandae asperiores voluptatibus, aliquid,nesciunt itaque fuga, aperiam quis laborum natus voluptas aspernatur tempore nisi laudantium pariatur perspiciatis ut vero recusandae. >>>>`
// function showMore() {
//     div.children[0].innerText = text1
//     div.children[1].innerText = 'Show Less'
//     div.children[1].getAttributeNode('onclick').value = 'showLess()'

// }
// function showLess() {
//     div.children[0].innerText = text2
//     div.children[1].innerText = 'Show More'
//     div.children[1].getAttributeNode('onclick').value = 'showMore()'

// }

        // // 3. 



// var selectedRow = null

// function onFormSubmit() {
//     if (validate()) {
//         var formData = readFormData();
//         if (selectedRow == null)
//             insertNewRecord(formData);
//         else
//             updateRecord(formData);
//         resetForm();
//     }
// }

// function readFormData() {
//     var formData = {};
//     formData["fullName"] = document.getElementById("fullName").value;
//     formData["empCode"] = document.getElementById("empCode").value;
//     formData["salary"] = document.getElementById("salary").value;
//     formData["city"] = document.getElementById("city").value;
//     return formData;
// }

// function insertNewRecord(data) {
//     var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.fullName;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.empCode;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.salary;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.city;
//     cell4 = newRow.insertCell(4);
//     cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
//                        <a onClick="onDelete(this)">Delete</a>`;
// }

// function resetForm() {
//     document.getElementById("fullName").value = "";
//     document.getElementById("empCode").value = "";
//     document.getElementById("salary").value = "";
//     document.getElementById("city").value = "";
//     selectedRow = null;
// }

// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("city").value = selectedRow.cells[3].innerHTML;
// }
// function updateRecord(formData) {
//     selectedRow.cells[0].innerHTML = formData.fullName;
//     selectedRow.cells[1].innerHTML = formData.empCode;
//     selectedRow.cells[2].innerHTML = formData.salary;
//     selectedRow.cells[3].innerHTML = formData.city;
// }

// function onDelete(td) {
//     if (confirm('Are you sure to delete this record ?')) {
//         row = td.parentElement.parentElement;
//         document.getElementById("employeeList").deleteRow(row.rowIndex);
//         resetForm();
//     }
// }
// function validate() {
//     isValid = true;
//     if (document.getElementById("fullName").value == "") {
//         isValid = false;
//         document.getElementById("fullNameValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
//             document.getElementById("fullNameValidationError").classList.add("hide");
//     }
//     return isValid;
// }



// // <!-- chap53-58

// // 1



// // Modal code is available in this assignment file.
// var arrImgSrc = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.png']
//         var imgDiv = document.getElementById('img')
//         var modal = document.getElementById('modal');
//             modal.classList.add('modal-open')
//             modal.classList.remove('modal-close')
//         for (var i = 0; i < arrImgSrc.length; i++) {
//             var img = document.createElement('img')
//             var imgAtt = document.createAttribute('src')
//             img.src = arrImgSrc[i]
//             img.setAttribute('onclick','open(arrImgSrc[i])')
//             imgDiv.appendChild(img)
//         }
//         function open(imgSrc) {
//             console.log('clicked')
            
//             modal.classList.add('modal-open')
//             modal.classList.remove('modal-close')
//             var imgModal = document.getElementById('modal-img')
//             imgModal.src = imgSrc;
//         }
//         function onClosedImagModal(){
//             modal.classList.remove('modal-open')
//             modal.classList.add('modal-close')
//             setTimeout(()=>{ modal.style.display = "none"; }, 550)
//         }



// // 2.



//     var pTag = document.getElementById('zoom')
//     var size= 10
//     function zoomIn(){
//         size = size+10
//         pTag.style.fontSize = `${size}px`
//     }
//     function zoomOut(){
//         size = size-10
//         pTag.style.fontSize = `${size}px`
//     }

            // // <!-- chap58-67

// // 1- 







// var mainContent = document.getElementById('main-content')
// console.log(mainContent.children)
// var render = document.getElementsByClassName('render')
// for (var i=0;i<render.length;i++){

//     console.log(render[i].innerHTML)
// }

// var firstName = document.getElementById('first-name')
// var lastName = document.getElementById('last-name')
// var email = document.getElementById('e-mail')

// firstName.value= "Anum"
// lastName.value="Essani"
// email.value="anum.essani@gmail.com"




// // 2. 


// console.log(document.getElementById("form-content").nodeType)
// console.log(document.getElementById("lastName").childNodes)
// console.log(document.getElementById("lastName").childNodes[0].value="LastName Update")

// console.log(mainContent.firstChild,mainContent.lastChild)
// console.log(document.getElementById('lastName').nextSibling,document.getElementById('lastName').previousSibling)
// console.log(document.getElementById('email').parentElement)


