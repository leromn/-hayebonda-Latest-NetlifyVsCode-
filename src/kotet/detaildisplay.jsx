import SwiperComp from "./swiper";
import DetailInfo from "./detailinfo";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Detail(props) {
  const count = useSelector((state) => state.counter.value);
  // const detailId = useSelector((state) => state.counter.detailId);
  const productDetail = useSelector((state) => state.counter.productDetail);
  const type = useSelector((state) => state.counter.clothType);
  const [images, setImages] = useState({});
  const [imageIsReady, setReady] = useState(false);
  useEffect(() => {
    if (!(productDetail._id == "" || productDetail._id == null)) {
      getDetailImages(productDetail._id);
      console.log("id not empty");
    } else {
      console.log("id is empty");
    }

    // setImages([]);
    // setImages((prevItems) => [...prevItems, productDetail.thumbnail]);
  }, [productDetail]);

  const getDetailImages = async (productId) => {
    const response = await axios
      .get(
        `https://zkls2z-8000.csb.app/home/getProduct?type=${type}&productId=${productDetail._id}`
      )
      .catch((err) => {
        console.log(err);
      });
    const newData = response.data.detailImages;
    // setImages((prevItems) => [...prevItems, ...newData]);
    setImages(newData[0].detailImages); //
    setReady(true);
    // console.log(images);
  };
  if (count == 1) {
    return (
      <div className="detail">
        <SwiperComp images={images} ready={imageIsReady} />
        <DetailInfo
          name={productDetail.name}
          description={productDetail.description}
          price={productDetail.price}
          id={productDetail._id}
          rating={productDetail.rating}
        />{" "}
        //fetch the product id and its type then fetch its overall information
        to display
      </div>
    );
  }
}
