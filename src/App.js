import "./App.css";
import BestSeller from "./Components/BestSeller";
import BestSellerCards from "./Components/BestSellerCards";
import Cards1 from "./Components/Cards1";
import Footer from "./Components/Footer";
import FreshExotic from "./Components/FreshExotic";
import FreshOrganic from "./Components/FreshOrganic";
import Main1 from "./Components/Main1";
import Navbar from "./Components/Navbar";
import OrganicProduct from "./Components/OrganicProduct";
import OrganicProductCard from "./Components/OrganicProductCard";
import Testimonal from "./Components/Testimonal";
import TestimonalsHeading from "./TestimonalsHeading";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Main1 />
      <Cards1 />
      <OrganicProduct />
      <OrganicProductCard />
      <FreshOrganic />
      <FreshExotic />
      <BestSeller />
      <BestSellerCards />
      <TestimonalsHeading />
      <Testimonal />
      <Footer />
    </>
  );
}

export default App;
