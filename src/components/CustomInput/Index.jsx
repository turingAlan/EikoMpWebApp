import { useState } from "react";
import "./textinput.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";

function CustomTextInput(props) {
  const { type, placeholder, onChange, name } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-container">
      <input
        name={name}
        type={!showPassword && type === "password" ? "password" : "text"}
        placeholder={placeholder}
        onChange={onChange}
      />
      {type === "password" && (
        <div
          onClick={() => setShowPassword((prevState) => !prevState)}
          className="eye-icon"
        >
          {showPassword ? (
            <BsEye color="#6E737F" size={20} />
          ) : (
            <BsEyeSlash color="#6E737F" size={20} />
          )}
        </div>
      )}
    </div>
  );
}

export default CustomTextInput;
