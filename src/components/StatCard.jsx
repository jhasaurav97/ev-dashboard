const StatCard = ({ title, value }) => {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        minWidth: "180px",
      }}
    >
      <p style={{ fontSize: "14px", color: "#6b7280" }}>{title}</p>
      <h3 style={{ fontSize: "24px", fontWeight: "600" }}>{value}</h3>
    </div>
  );
};

export default StatCard;
