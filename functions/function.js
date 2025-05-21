var bookName =function(){
    console.log("Loki series");
}

console.log(bookName);
console.dir(bookName);
//-------------------------------------------------
//grouping multiple statements in js

//block 1
function showcustomerDetails(){
    let customerID =111;
    console.log(customerID)

    let customerName = "Rakesh"
    console.log(customerName);
}
 showcustomerDetails()
//---------------------------------------------------------------------
 //how to set color

 console.log("rakesh")
 console.log("%crakesh", "color:red")
 console.log("%crakesh", "background-color:green")

 
  console.log("%c        ", "background-color:white");

  
  function redcolor(){
    console.log("%c      ", "background-color:red");
    }
  //redcolor();

function firstSection(){
    console.log("%c      ", "background-color:purple");
    console.log("%c      ", "background-color:blue");
    redcolor();

}
firstSection();


function secondSection(){
    console.log("%c      ", "background-color:orange");
    console.log("%c      ", "background-color:pink");
    redcolor();
}
secondSection();


function thirdSection(){
    console.log("%c      ", "background-color:green");
    console.log("%c      ", "background-color:white");
    redcolor();

}
thirdSection();
