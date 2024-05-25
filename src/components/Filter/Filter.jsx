import React, { useContext, useEffect, useState } from 'react';
import './style.css'
import { coinsContext } from '../../cryptoContext/CoinsContext';
import { useFilter } from '../../helpers/hooks/useFilter';

const FilterBlock = ({setCoins}) => {
    const coinContext = useContext(coinsContext)
    const {coins} = coinContext
    const {value, setValue} = useFilter(coins, setCoins)
    return (
        <div>
            <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type='text' 
            placeholder='bitcoin' 
            className='input'>
            </input>
        </div>
    )
}

export default React.memo(FilterBlock);