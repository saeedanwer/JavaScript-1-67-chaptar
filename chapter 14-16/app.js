//                   (1)
// var empty_Arry = [];

//                   (2)
// var object_Array = [];

//                   (3)
// var strings_Array = ["Balochistan", "Sindh", "KPK","Punjab"];

//                   (4)
// var numbers_Array = [1,2,3,4];

//                   (5)
// var boolean_Array = [true,false];

//                   (6)
// var mixed_Array = [123,"a","true","karachi","false"];

//                    (7)

// var Education = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
// document.write("<h2>Qualification</h2>")
// for (var i = 0; i <=7; i++){
//     document.write(i+1+" "+Education[i]+"<br>")
// }

//                    (8)
// var student_Names = ["Micheal","John", "Tony"]
// var score = [320,230,480];
// var percentage = [];
// for(var i = 0; i <= 2; i++){
//     percentage[i] =  score[i] / 500 * 100
// }
// for (var a = 0; a<= 2; a++){
// document.write("score of "+student_Names[a]+" is "+score[a]+"Precentage "+percentage[a]+"% <br/>")
// }

//                    (9)

// var color = ["Red","Yellow","Green"]
// document.write(color+"<br/>");
// var beginning = prompt("Enter which color you want to add at the beginning of array")
// color.unshift(beginning)
// document.write(color+"<br/>");
// var ending = prompt("Enter which color you want to add at the ending of array")
// color.push(ending)
// document.write(color+"<br/>");
// color.shift()
// document.write(color+"<br/>");
// color.pop()
// document.write(color+"<br/>");
// var update =+prompt("At which index do you want to add color?")
// var newColor =+prompt(" which color do you want to add on that index?")
// color.splice(update,0,newColor)
// document.write(color+"<br/>");
// var dlete =+prompt("At which index do you want to delete color?")
// var colorDelete =+prompt(" which color do you want to delete on that index?")
// color.splice(dlete, colorDelete);
// document.write(color+"<br/>");

//                    (10)

// var score = [320,230,480,120]
// document.write("Score of students :" +score+"<br/>");
// score.sort()
// document.write(" Ordered Score of students :" +score);

//                    (11)

// var cities = ["karachi","quetta","khuzdar","islamabad"];
// document.write("cities list: <br/>"+cities+"<br/>")
// var selectedCities = cities.slice(2,4)
// document.write("selected cities list: <br/>"+selectedCities)
// //                    (12)
// var arr = ["This","is","my","cat"]
// document.write("array/; <br/>"+arr+"<br/>")
// var join = arr.join(" ")
// document.write("string: <br/>"+join) 
//                    (13)

// var device = ["keyboard",",mouse","printer","monitor"]
// document.write("devices : <br/>"+device+"<br/>")
// var first_Device = device.shift()
// document.write("out : <br/>"+first_Device+"<br/>")
// var second_Device = device.shift()
// document.write("out : <br/>"+second_Device+"<br/>")
// var third_Device = device.shift()
// document.write("out : <br/>"+third_Device+"<br/>")
// var fourth_Device = device.shift()
// document.write("out : <br/>"+fourth_Device+"<br/>")

//                      (14)
// var device = ["keyboard",",mouse","printer","monitor"]
// document.write("devices : <br/>"+device+"<br/>")
// var first_Device = device.pop()
// document.write("out : <br/>"+first_Device+"<br/>")
// var second_Device = device.pop()
// document.write("out : <br/>"+second_Device+"<br/>")
// var third_Device = device.pop()
// document.write("out : <br/>"+third_Device+"<br/>")
// var fourth_Device = device.pop()
// document.write("out : <br/>"+fourth_Device+"<br/>")


//                       (15)

// var phone = ["apple","samsung","motorla","nokia","sony & haier"]
// document.write(
//     "<select>"+
//     "<option>"+phone[0]+"</option>"+
//     "<option>"+phone[1]+"</option>"+
//     "<option>"+phone[2]+"</option>"+
//     "<option>"+phone[3]+"</option>"+
//     "<option>"+phone[4]+"</option>"+
//     "</select>"
// )