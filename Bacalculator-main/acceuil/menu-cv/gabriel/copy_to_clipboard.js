const btnCopie = document.getElementById('copie');
const spanMail = document.getElementById('mail');

btnCopie.addEventListener('click', () => {
  const email = spanMail.innerText;
  navigator.clipboard.writeText(email)
    .then(() => {
      console.log(`Adresse email "${email}" copiée dans le presse-papier !`);
    })
    .catch((error) => {
      console.error(`Erreur lors de la copie de l'adresse email : ${error}`);
    });
});