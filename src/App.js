import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoins] = useState([]);
  const [invert, setInvert] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  const [flipped, setFlipped] = useState(true);
  const onChange = (event) => setInvert(event.target.value);
  const onFlip = () => setInvert("") || setFlipped((current) => !current);
  const onSelectChange = (event) => {
    const selectedId = event.target.value;
    setSelectedId(selectedId);
    setInvert("");
    if (selectedId === "") {
      setSelectedPrice(null);
    } else {
      const selected = coin.find((item) => item.id === event.target.value);
      if (selected) {
        setSelectedPrice(selected.quotes.USD.price);
      }
    }
  };

  const result = () => {
    if (!invert || !selectedPrice) return "";
    const value = parseFloat(invert);
    return flipped
      ? Math.round(value / selectedPrice)
      : Math.round(value * selectedPrice);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coin.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <>
          <select value={selectedId} onChange={onSelectChange}>
            <option value="">Select you want to invert Coin</option>
            {coin.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} ({item.symbol}): {item.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <div>
            <input
              onChange={onChange}
              type="text"
              value={invert}
              placeholder={flipped ? "USD 입력" : "코인 개수 입력"}
              disabled={!selectedPrice}
            />
            <input
              type="text"
              value={result()}
              placeholder={flipped ? "코인 개수" : "USD 가격"}
              disabled
            />
            <div>
              <button onClick={onFlip}>전환 </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
