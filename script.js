$('.dropdown').on('click',function(){
    $('.un-dorp').slideToggle(280);
  });
  
  $('.dropdown2').on('click',function(){
    $('.un-dorp-btn').slideToggle(280);
  });
  


  $( document ).ready(function() {
    // link section
    $('.java a').click(function(event) {
        console.log(event)
    $('.active').animate({
        width:'toggle'},2000);
    
    });

  });


  var fullName,email,subject,message;

function submitForm(event) {
    event.preventDefault();
    console.log(`name: ${fullName}, email: ${email}, subject: ${subject}`)
  }

 function myFunction(event) {
  if(event.target.name == 'fullName') {
    fullName = event.target.value
  }
  if(event.target.name == 'email') {
    email = event.target.value
  }
  if(event.target.name == 'subject') {
    subject = event.target.value
  }
 }

 //sticky navigatoin
 var num = 100;
$(window).bind('scroll',function() {
  if($(window).scrollTop() > num) {
    $('header').addClass('fixed');
  } else {
    $('header').removeClass('fixed');
  }
});

//scroll btn

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});