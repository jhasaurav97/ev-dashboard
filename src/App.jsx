import { useState, useEffect } from "react";
import { loadCSVData } from "./utils/dataLoader.js";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadCSVData(setData);
  }, []);

  if (!data.length) {
    return <p>Loading EV data...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>EV Population Analytics Dashboard</h1>
      <p>Total Records: ${data.length}</p>
    </div>
  );
}

export default App;
