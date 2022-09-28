let numero = 737628064502;

let url = `https://fr.openfoodfacts.org/api/v0/product/${numero}.json`;

fetch(url).then((response) =>
  response.json().then((data) => {
    console.log(data.code);
  })
);

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("opération réussie");

  let code = document.querySelector("#codebarre").value;

  let url = `https://fr.openfoodfacts.org/api/v0/product/${code}.json`;
  //let url = `http://127.0.0.1:3000/json/${code}.json`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);

        document.querySelector("#nom").innerHTML =
          "Nom du produit : " + data.product.product_name;

        document.querySelector("#marque").innerHTML =
          "Marque : " + data.product.brands;

        document.querySelector("#ingredient").innerHTML =
          "Ingrédients : " + data.product.ingredients_text;

        document.querySelector("#pays").innerHTML =
          "Pays : " + data.product.countries;

        document.querySelector("#emballage").innerHTML =
          "Emballage : " + data.product.packaging_old;

        document.querySelector("img").src = data.product.image_front_small_url;
      })
    )
    .catch((err) => console.log("Erreur : " + err));
});
