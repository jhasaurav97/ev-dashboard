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
    <div className="bg-white rounded-xl shadow-sm border p-5 mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">EV Adoption Over Time</h2>
          
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
