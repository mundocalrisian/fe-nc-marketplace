import { useEffect, useState } from "react"
import { getAllItems } from "../utils/api";
import ItemCard from "./Item-card";
export const ItemsList = function(){
    const [items,setItems] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
// console.log(items)
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
//itemstorage
return(
    <div>
            <h2>All items!</h2>
            <ul>

                {items.length > 0? items.map(item=>{
                    // console.log(item)
                 return <ItemCard key={item.item_id} item={item}/>
                }):<p>No items available</p>
                } 
            </ul>
        </div>
    )
}