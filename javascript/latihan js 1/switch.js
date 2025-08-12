let DynamicsCompressorNode;
switch(new Date().getDay()){
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
        break;
    default:
    day = "unknown day";
}
console.log("today is : " + day);

let sekarang = new Date().getDay();
console.log(sekarang);