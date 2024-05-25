import { useContext } from 'react'
import { coinsContext } from '../../cryptoContext/CoinsContext'
import './style.css'
const CoinsList = () => {
    const CoinsContext = useContext(coinsContext)
    const {filteredCoins} = CoinsContext
    return (
        <ul className='coins-list'>
            {filteredCoins.map(coin => {
                return <li className='cryptoCoin' key={coin.uuid}>
                <div className='coinInfo'>
                    <img src={coin.iconUrl} alt={coin.name}></img>
                    <p className='coinName'> {coin.name}/USD</p>
                </div>
                <div> 
                    <p className='price-USD'>{(+coin.price).toFixed(3)} $</p>
                    <p className='price-BTC'>{(+coin.btcPrice).toFixed(3)} BTC</p>
                </div>
            </li>
            })}
        </ul>
    )
}

export default CoinsList;