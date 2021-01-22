//github link
//https://github.com/rakibHosen0/javaScript-assignment


//function for Kilometer converted to  meter
function kilometerToMeter(kilometer) {
    if (kilometer == null) {
        return "kilometer can not null"
    }
    if (kilometer < 0) {
        return "kilometer can not containe negative value";
    } else {
        
        return kilometer * 1000;
    }
   
}

// var kilometerToMeter = kilometerToMeter(500);
// console.log(kilometerToMeter);

//function for budget
function budgetCalculator(howManyWatch, howManyPhone, howManyLeptop) {
    if(howManyLeptop)
    if (howManyWatch < 0 || howManyPhone < 0 || howManyLeptop < 0) {
        return "value can not be negative";
    } else {
        const watchPrice = 50;
        const phonePrice = 100;
        const leptopPrice = 500;

        totalWatchCost = howManyWatch * watchPrice;
        totalPhoneCost = howManyPhone * phonePrice;
        totalLeptopCost = howManyLeptop * leptopPrice;

        totalCost = totalWatchCost + totalPhoneCost + totalLeptopCost;
        return totalCost;
    }
    
}
// var myBudget = budgetCalculator(1,2,1);
// console.log(myBudget);

// calculat hotel rent
function hotelCost(howManyDay) {
    if (howManyDay < 0) {
        return "Day must be positive value";
    }
    let totalHotelRent = 0;
    var firstTenDayHotelRent = 0;
    var secondTenDayHotelRent = 0;
    var contineuDay = 0;


    if (howManyDay <= 10) {
        firstTenDayHotelRent = howManyDay * 100;
    } else if (howManyDay > 10 && howManyDay <= 20) {
       firstTenDayHotelRent = 10 * 100;
       secondTenDayHotelRent =(howManyDay - 10)*80;
       
    }
    else if (howManyDay >= 21) {
        firstTenDayHotelRent = 10 * 100;
        secondTenDayHotelRent =10 * 80;
        contineuDay = (howManyDay -20) * 50;
    }

    return totalHotelRent = firstTenDayHotelRent+secondTenDayHotelRent+contineuDay;
}
// var hotelRent = hotelCost(21);
//  console.log(hotelRent);

//Find maximum langth of friendList  name
function megaFriend(friendList) {
    if (friendList.length == 0) {
        return "Arry length must have not emty";
    }
    var maxLengthName = friendList[0];
    for (var i = 0; i < friendList.length; i++){
        if (friendList[i].length > maxLengthName.length) {
            maxLengthName = friendList[i];
        }
    }
    return maxLengthName;
}
// var arry = ["rakib", "Rakib Hosen", "Faysal Ahmed", "Hridoy Saha"];
// var friend = megaFriend(arry);
