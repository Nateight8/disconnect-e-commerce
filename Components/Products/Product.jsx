import { Paper, ListItemText, Rating, Stack, Button, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Features/Cart/cartSlice";

function Product({ title, id, price, category, image, rating }) {
  const listStyle = {
    // background: "Red",
    ".MuiListItemText-primary": {
      fontSize: "1.25rem",
      fontWeight: 500,
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
    },
    ".MuiListItemText-secondary": {
      color: "#4093a3",
      fontWeight: 500,
      fontSize: "1rem",
    },
  };

  const listStyleTwo = {
    display: "flex",
    // alignItems: "center",
    ".MuiListItemText-primary": {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    ".MuiListItemText-secondary": {
      color: "rgba(22,29,37, 0.3)",
      fontWeight: 400,
      fontSize: "1.25rem",
      textDecoration: "line-through",
      paddingX: "0.4rem",
    },
  };

  const dispatch = useDispatch();

  function handleClick() {
    let x = dispatch(addToCart({ title, id, price, category, image, rating }));
    // console.log(x);
  }

  return (
    <>
      <Paper
        sx={{
          background: "white",
          //   padding: "1rem",
          height: "100%",
          width: "100%",
        }}
      >
        <Box sx={{ padding: "1rem" }}>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
            }}
          >
            <Image
              src={image}
              //   fill
              height={150}
              width={150}
              alt={title}
              style={{
                objectFit: "contain",
              }}
            />
          </Stack>
          <Box sx={{ paddingY: "1rem" }}>
            <ListItemText sx={listStyle} primary={title} secondary={category} />

            <Rating
              name="product rating"
              value={rating.rate}
              size="small"
              readOnly
              sx={{ paddingX: 0 }}
              precision={0.5}
            />
            <ListItemText
              sx={listStyleTwo}
              primary={price}
              secondary={Math.floor(price * 1.6)}
            />
          </Box>
          <Button variant="contained" onClick={handleClick}>
            Add to cart
          </Button>
        </Box>
      </Paper>
    </>
  );
}

export default Product;
