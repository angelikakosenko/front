//функция удаления работает неправильно, хочу разобрать на уроке



let products = [];

const add_product = document.querySelector(".add_product");
const prductList = document.querySelector(".prductList");

add_product.addEventListener("submit", (e) => {
  e.preventDefault();
  const productId = +e.target.productId.value;

  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then(({ title, price, description, category, image, id }) =>
      products.push({ title, price, description, category, image, id })
    );
  rerender();

  e.target.productId.value = "";
});

// const viewProduct = (title, price, description, category, image) => {

//     products.push(title, price, description, category, image);
//     rerender()
// }


const deleteProducts = id => {
    let new_arr = products;
    new_arr.filter(item => item.id !== id)
    prductList.innerText = '';
    prductList.append(new_arr)
//    rerender()
}
const rerender = () => {


    
//   if (products.length === 0) {
//     const container = document.createElement("div");
//     const noneProduct_p = document.createElement("p");
//     noneProduct_p.classList.add('dafaultText')
//     noneProduct_p.innerText =
//       "Please, write id number from 1 to 20 in input area";
//     container.append(noneProduct_p);
//   } else {
    prductList.innerText = '';
    products.forEach(({ title, price, description, category, image, id }) => {
      const title_p = document.createElement("h2");
      const price_p = document.createElement("span");
      const description_p = document.createElement("p");
      const category_p = document.createElement("h3");
      const image_p = document.createElement("img");
      const container = document.createElement("div");
      const deleteBtn = document.createElement("button");

      deleteBtn.addEventListener('click', () => deleteProducts(id))

      title_p.innerText = title;
      price_p.innerText = `$ ${price}`;
      description_p.innerText = description;
      category_p.innerText = category;
      image_p.setAttribute("src", image);
      image_p.setAttribute("width", "280px");
      image_p.setAttribute("height", "330px");

      deleteBtn.innerText = "Delete";

      container.append(
        title_p,
        image_p,
        category_p,
        price_p,
        description_p,
        deleteBtn
      );
      prductList.append(container);
    });
  };

rerender();
// fetch(`https://fakestoreapi.com/products/`)
//     .then(resp => resp.json())
//     .then(({title, price, description, category, image}) => viewProduct(title, price, description, category, image))


