// This function takes in a string that is camelCased and inserts dashes in between the words and lowercases all characters
// ie. kebabize('myCamelString');   =   my-camel-string

function kebabize(str) {
  let storeCapitals = 'ABCDEGFHIJKLMNOPQRSTUVWXYZ';
  let allLetters = 'ABCDEGFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let outputString = '';

  // go through each character in the user input string  
  for (let i = 0; i <str.length; i++){
    // Identify if a letter in the user input string(str) is a capital letter
    if (storeCapitals.indexOf(str[i]) !== -1){
      // adds "-" + the capital letter in lower case format
      outputString += '-' + str[i].toLowerCase();

      // identify if a letter in user input string is a lowercase 
    } else if(allLetters.indexOf(str[i]) !== -1){
      // ensures lowercasing of ever character reaching this part of the for-loop
      outputString += str[i].toLowerCase();
    } 
  }
    // if the 1st character in the outputString is a "-", remove it from the string
    if (outputString[0] === '-'){
      return outputString.slice(1);
    }
  return outputString;
}


