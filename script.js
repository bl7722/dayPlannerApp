var userInput = [];
var schedule = $(".time-block")
var display = localStorage.getItem("schedule")
var sub = moment().format("a")
var time = moment().format("h")

for( let i = 9; i < 25; i++){
    var newTimeRow = $("<div>");
      newTimeRow.addClass("input-group form")
    
    var newTime = $("<div>");
      newTime.addClass("col-md-2 offset-md-1 hour" + (i))
      if(i < 12){
        sub = "AM"
        newTime.text(parseInt(i)+ " " + sub)
      }
      else if(i >= 13){
        sub= "PM"
        newTime.text(parseInt(i - 12)+ " " + sub)
      }
      else{
        sub= "PM"
            newTime.text(parseInt(i)+ " " + sub)
      }
  
  var newInput = $("<textArea>");
    newInput.addClass("form-control col-md-6")
    newInput.attr("id", "userInput"+i);
    newInput.text(localStorage.getItem("schedule" + i));
  
  var newBtn = $("<button>");
    newBtn.addClass("col-md-2 btn btn-primary btn-block saveBtn")
    newBtn.text("SAVE");
  
  var currentTime = moment().format("HH");
  var inputArea = document.querySelector(".hour" + i)
  var current = moment().format('MMMM Do YYYY, h:mm:ss a'); 
  
  $("#currentDay").html(current);
  
  
 
}