/*Write a function, persistence, that takes in a positive parameter num and returns its
  multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
  example: persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2   */


function persistence(num) {
    // Seperates all digits and puts them in an array
    digitsArray = Array.from(String(num),Number);
    persistenceNum = 0

    // runs everytime the length of digitsArray is not equal to 1 (which is our goal)
    while(digitsArray.length != 1){

        // multiplies all digits in the array
        multiplicative = digitsArray.reduce((a, b) => a * b);
        // resets the array with the new multiplicative value
        digitsArray = Array.from(String(multiplicative),Number);
        
        // every time the while loop runs, add 1 for how many attempts it takes to get to 1 digit
        persistenceNum++; 

        console.log(digitsArray);     
        } 
        // returns the amount of times it took to get to 1
        if(digitsArray.length == 1) {
            return persistenceNum;
            console.log(persistenceNum);
        } 
 
}
   
