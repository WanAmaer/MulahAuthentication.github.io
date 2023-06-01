function checkLoyaltyPoints(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the input values
    var dropdownValue = document.getElementById("dropdownForm").value;
    var numberValue = document.getElementById("numberForm").value;
  
    // Combine the values
    var loyaltyPointsNumber = dropdownValue + numberValue;
  
    // Check if the combined value matches the specified loyalty points number
    if (loyaltyPointsNumber === "+60173527250") {
      // Navigate to the registration page
      sessionStorage.setItem("mobile", loyaltyPointsNumber);
      window.location.href = "register.html";
      
    } else {
      // Show an error message or perform any other action
      alert("Invalid loyalty points number!");
    }
  }
  
  
  function storeRegistrationData(event) {
      event.preventDefault(); // Prevent form submission

      // Get the input values
      var name = document.getElementById("InputName").value;
      var day = document.getElementById("inputDay").value;
      var month = document.getElementById("inputMonth").value;
      var year = document.getElementById("inputYear").value;
      var email = document.getElementById("InputEmail").value;

      // Store the values in sessionStorage
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("birthday", day + "/" + month + "/" + year);
      sessionStorage.setItem("email", email);

      // Navigate to the output.html page
      window.location.href = "output.html";
  }


// Get the data from the sessionStorage
var name1 = sessionStorage.getItem('name');
var birthday = sessionStorage.getItem('birthday');
var email = sessionStorage.getItem('email');
var mobile = sessionStorage.getItem('mobile');

// Update the elements with the received data
document.getElementById('name').textContent = name1 || '';
document.getElementById('birthday').textContent = birthday || '';
document.getElementById('email').textContent = email || '';
document.getElementById('mobile').textContent = mobile || '';

