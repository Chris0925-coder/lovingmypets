const blog = document.getElementById('blog');
const item = blog.querySelector('.item:nth-child(2)');
let newDiv = document.createElement('div');
const urlAddArticle =
  "https://visits-christian-guardias-projects.vercel.app/lovingmypets/blog";
  

async function getHome() {
  let result = await fetch(urlAddArticle, {
    method: "GET",
    // headers: {
    //   Authorization: `Bearer ${token}`,
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Methods": "GET,HEAD,POST,OPTIONS",
    // },
  })
  .then((resp) => resp.json())
  .catch((error) => {
        console.error("Error:", error.message);
        blog.style.color = "#990000";
        blog.innerText = error.message;
      });

  result.forEach((rows) => {
    content(rows.title, rows.images, rows.paragraph, rows.link,rows.id, rows.date, rows.update);
  })
}

function content(title, filename, paragraph,link,id, date,update) {
  let l = link.split('/');
  // console.log(l);
  if(l[0] != "https:") link = `https://${link}`;
  // console.log(link);
  newDiv.innerHTML += `
        <article>
          <figure>
            <img src='https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com/lovingmypets/${filename}' alt='${title}'>
              <figcaption>
                <h4><a href="new.html" title="${title}" target="_blank" value="${id}">${title}</a></h4>
                <p><a href="new.html" title="${title}" target="_blank" value="${id}">${paragraph}</a></p>
              </figcaption>
          </figure>
          <span>${date}</span><span>${update}</span>
        </article>   
  `;

  blog.insertBefore(newDiv, item);
}

getHome();

newDiv.addEventListener('click', (e) => {
  // console.log(e)

  if(e.target.tagName === "A") {
    // console.log(e.target.value)
    setCookie("article", e.target.attributes[3].value, 365);
    getItem(e.target.attributes[3].value)
  }
})
