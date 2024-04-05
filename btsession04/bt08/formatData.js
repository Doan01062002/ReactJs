function formatDate(date){

    let dayMonthYear = "";

    let day = date.getDay();
    let month = date.getMonth() + 1;
    if(month <10){
        month = "0" + month;
    }
    let year = date.getFullYear();

    dayMonthYear += `${day}/${month}/${year}`

    return dayMonthYear
}

export default formatDate;