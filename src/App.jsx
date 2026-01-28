import { useState, useEffect } from "react";
import { loadCSVData } from "./utils/dataLoader.js";
import {
  groupByModelYear,
  groupByMake,
  groupByEVType,
} from "./utils/dataProcessor.js";
import YearTrendChart from "./components/YearTrendChart.jsx";
import ManufacturerChart from "./components/ManufacturerChart.jsx";
import EVTypeChart from "./components/EVTypeChart.jsx";
import StatCard from "./components/StatCard.jsx";

function App() {
  const [data, setData] = useState([]);
  const yearTrendData = groupByModelYear(data);
  const manufacturerData = groupByMake(data);
  const evTypeData = groupByEVType(data);

  const totalRecords = data.length;

  const totalManufacturers = new Set(
    data.map((item) => item["Make"]).filter(Boolean),
  ).size;

  const latestModelYear = Math.max(
    ...data.map((item) => Number(item["Model Year"])).filter(Boolean),
  );

  useEffect(() => {
    loadCSVData(setData);
  }, []);

  if (!data.length) {
    return <p>Loading EV data...</p>;
  }

  // console.log(groupByModelYear(data).slice(0, 5));
  // console.log(groupByMake(data));
  // console.log(groupByEVType(data));

  return (
    <div style={{ padding: "20px" }}>
      <h1>EV Population Analytics Dashboard</h1>

      {/* Stat Cards Section */}
      <div style={{ display: "flex", gap: "16px", margin: "20px 0" }}>
        <StatCard title="Total EV Records" value={totalRecords} />
        <StatCard title="Manufacturers" value={totalManufacturers} />
        <StatCard title="Latest Model Year" value={latestModelYear} />
      </div>

      {/* Charts Section */}
      <YearTrendChart data={yearTrendData} />
      <ManufacturerChart data={manufacturerData} />
      <EVTypeChart data={evTypeData} />
    </div>
  );
}

export default App;
