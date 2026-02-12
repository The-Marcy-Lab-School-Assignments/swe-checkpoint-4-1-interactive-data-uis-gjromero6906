import { getProductById, getProducts,searchProducts } from './fetch-helpers'
import { renderProductDetails, renderProducts } from './dom-helpers'

const errorMessage = document.querySelector('#error-message');
getProducts().then((products)=>{
    if(products === null){
        console.error(error.message);
        errorMessage.textContent = 'Failed to load recipe details.';
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 2000);
    }
    renderProducts(products.data);//gotta pass in value
})

const productsList = document.querySelector('#products-list');
productsList.addEventListener('click',(event)=>{
    const li = event.target.closest('li');
    if(!li) return;
    getProductById(li.dataset.productId).then(({ data, error })=>{//kept passing product when it is expecting this object breaking all code before
        if (error || !data) {
            errorMessage.textContent = 'Failed to load recipe details.';
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 2000);
    } else {
      renderProductDetails(data);
    }
    })
})
const form = document.getElementById('search-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const formValues = {
        query: formData.get('query'),
    };
    const {data,error}=await searchProducts(formValues.query);
    if(error){
        errorMessage.textContent = 'Failed to load recipe details.';
        setTimeout(() => {
            errorMessage.textContent = '';
        }, 2000);
    }
    renderProducts(data.products);
    form.reset();
})