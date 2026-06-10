import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="App">
      <h1 style={{ marginTop: "20px" }}>📊 Productivity Dashboard</h1>

      <div style={{ marginTop: "30px" }}>
        {data.length === 0 ? (
          <p>No data available yet...</p>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                margin: "10px auto",
                padding: "10px",
                width: "300px",
                borderRadius: "8px",
                textAlign: "left",
              }}
            >
              <p>🌐 Domain: <b>{item.domain}</b></p>
              <p>⏱ Time Spent: <b>{item.timeSpent.toFixed(2)} sec</b></p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;