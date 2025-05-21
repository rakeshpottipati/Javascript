//difine the anonymous function
//var showBookName = function(){
   // let bookName = "mahabaratham";
    //console.log(bookName);
//}
//showBookName(); // call the function name

//var showBookDetails = function(bookname , authorName ,DOB){
   //console.log(bookname);
   //console.log(authorName);
   //console.log(DOB);

//}
//showBookDetails("ramayanam" ,"vedhavayasa" , "oct 2 ,2002");

//key points anonymous
//IIFE(immediately invoked function exptressions )

//ex1
//(
   // function(){
      // console.log("hai");
   // }
    
//)()

//ex2

// (
//     function(bookName){
//         console.log(bookName);
//     }
    
// )("ramayanam");

//call back function

// function sayHello(callbackfn){
//     callbackfn();
// }
//      sayHello(function(){
//         console.log("hello");
//      })

//      function sayHello(callbackfn){
//           callbackfn(10,20);
// }
//      sayHello(function(a,b){
//         console.log("hello");
//         console.log(a);
//         console.log(b);



   setTimeout(function()  {
       console.log("rakesh");
   }, 10000);
        
setInterval(function() {
    //console.log("rakesh");
   document.write("rakesh love hema")
},2000);