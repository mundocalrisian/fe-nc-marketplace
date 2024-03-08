import penceToPounds from "../utils/utils"
import {Link} from "react-router-dom"

export default function ItemCard({item}){
    return(
        <div>
            <img src={item.img_url} width="400px" alt={item.item_name} />
            <li>{item.item_name}</li>
            <li>{item.description}</li>
            <li>{penceToPounds(item.price)}</li>
        </div>
    )
}