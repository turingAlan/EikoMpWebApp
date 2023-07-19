import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    "Content-Type": "application/json",
  },
});

//intercepting the request and adding the token to the header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//intercepting the response and refreshing the token to the header if token is expired
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const orginalConfig = error.config;
    if (
      orginalConfig.url !== `${import.meta.env.BASE_URL}login` &&
      error.response
    ) {
      //access token expired
      if (error.response.status === 401 && !orginalConfig.retry) {
        orginalConfig.retry = true;
        try {
          const rstoken = await axiosInstance.post("refresh", {
            refresh: localStorage.getItem("refresh_token"), //getting the new token using the refresh token
          });

          const { access_token } = rstoken.data.access;

          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", rstoken.data.refresh);

          axiosInstance.defaults.headers[
            "Authorization"
          ] = `Bearer ${access_token}`;
          return axiosInstance(orginalConfig); //running the original request with updated token
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
