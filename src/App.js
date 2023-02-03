import NavbarContainer from "./components/Navbar/NavbarContainer";
import LandingPageContainer from "./components/LandingPage/LandingPageContainer";
import EmployeesSection from "./components/MainSections/Employees/EmployeesSection";
import OfferSection from "./components/MainSections/Offer/OfferSection";
import FooterContainer from "./components/Footer/FooterContainer";
import "./Reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <LandingPageContainer />
      <EmployeesSection />
      <OfferSection />
      <FooterContainer />
    </div>
  );
}

export default App;
