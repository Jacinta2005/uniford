// desktop view menu
$("#menu-box1").hide();

$("#menu1").click(function(){
	$("#menu-box1").slideToggle(100);
});

$("#xmark").click(function(){
	$("#menu-box1").hide();
});

// search bar
$("#s-box").hide();

 $("#s-icon").click(function(){
 	$("#s-box").show(100)
 });

$("#xmark2").click(function(){
	$("#s-box").hide()
});


// desktop view program
$("#program-menu").hide();

$("#program").hover(function(){
	$("#program-menu").show(100);
});

$("#program-menu").mouseleave(function(){
	$("#program-menu").hide(100)
});





// mobile view
$("#mb-box").hide();

$("#mb-menu").click(function(){
	$("#mb-box").slideToggle(100);
});

$("#mb-xmark").click(function(){
	$("#mb-box").hide();
});

$("#m-vbox").click(function(){
	$("#menu-box1").slideToggle(100);
});

$("#mb-sbox").click(function(){
	$("#s-box").slideToggle(100);
});


// alumni mobile view 

$("#drop-menu").hide();

$("#menu").click(function(){
	$("#drop-menu").slideToggle(100);
});

$("#close").click(function(){
	$("#drop-menu").hide();
});

// program
$("#pop-up").hover(function(){
	$("#drop-program").show(100);
});

$("#drop-program").mouseleave(function(){
	$("#drop-program").hide(100)
});

// second menu
$("#second-menu").click(function(){
	$("#menu-div").slideToggle(100);
});
$("#second-close").click(function(){
	$("#menu-div").hide();
});

// search bar
$("#search-div").hide();

 $("#icon-search").click(function(){
 	$("#search-div").show(100);
 });

$("#search-close").click(function(){
	$("#search-div").hide();
});

// dashboard-classes
$("#dash-menu").click(function(){
	$("#dash-drop").slideToggle(100);
});

$("#dash-close").click(function(){
	$("#dash-drop").hide();
});

// dashboard-messages  mobile
$("#dash-chat").click(function(){
	$("#dash-messages").show();
	$("#logo").hide();
});

$("#reverse").click(function(){
	$("#dash-messages").hide();
	$("#logo").show();
});

// dashboard-messages desktop
$("#desktop-icon").click(function(){
	$("#desktop-drop").show();
});

$("#desktop-close").click(function(){
	$("#desktop-drop").hide();
});










// Create account(Register)

function register(){
	document.getElementById("register").style.backgroundColor = "green";
	document.getElementById("register").innerHTML = "REGISTRATION COMPLETE!";
	document.getElementById("register").style.paddingTop = "7px";
	document.getElementById("register").style.fontWeight = "bold";
}

function submit(){
	document.getElementById("submit").style.backgroundColor = "green";
	document.getElementById("submit").innerHTML = "SUBMITTED";
	document.getElementById("submit").style.paddingTop = "4px";
	document.getElementById("submit").style.fontWeight = "bold";
}




// Discover

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = document.querySelector(".card-1").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

// get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

//Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
	carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

//Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
	carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// add event listeners for the arrow button to scroll the carousel left and right 
arrowBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
	})
});

const dragStart = (e) => {
	isDragging = true;
	carousel.classList.add("dragging");
	//Records the initial cursor and scroll position of the carousel
	startX = e.pageX;
	startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
	if(!isDragging) return // if isDragging is false return from here
	//Updates the scroll position of the carousel based on the cursor movement
	carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
	isDragging = false;
	carousel.classList.remove("dragging");
};

const autoPlay = () => {
	if(window.innerWidth < 800) return; // return if window is smaller than 800
	// Auto play the carousel after every 2500ms
	timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScroll = () => {
	// if the carousel is at the beginning, scroll to end
	if(carousel.scrollLeft === 0) {
		carousel.classList.add("no-transition");
		carousel.scrollLeft === carousel.scrollWidth - ( 2 * carousel.offsetWidth);
		carousel.classList.remove("no-transition");
	}
	// if the carousel is at the end, scroll to beginning
	else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
		carousel.classList.add("no-transition");
		carousel.scrollLeft = carousel.offsetWidth;
		carousel.classList.remove("no-transition");
	}
	// clear existing timeout and start autoplay if the mouse is not hovering over the carousel
	 clearTimeout(timeoutId);
	 if(!wrapper.matches(":hover")) autoPlay();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);



// slide in text for home page

document.addEventListener("DOMContentLoaded", function() {
    const homeText = document.querySelector(".home-text");     // select element with the  class '.home-text'

    function checkVisibility() {
        const rect = homeText.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            homeText.classList.add("show");
        }
    }

    window.addEventListener("scroll", checkVisibility); // appears when you scroll
    checkVisibility(); //
});

// first view of home page

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".name, .learn");  // select element with the  class '.name' and '.learn'

    function checkVisibility() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); 
});



// verify email for forgotten password

function verify(){
	document.getElementById("verify").style.backgroundColor = "green";
	document.getElementById("verify").innerHTML = "Email verified";
	document.getElementById("verify").style.paddingTop = "6px";
	document.getElementById("verify").style.fontWeight = "bold";
}


// sign-in button functionality

function sign(){
	document.getElementById("sign-link").style.backgroundColor = "green";
	document.getElementById("sign-link").innerHTML = "SIGNING IN...";
	document.getElementById("sign-link").style.paddingTop = "6px";
	document.getElementById("sign-link").style.fontWeight = "bold";
}


// admission form button functionality

function admission(){
	document.getElementById("admission").style.backgroundColor = "green";
	document.getElementById("admission").innerHTML = "SUBMITTED";
	document.getElementById("admission").style.paddingTop = "8px";
	document.getElementById("admission").style.fontWeight = "bold";
	document.getElementById("admission").style.color = "white";
	document.getElementById("admission").style.border = "none";
}