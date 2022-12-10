// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs()
$("#currentDay").text("Today's date is " + today.format("dddd, MMMM D"));

// Gets the current hour
var currenthour = dayjs().hour();
var date = "th";

// Translates the current hour being 0 to 24 for midnight
if (currenthour == 0) {
  currenthour = 24;
};

// Gets the current day of the month
var currentday = dayjs().date();

// Adds th, nd, rd, and th
if (currentday == 1 || currentday == 11 || currentday == 21 || currentday == 31) {
} else if (currentday == 2){
  date = "nd";
} else if (currentday == 3){
  date = "rd";
} else if ((currentday == 8) || (currentday == 20)) {
  date = "th";
}

// Current Hour content
// Adds current hour to the content of the current hour text area for all the am options
for (let i = 1; i < 13; i++) {
  if (currenthour == i) {
    $(".description"+[i]+"am").text("Current Hour");
}};

// Adds current hour to the current hour text area for all pm options
for (let i = 1; i < 13; i++) {
  if (currenthour - 12 == i) {
    $(".description"+[i]+"pm").text("Current Hour");
}};
// Adds current hour text content to midnight
function midnight() {
if (currenthour == 24) {
  $(".description12pm").text("Current Hour");
}};
setInterval(midnight,1000);



// Loops over all of the am elements
for (let i = 1; i < 13; i++) {
  // Adds present attribute if the current hour is am
  if (currenthour == i) {
    var amtask = $("#hour-"+[i]);
    $(amtask).removeClass();
    $(amtask).addClass("row time-block present");
    $(".description"+ [i] + "am")
// Adds a past atttribute to all element before the current hour 
// except all am elements less than 9 
} else if (i < currenthour && i > 9) {
  $("#hour-"+[i]).removeClass();
  $("#hour-"+[i]).addClass("row time-block past");
// Adds a future attribute if the index and current hour are less but greater than 8
}
};

// Adds a past attribute to all pm hours and only for the am ones greater than 8 abd lower than the current hour if the current hour is between 1 and 7 
if (1 <= currenthour && currenthour <= 8) {
  for (let i = 12; i < 25; i++) {
  $("#hour-"+[i]).removeClass();
  $("#hour-"+[i]).addClass("row time-block past");
    }
  for (let i = 9; i < 12; i++) {
  $("#hour-"+[i]).removeClass();
  $("#hour-"+[i]).addClass("row time-block past");    
    }
  for (let i = 1; i < 9; i++) {
    if (currenthour > i) {
      $("#hour-"+[i]).removeClass();
      $("#hour-"+[i]).addClass("row time-block past");  
    }}
  };



// Loops over all hours over 12, AKA 12-24pm
for (let i = 12; i < 25; i++) {
  // Adds present attribute if the current hour is pm
  if (currenthour == i) {
  var pmtask = $("#hour-"+[i]);
  $(pmtask).removeClass();
  $(pmtask).addClass("row time-block present");

  // Adds past attribute if the index is less than the current hour
} else if (i < currenthour) {
$("#hour-"+[i]).removeClass();
$("#hour-"+[i]).addClass("row time-block past");
  // Adds a future attribute if the index is greater than the current hour 
} else if (i > currrenthour) {
$("#hour-"+[i]).removeClass();
$("#hour-"+[i]).addClass("row time-block future");
}};

// Saves text from textarea into local storage for all textboxes
$(".saveBtn").click(function (e) { 
  e.preventDefault();
  // Loops over all am tasks and sets the content of the text are in the local storage
  for (let i = 1; i < 13; i++) {
    localStorage.setItem([i] + "amhourtask", $(".description"+[i]+"am").val());
  }
  // Loops over all pm tasks
  for (let i = 1; i < 13; i++) {
    localStorage.setItem([i] + "pmhourtask", $(".description"+ [i] +"pm").val());
  }
});

// Gets all the am tasks from the local storage to display them
for (let i = 1; i < 13; i++) {
  var taskcontent = $(".description"+[i]+"am");
  var savedtask = localStorage.getItem([i] + "amhourtask");
  taskcontent.text(savedtask); 
}

// Gets all the pm tasks
for (let i = 1; i < 13; i++) {
  var taskcontent = $(".description"+[i]+"pm");
  var savedtask = localStorage.getItem([i] + "pmhourtask");
  taskcontent.text(savedtask);
}

