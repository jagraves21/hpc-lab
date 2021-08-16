window.onscroll = function() {sticky_top_nav()};

window.onload = function() {
	var element;
	element	= document.getElementById("top-nav");
	element.classList.add("responsive");
};

var top_nav = document.getElementById("top-nav");
console.log("hello world " + top_nav);
top_nav.classList.add("responsive");

function sticky_top_nav() {
	var top_nav = document.getElementById("top-nav");
	var header = document.getElementById("page-header").getElementsByTagName("h1")[0];
	var sticky = Math.max(0, header.offsetTop - top_nav.offsetHeight);
	console.log(window.pageYOffset);
	if (window.pageYOffset > sticky) {
		//console.log("add " + window.pageYOffset + " " + sticky + " " + (window.pageYOffset > sticky));
		top_nav.classList.add("sticky");
	} else {
		//console.log("remove " + window.pageYOffset + " " + sticky + " " + (window.pageYOffset > sticky));
		top_nav.classList.remove("sticky");
	}
}

function set_responsive() {
	var top_nav = document.getElementById("top-nav");
	if ( top_nav.classList.contains("responsive") ) {
		top_nav.classList.remove("responsive");
	} else {
		top_nav.classList.add("responsive");
	}
}

console.log("hello world");

function asdf() {

}

function top_nav_hamburger() {
	var hamburger = document.getElementById("top-nav-hamburger");
	hamburger.classList.toggle("active");
	var top_nav = document.getElementById("top-nav");
	top_nav.classList.toggle("active");
}
