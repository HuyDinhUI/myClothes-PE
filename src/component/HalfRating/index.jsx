import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating({ p = false }) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Stack spacing={1}>
        <Rating
          name="half-rating-read"
          size="large"
          defaultValue={4.5}
          precision={0.5}
          readOnly
        />
      </Stack>
      {p ? (
        <p
          style={{ fontSize: "15px", marginTop: "3px", fontWeight: "lighter" }}
        >
          4.5
        </p>
      ) : (
        ""
      )}
      {p ? (
        <p
          style={{ fontSize: "15px", marginTop: "3px", fontWeight: "lighter" }}
        >
          {"(1025)"}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
