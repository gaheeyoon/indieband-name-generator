// Execute this code only on the result.html page
if (window.location.pathname.includes("result.html")) {
	const shirtColor = sessionStorage.getItem("shirtColor");
	const foodName = sessionStorage.getItem("foodName");
	if (shirtColor && foodName) {
		const bandName = shirtColor + " " + foodName;
		document.getElementById("result").innerHTML = "Your indie band name is: " + bandName;
		document.getElementById("result-container").style.backgroundColor = shirtColor;
		sessionStorage.removeItem("shirtColor"); // Clear the stored values
		sessionStorage.removeItem("foodName");
	} else {
		window.location.href = "index.html"; // If the user skips the previous pages, redirect back to the first page
	}
}
