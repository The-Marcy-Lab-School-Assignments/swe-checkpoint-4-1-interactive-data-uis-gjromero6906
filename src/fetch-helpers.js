export const fetchData = (url) => {
};

export const getProducts = () => {
    return fetch('https://dummyjson.com/products')///stuck for a lot because it kept auto filling to the function above 
        .then((response)=>{
            if(!response.ok){
                throw Error(`Fetch failed. ${response.status} ${response.statusText}`)
            }
            return response.json()
        })
        .then((data)=>{
            return {data:data.products,error:null};
        })
        .catch((error)=>{
            return{data: null,error:error};
        })
};

export const getProductById = (id) => {
    return fetch(`https://dummyjson.com/products/${id}`)
        .then((response)=>{
            if(!response.ok){
                throw Error(`Fetch failed. ${response.status} ${response.statusText}`)
            }
            return response.json()
        })
        .then((data)=>{
            return {data:data,error:null};
        })
        .catch((error)=>{
            return{data: null,error:error};
        })
};

export const searchProducts = (query) => {

};
