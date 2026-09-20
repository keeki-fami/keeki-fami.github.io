document.addEventListener("DOMContentLoaded", function () {
    let data = localStorage.getItem("accessCount");
	let count

    if (data === null) {
        count = 1;
    } else {
        count = Number(data) + 1;
    }

	const result = String(count).padStart(6, '0'); 

    localStorage.setItem("accessCount", result);
    document.getElementById("count").textContent = result;
});