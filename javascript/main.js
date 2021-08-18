window.onload = function() {
	var top_nav = document.getElementById("top-nav");
	var top_nav_hamburger = document.getElementById("top-nav-hamburger");
	if (top_nav != null && top_nav_hamburger != null) {
		top_nav.classList.add("responsive");
		top_nav_hamburger.addEventListener("click", function() {
			top_nav.classList.toggle("active");
		});
	}

	var hamburgers = document.querySelectorAll(".hamburger");
	for (var ii = 0; ii < hamburgers.length; ii++) {
		hamburgers.item(ii).addEventListener("click", function() {
			console.log(hamburgers.item(ii) + " clicked");
			this.classList.toggle("is-active");
		});
	}
};

window.onscroll = function() {sticky_top_nav()};
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
