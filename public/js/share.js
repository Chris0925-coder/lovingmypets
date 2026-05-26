// const shareBtn = document.getElementById('shareBtn');
  // const webLink = window.location.href; 

  // shareBtn.addEventListener('click', async (event) => {
async function shareBtn(id) {
    // event.preventDefault();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "title",
          text: '¡Echa un vistazo a este enlace!',
          url: "https://www.lovingmypets.pro/new.html?id="+id
        });
        console.log('Enlace compartido exitosamente');
      } catch (err) {
        console.error('Error al compartir:', err);
      }
    } else {
      alert('Tu navegador no soporta la función de compartir nativa. Copia el enlace manualmente.');
    }
  // });
}


const pageUrl = encodeURIComponent(`https://www.lovingmypets.pro/new.html?id=${id}`);
const pageText = encodeURIComponent("Check this out!");
function shareOnFacebook(id) {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://www.lovingmypets.pro/new.html" +"?id="+id)}`,
    "_blank",
    "width=600,height=400",
  );
}

function shareOnTwitter(id) {
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(pageText)}&url=${encodeURIComponent("https://www.lovingmypets.pro/new.html" +"?id="+id)},
    "_blank",
    "width=600,height=400",
  );
}