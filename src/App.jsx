import { useState, useEffect } from "react";
import { loadCSVData } from "./utils/dataLoader.js";
import {
  groupByModelYear,
  groupByMake,
  groupByEVType
} from "./utils/dataProcessor.js";
import YearTrendChart from "./components/YearTrendChart.jsx"; 

function App() {
  const [data, setData] = useState([]);
  const YearTrendData = groupByModelYear(data);

  useEffect(() => {
    loadCSVData(setData);
  }, []);

  if (!data.length) {
    return <p>Loading EV data...</p>;
  }

  // console.log(groupByModelYear(data).slice(0, 5));
  console.log(groupByMake(data));
  console.log(groupByEVType(data));

  return (
    <div style={{ padding: "20px" }}>
      <h1>EV Population Analytics Dashboard</h1>
      <p>Total Records: ${data.length}</p>
      <YearTrendChart data={YearTrendData} />
    </div>
  );
}

export default App;
