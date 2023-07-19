import Swal from "sweetalert2";

import axiosInstance from "./interceptors/axios";

const login = async ({ loginData, navigate }) => {
  axiosInstance
    .post("login", {
      loginData,
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      localStorage.setItem("user_id", res.data.profile.id);
      localStorage.setItem("first_time", res.data.profile.first_time);

      //if the user is logging in for the first time, update the first_time field to false
      if (res.data.profile.first_time) {
        axiosInstance
          .patch(`users/${res.data.profile.id}`, {
            first_time: false,
          })
          .then(() => {
            console.log("\n\n\n\nuser first time updated\n\n\n\n");
          })
          .catch((error) => {
            console.log(
              `\n\n\n\nuser first time update error ${error}\n\n\n\n`
            );
          });
      }

      navigate("/dashboard");
    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Please try again later",
        text: "Incorrect username or password. Please try again.",
      });
    });
};

const signup = async ({ data }) => {
  axiosInstance
    .post("signup", {
      data,
    })
    .then(() => {
      console.log("\n\n\n\nuser created\n\n\n\n");
    })
    .catch((error) => {
      console.log(`\n\n\n\nuser creation error ${error}\n\n\n\n`);
    });
};

export { login as apiLogin, signup as apiSignup };
