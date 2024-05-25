import { useEffect, useState } from "react";
export const useFilter = (coins, setCoins) => {
const [value, setValue] = useState('')
useEffect(() =>
     {
        let filteredCoins = coins.filter((coin) => {
            return coin.name.toLowerCase().includes(value.toLowerCase())})
        setCoins(filteredCoins);
     },
 [value]) 
     return {value, setValue}
}