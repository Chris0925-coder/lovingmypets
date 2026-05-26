// const shareBtn = document.getElementById('shareBtn');
  // const webLink = window.location.href; 

  // shareBtn.addEventListener('click', async (event) => {
async function shareBtn(id) {
    // event.preventDefault();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Título de tu página',
          text: '¡Echa un vistazo a este enlace!',
          url: webLink+"?id="+id
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


const pageUrl = encodeURIComponent(window.location.href);
const pageText = encodeURIComponent("Check this out!");
function shareOnFacebook(id) {
  window.open(
    `https://facebook.com/${pageUrl}?id=${id}`,
    "_blank",
    "width=600,height=400",
  );
}

function shareOnTwitter(id) {
  window.open(
    `https://x.com/${pageUrl}?id=${id}&text=${pageText}`,
    "_blank",
    "width=600,height=400",
  );
}