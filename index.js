
document.addEventListener('DOMContentLoaded', () => {
     // Get references to input fields for each denomination
    const et2000 = document.getElementById('et2000');
    const et500 = document.getElementById('et500');
    const et200 = document.getElementById('et200');
    const et100 = document.getElementById('et100');
    const et50 = document.getElementById('et50');
    const et20 = document.getElementById('et20');
    const et10 = document.getElementById('et10');
    const et5 = document.getElementById('et5');
    const et2 = document.getElementById('et2');
    const et1 = document.getElementById('et1');
    // Get references to other input fields

    // Get references to elements where the calculated values will be displayed
    const txt2000 = document.getElementById('txt2000');
    const txt500 = document.getElementById('txt500');
    const txt200 = document.getElementById('txt200');
    const txt100 = document.getElementById('txt100');
    const txt50 = document.getElementById('txt50');
    const txt20 = document.getElementById('txt20');
    const txt10 = document.getElementById('txt10');
    const txt5 = document.getElementById('txt5');
    const txt2 = document.getElementById('txt2');
    const txt1 = document.getElementById('txt1');
    // Get references to other result elements
  
    // Get references to the final cash total and the button to reset the calculator
    const txtFinalCash = document.getElementById('txtFinalCash');
    const txtFinalCashInWords = document.getElementById('txtFinalCashInWords');
    const btnReset = document.getElementById('btnReset');
  
    // Arrays to store references to input fields and displayed values for each denomination
    const cashInputs = [et2000, et500, et200, et100,et50,et20,et10,et5,et2,et1];
    const cashTexts = [txt2000, txt500, txt200, txt100,txt50,txt20,txt10,txt5,txt2,txt1];
  

     // Add event listeners to input fields for each denomination to update values
    cashInputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        cashCalculate(index);
      });
    });
  

    // Add event listener to the reset button to clear all values
    btnReset.addEventListener('click', clearData);
  
     // Function to calculate the value of each denomination and update the total
    function cashCalculate(index) {
         // Calculate the value of the denomination based on the input value
      // Update the displayed value for the denomination
      // Update the total cash value and display it
      const denominations = [2000, 500, 200, 100,50,20,10,5,2,1];
      const rowValue = cashInputs[index].value * denominations[index];
      cashTexts[index].textContent = rowValue.toFixed(0);
      // Perform calculations for other denominations
      // Update respective result elements
  

      totalCash();
    }

    // Function to calculate the total cash value and display it in words
    function totalCash() {
      // Calculate the total cash value based on the values of each denomination
      // Display the total cash value
      // Display the total cash value in words

      let totalCashValue = 0;
      cashTexts.forEach((text) => {
        totalCashValue += parseInt(text.textContent);
      });
      txtFinalCash.textContent = 'Total Cash: ' + totalCashValue;

      txtFinalCashInWords.textContent = `Total Cash In Words: ${convertToWords(totalCashValue)}`;
    }
  
      // Function to clear all input values and displayed values
    function clearData() {
      // Clear the input values for each denomination
      // Reset the displayed values for each denomination
      // Update the total cash value and display it
      cashInputs.forEach((input) => {
        input.value = '';
      });
      cashTexts.forEach((text) => {
        text.textContent = '0';
      });
      totalCash();
    }
  
     // Function to convert a number to words
   function convertToWords(number) {
     // Implement the logic to convert a number to words
      // Return the words representation of the number
      const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
      const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  
      if (number === 0) {
        return 'Zero';
      }
  
      let words = '';
  
      if (Math.floor(number / 10000000) > 0) {
        words += convertToWords(Math.floor(number / 10000000)) + ' Crore ';
        number %= 10000000;
      }
  
      if (Math.floor(number / 100000) > 0) {
        words += convertToWords(Math.floor(number / 100000)) + ' Lakh ';
        number %= 100000;
      }
  
      if (Math.floor(number / 1000) > 0) {
        words += convertToWords(Math.floor(number / 1000)) + ' Thousand ';
        number %= 1000;
      }
  
      if (Math.floor(number / 100) > 0) {
        words += convertToWords(Math.floor(number / 100)) + ' Hundred ';
        number %= 100;
        
      }
  
      if (number > 0) {

          if (number < 10) {

              words += units[number]; // units[4]

              console.log(number);

          }
          else if (number < 20) {
             words += teens[number - 10]; // teens[5]
             console.log(number - 10);
             console.log(number);
             console.log("-----" + words);
          } 

          else {
              words += tens[Math.floor(number / 10)];  //  40 / 10 = 4
              console.log(Math.floor(number / 10));
              console.log(number);
              console.log("Elsei " + words);
              console.log(number % 10 );

              if (number % 10 > 0) {

                console.log("__________________");  
                console.log(number);

                words += ' ' + units[number % 10]; // units[5]

                console.log(number % 10);
                console.log(number);
                console.log(" Elsei Two " + words);
              }
          }

      }
       
  
      return words.trim();
    }
 



     // Event listener to prevent entering negative or non-numeric values in input fields
    cashInputs.forEach(input => {
        input.addEventListener('input', () => {
          const value = parseInt(input.value, 10);
          if (isNaN(value) || value < 0) {
            input.value = '';
          }
        });
      });
    

      // cashTexts.forEach(text => {
      //   text.addEventListener('input', () => {
      //     const value = parseInt(text.textContent, 10);
      //     if (isNaN(value) || value < 0) {
      //       text.textContent = '0';
      //     }
      //   });
      // });


  });
  