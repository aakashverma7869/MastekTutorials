function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("number").value;
    var phoneno = /^\d{10}$/;
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");

    if (firstName == undefined || firstName == null || firstName == "") {
        firstNameError.innerHTML = "First Name must be provided";
        return false;
    }
    if (firstName.length < 2) {
        firstNameError.innerHTML = "First Name must be 2 ";
        return false;
    }
    if (lastName == undefined || lastName == null || lastName == "") {
        lastNameError.innerHTML = "last Name must be provided";
        return false;
    }
    if (lastName.length < 2) {
        lastNameError.innerHTML = "Last Name must be 2 ";
        return false;
    }
    
    if(!phone.match(phoneno))
    {
       
        phoneError.innerHTML = "Not a valid Phone Number";
        return false;
    }
    else
    {
    //    alert("Not a valid Phone Number");
       return true;
    }
   
    

}