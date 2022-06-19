// This file is going to contain all of the code responsible for submitting the form data using AJAX.
$(function() {
  // get the contact-form and msg-div
  var form         = $('.contact-form');
  var formMessages = $('.form-messages');

  //set up an event listener for the contact-form
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();
    // Serialize the form data.
    var formData = $(form).serialize();
    //submit contact-form using ajax
    $.ajax({
      //properties of ajax's object to configure ajax request
      type : 'POST',
      url  : $(form).attr('action'),
      data : formData
    })

    // This done method will be called if the request completes successfully.
    .done(function(response) {
      //make sure that message have success class
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');

      //set the message text
      $(formMessages).text(response);

      //clear the form
      $('.contact-name').val('');
      $('.contact-email').val('');
      $('.contact-message').val('');
    })

    // This fail method is called if the mailer script returns an error.
    .fail(function(data) {
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');

      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else{
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }

    });

  });


});
