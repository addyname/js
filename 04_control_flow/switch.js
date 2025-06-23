const birthday = "1 May 2001"

switch (birthday) {
    case "2 May 2002":
        console.log(`Myself Adnan Ahmad. My date of birth is on ${birthday}.`)
        break;
    case "1 May 2001":
        console.log(`Myself Adnan Ahmad. My date of birth is on ${birthday}.`)
        break;
    case "3 May 2003":
        console.log(`Myself Adnan Ahmad. My date of birth is on ${birthday}.`)
    break;

    default:
        console.log("Date of birth not found.")
        break;
}