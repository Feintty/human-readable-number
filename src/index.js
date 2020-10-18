module.exports =  function toReadable(number) {
    number = number.toString().replace(/^0*/, "");
    result = "";
    var splitted = number.split(/(?=(?:...)*$)/);
    switch (number.length) {
        case 1:
                result = (getSingleNumber(number));
            break;
        case 2:
            if (number < 20) {
                if (number !== "10")
                    result = (getNumberOfTen(number));
                else result = getDoubleNumber(number[0]);
            } else
                result = (getDoubleNumber(number[0]) + " " + getSingleNumber(number[1]));
            break;
        case 3:
            if (number !== "000") {
                if ((number.slice(1, 3) == "00")) {
                    result = getSingleNumber(number[0]) + " hundred";
                } else if ((number.slice(2, 3) == "0")) {
                    result = getSingleNumber(number[0]) + " hundred " + getDoubleNumber(number[1]);
                } else {
                    result = getSingleNumber(number[0]) + " hundred " + toReadable(number.slice(1, 3));
                }

            } else return ""
            break;
        case 4:
        case 5:
        case 6:
            result = toReadable(splitted[0]) + " thousand " + toReadable(splitted[1]);
            break;
        default:
            result = "zero";
    }
    result = result.replace(/\s*$/, "");
    return result.replace(/\s\s/g, " ");
}

function getSingleNumber(number) {
    switch (number) {
        case "0":
            return "";
            break;
        case "1":
            return "one";
            break;
        case "2":
            return "two";
            break;
        case "3":
            return "three";
            break;
        case "4":
            return "four";
            break;
        case "5":
            return "five";
            break;
        case "6":
            return "six";
            break;
        case "7":
            return "seven";
            break;
        case "8":
            return "eight";
            break;
        case "9":
            return "nine";
            break;
        default:
            return "";
    }
}

function getNumberOfTen(number) {
    switch (number) {
        case "11":
            return "eleven";
            break;
        case "12":
            return "twelve";
            break;
        case "13":
            return "thirteen";
            break;
        case "14":
            return "fourteen";
            break;
        case "15":
            return "fifteen";
            break;
        case "16":
            return "sixteen";
            break;
        case "17":
            return "seventeen";
            break;
        case "18":
            return "eighteen";
            break;
        case "19":
            return "nineteen";
            break;
    }
}

function getDoubleNumber(number) {
    switch (number) {
        case "1":
            return "ten";
            break;
        case "2":
            return "twenty";
            break;
        case "3":
            return "thirty";
            break;
        case "4":
            return "forty";
            break;
        case "5":
            return "fifty";
            break;
        case "6":
            return "sixty";
            break;
        case "7":
            return "seventy";
            break;
        case "8":
            return "eighty";
            break;
        case "9":
            return "ninety";
            break;
    }
}
