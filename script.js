function Generator(){
	var basecolor = document.getElementById("baseColor").value;
	var maincolor = document.getElementById("mainColor").value;
	var mylink = document.getElementById("myLink").value;
	document.getElementById("qrcode").innerHTML = "";

	var qrcode = new QRCode("qrcode", {
    text: mylink,
    width: 200,
    height: 200,
    colorDark : maincolor,
    colorLight : basecolor,
    correctLevel : QRCode.CorrectLevel.H

});

}

