import { Login } from "@/pages/LoginPage";
import { Signup } from "@/pages/SignupPage";
const routeList = [
  {
    name: "Login",
    path: "/",
    component: Login,
  },
  {
    name: "Signup",
    path: "/signup",
    component: Signup,
  },
];

export default routeList;
