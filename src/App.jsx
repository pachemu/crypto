import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { getCoins } from "./api/api";
import { coinsContext } from "./cryptoContext/CoinsContext";
function App() {
  const [balance, setBalance] = useState(50000)
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])
  useEffect(() => {
    const fetchData = async() => {
      const data = await getCoins()
      setCoins(data.coins)
      setFilteredCoins(data.coins)
    }
    fetchData()
  }, [])
  const addBalance = useCallback(() => {
    setBalance(prev => prev + 1000)
  }, [])
  return (
    <>
    <coinsContext.Provider value={{coins, filteredCoins}} >
      <div>
      <Header />
      <Main coins={coins}
      balance={balance}
      setBalance={addBalance}
      setCoins={setFilteredCoins} 
      filteredCoins={filteredCoins} />
      </div>
      </coinsContext.Provider>
    </>
  )
}

export default App
