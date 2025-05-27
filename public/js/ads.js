const ad = document.getElementById('ads');
const adB = document.getElementById('adsB');
// const ads = ad.querySelector('.item:first-child');
// console.log(ad);

atOptions = {
	'key' : '74dd4b5952a1aef1815dc95d49d82929',
	'format' : 'iframe',
	'height' : 60,
	'width' : 468,
	'params' : {}
};

// atOptions = {
// 	'key' : 'd67fee685f10a0b2e6a420cb556212c1',
// 	'format' : 'iframe',
// 	'height' : 90,
// 	'width' : 728,
// 	'params' : {}
// };


	

function showAds(a, b) {

	script = document.createElement("script");

		// iframe = document.createElement("iframe");
	
	// console.log(atOptions)
	// iframe.style.border = "none";
	// iframe.key = atOptions.key;
	// iframe.width = atOptions.width;
    // iframe.height = atOptions.height;
    script.type = 'text/javascript';
	script.src = `https://www.highperformanceformat.com/${a}/invoke.js`;
	// console.log(ads);
	// ad.appendChild(iframe);
	b.appendChild(script);

	// ad.insertBefore(script, ads);
};




showAds(atOptions.key, ad);

// showAds('d67fee685f10a0b2e6a420cb556212c1', adB);


// fetch('//www.highperformanceformat.com/d67fee685f10a0b2e6a420cb556212c1/invoke.js')
// .then(response => response.json())
// .then(data => console.log(data));