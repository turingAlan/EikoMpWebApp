import { useState } from "react";
import "@/global.css";
import "./login.css";

//Importing the packages
import { useNavigate } from "react-router-dom";

//Importing the utils and components
import { apiLogin } from "@/helpers/api";
import CustomTextInput from "@/components/CustomInput";

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
import CustomButton from "../../components/CustomButton/Index";

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
                  fontSize: "2rem",
                  marginTop: "40px",
                  color: "#082A71",
                  fontWeight: "400",
                  fontFamily: "Noto sans",
                }}
              >
                Welcome
              </h3>
            </div>
            <div className="mid-container">
              <CustomTextInput
                type="text"
                placeholder="Username"
                onChange={handleTextInput}
              />
              <CustomTextInput
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleTextInput}
              />

              <span
                onClick={() => setLinkPopup(true)}
                style={{
                  cursor: "pointer",
                  margin: "5px 0px",
                  fontWeight: "400",
                  fontSize: "1.15rem",
                  color: "#19ABFE",
                  marginRight: "auto",
                  marginBottom: "30px",
                }}
              >
                Forgot Password?
              </span>
              {/* <Popup trigger={linkPopup} setTrigger={setLinkPopup}>
              <ForgetPassword />
            </Popup> */}

              <CustomButton
                type="fill"
                fillColor=" #55B700"
                onPress={handleSubmit}
                content="Login"
              />

              <CustomButton
                type="fill"
                fillColor=" #082A71"
                onPress={handleSignUp}
                content="Get Started for Free!"
              />
            </div>
            <img src={login_page} alt="" className="login-img" />
          </div>
        </div>

        <div className="container-line">
          <div className="line"></div>
        </div>

        <div className="side-bar" style={{ backgroundColor: "white" }}>
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
