// const shareBtn = document.getElementById('shareBtn');
  // const webLink = window.location.href; 

  // shareBtn.addEventListener('click', async (event) => {
async function shareBtn() {
    event.preventDefault();

    console.log(navigator)

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Título de tu página',
          text: '¡Echa un vistazo a este enlace!',
          url: webLink
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