
function double(number){
    return number * 2;
}

function square(number){
    return number * number;
}

function isEven(number){
    if(number % 2 === 0){
        return "Even"
    }
    else {
        return "Not Even";
    }
}

function isOdd(number){
    if(number % 2 != 0){
        return "Odd"
    }
    else {
        return "Not Odd";
    }
}



//Testing functions
//Doubling tests
console.log(double(8)); //Should print 16 to console
//Square tests
console.log(square(5)); //Should print 25 to console
//Even tests
console.log(isEven(3)); //Should print "Not Even" to console
console.log(isEven(2)); //Should bring "Even" to console
//Odd tests
console.log(isOdd(3)); //Should print "Odd" to console
console.log(isOdd(2)); //Should bring "Not Odd" to console