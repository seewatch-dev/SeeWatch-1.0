// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName(" mySlidesImg");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else { 
    x.className = x.className.replace(" show", "");
  }
}

// Accordion 
function myAccFuncCountry() {
  var x = document.getElementById("demoAcc1");
  if (x.className.indexOf(" show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}

// Accordion 
function myAccFuncPlus() {
  var x = document.getElementById("demoAcc2");
  if (x.className.indexOf(" show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}

// Accordion 
function myAccFuncMarques() {
  var x = document.getElementById("demoAccMarques");
  if (x.className.indexOf(" show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}

// Open and close sidebar
function SWopen() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function SWclose() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
// Accordion 
function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf(" show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}

// Accordion 
function myAccFuncCountry() {
  var x = document.getElementById("demoAcc1");
  if (x.className.indexOf(" show") == -1) {
    x.className += " show";
  } else {
    x.className = x.className.replace(" show", "");
  }
}

// Click on the "Jeans" link on page load to open the accordion for demo purposes
document.getElementById("myBtn").click();

// Slideshow Apartment Images
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDivs(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName(" mySlidesProduit");
  var dots = document.getElementsByClassName(" demoProduit");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " opacity-off";
}