function vacationBooksList(input){
    let countPages = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let days = Number(input[2]);

    let totalHoursForOneBook = countPages / pagesForHour;
    let hoursPerDayForOneBook = totalHoursForOneBook / days;

    console.log(hoursPerDayForOneBook);

}

vacationBooksList(['212','20','2'])