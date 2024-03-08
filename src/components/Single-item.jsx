import { ItemsList } from "./Items-List"
import { useParams } from "react-router-dom"
import ItemCard from "./Item-card";

export default function SingleItem(){
    console.log(useParams);
    return(
       <section>
            <ItemCard/>
       </section>
    )
}