import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const EVTypeChart = ({data}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        EV Type Distribution
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="type"
            outerRadius={120}
            label
            className="fill-blue-600"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EVTypeChart;
