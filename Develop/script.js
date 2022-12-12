$(function () {

  // Function to be exected when a button is pressed
  $(".saveBtn").click(function () {    
    // Loops over all am & pm tasks and sets the content of the text area in the local storage
    for (let i = 1; i < 13; i++) {
      // Sets the value of all the textareas into the local storage
      localStorage.setItem([i]+ "amhourtask", $(".description"+ [i] +"am").val());
      localStorage.setItem([i] + "pmhourtask", $(".description"+ [i] +"pm").val());
    }
  });
  
  for (let i = 1; i < 13; i++) {
    // Gets all the am tasks from the local storage to display them
    var taskcontent = $(".description"+[i]+"am");
    var savedtask = localStorage.getItem([i] + "amhourtask");
    taskcontent.text(savedtask); 
  
    // Gets all the pm tasks
    var taskcontent = $(".description"+[i]+"pm");
    var savedtask = localStorage.getItem([i] + "pmhourtask");
    taskcontent.text(savedtask);
  }
  
  // Adds today's date to the top of the page
  var today = dayjs();
  $("#currentDay").text("Today's date is " + today.format("dddd, MMMM D"));
  
  // Sets the current hour as a variable
  var currenthour = dayjs().hour();
  
  // Translates the current hour being 0 to 24 for midnight
  if (currenthour == 0) {
    currenthour = 24;
  };
  
  // Current Hour
  for (let i = 1; i < 13; i++) {
    // Adds current hour to the content of the current hour text area for all the am options
    if (currenthour == i) {
      $(".description"+[i]+"am").attr("placeholder", "Current Hour");
    }
    // Adds current hour to the current hour text area for all pm options
    if (currenthour - 12 == i) {
      $(".description"+[i]+"pm").attr("placeholder", "Current Hour");
    }
  };
  
  for (let i = 1; i < 13; i++) {
    // Adds present attribute if the current hour is am
    if (currenthour == i) {
      var amtask = $("#hour-"+[i]);
      $(amtask).removeClass();
      $(amtask).addClass("row time-block present");
    }
  }
  
  for (let i = 12; i < 25; i++) {
    // Adds present attribute if the current hour is pm
    if (currenthour == i) {
      var pmtask = $("#hour-"+[i]);
      $(pmtask).removeClass();
      $(pmtask).addClass("row time-block present");
    } 
  };
  
  // Adds a past attribute to all pm hours and only for the am ones greater than 8 and lower than the current hour if the current hour is equal or in between 1 and 8 
  if (1 <= currenthour && currenthour <= 8) {
    // pm hours
    for (let i = 12; i < 25; i++) {
      $("#hour-"+[i]).removeClass();
      $("#hour-"+[i]).addClass("row time-block past");
    }
    // beginning of file am hours
    for (let i = 9; i < 12; i++) {
      $("#hour-"+[i]).removeClass();
      $("#hour-"+[i]).addClass("row time-block past");    
    }
    // end of file am hours
    for (let i = 1; i < 9; i++) {
      if (currenthour > i) {
        $("#hour-"+[i]).removeClass();
        $("#hour-"+[i]).addClass("row time-block past");  
      }
    }
  };
  
  // Adds past attribute to div between 9 and 12 am if the current hour is bigger than they are
  if (currenthour > 8) {
    for (let i = 9; i < 13; i++) {
      if (i < currenthour) {
        $("#hour-"+[i]).removeClass();
        $("#hour-"+[i]).addClass("row time-block past");  
      }  
    }
    // Adds past attribute to all the pm hours
    for (let i = 12; i < 25; i++) {
      if (i < currenthour) {
      $("#hour-"+[i]).removeClass();
      $("#hour-"+[i]).addClass("row time-block past");
      }
    }
  };
  });