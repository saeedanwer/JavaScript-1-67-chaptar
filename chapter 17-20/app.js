//                  (1)
//var number = [[],[],[]]

//                   (2)
// Number[0] = [0,1,2,3]
// Number[1] = [1,0,1,2]
// Number[2] = [2,1,0,1]
// document.write(Number[0]+"<br/>"+Number[1]+"<br/>"+Number[2]+"<br/>")

//                     (3)


// for (var x = 1; x <= 10; x++){
//     document.write(x+"<br/>")
// }


//                       (4)


// var Table = +prompt("Enter a number  to show its multiplication table");
// var length = +prompt("Enter Multiplication table" );
// document.write("Multiplication Table of " +Table+"<br/> length"+length+ "<br/>")
// for(var i = 1; i <= length; i++){
//     document.write(Table+" x "+i+" = "+Table*i+"<br/>")
// }


//                          (5)


// var Fruits = ["apple", "orange", "graphs", "banana", "strawberry"]
// var arr = Fruits.length
// for(var i = 0; i <arr; i++){
//     document.write("Element at index "+i+" is "+Fruits[i]+"<br/>")
// }


//                          (6)


// var num = [];
// var odd = [];
// var even = [];
// var series = [];

// for(var i = 0; i <=15; i++){
//     num[i] = i+1;
// }
// document.write("counting :"+num+"<br/>")
// document.write(" Reverse counting :"+num.reverse()+"<br/>")

// for(var a = 1; a <= 20; a++){
//     if(a % 2 !==0){
//         even[a] = a;
//     }
// }
// document.write("Even :"+even+"<br/>")
// for(var b = 1; b <= 20; b++){
//     if(b % 2 === 0){
//         odd[b] = b;
//     }
// }
// document.write("Odd :"+odd+"<br/>")
// for(var d = 1; d <= 20; d++){
//     if(d % 2 === 0){
//         series[d] = d+"k";
//     }
// }
// document.write("Series :"+series+"<br/>")


//                     (7)


// var A = ["cake","apple pie","cookie","chips","patties"]
// var user = prompt("Welcome to ABC Bkery what do you want to order sir/ma'am")
// var B = A.indexOf(user)
// if(B<0){
//     alert("we are sorry"+user+"is not available in our bakery")
// }
// else{
//     alert(user+"is available at index "+B+" in our bakery") 
// }


//                         (8)


// var A = [24,53,78,91,12];
// var larg = Math.larg.apply(Math,A)
// var min = Math.min.apply(Math,A)
// console.log(larg , min)
// document.write(
//     "Array items: "+A+
//     "<br/> The largest number is " +larg+
//     "<br/> The samllest number is " +min
// )


                            // (9)


// var A = [24,53,78,91,12];
// var max = Math.max.apply(Math,A)
// var min = Math.min.apply(Math,A)
// console.log(max , min)
// document.write(
//     "Array items: "+A+
//     "<br/> The largest number is " +max+
//     "<br/> The samllest number is " +min+"<br/>"
// )

//                              (10)

// for(var i = 1; i<=100; i++){
//     if(i%5 === 0){
//         document.write(i+" ,")
//     }
// }
