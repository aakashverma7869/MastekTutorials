$(document).ready(function(){
    $("#submitform").click(function(){
        const firstName     = $("#firstName").val();
        const lastName      = $("#lastName").val(); 
        const msg           = $("#msg");  
    if (firstName == undefined || firstName == null || firstName == "") {
        msg.append("First Name must be provided");
        return false;
    }
    if (firstName.length < 2) {
        msg.append("First Name must be 2 ");
        return false;
    }
    if (lastName == undefined || lastName == null || lastName == "") {
        msg.append("last Name must be provided");
        return false;
    }
    if (lastName.length < 2) {
        msg.append("Last Name must be 2 ");
        return false;
    }
      
 
    else
    {
    //    alert("Not a valid Phone Number");
       return true;
    }
   
      
      
      
    });

  });



















// function formSubmit(){

//     var firstName=document.getElementById("firstName").value;

//     var lastName=document.getElementById("lastName").value;

//     if(firstName==''){

//         alert("Please fill the firstName");

//         return false;

//     }else if(firstName.length<=2){

//         alert("Firstname should be greater than 2 letter")

//         return false;

//     }else if(lastName==''){

//         alert("Please fill the lastName");

//         return false;

//     }else if(lastName.length<=2){

//         alert("lastName should be greater than 2 letter")

//         return false;

//     }

// }