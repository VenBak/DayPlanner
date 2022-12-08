// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs()
$(".lead").text("Today's date is " + today.format("dddd, MMMM, D"));

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
} else if (currentday == 4 || currentday == 20) {
  date = "th";
}

// Get the saved tasks from local storage for all hours
var nineamtext = $(".description9am");
var saved9amtask = localStorage.getItem("9amtask");
nineamtext.text(saved9amtask);

var tenamtext = $(".description10am");
var saved10amtask = localStorage.getItem("10amtask");
tenamtext.text(saved10amtask);

var elevenamtext = $(".description11am");
var saved11amtask = localStorage.getItem("11amtask");
elevenamtext.text(saved11amtask);

var twelveamtext = $(".description12am");
var saved12amtask = localStorage.getItem("12amtask");
twelveamtext.text(saved12amtask);

var onepmtext = $(".description1pm");
var saved1pmtask = localStorage.getItem("1pmtask");
onepmtext.text(saved1pmtask);

var twopmtext = $(".description2pm");
var saved2pmtask = localStorage.getItem("2pmtask");
twopmtext.text(saved2pmtask);

var threepmtext = $(".description3pm");
var saved3pmtask = localStorage.getItem("3pmtask");
threepmtext.text(saved3pmtask);

var fourpmtext = $(".description4pm");
var saved4pmtask = localStorage.getItem("4pmtask");
fourpmtext.text(saved4pmtask);

var fivepmtext = $(".description5pm");
var saved5pmtask = localStorage.getItem("5pmtask");
fivepmtext.text(saved5pmtask);

var sixpmtext = $(".description6pm");
var saved6pmtask = localStorage.getItem("6pmtask");
sixpmtext.text(saved6pmtask);

var sevenpmtext = $(".description7pm");
var saved7pmtask = localStorage.getItem("7pmtask");
sevenpmtext.text(saved7pmtask);

var eightpmtext = $(".description8pm");
var saved8pmtask = localStorage.getItem("8pmtask");
eightpmtext.text(saved8pmtask);

var ninepmtext = $(".description9pm");
var saved9pmtask = localStorage.getItem("9pmtask");
ninepmtext.text(saved9pmtask);

var tenepmtext = $(".description10pm");
var saved10pmtask = localStorage.getItem("10pmtask");
tenpmtext.text(saved10pmtask);

var elevenpmtext = $(".description11pm");
var saved11pmtask = localStorage.getItem("11pmtask");
elevenpmtext.text(saved11pmtask);

var twelvepmtext = $(".description12pm");
var saved12pmtask = localStorage.getItem("12pmtask");
twelvepmtext.text(saved12pmtask);

var oneamtext = $(".description1am");
var saved1amtask = localStorage.getItem("1amtask");
oneamtext.text(saved1amtask);

var twoamtext = $(".description2am");
var saved2amtask = localStorage.getItem("2amtask");
twoamtext.text(saved2amtask);

var three3amtext = $(".description3am");
var saved3amtask = localStorage.getItem("3amtask");
threeamtext.text(saved3amtask);

var fouramtext = $(".description4am");
var saved4amtask = localStorage.getItem("4amtask");
fouramtext.text(saved4amtask);

var fiveamtext = $(".description5am");
var saved5amtask = localStorage.getItem("5amtask");
fiveamtext.text(saved5amtask);

var sixamtext = $(".description6am");
var saved6amtask = localStorage.getItem("6amtask");
sixamtext.text(saved6amtask);

var sevenamtext = $(".description7am");
var saved7amtask = localStorage.getItem("7amtask");
sevenamtext.text(saved7amtask);

var eightamtext = $(".description8am");
var saved8amtask = localStorage.getItem("8amtask");
eightamtext.text(saved8amtask);



// Saves text from textarea into local storage for all textboxes
$(".saveBtn").click(function (e) { 
  e.preventDefault();
  // 9 AM local storage set
  var text9am = $(".description9am").val();
  localStorage.setItem("9amtask", text9am);

  // Same goes for the rest of the list
  var text10am = $(".description10am").val();
  localStorage.setItem("10amtask", text10am);

  var text11am = $(".description11am").val();
  localStorage.setItem("11amtask", text11am);

  var text12am = $(".description12am").val();
  localStorage.setItem("10amtask", text12am);

  var text1pm = $(".description1pm").val();
  localStorage.setItem("1pmtask", text1pm);

  var text2pm = $(".description2pm").val();
  localStorage.setItem("2pmtask", text2pm);

  var text3pm = $(".description3pm").val();
  localStorage.setItem("3pmtask", text3pm);

  var text4pm = $(".description4pm").val();
  localStorage.setItem("4pmtask", text4pm);

  var text5pm = $(".description5pm").val();
  localStorage.setItem("5pmtask", text5pm);

  var text6pm = $(".description6pm").val();
  localStorage.setItem("6pmtask", text6pm);

  var text7pm = $(".description7pm").val();
  localStorage.setItem("7pmtask", text7pm);

  var text8pm = $(".description8pm").val();
  localStorage.setItem("8pmtask", text8pm);

  var text9pm = $(".description9pm").val();
  localStorage.setItem("9pmtask", text9pm);

  var text10pm = $(".description10pm").val();
  localStorage.setItem("10pmtask", text10pm);

  var text11pm = $(".description11pm").val();
  localStorage.setItem("11pmtask", text11pm);

  var text12pm = $(".description12pm").val();
  localStorage.setItem("12pmtask", text12pm);

  var text1am = $(".description1am").val();
  localStorage.setItem("1amtask", text1am);

  var text2am = $(".description2am").val();
  localStorage.setItem("2amtask", text2am);

  var text3am = $(".description3am").val();
  localStorage.setItem("3amtask", text3am);

  var text4am = $(".description4am").val();
  localStorage.setItem("4amtask", text4am);

  var text5am = $(".description5am").val();
  localStorage.setItem("5amtask", text5am);

  var text6am = $(".description6am").val();
  localStorage.setItem("6amtask", text6am);

  var text7am = $(".description7am").val();
  localStorage.setItem("7amtask", text7am);

  var text8am = $(".description8am").val();
  localStorage.setItem("8amtask", text8am);
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
