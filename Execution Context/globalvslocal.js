var greenColor = "green";

// console.log("%c")s

//Local block1
{
   console.log("LocalBlock-1" , greenColor); 
   let blueColor = "blue";
   console.log("LocalBlock-1" , blueColor); 

   //console.log("LocalBlock-1" , pinkColor); 
}

//Local block2
{
   console.log("LocalBlock-2" , greenColor); 
   let pinkColor = "pink";
   console.log("LocalBlock-2" , pinkColor); 

   //console.log("LocalBlock-2" , blueColor); 
}


console.log("GlobalBlock" , greenColor); 
//console.log("GlobalBlock" , blueColor); 
console.log("GlobalBlock" , pinkColor); 





//Example 2

var signalName = "Wi-fi";

{
    //Lets say Room1
    console.log("Signal :" , signalName); 

    let room1FanSpeed = "high";
    console.log("FanSpeed :" , room1FanSpeed); 
    //console.log("FanSpeed :" , room2FanSpeed); 
}

{
    //Lets say Room2
    console.log("Signal :" , signalName); 

    let room2FanSpeed = "slow";
    console.log("FanSpeed :" , room2FanSpeed);

    //console.log("FanSpeed :" , room1FanSpeed); 
}


console.log("Signal :" , signalName); 
//console.log("FanSpeed :" , room1FanSpeed); 
//console.log("FanSpeed :" , room2FanSpeed); 