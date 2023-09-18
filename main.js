window.onload = function() {
	// Execute this code only on the result.html page
	if (window.location.pathname.includes("result.html")) {
		const shirtColor = sessionStorage.getItem("shirtColor");
		const foodName = sessionStorage.getItem("foodName");
		if (shirtColor && foodName) {
			const bandName = shirtColor + " " + foodName;
			document.getElementById("resultInfo").innerHTML = "Your indie band name is:";
			document.getElementById("resultName").innerHTML = bandName;
			document.body.style.backgroundColor = shirtColor;
		} else {
			window.location.href = "index.html"; // If the user skips the previous pages, redirect back to the first page
		}
	}
}

function goToNextPage() {
	if (!sessionStorage.getItem("shirtColor")) {
		const shirtColor = document.getElementById("shirtColor").value;
		sessionStorage.setItem("shirtColor", shirtColor);
		window.location.href = "food.html";
	} else if (!sessionStorage.getItem("foodName")) {
		const foodName = document.getElementById("foodName").value;
		sessionStorage.setItem("foodName", foodName);
		window.location.href = "result.html";
	}
}

function startOver() {
	sessionStorage.clear();
	window.location.href = "index.html";
}

function generateRandomName() {
	const randomShirtColor = shirtColors[Math.floor(Math.random() * shirtColors.length)];
	const randomFoodName = foodNames[Math.floor(Math.random() * foodNames.length)];
	const randomBandName = randomShirtColor + " " + randomFoodName;
	document.getElementById("resultInfo").innerHTML = "Your random indie band name is:";
	document.getElementById("resultName").innerHTML = randomBandName;
	document.body.style.backgroundColor = randomShirtColor;
}
