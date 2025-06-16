import { colors } from "../sass/Colors";

export const ProgressBar = ({ progress }) => {
  const containerStyle = {
    marginTop: 30,
    border: "3px solid silver",
    background: "#ededed",
    borderRadius: 10,
  };

  const contentStyle = {
    background: colors.secondary,
    borderRadius: 10,
    height: "24px",
    textAlign: "center",
    lineHeight: "24px",
    fontFamily: "sans-serif",
    transition: "10s",
    color: colors.primary,
  };

  const state = `${progress}%`;
  return (
    <div style={containerStyle}>
      <div className="fw-bolder" style={{ ...contentStyle, width: state }}>
        {progress > 5 ? state : ""}
      </div>
    </div>
  );
};
