var db = firebase.database();
db.ref('message1/').set({
    username: 'ram',
    email: 'email',
    
  });
//Select element function 
const selectElement= function(element){
    return document.querySelector(element);
};

let menuToggler= selectElement('.menu-toggle');
let body= selectElement('body');


menuToggler.addEventListener('click',function(){
    body.classList.toggle('open');
});

//scroll reveal

window.sr=ScrollReveal();

sr.reveal('.animate-left',{
    origin:'left',
    duration:1500,
    distance:'25rem',
    delay:300
});

sr.reveal('.animate-right',{
    origin:'right',
    duration:1500,
    distance:'25rem',
    delay:300
});

sr.reveal('.animate-top',{
    origin:'top',
    duration:1500,
    distance:'25rem',
    delay:300
});
sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration:1500,
    distance:'25rem',
    delay:300
});

var $buttons = jQuery('.nav-link');
$buttons.on('click',function() {
  jQuery(this).toggleClass('active').siblings('.nav-link').removeClass('active');
})

function openForm() {
  document.getElementById("myForm").style.display = "block";
  

}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
 
}

