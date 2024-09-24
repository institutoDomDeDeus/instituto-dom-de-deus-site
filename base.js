document.querySelector('#pix-copy a').addEventListener('click', function (e) {
    e.preventDefault();
    const pixKey = 'institutodomdedeus@gmail.com';
    navigator.clipboard.writeText(pixKey).then(function () {
      alert('Chave Pix copiada com sucesso!');
    }, function (err) {
      console.error('Erro ao copiar a chave Pix: ', err);
  });
});


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.onscroll = function() {
  const btnContainer = document.getElementById("backToTopContainer");
  const footer = document.querySelector('footer');
  const backToTopText = document.getElementById("backToTopText");


  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;


  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnContainer.style.display = "block";
  } else {
    btnContainer.style.display = "none";
  }


  if (footerRect.top <= windowHeight) {
    backToTopText.style.color = "#FFFFFF"; 
  } else {
    backToTopText.style.color = "#0E0B86";
  }
};

