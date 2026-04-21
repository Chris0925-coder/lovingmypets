const head = document.getElementsByTagName('title');
const newBlog = document.getElementById('new-blog');
const item2 = newBlog.querySelector('.item:nth-child(2)');
let newDiv = document.createElement('main');

function newPageContent(title, filename, paragraph,link,id) {
	let l = link.split('/');
    // console.log(l);
  	if(l[0] != "https:") link = `https://${link}`;

	head.title.innerHTML = title;
	newDiv.innerHTML = `
	    <section>
	      <h1>${title}</h1>
	      <figure>
	        <img src='https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com/lovingmypets/${filename}' alt='${title}'>
	          <figcaption>
	            <p><a href="${link}" title="${title}" target="_blank">${paragraph}</a></p>
	          </figcaption>
	      </figure>
	    </section>   
	`;

  newBlog.insertBefore(newDiv, item2);
}