

function openNavbar() {
    document.getElementById("navbar").classList.toggle("w3-animate-left");
    document.getElementById("navbar").style.display = "block";
  
}

function closeNavbar() {
    document.getElementById("navbar").classList.toggle("w3-animate-left");
    document.getElementById("navbar").style.display = "none";
}

document.getElementById('navbar').addEventListener("click", function(e){
    if (e.target !== this)
        return;
    closeNavbar();
});



//registering service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
			.register('serviceWorker.js')
	        .then(function(registration) {
	        	console.log('service workder registered');
			});
}	