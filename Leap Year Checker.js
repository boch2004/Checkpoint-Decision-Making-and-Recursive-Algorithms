    function isLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} هي سنة كبيسة`;
        } else {
        return `${year} ليست سنة كبيسة`;
        }
    }

