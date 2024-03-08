import { useState } from "react"
import Select from "react-select"

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

    return (
    <>
        <h2>Sell an item here!</h2>
        <form>
            <label htmlFor="item-name-input">Item name</label>
            <input type="text" value={itemName} id="item-name-input"/>
            <label htmlFor="item-description-input">Item description</label>
            <input type="text" value={itemDescription} id="item-description-input"/>
            <label htmlFor="item-img-url-input">Item description</label>
            <input type="text" value={itemImgUrl} id="item-img-url-input"/>
            <label htmlFor="item-price-input">Item description</label>
            <input type="text" value={itemPrice} id="item-price-input"/>
            <label htmlFor="item-category-input">Category</label>
            <Select
            value={options.value}
            options={options}
            defaultValue="please select..."
            />
            {/* <select name="" id="item-category-input">
                <option value="" disabled selected hidden >Please select a category</option>
                <option value="Electronics">Electronics</option>
                <option value="Household">Household</option>
                <option value="Clothing">Clothing</option>
            </select> */}
        </form>
    </>
    )
}