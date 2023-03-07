const api = "https://makeup-api.herokuapp.com/api/v1/products.json";
let mainPage = document.getElementById("mainCont");

async function dataCollection(url) {
  let res = await fetch(url);
  let data = await res.json();
  if (data.length > 0) {
    renderCard(data);
  }
}
dataCollection(api);

function renderCard(data = []) {
  let cards = [];
  for (let i = 0; i < data.length; i++) {
    cards.push(createCard(data[i]));
  }
  mainPage.append(...cards);
}

function createCard(data = {}) {
  let card = document.createElement("div");
  card.setAttribute("class", "card card-image");

  let img = document.createElement("img");
  img.setAttribute("class", "image");
  img.setAttribute("src", data.image_link);
  img.setAttribute("loading", "lazy");
  card.appendChild(img);

  let name = document.createElement("h3");
  name.setAttribute("class", "name");
  name.innerText = data.name;
  card.appendChild(name);

  let brand = document.createElement("h5");
  brand.setAttribute("class", "brand");
  brand.innerText = data.brand;
  card.appendChild(brand);
  

  let price = document.createElement("h5");
  price.setAttribute("class", "price");
  price.innerText = `\$ ${data.price}`;
  card.appendChild(price);

  let desc = document.createElement("a");
  desc.setAttribute("class", "desc");
  desc.setAttribute("href", data.description);
  desc.innerText = "Product Description";
  card.appendChild(desc);

  let prd_link = document.createElement("button");
  prd_link.setAttribute("class", "link");
  prd_link.setAttribute("onclick", `window.location.href="${data.product_link}}"`)
  prd_link.setAttribute("href", data.product_link);
  prd_link.innerText = "BUY NOW";
  card.appendChild(prd_link);

  return card;
}
