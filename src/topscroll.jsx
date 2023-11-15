import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function TopScroll() {
  return (
    <div className="avatarparent">
      <Avatar
        alt="Travis Howard"
        src="https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428614_1280.jpg"
        className="avatar"
        variant="rounded"
      />
      <Avatar
        alt="Remy Sharp"
        src="https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428614_1280.jpg"
        className="avatar"
        variant="rounded"
      />
      <Avatar
        alt="Travis Howard"
        src="https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428614_1280.jpg"
        className="avatar"
        variant="rounded"
      />

      <Avatar
        alt="Cindy Baker"
        src="https://cdn.pixabay.com/photo/2014/08/26/21/49/jeans-428614_1280.jpg"
        className="avatar"
        variant="rounded"
      />
    </div>
  );
}
