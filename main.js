const menu = document.querySelector(".menu-nav");
const burger = document.querySelector("#check");

burger.addEventListener("click", () => {
	if (burger.checked) {
		menu.style.height = "100vh";
		Array.from(menu.children).forEach(li => {
			li.style.opacity = 1;
		});
	} else {
		menu.style.height = "0";
		Array.from(menu.children).forEach(li => {
			li.style.opacity = 0;
		});
	}
});
