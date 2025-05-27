const ad = document.getElementById('ads');
// console.log(ad);
atOptions = {
	'key' : '74dd4b5952a1aef1815dc95d49d82929',
	'format' : 'iframe',
	'height' : 60,
	'width' : 468,
	'params' : {}
};

async function showAds() {
	iframe = document.createElement("iframe");

	iframe.style.border = "none";
	iframe.width = atOptions.width;
    iframe.height = atOptions.height;
	iframe.src = await `https://www.highperformanceformat.com/${atOptions.key}/invoke.js`>
	// console.log(atOptions)
	ad.appendChild(iframe);
};

showAds();