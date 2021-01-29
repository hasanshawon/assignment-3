//https://hasanshawon.github.io/assignment-3
// Kilometer to meter convert 
function kilometerToMeter(kilometer) {

    if (kilometer < 0) {
        // for input negative Value 
        return "The negative Value  not accepted ";
    } else if (kilometer == null) {
        // when input is null
        return "Input Require ";
    } else {
        // all positive value 
        return kilometer * 1000;
    };
};


console.log(kilometerToMeter(9));
//== End=


//=Budget Calculator  start

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        // for input negative Value
        return "The negative Value not accepted ";
    } else if (watch == null && phone == null && laptop == null) {
        // when input is null
        return "Input Require ";

    } else {
        // all positive value 
        return watch * 50 + phone * 100 + laptop * 500;
    };
};

console.log(budgetCalculator(5,7,3));

//==== End



//=== hotelCost  start ==
function hotelCost(day) {

    if (day < 0) {
        return ' please Enter a valid number ';

    } else {
        if (day <= 10) {
            
            var totalCost = day * 100;
            return totalCost;

        } else if (day <= 20) {

            day = day - 10;
            var cost2 = day * 80;
            
            var totalCost = cost2 + (10 * 100);
            return totalCost;

        } else {
    
            day = day - 20;
            var cost3 = day * 50;
            
            var totalCost = cost3 + (10 * 100) + (10 * 80);
            return totalCost;
        };
    };
};


console.log(hotelCost(18));

//== End===



// ====megafriend  start

function megaFriend(arrey) {

    var biggestName = arrey[0]

    for (var i = 0; i < arrey.length; i++) {

        var element = arrey[i];

        if (element.length > biggestName.length) {

            biggestName = element;
        }
    }
    return biggestName;
}


var arrey = ["programming-hero",  "bangladesh", "indonesia"];


console.log(megaFriend(arrey));


// End