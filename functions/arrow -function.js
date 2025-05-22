//arrow function

//ex1
// let showAuthorName = () => {
//     console.log("rakesh");
    
// }
// showAuthorName();

//---------------------------------------------------------
//Ex2

// let showBookDetails = (bookName,DOB,authorName) => {
//     console.log(bookName);
//     console.log(DOB);
//     console.log(authorName);

    
// }
// showBookDetails("ramayanam" ,"7 mayn , 2002" , "vedhavasa");

//------------------------------------------------------------

//in a Arrow function we can use return

let getauthorDetails =(bookName,DOB,authorName) => {
    return `auther Details - ${bookName} ,${DOB} ,${authorName}`;

    
}
let authorDetails = getauthorDetails("ramayanam" ,"7 may , 2002" , "vedhavasa");

console.log(authorDetails);

//Example of anonymous function with arrow function

var sayhellofn = () =>{
     
    console.log("sayHello!!");
}
sayhellofn();

// with parameter
var sayhellofn = (a,b) =>{
     
    console.log("sayHello!!");
    console.log(a);
    console.log(b);

}
sayhellofn(20,40);

setInterval(() =>{
 console.log("rakesh yadav")
},3000);



