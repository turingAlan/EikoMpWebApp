import "./button.css";

function CustomButton(props) {
  const { onPress, fillColor, textColor, type, content, style, textStyle } =
    props;

  return (
    <div
      onClick={onPress}
      className="button-container"
      style={{
        backgroundColor: type === "fill" ? fillColor : "white",
        ...style,
      }}
    >
      <h1
        style={{ color: type === "fill" ? textColor : "black", ...textStyle }}
        className="button-text"
      >
        {content}
      </h1>
    </div>
  );
}

export default CustomButton;
