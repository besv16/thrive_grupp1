// And add a JavaScript to select images:

// Create a variable to control slide index
var slideIndex = 1;

// Call on function showDivs with current slide index as argument
showDivs(slideIndex);

// Function which creates the browsing carousel functionality
function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Function that checks slide index
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");

    if (n > x.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = x.length;
    }

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    // console.log(slideIndex);

    x[slideIndex-1].style.display = "flex";
}
