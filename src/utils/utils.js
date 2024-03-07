export default function penceToPounds(price){
    return `£${(price/100).toFixed(2)}`
}