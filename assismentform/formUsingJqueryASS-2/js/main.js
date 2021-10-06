$(document).ready(function(){
    // $("#submitform").click(function(){
        // $("form").submit(function(){
         $( "form" ).submit(function( event ) {
        const firstName     = $("#firstName").val();
        const lastName      = $("#lastName").val();  
        const phone = $("#number").val();
        var phoneno = /^\d{10}$/;   
    const firstNameError = $("#firstNameError");
    const lastNameError = $("#lastNameError");
        const phoneError = $('#phoneError');
        // console.log("sdsd");
    if (firstName == undefined || firstName == null || firstName == "") {
        firstNameError.append("First Name must be provided");
        return false;
    }
    if (firstName.length < 2) {
        firstNameError.append("First Name must be 2 ");
        return false;
    }
    if (lastName == undefined || lastName == null || lastName == "") {
        lastNameError.append("last Name must be provided");
        return false;
    }
    if (lastName.length < 2) {
        lastNameError.append("Last Name must be 2 ");
        return false;
    }
      
    if(!phone.match(phoneno))
    {
       
        phoneError.append("Not a valid Phone Number");
        return false;
    }
    else
    {
    //    alert("Not a valid Phone Number");
       return true;
    }
   
      
      
      
      
      
        // const person={firstName:firstName,lastName:lastName};
        // console.log(person);
        // const jsoString=JSON.stringify(person);
        // // $("root").append("The JSON Data is.");
        // const root=$("#root");    
        // root.append("The JSON Data is ");
        //  const h3 = $("<h3 id = 'h3'></h3>");
        // //  h3.id="h3"
        // h3.append(jsoString);
        // $("#root").after(h3);  
      
    });
    // $("#createobj").click(function(){
    //     const h3=document.getElementById("h3");
    //     const jsonString=h3.innerText;
    //     console.log(jsonString);
    //     const PERSON=JSON.parse(jsonString);
    //     console.log(PERSON);
    //     firstName=PERSON.firstName;
    //     lastName=PERSON.lastName;
    //     h3.innerText="";
    // });
  });


// function validateForm() {
//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const phone = document.getElementById("number").value;
//     var phoneno = /^\d{10}$/;
//     const firstNameError = document.getElementById("firstNameError");
//     const lastNameError = document.getElementById("lastNameError");

//     if (firstName == undefined || firstName == null || firstName == "") {
//         firstNameError.innerHTML = "First Name must be provided";
//         return false;
//     }
//     if (firstName.length < 2) {
//         firstNameError.innerHTML = "First Name must be 2 ";
//         return false;
//     }
//     if (lastName == undefined || lastName == null || lastName == "") {
//         lastNameError.innerHTML = "last Name must be provided";
//         return false;
//     }
//     if (lastName.length < 2) {
//         lastNameError.innerHTML = "Last Name must be 2 ";
//         return false;
//     }
    
//     if(!phone.match(phoneno))
//     {
       
//         phoneError.innerHTML = "Not a valid Phone Number";
//         return false;
//     }
//     else
//     {
//     //    alert("Not a valid Phone Number");
//        return true;
//     }
   
    

// }