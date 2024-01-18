// this is a js file for learning the use of objects
someObject = {
    objectName : 'jason', // object values pairs have collon and not assignment operator
    objectAge : 21,
    objectResidence : 'Tudor'
}

console.log(someObject.objectAge); //js code ends in semi-colon
console.log(' this is the original objectname');
someObject.objectName='Antonitte';
console.log(someObject.objectName);
console.log(
    ' the  name property above has been updated.'
);

//lets check out object methods

appleEmployee = {
    employee_Name : ' James Stewart',
    age : 34,
    residence : 'Honolulu',
    employee_Method : function  findJobMatch()// method takes no arguments
    {
        console.log('Hello '+employee_Name);

        if (residence.New_Jersey != true) // this is the syntax for conditional statements in js 
            {  
                console.log('Sorry, we are currently not accepting applicants from your region.');
            }
        else{
            console.log('Welcome aboard.\n Please wait while we get ready to onboard you.');
        }

    }
}


 // appleEmployee.findJobMatch(); // doesnt work in c
//lets learn other js object propeties. 



