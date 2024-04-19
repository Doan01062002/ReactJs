"use strict";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Sunday"] = 0] = "Sunday";
    weekDays[weekDays["Monday"] = 1] = "Monday";
    weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 3] = "Wednesday";
    weekDays[weekDays["Thursday"] = 4] = "Thursday";
    weekDays[weekDays["Friday"] = 5] = "Friday";
    weekDays[weekDays["Saturday"] = 6] = "Saturday";
})(weekDays || (weekDays = {}));
for (let day in weekDays) {
    if (isNaN(Number(day))) {
        console.log(day);
    }
}
