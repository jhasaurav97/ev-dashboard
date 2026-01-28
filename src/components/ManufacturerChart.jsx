import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ManufacturerChart = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Top EV Manufacturers</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="make"
            tick={{ fontSize: 12 }}
            interval={0}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" className="fill-blue-600" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ManufacturerChart;
