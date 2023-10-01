export const dateToString = unixDate => {
    const date = new Date(unixDate)
    const formattedString = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay()
    return formattedString
}

export const utcToLocalTime = (utcTimeString) => {
    const utcDate = new Date(utcTimeString);
    const localOffset = utcDate.getTimezoneOffset();
    const localDate = new Date(utcDate.getTime() - localOffset * 60000);
    return localDate.toLocaleString();
}

