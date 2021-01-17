class Deliverable {
  
  constructor(name, date, time) {
    this.name = name;
    this.month = this.dateToMonth(date);
    this.day = this.dateToDay(date);
    this.year = this.dateToYear(date);
    this.time = this.formatTime(time);
  }

  //this function will turn the name of the month into a corressponding number value (e.g january -> 1)
  dateToMonth(date) {
    var componentsOfDates = date.split("_");
    var month = componentsOfDates[0];

    var monthsFull = [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER"
    ];
    var monthsAbbreviated = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEPT",
      "OCT",
      "NOV",
      "DEC"
    ];

    var monthNum = 0;
    var i = 0;

    for (i = 0; i < monthsFull.length; i++) {
      if (month.toUpperCase() == monthsFull[i]) {
        return i + 1;
      }
    }

    i = 0;

    for (var i = 0; i < monthsAbbreviated.length; i++) {
      if (month.toUpperCase() == monthsAbbreviated[i]) {
        return i + 1;
      }
    }

    if (month.toUpperCase() == "SEP") {
      return 9;
    }

    return monthNum;
  }

  //this method will remove any additional characters from the date (e.g remove the rd from 3rd)
  dateToDay(date) {
    var componentsOfDates = date.split("_");
    var day = componentsOfDates[1];

    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    var newDate = "";

    var letterInDay = 0;
    var validNumbers = 0;

    //go through all the letters in the day string
    for (letterInDay = 0; letterInDay < day.length; letterInDay++) {
      //go through the possible valid numbers
      for (validNumbers = 0; validNumbers < numbers.length; validNumbers++) {
        //if that letter is a valid number
        if (day.charAt(letterInDay) == numbers[validNumbers]) {
          //concatenate onto the date
          newDate = newDate.concat(day.charAt(letterInDay));
        }
      }
    }

    return newDate;
  }

  dateToYear(date) {
    var componentsOfDates = date.split("_");
    return componentsOfDates[2];
  }

  formatTime(time) {
    
    return time.replace("_", " ");
  }
  returnFullTime() {
    //format time here
    return this.month + "/" + this.day + "/" + this.year + " " + this.time;
  }
}

