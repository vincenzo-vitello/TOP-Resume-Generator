const ProgressBar = ({ step, totalSteps }) => {
  const progress = ((step + 1) / totalSteps) * 100;
  return (
    <div
      style={{
        width: "100%",
        background: "rgb(125, 125, 125)",
        height: "10px",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          background: "bisque",
          height: "100%",
          transition: "width .5s",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
