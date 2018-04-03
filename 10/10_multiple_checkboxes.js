let lastChecked;
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function handleCheck(e) {
	// check if shift key is down and check if the box is checked
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		//loop over every checkbox
		checkboxes.forEach(checkbox => {
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
