// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

function checkPrimes(arr) {
    let primeStatus = [];
    for (let i = 0; i < arr.length; i++) {
        primeStatus.push(isPrime(arr[i]));
    }
    return primeStatus;
}


let array = [7, 4, 9, 11];
console.log("Prime status of each element:[17, 4, 9, 11]=", checkPrimes(array));
