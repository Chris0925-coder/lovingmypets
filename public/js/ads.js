const ad = document.getElementById('ads');
console.log(ad);
atOptions = {
	'key' : '74dd4b5952a1aef1815dc95d49d82929',
	'format' : 'iframe',
	'height' : 60,
	'width' : 468,
	'params' : {}
};

function showAds() {
	ad.innerHTML = `
	<ifame 
	key='74dd4b5952a1aef1815dc95d49d82929'
	format='iframe'
	height=60
	width=468
	params={}
	src="//www.highperformanceformat.com/74dd4b5952a1aef1815dc95d49d82929/invoke.js">
	</iframe>`
};

showAds();