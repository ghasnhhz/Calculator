      // Display the calculation when the page first loads
      // If there is data, we assign it to calculate. If no data, assign it to ''.
      let calculation = localStorage.getItem('calculation') || '';

      // If this if statement was not here, the 0 would not appear when i reload the page.
      if (calculation == '') {
        document.querySelector('.js-display').innerHTML = 0;
      } else {
        displayCalculation();
      }

      // If a calculation exists in localStorage, display it on the page.
  
      function updateCalculation(parameter) {
        calculation += parameter;

        // Display the calculation on the page
        displayCalculation();

        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
          document.querySelector('.js-display').innerHTML = calculation;
      }