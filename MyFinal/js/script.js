function OpenSideNav(){
	sideNav = document.getElementById("NavigationSide");
	sideNav.style.display = "block";
	console.log(1);
}
function CloseSideNav(){
	sideNav = document.getElementById("NavigationSide");
	sideNav.style.display = "none";
	console.log(1);
}

function ChangePicture(){
	pic = document.getElementById("changePic");
	if (pic.getAttribute("src") == "./images_file/theTruck0.jpg") {
		pic.setAttribute("src", "./images_file/truckAndHills.jpg");
	}
	else{
		pic.setAttribute("src", "./images_file/theTruck0.jpg");
	}}