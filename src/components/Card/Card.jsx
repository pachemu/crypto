import { withRuBalance } from '../../helpers/hoc/withRuBalance';
import './style.css'
const Card = ({balance, setBalance, ruBalance}) => {
console.log({ruBalance})
    return(
        <div className='card'>
            <p>Crypto-Finance</p>
            <div className='card-balance'>
                <p>Denchik</p>
                <div> {ruBalance} ₽ </div>
                <div> {balance} $</div>
                <button onClick={setBalance}>Add money</button>
            </div>
        </div>
    )
}

export default withRuBalance(Card);