const ProgressBar = ({ step, totalSteps }) => {
  const progress = ((step + 1) / totalSteps) * 100;
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(125, 125, 125)",
        height: "10px",
        marginBottom: "10px",
        borderRadius: "50px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          background: "mediumslateblue",
          height: "100%",
          transition: "width .5s",
          borderRadius: "50px",
          border: "1px solid black",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
