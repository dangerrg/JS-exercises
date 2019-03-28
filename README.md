# JS-exercises

27. Exercise: Callback functions, and the Date object

Follow the instructions below to create a script that will include a function that determines if a month includes any public holidays, and another that logs the holidays of the current month.
  1. Write a function called logItems that accepts one parameter, itemsToLog . Within the function, loop over itemsToLog and use console.log to output each one.
  2. Write a function called checkHolidaysInMonth that accepts three parameters, monthToCheck , allPublicHolidays , and callWithHolidays . Use a console.log statement within the checkHolidaysInMonth function that outputs "Checking
holidays for month X", where X is the value of monthToCheck .
  3. Within checkHolidaysInMonth , write a conditional that determines whether the publicHolidays parameter contains an
attribute matching the value of the month parameter. If the monthToCheck does match an attribute in the allPublicHolidays object, assign the value of the attribute to a variable holidays within the conditional.
  4. Call the callWithHolidays parameter as a callback within the conditional from the previous step, using the holidays variable as the itemsToLog .
  5. Test the checkHolidaysInMonth by calling it with the parameters 4 , holidaysInVaud , and logItems , i.e. the month May, the object representing public holidays in Vaud, and the function that will be executed as a callback.
  6. Use the Date object to get the current month in number format. Call checkHolidaysInMonth again but use the current month instead of the static value from 5.
