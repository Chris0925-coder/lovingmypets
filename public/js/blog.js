const blog = document.getElementById('blog');
const item = blog.querySelector('.item:nth-child(2)');
let newDiv = document.createElement('div');
const urlAddArticle =
  "https://visits-christian-guardias-projects.vercel.app/lovingmypets/blog";
const webLink = window.location.href;



blog.setAttribute('class', 'load');

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

  if(!result.error) {

      result.forEach((rows) => {

        let title = rows.title;
         let images = rows.images;
         let para = rows.paragraph;

        if(title.includes("[")) {
          title = JSON.parse(rows.title)[0];
          images = JSON.parse(rows.images)[0];
          para = JSON.parse(rows.paragraph)[0];
        };

        if(para === null) para = [];

        d = rows.date.split(',');
        // console.log(d);
        let date = d[0] + "," + d[1];
     
        content(title, images, para, rows.link,rows.id, date, rows.modify);

        blog.removeAttribute('class');
    })

  }
  
}

function content(title, filename, paragraph,link,id, date,update) {
  let l = link.split('/');
  // console.log(l);
  if(l[0] != "https:") link = `https://${link}`;
  // console.log(link);
  newDiv.innerHTML += `
        <article id="${id}">
          <div>
            <h4><a href="new.html" title="${title}" target="_blank" value="${id}">${title}</a></h4>
             <p>${paragraph}</p>
            <span>${date}</span>

            <button><a href="new.html?id=${id}" title="${title}" target="_blank" value="${id}">Leer articulo &rarr;</a></button>



              <a href="instagram://story-camera?background_top_color=%23a8c0ff&background_bottom_color=%233f2b96" style="text-decoration: none;">


              <button onclick="shareOnFacebook(${id})">Share on Facebook</button>
              <button onclick="shareOnTwitter(${id})">Share on Twitter</button>


              <button onclick="shareBtn()">
                <a href="#" title="${title}" target="_blank" value="${id}" id="shareBtn"
                  >Compartir este sitio web</a
                >
              </button>

              
                <button style="background-color: #E1306C; color: white; padding: 7px 17px; border: none; border-radius: 50px; font-size: 10px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 10px;">
                    <svg xmlns="http://w3.org" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.556 0 5.829 0 8c0 2.171.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.093.333 1.942.372C5.556 15.99 5.829 16 8 16s2.444-.01 3.297-.048c.852-.04 1.433-.174 1.942-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.198-.509.333-1.09.372-1.942.038-.853.048-1.126.048-3.297s-.01-2.444-.048-3.297c-.04-.852-.174-1.433-.372-1.942a3.916 3.916 0 0 0-.923-1.417A3.926 3.926 0 0 0 13.24.42c-.51-.198-1.092-.333-1.942-.372C10.444.01 10.171 0 8 0zm2.2 1.6h.466c.864 0 1.636.035 2.158.14a2.841 2.841 0 0 1 1.026.56 2.84 2.84 0 0 1 .56 1.026c.105.522.14 1.294.14 2.158v.466c0 .864-.035 1.636-.14 2.158a2.84 2.84 0 0 1-.56 1.026 2.839 2.839 0 0 1-1.026.56c-.522.105-1.294.14-2.158.14h-.466c-.864 0-1.636-.035-2.158-.14a2.839 2.839 0 0 1-1.026-.56 2.84 2.84 0 0 1-.56-1.026c-.105-.522-.14-1.294-.14-2.158V8c0-.864.035-1.636.14-2.158a2.84 2.84 0 0 1 .56-1.026 2.839 2.839 0 0 1 1.026-.56c.522-.105 1.294-.14 2.158-.14zm-1.635 6.4a2.365 2.365 0 1 1 4.73 0 2.365 2.365 0 0 1-4.73 0zm5.825-4.85a.55.55 0 1 1-1.1 0 .55.55 0 0 1 1.1 0z"/>
                    </svg>
                    Compartir
                </button>
            </a>

          </div>
          <picture>
            <img src='https://qjsvnfogbaqnjbqi.public.blob.vercel-storage.com/lovingmypets/${filename}' alt='${title}'>
          </picture>
        </article>   
  `;
  blog.insertBefore(newDiv, item);
}

newDiv.addEventListener('click', (e) => {
  // console.log(e)

  if(e.target.tagName === "A") {
    console.log(e.target.attributes)
    console.log(e.target.attributes[3].value)
    setCookie("article", e.target.attributes[3].value, 365);
    // getItem(e.target.attributes[3].value)
  }
})

getHome();
