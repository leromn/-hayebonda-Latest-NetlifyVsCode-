import Products from "./productList/products";
import "./styles.css";
import Top from "./head/top.jsx";
import Location from "./location.jsx";
import TopScroll from "./topscroll";
import Detail from "./kotet/detaildisplay";
import ImageUploadForm from "./upload/upload";
import Home from "./adopt/home";
export default function App() {
  return (
    <div className="App">
      <Top />
      <Detail />
      <Products />
      {/* <TopScroll /> */}
      <ImageUploadForm />
      {/* <Location /> */}
    </div>
    // <Home/>
  );
}
