// function getJsonData(){
//     const xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function() {
//   const person = JSON.parse(this.responseText);
//   document.getElementById("root").innerHTML = person.firstName+" "+person.lastName;
// }
// xmlhttp.open("GET", "person.json");
// xmlhttp.send();
// }


const jsonViewModel = function () {
  const root = $("#root");
  root.append("<ul id='list'></ul>");
  this.getJsonData = function () {
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function () {
          const people = JSON.parse(this.responseText);
          
          const list = people.people;
          for (i in list) {
              $("#list").append("<li>" + list[i].firstName + " " + list[i].lastName + "</li>");

          }
         

      }
      xmlhttp.open("GET", "people.json");
      xmlhttp.send();
  }
}
const vm = new jsonViewModel();
ko.applyBindings(vm);










$(document).ready(function(){
  $("#getJsonData").click(function(){




    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
      const person = JSON.parse(this.responseText);
      $("#root").append(person.firstName+" "+person.lastName);
      // document.getElementById("root").append = person.firstName+" "+person.lastName;
    }
    xmlhttp.open("GET", "person.json");
    xmlhttp.send();



  });
 
});