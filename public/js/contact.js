document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // prevent page reload

    emailjs.sendForm('service_7wwdz4j','template_dcsxte3', this)
      .then(function() {
         alert('Message sent! Thank you for contacting us.');
         document.getElementById("contact-form").reset(); // clear the form
      }, function(error) {
         alert('Oops! Something went wrong: ' + JSON.stringify(error));
      });
});