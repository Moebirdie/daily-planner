// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var now12Hour = dayjs().format('dddd, MMMM D, YYYY h:mm A');
  var now24HourTime = dayjs().format('H');
  console.log(now12Hour, now24HourTime);
  var timeBlock = document.querySelectorAll('.time-block');
  var calendarItem = document.getElementsByClassName("description");


  setInterval(function () {
    $('#currentDay').text(now12Hour)
  }, 1000);


  function saveItem() {
    var idName = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    localStorage.setItem(idName, text)

    console.log(idName, text)
  }

  // on page load add items from storage
  function loadSavedItems() {
    console.log(timeBlock); //nodeList
    for (i = 0; i < timeBlock.length; i++) {
      var blockId = $(timeBlock[i]).attr('id');
      var items = localStorage.getItem(blockId);
      $(calendarItem[i]).text(items);
      console.log("loadSaved: " + blockId, items, calendarItem[i]);

    }
  }

  function addRemoveClass() {
    for (i = 0; i < timeBlock.length; i++) {
      var idTime = $(timeBlock[i]).attr('id').split('hour-');
      var idName = $(timeBlock[i]).attr('id');
      var numberSign = "#";
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
      refresh();
    }
  }

  function refresh() {
    $("#calendarcontainer").load(window.location.href + " #calendarcontainer");
  }

function clearAll() {
  localStorage.clear();
  refresh();
}



  //update the calendar colors every 5 minutes
  setInterval(function () {
    addRemoveClass();
    console.log("banana");
  }, 300000);

  $('.saveBtn').on("click", saveItem);
  $('#clearBtn').on("click", clearAll);

  addRemoveClass();
  loadSavedItems();
});
