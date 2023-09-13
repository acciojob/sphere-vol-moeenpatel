let submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
	event.preventDefault();
	let radius = document.getElementById("radius").value;
	let volume = Math.PI * (4/3) * radius ** 3;
	let ans = volume.toFixed(4);
	
	let volumeIn = document.getElementById("volume");
	volumeIn.value = ans;
})