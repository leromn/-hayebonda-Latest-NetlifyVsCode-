import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

export default function DetailInfo(props) {
  const dispatch = useDispatch();
  return (
    <div className="detailinfo">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h2>{props.price}</h2>
      <Button>add to cart</Button>
      <Button onClick={() => dispatch(decrement())}>cancel</Button>
    </div>
  );
}
