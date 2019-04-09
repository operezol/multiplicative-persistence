var multiplicativePersistence = function(number, log) {
    if (log) {
        console.log(number);
    }
    persistence = 0;
    while (number > 10) {
        persistence++;
        number = digitSumatory(number);
        if (log) {
            console.log(number);
        }
    }
    if (log) {
        console.log("Persistence = " + persistence);
    }
    return persistence;
};

var digitSumatory = function(number) {
    var textNumber = number.toString();
    var result = 1;
    for (var i = 0; i < textNumber.length; i++) {
        result *= parseInt(textNumber[i]);
    }
    return result;
};

var maxPersistence = 2;

for (let index = 0; index < 2777777888888999999999; index++) {
    var persistence = multiplicativePersistence(index, false);
    if (persistence >= maxPersistence) {
        maxPersistence = persistence;
        multiplicativePersistence(index, true)
    }
}