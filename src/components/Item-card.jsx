import penceToPounds from "../utils/utils"
import {Link} from "react-router-dom"


export default function ItemCard({item}){
    return(
        <div>
            <img src={item.img_url} width="400px" alt={item.item_name} />
            <p> <a href="./item/item_id">{item.item_name}</a> </p>
            <p>{item.description}</p>
            <p>{penceToPounds(item.price)}</p>
        </div>
    )
}