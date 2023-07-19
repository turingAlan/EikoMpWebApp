import { useState } from "react";
import "./textinput.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";

function TextInput(props) {
  const { type, placeholder, onChange, name } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-container">
      <input
        name={name}
        type={!showPassword && type === "password" ? "text" : "password"}
        placeholder={placeholder}
        onChange={onChange}
      />
      {type === "password" && (
        <div
          onClick={() => setShowPassword((prevState) => !prevState)}
          style={{ backgaroundColor: "red" }}
        >
          {showPassword ? (
            <BsEye color="blue" size={24} />
          ) : (
            <BsEyeSlash color="blue" size={24} />
          )}
        </div>
      )}
    </div>
  );
}

export default TextInput;
