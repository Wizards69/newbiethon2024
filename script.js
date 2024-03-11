$(document).ready(function(){

   $('.fa-bars').click(function(){
      $(this).toggleClass('fa-xmark');
      $('nav').toggleClass('nav-toggle');
   });

   $('nav ul li a').click(function(){
      $('.fa-bars').removeClass('fa-xmark');
      $('nav').removeClass('nav-toggle');
   });

   $(window).scroll(function(){
      if($(window).scrollTop() >= 20){
          $('header').addClass('active');
      }else{
          $('header').removeClass('active');
      }
  })
})

function myFunction() {
   var input, filter, i, txtValue,span, count=0;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   div2 = document.getElementsByClassName("package");

   for (i = 0; i < div2.length; i++) {
     span = div2[i].getElementsByClassName("filter")[0];
     txtValue = span.textContent || span.innerText;
     
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       div2[i].style.display = "";
     } else {
      div2[i].style.display = "none";
     }
     Array.from(div2).forEach(element => {
      if(element.style.display==""){
         count++;
      }
     });

     if(count==0){
      div2.insertAdjacentHTML("beforened","<div>Destination not found</div>")
     }
   }
}

//SMTP
function popup(message) {
   if(message=='OK'){
       document.querySelector('.popup').classList.add('active');
       document.querySelector('.popup .message').innerHTML = 'Email Sent Successfully! I will contact you soon';
       document.querySelector('.popup .message').style.color = '#2ecc71';
   }else{
       document.querySelector('.popup').classList.add('active');
       document.querySelector('.popup .message').innerHTML = 'Email Not Sent | Try Again';
       document.querySelector('.popup .message').style.color = '#e74c3c';
   }
   setTimeout(() => {
       document.querySelector('.popup').classList.remove('active');
   }, 3000);
}
function sendEmail() {
      Email.send({
         SecureToken : "e99a9743-4cfc-4924-9947-4efe6b865e5cf",
         To : 'pratikgupta040819@gmail.com',
         From : document.getElementById('email').value,
         Subject : "This is the subject",
         Body : "Name: " + document.getElementById("name").value + "<br>Email: " + document.getElementById('email').value + "<br>Message: " + document.getElementById("message").value,

      }).then(
      message => popup(message)
      );
 }
 
