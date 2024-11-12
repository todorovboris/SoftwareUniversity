function lab02(bookPages, pagesForHour, totalDays){
    let totalHours = bookPages / pagesForHour;
    let hoursForDay = totalHours / totalDays;

    console.log(hoursForDay);

}

lab02(212,20,2);