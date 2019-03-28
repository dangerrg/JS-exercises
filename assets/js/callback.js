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
function logItems(itemsToLog) {
  for (let i = 0; i < itemsToLog; i++) {
    console.log(holidaysInVaud);
  }
}

logItems(1); // Will log holidaysInVaud object arrays once

// 2.
function checkHolidaysInMonth(monthToCheck, allPublicHolidays, callWithHolidays) {
    console.log("Checking holidays for month " + monthToCheck);
// 3.
  if (allPublicHolidays[monthToCheck]) {
    const holidays = allPublicHolidays[monthToCheck];
    callWithHolidays(holidays);
  }
}
// 5.
checkHolidaysInMonth(4, holidaysInVaud, logItems);
// 6.
const currentMonth = new Date().getMonth();
checkHolidaysInMonth(currentMonth, holidaysInVaud, logItems);
