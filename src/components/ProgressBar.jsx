const ProgressBar = ({ step, totalSteps }) => {
  const progress = ((step + 1) / totalSteps) * 100;
  return (
    <div
      style={{
        width: "100%",
        background: "#ddd",
        height: "10px",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          background: "rgb(120, 255, 120)",
          height: "100%",
          transition: "width .5s",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
