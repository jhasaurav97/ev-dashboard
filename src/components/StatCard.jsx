const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 w-full">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-semibold text-gray-800 mt-1">{value}</h3>
    </div>
  );
};

export default StatCard;
