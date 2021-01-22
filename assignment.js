// Kilometer to meter converter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    
    if(kilometer < 0) {
        
        return "Sorry! Invalid Input. Try Again"; //Error Message
    }
    return meter;
}
console.log(kilometerToMeter(1));



//Budget Calculator

function budgetCalculator(watch, phone, laptop) {
    var total = 0;
    if(watch < 0 || phone < 0 || laptop <0){
        return "Sorry! Quantity of Item is Invalid. Try again"; //Error message
    }
    else {
        var watchTotal = watch * 50;
        var phoneTotal = phone * 100;
        var laptopTotal = laptop * 500;
        total = watchTotal + phoneTotal + laptopTotal;
    }
    return total;
}
console.log(budgetCalculator(1, 3, 5));



//Hotel Cost

function hotelCost(days) {
    var cost = 0;
    if(days < 0) {
        return "Sorry! Invalid input. Try again."; //Error message
    }
    if(days <= 10) {
        cost = days * 100;
    }
    if(days > 10 && days <= 20){
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        cost = firstTenDays + secondTenDays;
    }
    else if(days > 20) {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var otherDays = remaining * 50;
        cost = firstTenDays + secondTenDays + otherDays; 
    }
    return cost;
}
console.log(hotelCost(2));



//Largest Item in a array

function megaFriend(array) {
    var largest = [0];
    for (i = 0; i < array.length; i++) {
      if (array[i].length > largest.length) {
        largest = array[i];
      }
    }
    return largest;
  }
  var examples = ["Al", "Ali", "Aldo", "Alden", "Alonzo", "Alberto", "Abdullah", "Augustine", "Alexzander", "Bartholomew"];
  console.log(megaFriend(examples));