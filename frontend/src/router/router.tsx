import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App.tsx";
import Home from "../page/Home.tsx";
import SignIn from "@/page/Signin.tsx";
import SignUp from "@/page/signup.tsx";
import ReviewsPage from "@/page/Reviews.tsx";
import OrganizationsPage from "@/page/Organizations.tsx";
import OrganizationDashboard from "@/page/OrgDashBoard.tsx";
import FarmerDashboard from "@/page/farmerDashBoard.tsx";
import AdminDashboard from "@/page/AdminDashBoard.tsx";
import FarmersPage from "@/page/Farmer.tsx";
import FarmerDetailPage from "@/page/FramerId.tsx";
import ProblemPage from "@/page/Problem.tsx";
import SolutionPage from "@/page/Solution.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="/signin" element={<SignIn></SignIn>}>
        {" "}
      </Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/problems" element={<ProblemPage></ProblemPage>}></Route>
      <Route path="/solutions" element={<SolutionPage></SolutionPage>}></Route>
      <Route path="/reviews" element={<ReviewsPage></ReviewsPage>}></Route>
      <Route
        path="/organizations"
        element={<OrganizationsPage></OrganizationsPage>}
      ></Route>
      <Route
        path="/organization/dashboard"
        element={<OrganizationDashboard></OrganizationDashboard>}
      ></Route>
      <Route
        path="/farmer/dashboard"
        element={<FarmerDashboard></FarmerDashboard>}
      ></Route>
      <Route
        path="/admin/dashboard"
        element={<AdminDashboard></AdminDashboard>}
      ></Route>
      <Route path="/farmers" element={<FarmersPage></FarmersPage>}></Route>
      <Route
        path="/farmers/:id"
        element={<FarmerDetailPage></FarmerDetailPage>}
      ></Route>
    </Route>,
  ),
);

export { router };
