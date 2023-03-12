// немного криво работают стили при выводе больше одного продукта


    const form = document.querySelector('.add_products-form')
    const productsCard = document.querySelector('.productsCard')

    const createProductCard = (title, price, descr, category) => {
        const title_p = document.createElement('h3');
        const price_p = document.createElement('p');
        const descr_p = document.createElement('p');
        const category_p = document.createElement('p');
        const container = document.createElement('div');

        container.classList.add('products');

        title_p.innerText = title
        price_p.innerText = price
        descr_p.innerText = descr
        category_p.innerText = category

        container.append(title_p, price_p, descr_p, category_p);
        productsCard.append(container);
    }


    form.addEventListener('submit', e => {
        e.preventDefault();
        const id = e.target.idProduct.value

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(resp => resp.json())
            .then(({title, price, description, category}) => createProductCard(title, price, description, category));
            console.log()
        

        
        e.target.idProduct.value = '';
    })

