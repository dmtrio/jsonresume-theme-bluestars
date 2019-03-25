const getDateObj = (dateString) => {
    const splitString = dateString.split("-");
    const year = splitString[0] || '';
    const month = splitString[1] || '';
    const day = splitString[2] || '';
    
    return {
        year,
        month,
        day,
    }
};

const getMonthName = (monthNum) => {
    const number = Number.parseInt(monthNum);
    const months = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
    }
    return months[number];
};

export default {
    formatDate: function formatDate(dateString) {
        const dateObj = getDateObj(dateString)
        dateObj.monthName = getMonthName(dateObj.month);

        return dateObj;
    },

}