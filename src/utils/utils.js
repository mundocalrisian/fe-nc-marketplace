export default function penceToPounds(price){
    return `£${(price/100).toFixed(2)}`
}

// export function pricePoundsToPence (){
//     return "hello"
// }