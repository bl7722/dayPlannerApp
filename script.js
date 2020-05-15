var userInput = [];
var schedule = $(".time-block")
var display = localStorage.getItem("schedule")
var time = moment().format("h")
var pmAm = moment().format("a")

for( let i = 9; i < 25; i++){
    var newTimeRow = $("<div>");
      newTimeRow.addClass("input-group form")
    
    var newTime = $("<div>");
      newTime.addClass("col-md-2 offset-md-1 hour" + (i))
      if(i < 12){
        pmAm = "AM"
        newTime.text(parseInt(i)+ " " + pmAm)
      }
      else if(i >= 13){
        pmAm= "PM"
        newTime.text(parseInt(i - 12)+ " " + pmAm)
      }
      else{
        pmAm= "PM"
            newTime.text(parseInt(i)+ " " + pmAm)
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
  
  function updateDay(){

    current = moment().format('MMMM Do YYYY, h:mm:ss a'); 
    $("#currentDay").html(current);
    
  }

      if( i === parseInt(currentTime)){
        (newInput).addClass("present")
      }

      else if( i > parseInt(currentTime)){
        (newInput).addClass("future")
      }

      else if ( i < parseInt(currentTime)){
        (newInput).addClass("past")
      };
  
      newTimeRow.append(newTime);
      newTimeRow.append(newInput);
      newTimeRow.append(newBtn);
      schedule.append(newTimeRow);
  
  setInterval(updateDay,1000);
  
    newTimeRow.on("click","button",function(event){
        event.preventDefault();
        var userInput = ($(this)).prev().val();
        localStorage.setItem("schedule" + i, userInput);
      
    });
  
 
}