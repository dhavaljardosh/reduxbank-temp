import "./App.css";
import { store } from "./index";

function App() {
  return (
    <div className="App">
      <div>
        <h3 className="bal-name">Account Balance</h3>
        <p className="bal-amt">$ {store.getState().balanceReducer}</p>
        <div>
          <button
            className="bal-btn"
            onClick={() => {
              if (store.getState().balanceReducer === 0) {
                alert("Amount is zero, can't deduct more");
                return;
              }
              store.dispatch({ type: "WITHDRAW_MONEY", amount: 300 });
            }}
          >
            Withdraw $300
          </button>
        </div>

        <div>
          <button
            className="bal-btn mt"
            onClick={() => {
              store.dispatch({ type: "DEPOSIT_MONEY", amount: 300 });
            }}
          >
            Deposit $300
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
