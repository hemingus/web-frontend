const dateToString = unixDate => {
    const date = new Date(unixDate)
    const formattedString = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay()
    return formattedString
}

export default dateToString