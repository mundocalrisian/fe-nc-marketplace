import { useEffect, useState } from "react"
import { getCategoryList } from "../utils/api"
import { ItemsList } from "./Items-List"

export default function CategoriesList(){
    const [categories,setCategories] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        getCategoryList()
        .then((data)=>{
            // console.log(data)
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
                        <li key={item.category_name}>{item.category_name}</li>
                    )
                })}
            </ul>
            <ItemsList/>
            </section>
        )
    }
    
}