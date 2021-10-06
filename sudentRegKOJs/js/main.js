// Function for calculating grades

var myViewModel = {
    numberOfClicks : ko.observable(0),
    results : ko.observable(""),
    phy : ko.observable(),
    maths : ko.observable(),
    chem : ko.observable(),
    incrementClickCounter : function() {
        var previousCount = this.numberOfClicks();
        this.numberOfClicks(previousCount + 1);
        console.log("0----------->>",this.numberOfClicks());
        console.log("0---Physics-------->>",this.phy());
        console.log("0----maths------->>",this.maths());
        console.log("0----chem------->>",this.chem());
        let grades = "";
    
        //     // Input is string so typecasting is necessary. */
            let totalgrades =
                parseFloat(this.chem()) +
                parseFloat(this.maths()) +
                parseFloat(this.phy()) 
                console.log("0----chem------->>",totalgrades);
                  // Checking the condition for the providing the
    // grade to student based on percentage
    let percentage = (totalgrades / 300) * 100;
    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }

    let resultmy = "your Percentage is" + percentage + "And Your garde is " + grades + "";
    this.results(resultmy);
    }

   

};
ko.applyBindings(myViewModel);

// var myViewModel = {
//     personName: ko.observable('Bob'),
//     personAge: ko.observable(123),
//     chemistry = ko.observable()
// };
// function MyViewModel() {
//     // chemistry = ko.observable();
//     phy = ko.observable();
//     bio = ko.observable();
//     validatee = function(){  
//         console.log("--------->>>>",myViewModel.chemistry());
//     }
//     // var self = this;
//     // self.places = ko.observableArray(['London', 'Paris', 'Tokyo']);

//     // // The current item will be passed as the first parameter, so we know which place to remove
//     // self.removePlace = function(place) {
//     //     self.places.remove(place)
//     // }
// }
// ko.applyBindings(new MyViewModel());
// const calculate = () => {


//     // Getting input from user into height variable.
//     let chemistry = document.querySelector("#chemistry").value;
//     let hindi = document.querySelector("#hindi").value;
//     let maths = document.querySelector("#maths").value;
//     let phy = document.querySelector("#phy").value;
//     let grades = "";
    
//     // Input is string so typecasting is necessary. */
//     let totalgrades =
//         parseFloat(chemistry) +
//         parseFloat(hindi) +
//         parseFloat(maths) +
//         parseFloat(phy);
    
//     // Checking the condition for the providing the
//     // grade to student based on percentage
//     let percentage = (totalgrades / 400) * 100;
//     if (percentage <= 100 && percentage >= 80) {
//         grades = "A";
//     } else if (percentage <= 79 && percentage >= 60) {
//         grades = "B";
//     } else if (percentage <= 59 && percentage >= 40) {
//         grades = "C";
//     } else {
//         grades = "F";
//     }
//     // Checking the values are empty if empty than
//     // show please fill them
//     if (chemistry == "" || hindi == ""
//                 || maths == "" || phy == "") {
//         document.querySelector("#showdata").innerHTML
//             = "Please enter all the fields";
//     } else {
    
//         // Checking the condition for the fail and pass
//         if (percentage >= 39.5) {
//         document.querySelector(
//             "#showdata"
//         ).innerHTML =
//             ` Out of 400 your total is ${totalgrades}
//             and percentage is ${percentage}%. <br>
//             Your grade is ${grades}. You are Pass. `;
//         } else {
//         document.querySelector(
//             "#showdata"
//         ).innerHTML =
//             ` Out of 400 your total is ${totalgrades}
//             and percentage is ${percentage}%. <br>
//             Your grade is ${grades}. You are Fail. `;
//         }
//     }
//     };
    