import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SellHouse from "./pages/SellHouse";
import RentHouse from "./pages/RentHouse";
import BuyHouse from "./pages/BuyHouse";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HouseDetail from "./components/HouseDetail";
import AdCreate from "./pages/AdCreate";
import AuthProvider from "./context/AuthProvider";
import IsLogged from "./components/IsLogged.js";
import ManageItensPage from "./pages/ManageItensPage";
import UpdateHousePage from "./pages/UpdateHousePage";
import AgentCreatePage from "./pages/AgentCreatePage";
import AgentPage from './pages/AgentPage'

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buyhouse" element={<BuyHouse />} />
          <Route path="/sellhouse" element={<SellHouse />} />
          <Route path="/renthouse" element={<Rent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/housedetails/:id" element={<HouseDetail />} />
          <Route
            path="/adcreate"
            element={
              <IsLogged>
                <AdCreate />
              </IsLogged>
            }
          />
          <Route path="/ad/create/sell/house" element={<SellHouse />} />
          <Route path="/ad/create/rent/house" element={<RentHouse />} />
          <Route
            path="/manageitens"
            element={
              <IsLogged>
                <ManageItensPage />
              </IsLogged>
            }
          />
          <Route
            path="/updatehouse/:id"
            element={
              <IsLogged>
                <UpdateHousePage />
              </IsLogged>
            }
          />
          <Route
            path="/createagent"
            element={
              <IsLogged>
                <AgentCreatePage />
              </IsLogged>
            }
          />
          <Route path="/agents" element={<AgentPage />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}
export default App;
