import { useState } from "react"
import Select from "react-select"
import { postItem } from "../utils/api"

export default function SellItem() {
    const [itemName, setItemName ] = useState("")
    const [itemDescription, setItemDescription] = useState("")
    const [itemImgUrl, setItemImgUrl] = useState("")
    const [itemPrice, setItemPrice] = useState("")
    const [categoryName, setCategoryName] = useState("")

    const options = [
        {value: "Electronics", label: "Electronics"},
        {value: "Household", label: "Household"},
        {value: "Clothing", label: "Clothing"}
    ]
    function handleSubmit(event){
        event.preventDefault();
        const postObj = {
            "item_name": itemName,
            "description": itemDescription,
            "img_url": itemImgUrl,
            "price": itemPrice,
            "category_name": categoryName
        }
        postItem(postObj)
    }

    return (
    <>
        <h2>Sell an item here!</h2>
        <form onSubmit={(event)=>{
            handleSubmit(event)
        }}>
            <label htmlFor="item-name-input">Item name</label>
            <input type="text" value={itemName} onChange={(event)=>{
                setItemName(event.target.value)
            }}  id="item-name-input"/>
            <label htmlFor="item-description-input">Description</label>
            <input type="text" value={itemDescription} onChange={(event)=>{
                setItemDescription(event.target.value)
            }} id="item-description-input"/>
            <label htmlFor="item-img-url-input">Item image URL</label>
            <input type="text" value={itemImgUrl} onChange={(event)=>{
                setItemImgUrl(event.target.value)
            }} id="item-img-url-input"/>
            <label htmlFor="item-price-input">Price</label>
            <input type="text" value={itemPrice} onChange={(event)=>{
                setItemPrice(event.target.value)
            }}  id="item-price-input"/>
            <label htmlFor="item-category-input">Category</label>
            <Select
            value={options.value} 
            onChange={(event)=>{
                setCategoryName(event.value)
                console.log(event.value)
            }}
            options={options}
            defaultValue=  {{value: "placeholder", label: "Please select a category"}}
            />
            <button type="submit">List item!</button>
        </form>
    </>
    )
}