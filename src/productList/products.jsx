import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductTemp from "./productTemp";
import MainTab from "./maintab";
import { useState, useEffect } from "react";
import axios from "axios";
import TypeSelector from "./typeSelector";
import { BsFire } from "react-icons/bs";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useSelector, useDispatch } from "react-redux";

export default function Products() {
  // scrolling variables
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //form variables
  const [value, setValue] = React.useState("1");
  const [thumb, setThumb] = React.useState([]);
  const [products, setProducts] = useState([]);
  var tempThumbArray;
  //cloth type manager
  const storeClothType = useSelector((state) => state.counter.clothType);
  const [currentClothType, setCurrentClothType] = useState("all");

  useEffect(() => {
    // handleClothTypeChange();
    setCurrentClothType(storeClothType);
    //  epmty the products array and page number
    setProducts([]);
    setPage(1);
    // alert("clpoth type changed to: " + storeClothType);
    fetchData();
  }, [storeClothType]);
  //scrolling phase
  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://zkls2z-8000.csb.app/home/popular?page=${page}&clothType=${currentClothType}`,
      );
      const newData = response.data.products;
      setProducts((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      // tempThumbArray = products.map(async (item, index) => {
      //   var base64ImageString = await btoa(
      //     String.fromCharCode.apply(
      //       null,
      //       new Uint8Array(item.thumbnail.imageData.data),
      //     ),
      //   );
      //   return base64ImageString;
      // });
      // console.log("products", products); //
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  ////////////////////////////////////
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log("scrolled to bottom");
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //scrolling phase end

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            centered
          >
            <Tab label="new" value="1" />
            <Tab
              value="2"
              icon={<WhatshotIcon />}
              iconPosition="end"
              label="popular"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TypeSelector />
          {products.map((product, index) => {
            return <ProductTemp item={product} />;
          })}
        </TabPanel>
        <TabPanel value="2">
          <TypeSelector />

          <ProductTemp />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
