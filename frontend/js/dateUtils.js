function getOrdinalSuffix(day) {

    if (day >= 11 && day <= 13) {
        return "th";
    }

    switch (day % 10) {

        case 1:
            return "st";

        case 2:
            return "nd";

        case 3:
            return "rd";

        default:
            return "th";

    }

}


function formatFullDate(timestamp) {

    if (!timestamp) {
        return "Release date unknown";
    }

    const date =
        new Date(timestamp);

    const day =
        date.getDate();

    const month =
        date.toLocaleString(
            "en-US",
            { month: "long" }
        );

    const year =
        date.getFullYear();

    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;

}


function formatYear(timestamp) {

    if (!timestamp) {
        return "Year unknown";
    }

    return new Date(timestamp)
        .getFullYear();

}