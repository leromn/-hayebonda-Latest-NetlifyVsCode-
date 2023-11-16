import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "react-simple-star-rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  setDetailId,
  setProductDetail,
} from "../redux/counterSlice";

const changeFormat = async (file) => {
  // const uint8Array = new Uint8Array(item.thumbnail.imageData.data);
  const uint8Array = new Uint8Array(file);

  const base64String = await btoa(String.fromCharCode.apply(null, uint8Array));
  const newUrl = `data:image/jpeg;base64,${base64String}`;
  return newUrl;
};

export default function ProductTemp({ item }) {
  const dispatch = useDispatch();
  var rating = 5;

  const [dataUrl, setDataUrl] = useState("");

  // const convertBinary = useCallback(async () => {
  //   base64ImageString = await btoa(
  //     String.fromCharCode.apply(
  //       null,
  //       new Uint8Array(item.thumbnail.imageData.data),
  //     ),
  //   );
  //   console.log("binary converted");
  //   converted = true;
  // }, []);

  useEffect(() => {
    setDataUrl(changeFormat(item.thumbnail.imageData.data));
    // console.log("imageData= ", item.thumbnail.imageData);
  }, []);
  // convertBinary();
  var tempProductDetail = {
    name: item.productName,
    description: item.productDescription,
    price: item.price,
    rating: item.rating,
    _id: item._id,
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="card"
      onClick={() => {
        dispatch(increment());
        dispatch(setProductDetail(tempProductDetail));
        // dispatch(setDetailId(item._id));
        alert("clicked on product");
      }}
    >
      <CardMedia
        sx={{ height: 240 }}
        component="img"
        src={`data:image/jpeg;base64,${dataUrl}`}
        title="green iguana"
      />
      {/* {console.log(props.thumb)} */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          name {item.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          price{item.price}
        </Typography>
        {/* <Button style={{ backgroundColor: "green", color: "white" }}>
          Browse
        </Button> */}
        <Rating initialValue={item.rating} />
        <AddShoppingCartIcon />
      </CardContent>
    </Card>
  );
}
