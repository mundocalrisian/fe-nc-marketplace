import { useEffect, useState } from "react"
import { getAllItems } from "../utils/api";
import ItemCard from "./Item-card";
import ItemCardStyling from "./Item-card-styling";
import {useParams} from 'react-router-dom'

export const ItemsList = function(){
    const [items,setItems] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

// get category from useParams
// create a function for getItemsByCategory in api.js
// implement some conditional logic to see whether useParams is defined and then invoke the correct api call

    useEffect(()=>{
        getAllItems()
        .then((data)=>{
            setItems(data)
            setIsLoading(false)
        })
    },[])

    if(isLoading){
        return(
            <p>Items loading!</p>
        )
    }

return(
    <div>
        <ul>
            {items.length > 0? items.map(item=>{
                return <ItemCard key={item.item_id} item={item}/>
            }):<p>No items available</p>
            } 
        </ul>
    </div>
    )
}