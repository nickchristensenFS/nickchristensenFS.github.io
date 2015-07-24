//<script src="js/script.js" type="text/javascript"></script>


//Onmouseover//
function appear2() {
	var x = document.getElementById("description2");
	x.style.opacity = "1";           
	x.style.transition = "opacity 4s"; 
}

function appear3() {
	var x = document.getElementById("description3");
	x.style.opacity = "1";           
	x.style.transition = "opacity 4s"; 
}


function appear4() {
	var x = document.getElementById("description4");
	x.style.opacity = "1";           
	x.style.transition = "opacity 4s"; 
}

function appear5() {
	var x = document.getElementById("description5");
	x.style.opacity = "1";           
	x.style.transition = "opacity 4s"; 
}


//sticky nav//

var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

