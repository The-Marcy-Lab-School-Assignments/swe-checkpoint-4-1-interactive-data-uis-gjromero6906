const productList = document.querySelector("#products-list");
const errorMessage = document.querySelector('#error-message');
const productDetails= document.querySelector("#product-details");
const searchForm= document.querySelector("#search-form");
const productCounter= document.querySelector('#product-count');
export const renderProducts = (products) => {
    productList.innerHTML = '';
    productCounter.textContent = products.length;

    products.forEach((product)=>{
        const li = document.createElement('li');
        li.dataset.productId = product.id;
        const h3 = document.createElement('h3');
        h3.textContent = product.title;
        const img = document.createElement('img');
        img.src = product.images[0];
        img.alt = product.title;
        const p = document.createElement('p');
        p.textContent =product.price;
         li.append(img,h3,p);
         productList.append(li);
    })

};


export const renderProductDetails = (product) => {
    productDetails.classList.remove('hidden');
 
    productDetails.innerHTML = '';
    productDetails.removeAttribute('hidden');

    const h2 =document.createElement('h2');
    h2.textContent = product.title;

    const img = document.createElement('img');
    img.src = product.images[0];
    img.alt =product.title;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price:$${product.price}`;

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const productRating = document.createElement('p');
    productRating.textContent =`Rating: ${product.rating}`;
    console.log(product)
    console.log(h2,img,productPrice,productDescription,productRating)
    productDetails.append(h2,img,productPrice,productDescription,productRating);


};
