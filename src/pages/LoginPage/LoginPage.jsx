import { useState } from "react";
import "@/global.css";
import "./login.css";

//Importing the packages
import { useNavigate } from "react-router-dom";

//Importing the utils and components
import { apiLogin } from "@/helpers/api";
import TextInput from "@/components/TextInput";

//Importing the  assets
import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  login_page,
} from "@/assets/Login";
import { eikomp_logo } from "@/assets/icons";

function Login() {
  const navigate = useNavigate();

  const initialLoginData = Object.freeze({
    username: "",
    password: "",
  });
  const [loginData, setLoginData] = useState(initialLoginData);
  const [linkPopup, setLinkPopup] = useState(false);

  //Function for the login

  const handleTextInput = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiLogin({ loginData, navigate });
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  //for the information panel
  const SIDE_SLIDE = [
    {
      thumb: <img src={logo1} alt="Compliance image" />,
      title: "Know Your Compliance",
      route: "/navbar/firstcompliance",
    },
    {
      thumb: <img src={logo2} alt="Traking image" />,
      title: "Application Progress and Tracking",
    },
    {
      thumb: <img src={logo3} alt="Analytics image" />,
      title: "Analytics",
    },
    {
      thumb: <img src={logo4} alt="Testing image" />,
      title: "Lab Testing",
    },
    {
      thumb: <img src={logo5} alt="Advisory image" />,
      title: "Advisory Services",
    },
    {
      thumb: <img src={logo6} alt="Logistic image" />,
      title: "Logistic",
    },
  ];

  return (
    <>
      <div className="auth-box">
        <div className="login">
          <div className="form">
            <div className="top-sec">
              <img
                src={eikomp_logo}
                className="eikomp_logo"
                width={230}
                height={150}
                alt="logo"
              />

              <h3
                style={{
                  padding: 0,
                  fontSize: "25px",
                  marginTop: "15px",
                  color: "#082A71",
                }}
              >
                WELCOME
              </h3>
            </div>
            <div className="input-box">
              <input
                name="username"
                placeholder="Username"
                onChange={handleTextInput}
              />
            </div>
            <TextInput
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleTextInput}
            />

            <span
              onClick={() => setLinkPopup(true)}
              style={{
                cursor: "pointer",
                margin: "5px 140px 0px 0px",
                fontWeight: "400",
                fontSize: "17px",
                color: "#19ABFE",
              }}
            >
              Forgot Password?
            </span>
            {/* <Popup trigger={linkPopup} setTrigger={setLinkPopup}>
              <ForgetPassword />
            </Popup> */}

            <button className="button1" onClick={handleSubmit}>
              Login
            </button>

            <button
              className="sign-upbtn"
              onClick={handleSignUp}
              style={{ cursor: "pointer" }}
            >
              GET STARTED FOR FREE!
            </button>
            <img src={login_page} alt="" className="login-img" />
          </div>
        </div>

        <div className="container-line">
          <div className="line"></div>
        </div>

        <div className="side-bar" style={{}}>
          <h2 style={{ fontSize: "20px", margin: "33px -30px" }}>
            FEATURED APPS
          </h2>
          {SIDE_SLIDE.map((item, index) => (
            <div
              to={item.route}
              key={index}
              className={item.className}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "18px",
              }}
            >
              {item.thumb}
              <p style={{ marginLeft: "15px" }}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Login;
