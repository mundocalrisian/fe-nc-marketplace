import axios from 'axios';
const marketPlaceAPI = axios.create({
    baseURL:'https://nc-marketplace-sem-2.onrender.com/api'
})

export const getCategoryList = ()=>{
    return(
        marketPlaceAPI.get("/categories")
        .then((result)=>{
            // console.log(result.data.categories)
            return result.data.categories
        })
    )
}

export const getAllItems = () =>{
    return(
        marketPlaceAPI.get("/items")
        .then((result)=>{
            // console.log(result.data.items)
            return  result.data.items;
        })
    )
}