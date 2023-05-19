$(document).ready(function(){
  
    let steps = 1;
    function goBack(){
        $('#step'+steps).addClass('none');
        steps--;
        $('#step'+steps).removeClass('none');
        changeBtn()
    }
    function goNext(){
        if(validateInputs()){
            $('#step'+steps).addClass('none');
            steps++; 
            $('#step'+steps).removeClass('none');
            changeBtn()
        }
    }
     
    function submitForm(){
        if(!validateInputs()){
            return false;
        }
        $('#form').html('<h4 class="text-center">Thank you for submitting the form!</h4>');
        $('#form').append('<p class="text-center">We will be in touch with you shortly.</p>');
        $('#title').addClass('none')
    }

//valide inpputs here
function validateInputs() {
    var isValid = true;
    if (steps === 1) {
      // Validate first inputs
      var firstName = $('#firstname').val().trim();
      var lastName = $('#lastname').val().trim();
      if (firstName === '' || lastName === '') {
        isValid = false;
       $('#firstname').css('border-color','red')
       $('#lastname').css('border-color','red')
      }
    } else if (steps === 2) {
      // Validate email and phone 
      var email = $('#email').val().trim();
      var phoneNumber = $('#tel').val().trim();
      if (email === '' || phoneNumber === '') {
        isValid = false;
        $('#email').css('border-color','red')
       $('#tel').css('border-color','red')
      }
    } else if (steps === 3) {
      // Validate password and confirm
      var password = $('#pass').val().trim();
      var confirmPassword = $('#cpass').val().trim();
      if (password === '' || confirmPassword === '') {
        isValid = false;
        $('#pass').css('border-color','red')
        $('#cpass').css('border-color','red')
      } else if (password !== confirmPassword) {
        isValid = false;
        $('#error').removeClass('none')
        $("#error").text("PassWords do Not Match")
        $('#pass').css('border-color','red')
        $('#cpass').css('border-color','red')
      } else if (password.length < 8) {
        isValid = false;
        $('#error').removeClass('none')
        $("#error").text("PassWords Should Be greater than 8")
        $('#pass').css('border-color','red')
        $('#cpass').css('border-color','red')
      }
    }
    return isValid;
  }

  function changeBtn(){
    if (steps === 1) {
        $('#prevbtn').addClass('none');
    }else{
        $('#prevbtn').removeClass('none');
    }
    if (steps === 3) {
        $('#nextbtn').addClass('none');
        $('#prevbtn').removeClass('none');
        $('#submit').removeClass('none');

    }else{
        $('#nextbtn').removeClass('none');
        $('#submit').addClass('none');
    }
  }
$('#prevbtn').click(goBack)
$('#nextbtn').click(goNext)
$('#submit').click(submitForm)
})