// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var now12Hour = dayjs().format('dddd, MMMM D, YYYY h:mm A');
  var now24HourTime = dayjs().format('H');
  console.log(now12Hour, now24HourTime);
  var timeBlock = document.querySelectorAll('.time-block');

  setInterval(function () {
    //document.getElementById("currentDay").textContent = now12Hour;
    $('#currentDay').text(now12Hour)
  }, 1000);

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  
  //HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


// click listener event
  function saveItem() {
     var idName = $(this).parent().attr('id');
     var text = $(this).siblings('.description').val();
     localStorage.setItem(idName,text)

    console.log(idName, text)
  }

function onLoadSavedItems() {
  var loadItems = Object(localStorage);
  var pm1 = loadItems[valueOf];

  console.log(loadItems, pm1);

} 

 
  $('.saveBtn').on("click", saveItem);


//set correct class based on current time

  function applyRemoveClass() {
    for (i = 0; i < timeBlock.length; i++) {
      idTime = $(timeBlock[i]).attr('id').split('hour-');
      idName = $(timeBlock[i]).attr('id');
      numberSign = "#";
      id = `${numberSign}${idName}`
      if (Number(idTime[1]) < now24HourTime) {
        $(id).removeClass('present', 'future');
        $(id).addClass('past');
      }
      if (Number(idTime[1]) === now24HourTime) {
        $(id).removeClass('past', 'future');
        $(id).addClass('present');
      }
      if (Number(idTime[1]) > now24HourTime) {
        $(id).removeClass('present', 'past');
        $(id).addClass('future');
      }
      console.log(idTime[1], idName, id, now24HourTime);
    }
  }

 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  setInterval(function () {
    applyRemoveClass();
  }, 300000);

  applyRemoveClass();
  onLoadSavedItems();
});
