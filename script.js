// FUNCTION

function palindromeCheck(str) {                                                   
  
    const nonAlphaNum = /[\W_]/g;                                                    
    
    let nonReversed = str.toLowerCase().replace(nonAlphaNum, '');                   
    let reversedVersion = nonReversed.split('').reverse().join('');                 
    
    return reversedVersion === nonReversed;                                         
  }
  
  // TEST EXAMPLE
  
  console.log(palindromeCheck("Eye_")); // True
  console.log(palindromeCheck("Torrent")); // False 
  

  // JAVASCRIPT TO HTML
  
  let submitButtonEvent = document.getElementById("submitButton");        
      submitButtonEvent.addEventListener("click", function() {            
      'use strict';                                                      
  
      let value = document.getElementById("inputWord").value;          
      let notification = document.getElementById("notification");         
      let displayWord = document.getElementById("displayWord");
    
      if(palindromeCheck(value)) {                                      
        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is a Palindrome!`;     
        displayWord.innerHTML = 
          `Forwards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join(''); 
        
      } else {
        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is NOT a palindrome!`;
        displayWord.innerHTML = 
          `Forwards: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Backwards: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');  
      }
  });
  
