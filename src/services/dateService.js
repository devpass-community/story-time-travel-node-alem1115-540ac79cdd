const getCurrentDate = () => {
    // Create a new date object
    let date = new Date();

    // Get the day, month and year
    let day = date.getDate();
    let month = date.getMonth() + 1; // getMonth() returns 0-11
    let year = date.getFullYear();

    // Add leading zeros if needed
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }

    // Format the date as dd/mm/yyyy
    let formattedDate = year + "-" + month + "-" + day

    // Log the result
    return formattedDate // e.g. 17/05/2023
};

module.exports = {
    getCurrentDate
}