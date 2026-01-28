import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const EVTypeChart = ({data}) => {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>EV Type Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="type"
            outerRadius={120}
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EVTypeChart;
