import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const YearTrendChart = ({data}) => {
  return (
    <div style={{ marginTop: "40px" }}>
          <h2>EV Adoption Over Time</h2>
          
          <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line
                      type="monotone"
                      dataKey="count"
                      stroke="#2563eb"
                      strokeWidth={2}
                  />
              </LineChart>
          </ResponsiveContainer>
    </div>
  );
}

export default YearTrendChart
