var firebaseConfig = {
    apiKey: "AIzaSyA3nHoJ8SxobYoephOtn8m-tqGnpcQqjiM",
    authDomain: "webite-web-creators.firebaseapp.com",
    databaseURL: "https://webite-web-creators-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webite-web-creators",
    storageBucket: "webite-web-creators.appspot.com",
    messagingSenderId: "510014044361",
    appId: "1:510014044361:web:5394795281818f5bf9f518",
    measurementId: "G-8JC30RGMK7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
//referance
var ref=firebase.database().ref("messages");

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


$( sendFor ).click(function( event ){
  event.preventDefault();
 var name1=getInputValu('name');
var email=getInputValu('email');
var textFill=getInputValu('textFill');

saveMessages(name1,email,textFill);
//Show alert
 document.querySelector('.alert').style.display='block';
setTimeout(function () {
  document.querySelector('.alert').style.display='none';
},3000);
//clear form
document.getElementById('form-id').reset();

});
// function to get form values 
function getInputValu(id){
  if(document.getElementById(id).value==""){
    document.querySelector('.alertR').style.display='block';
    setTimeout(function () {
  document.querySelector('.alertR').style.display='none';
},3000);
  }else{
    return document.getElementById(id).value;
  }
  
}
//save messegae
function saveMessages(name,email,message){
  var newMessageRef= ref.push();
  
  newMessageRef.set({
    name:name,
    email:email,
    message:message
  });
}

