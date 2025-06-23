function findDates(text) {
    const regex = /\b\d{2}[\/.-]\d{2}[\/.-]\d{4}\b/g;
    return text.match(regex);
}



console.log(findDates("Today is 21-06-2025 and tomorrow is 22/06/2025.")); 