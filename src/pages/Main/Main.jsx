import Styles from './style.module.css'
import Card from '../../components/Card/Card'
import CoinsList from '../../components/CoinsList/CoinsList'
import FilterBlock from '../../components/Filter/Filter'
import { useMemo } from 'react'
const Main = ({balance, setBalance, coins, filteredCoins, setCoins}) => {
    return(
        <main className={Styles.main}>
            <Card balance={balance} setBalance={setBalance}/>
            <FilterBlock coins={coins} setCoins={setCoins} />
            { coins.length > 0 ? (<CoinsList coins={filteredCoins} />) : (<div>Грузится...</div>)}
        </main>
    )
}

export default Main;