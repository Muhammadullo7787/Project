import "./App.css";
import React, { useState, useEffect } from 'react'
import data from './data/index'

function App() {

  const [cafe, setCafe] = useState(data, { orders: [] });

  return (
    <div className="App">
      <div>
        <div className="thead">
          <h2>Cafe Codemy</h2>
          <thead>
            <tr>
              <th>Prodact Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Total</th>
            </tr>
            {data.orders.map((item) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <th>{item.productName}</th>
                      <th>{item.price}</th>
                      <th>{item.amount}</th>
                      <th>{item.amount * item.price}</th>
                    </tr>
                  </tbody>
                </>
              )
            })}
          </thead>
          <h6>Total:</h6>
          <h6>Waiter Service:</h6>
          <h6>Total:</h6>
        </div>
        <h3>Pleace:</h3>
        <h3>Waiter:</h3>
      </div>
    </div>
  );
}

export default App;
