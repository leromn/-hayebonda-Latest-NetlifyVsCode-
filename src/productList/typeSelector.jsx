import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FaTshirt } from "react-icons/fa";
import { GiUnderwearShorts, GiLargeDress } from "react-icons/gi";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeClothType } from "../redux/counterSlice";

export default function TypeSelector(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          startIcon={<FaTshirt />}
          onClick={() => dispatch(changeClothType("t-shirt"))}
        >
          ቲ-ሸርት
        </Button>
        <Button
          variant="outlined"
          startIcon={<GiUnderwearShorts />}
          onClick={() => dispatch(changeClothType("pant"))}
        >
          ሱሪ
        </Button>
        <Button
          variant="outlined"
          startIcon={<GiLargeDress />}
          onClick={() => dispatch(changeClothType("dress"))}
        >
          ቀሚስ
        </Button>
      </Stack>
      <div style={{ padding: "10px" }}>
        <Divider orientation="horizontal" flexItem />
      </div>
    </div>
  );
}
