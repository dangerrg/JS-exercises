//========================================================================
//Excercise 27: Callback functions, and the Date object
//========================================================================
const holidaysInVaud = {
  0: ["New Year´s Day", "Saint Berchtold"],
  2: ["Good Friday"],
  3: ["Easter Monday"],
  4: ["Ascension Day", "Whit Monday"],
  7: ["Swiss National Holiday"],
  8: ["Bettagsmontag"],
  11: ["Christmas"]
};

// 1.
//---------------------------------------------------------------------------
function logItems(itemsToLog) { // reference unit 19. Looping through arrays and objects
  for (let i = 0; i < itemsToLog.length; i++) {
    console.log(itemsToLog[i]);
  }
}

logItems(holidaysInVaud);
 
// 2.
function checkHolidaysInMonth(monthToCheck, allPublicHolidays, callWithHolidays) {
    console.log("Checking holidays for month " + monthToCheck);
// 3.
  if (allPublicHolidays[monthToCheck]) {
    const holidays = allPublicHolidays[monthToCheck];
// 4.
    callWithHolidays(holidays);
  }
}
// 5.
checkHolidaysInMonth(4, holidaysInVaud, logItems);
// 6.
const currentMonth = new Date().getMonth();
checkHolidaysInMonth(currentMonth, holidaysInVaud, logItems);
