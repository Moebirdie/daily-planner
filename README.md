# daily-planner
Calendar apps can be very basic or rather intricate depending on the use case of the app.  This project is specifically very basic by design to display the use of third party APIs, specifically Days.js, the Web Storage API and JQuery.  Days.js is a JavaScript library that focuses on manipulating date and time, while the Web Storage API provides the means for browsers to store data in a key/pair structure. In this case we are focusing on local storage which allows the data to persist even after the browser closes. JQuery is a Javascript library that makes various JavaScript functions more succinct.

Although the calendar page only displays the hours 8am to 8pm, the code was written to accept any/all hours based on a 24 hour day.  The change would simply be made to the html where a one hour code block could be copied and the id updated to the appropriate 24 hour integer.


## Installation
This is a browser based app which requires no installation, only a url to access.


### Usage
When opened by the user for the first time, a one page calendar is shown with the current date and time displayed in the header.  An empty calendar renders below with hourly time blocks to enter and save data.  The expected behavior using this calendar is as follows:
    - I can visually see which hourly time slots are in the past, current and future based on their color.
    - I can see within 5 mins after any given hour if an hourly slot has changed from present to past and/or future to present  
    - As a user, I can enter data into a time slot and click the save button.  That data will persist.
    - As a user, if I close my browser and reopen the webpage, the data will re-populate on page load.
    - As a user, if I refresh the page, the data will persist.
    - As a user, if I clear an item from a time block and click save, it will remove the item permanently.
    - As a user, if I click the clear-all button at the top of the calendar, it will clear all calendar entries for the day.