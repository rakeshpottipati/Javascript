// class School{

    
//     sName = "John";
    
//      sName;   
//      sID = 23456789;

//     constructor(name,id){
//         console.log(`Student name is ${name}`);
//         this.sName =  name
//         this.sID = id;
//     }

//     //Method - Member
//     enrollStundent(){
//         console.log(`Student Name is ${this.sName}  and his enroll id is ${this.sID}`);
//     }

//     getStundentSubjects(){
//         return ["English" , "Hindi" , "Maths"];
//     }

// }


//new School().enrollStundent();
// const mySchool = new School("John" , "123456"); 
// mySchool.enrollStundent();
// let studentBooks = mySchool.getStundentSubjects();
// console.log(studentBooks);


//-----------------------------------------------------------------------------------------------------------------------------
//EXTARNAL MEMBERS:-
class School {

     #_sName;    

     constructor(sname){
         this.#_sName = sname;
     }

     get studentName(){
        return this.#_sName;
     }

     set studentName(value){
        if(typeof value == "string"){
            this.#_sName = value;
        }
        else{
            console.log(`Please enter the string value only not the ${this.#_sName}`);
        }
     }


}

let mySchool = new School(164);
console.log(mySchool.studentName);

mySchool.studentName  = "rakesh";
console.log(mySchool.studentName);

