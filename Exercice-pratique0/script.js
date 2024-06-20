// Mettre un event listener sur le click du bouton
const button = document.querySelector("#search");
button.addEventListener("click", () => {
  alert("Submit");
  const title = document.querySelector("#title").value;
  console.log(title);
  const request = fetch(
    "https://openlibrary.org/search.json?q=" + title + "&limit=1"
  );
  //   then va s'executer quad l'api nous a répondu
  // Response contiendra la réponse de l'api
  request
    .then((response) => {
      // Envoie la version json de la réponse au prochain then
      return response.json();
    })
    // Ce deuxième then s'execute quand la réponse json est finie
    .then((json) => {
      // On stocke le titre dans une constante
      const title = json.docs[0].title;
      //   On selectionne l'element HTML titre;
      const domTitle = document.querySelector("#book-title");
      // On met à jour le titre dans le HTML
      domTitle.innerHTML = title;
      console.log(json.docs[0].title);
    });
});
//   Récuperer le contenu de l'input et vérifier qu'il n'est pas vide

// Lancer la requête sur l'api sous ce format la : https://openlibrary.org/search.json?q=the+lord+of+the+rings&limit=1
//
