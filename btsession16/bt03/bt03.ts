enum weekDays{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

for (let day in weekDays) {
    if (isNaN(Number(day))) {
      console.log(day);
    }
  }