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
	iframe.src = await `https://www.highperformanceformat.com/${atOptions.key}/invoke.js?${atOptions.format}`;
	// console.log(atOptions)
	return ad.appendChild(iframe);
};

showAds();

// fetch('//www.highperformanceformat.com/d67fee685f10a0b2e6a420cb556212c1/invoke.js')
// .then(response => response.json())
// .then(data => console.log(data));