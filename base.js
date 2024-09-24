document.querySelector('#pix-copy a').addEventListener('click', function (e) {
    e.preventDefault();
    const pixKey = 'institutodomdedeus@gmail.com';
    navigator.clipboard.writeText(pixKey).then(function () {
      alert('Chave Pix copiada com sucesso!');
    }, function (err) {
      console.error('Erro ao copiar a chave Pix: ', err);
    });
  });