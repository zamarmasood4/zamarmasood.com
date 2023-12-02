emailjs.init('69w-kS0yAbsnIQW3d');

      function isValidEmail(email) {
        // Regular expression for a simple email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
      document
        .getElementById('contact-form')
        .addEventListener('submit', function (e) {
          e.preventDefault();

          var firstName = document.getElementById('firstName').value;
          var lastName = document.getElementById('lastName').value;
          var email = document.getElementById('email').value;
          var phoneNumber = document.getElementById('phoneNumber').value;
          var message = document.getElementById('message').value;

          // Check if the email address is valid
          if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
          }

          // Check if the email address is in local storage
          if (localStorage.getItem(email)) {
            alert(
              'You have already sent an email from this address. Please use a different email address.'
            );
            return;
          }

          emailjs
            .send('service_q37772c', 'template_5dvy48e', {
              to_email: 'zamarmasood4@gmail.com',
              from_firstName: firstName,
              from_lastName: lastName,
              from_email: email,
              from_phoneNumber: phoneNumber,
              message: message,
            })
            .then(
              function (response) {
                console.log('Sent successfully:', response);
                alert('Message sent successfully!');

                // Store the email address in local storage
                localStorage.setItem(email, true);
              },
              function (error) {
                console.log('Failed to send:', error);
                alert('Failed to send message. Please try again later.');
              }
            );
        });