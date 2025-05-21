function showBookDetails(bookName , authorName , dateofbirth, publisheDate){
    console.log("book Name:" ,bookName);
console.log("author:" ,authorName);
console.log("Date of birth:" ,dateofbirth);
console.log("published Date:" ,publisheDate );

}
//showBookDetails("mahabharatha","vedha", "oct 2,1940",2000)

//optional parameter

function showBookDetails(bookName , authorName , dateofbirth, publisheDate){
    console.log("book Name:" ,bookName);
console.log("author:" ,authorName);
console.log("Date of birth:" ,dateofbirth);
publisheDate =publisheDate || "No date Available"
console.log("published Date:" ,publisheDate );

}
//showBookDetails("mahabharatha","vedha", "oct 2,1940",)

//defoult parameter

function showBookDetails(bookName , authorName , dateofbirth="DOB is not mention", publisheDate="Date is not Available"){
    console.log("book Name:" ,bookName);
console.log("author:" ,authorName);
console.log("Date of birth:" ,dateofbirth);
console.log("published Date:" ,publisheDate );

}
//showBookDetails("mahabharatha","vedha", )

//rest parameter

function showBookDetails(...additinalparams){
console.log(additinalparams);
console.log("book Name:" ,additinalparams[0]);
console.log("author:" ,additinalparams[1]);
console.log("Date of birth:" ,additinalparams[2]);
console.log("published Date:" ,additinalparams[3]);

}
showBookDetails("mahabharatha","vedha", "oct 2,1940",2000)
