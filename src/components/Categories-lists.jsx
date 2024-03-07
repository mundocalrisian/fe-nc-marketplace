import { useEffect, useState } from "react"
import { getCategoryList } from "../utils/api"
import { ItemsList } from "./Items-List"
import { Routes, Route, Link, useParams} from 'react-router-dom'

export default function CategoriesList(){
    const [categories,setCategories] = useState([]);
    const [isLoading,setIsLoading] = useState(true)

    const {category_name} = useParams()
    console.log(category_name);
    
    useEffect(()=>{
        getCategoryList()
        .then((data)=>{
            setCategories(data)
            setIsLoading(false)
        })
    },[])

    if(isLoading){
        return(
            <p>Currently loading!</p>
        )
    }else{
        return(
            <section>
                <ul>
                {categories.map(item=>{
                    return(
                        <li key={item.category_name}><Link to={`/categories/${item.category_name}`}>{item.category_name}</Link></li>
                    )
                })}
                </ul>
                <ItemsList/>
            </section>
        )
    }
    
}