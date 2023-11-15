import React from "react";
import { Map, Marker } from "pigeon-maps";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
export default function Location() {
  return (
    <div className="location">
      <Map
        height={300}
        defaultCenter={[8.54108, 39.269459]}
        defaultZoom={11}
        className="location"
      >
        <Marker width={50} anchor={[8.54108, 39.269459]} />
      </Map>
      <h2>Address</h2>
      <TelegramIcon />
      +251 962493359
      <InstagramIcon />
      @Qedamawi
      <LocalPhoneIcon />
      +251 962493359
    </div>
  );
}
