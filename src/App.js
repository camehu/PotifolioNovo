import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Principal from "./components/Principal";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <Principal />
      <Footer />
    </div>
  );
}
