// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs()
$("#currentDay").text("Today's date is " + today.format("dddd, MMMM D"));

// Gets the current hour
var currenthour = dayjs().hour();
var date = "st"

// Gets the current day of the month
var currentday = dayjs().date();

// Adds th, nd, rd, and th
if (currentday == 1 || currentday == 11 || currentday == 21 || currentday == 31) {
} else if (currentday == 2){
  date = "nd";
} else if (currentday == 3){
  date = "rd";
} else if (currentday == 8 || currentday == 20) {
  date = "th";
}

// Get the saved tasks from local storage
var nineamtext = $(".description9am")
var savedtask = localStorage.getItem("9amtask");
nineamtext.text(savedtask);

var nineamtext = $(".description10am")
var savedtask = localStorage.getItem("10amtask");
nineamtext.text(savedtask);






// Saves text from textarea into local storage for all textboxes
$(".saveBtn").click(function (e) { 
  e.preventDefault();
  var text9am = $(".description9am").val();
  console.log(text9am);
  localStorage.setItem("9amtask", text9am)


  var text10am = $(".description10am").val();
  console.log(text10am);
  localStorage.setItem("10amtask", text10am);


});

$(function saveItem() {
    


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
