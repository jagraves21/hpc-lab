function get_hamburger_button() {
	var inner_span = document.createElement("span");
	inner_span.classList.add("hamburger-inner");
	
	var outer_span = document.createElement("span");
	outer_span.classList.add("hamburger-box");
	outer_span.appendChild(inner_span);
	
	var button = document.createElement("button")
	button.classList.add("hamburger");
	button.classList.add("hamburger--squeeze");
	button.type = "button";
	button.appendChild(outer_span);
	
	return button;
}

window.addEventListener("DOMContentLoaded", function() {
	console.log("HERE")
	var top_nav = document.getElementById("top_nav");
	var top_nav_logo = document.getElementById("top_nav_logo");
	var top_nav_links = document.getElementById("top_nav_links");
	if (top_nav != null && top_nav_links != null && top_nav_logo != null) {
		var top_nav_hamburger = get_hamburger_button();
		top_nav_hamburger.id = "top_nav_hamburger"; 
		top_nav_hamburger.addEventListener("click", function() {
			top_nav_links.classList.toggle("hidden");
		});
		top_nav_links.classList.add("hidden");
		top_nav.classList.add("has-hamburger");
		top_nav_logo.appendChild(top_nav_hamburger);
	}

	var hamburgers = document.querySelectorAll(".hamburger");
	for (var ii = 0; ii < hamburgers.length; ii++) {
		hamburgers.item(ii).addEventListener("click", function() {
			this.classList.toggle("is-active");
		});
	}
});


window.onscroll = function() {
	var top_nav = document.getElementById("top_nav");
	var page_header_title = document.getElementById("top_nav_logo");
	if (top_nav != null && page_header_title != null) {
		var sticky = Math.max(0, page_header_title.offsetTop - top_nav.offsetHeight);
		if (window.pageYOffset > sticky) {
			top_nav.classList.add("sticky");
		} else {
			top_nav.classList.remove("sticky");

		}
	}
}
