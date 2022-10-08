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


  var name,email,subject,message;

  function submitForm(event) {
    event.preventDefault();
    console.log(`name: ${name}, email: ${email}`)
  }

 function myFunction(event) {
  if(event.target.name == 'name') {
    name = event.target.value
  }
  if(event.target.name == 'email') {
    email = event.target.value
  }; 
 }