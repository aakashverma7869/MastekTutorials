// const firstName=document.getElementById("firstName");
// const lastName=document.getElementById("lastName");

$(document).ready(function(){
    $("#createjson").click(function(){
        const firstName     = $("#firstName").val();
        const lastName      = $("#lastName").val();  
        const person={firstName:firstName,lastName:lastName};
        console.log(person);
        const jsoString=JSON.stringify(person);
        // $("root").append("The JSON Data is.");
        const root=$("#root");    
        root.append("The JSON Data is ");
         const h3 = $("<h3 id = 'h3'></h3>");
        //  h3.id="h3"
        h3.append(jsoString);
        $("#root").after(h3);  
        // firstName="";
        // lastName="";
    });
    $("#createobj").click(function(){
        const h3=document.getElementById("h3");
        const jsonString=h3.innerText;
        console.log(jsonString);
        const PERSON=JSON.parse(jsonString);
        console.log(PERSON);
        firstName=PERSON.firstName;
        lastName=PERSON.lastName;
        h3.innerText="";
    });
  });
// function onSubmit(){
 
 
   
//     console.log(firstName.value);
//     const person={firstName:firstName.value,lastName:lastName.value};
//     console.log(person);
//     const jsoString=JSON.stringify(person);
//     const root=document.getElementById("root");    
//     root.innerHTML="The JSON Data is ";
//     const h3=document.createElement("h3");
//     h3.id="h3"
//     h3.innerHTML=jsoString;
//     root.appendChild(h3)
//     firstName.value="";
//     lastName.value="";

// }



// function onJSObject(){
//     const h3=document.getElementById("h3");
//     const jsonString=h3.innerText;
//     console.log(jsonString);
//     const PERSON=JSON.parse(jsonString);
//     firstName.value=PERSON.firstName;
//     lastName.value=PERSON.lastName;
//     h3.innerText="";
// }