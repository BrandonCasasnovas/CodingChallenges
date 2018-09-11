/*The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.*/

// This function returns the sum of squares for all counting numbers up to the number passed
function findSumOfSquares(int) {

    let numberLimit = int;

    // Empty arrary used for storage of counting numbers

    countingNumbers = []

     // Pushes every natural counting number up to and including (int) to array: countingNumbers

    for (i = 1; i <= numberLimit; ++i) {

        if (i <= numberLimit) {

            countingNumbers.push(i);

            // console.log(countingNumbers);          

        }

    }

    // Creates new array of all squared countingNumbers

    let ListOfSquares = countingNumbers.map(x => x * x)

    // console.log(ListOfSquares);

    sumOfSquares=0;

    // Adds all numbers in the array(ListofSquares) containing the squared counting numbers

    for (i = 0; i < ListOfSquares.length; i++) {

        sumOfSquares += ListOfSquares[i];

    }

    return sumOfSquares;

}
function findSquareOfSum (int){

     let numberLimit = int;

    // Empty arrary used for storage of counting numbers

    countingNumbers = []

    // Pushes every natural counting number up to and including (int) to array: countingNumbers

    for (i = 1; i <= numberLimit; ++i) {

        if (i <= numberLimit) {

            countingNumbers.push(i);

            // console.log(countingNumbers);          

        }

    }

    // Adds all counting numbers in countingNumbers array

    let SumOfCountingNumbers = countingNumbers.reduce((accumulator, element) => accumulator + element, 0);

    // console.log(SumOfCountingNumbers);

    // Squares the sum of the counting numbers

    sum = Math.pow(SumOfCountingNumbers,2);

    // console.log(sum);

    return sum;

}

function findSumSquareDifference (){

    answer = findSquareOfSum(100) - findSumOfSquares(100);
    return answer;
}