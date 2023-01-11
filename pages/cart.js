import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import {
  increase,
  removeFromCart,
} from "../Components/Redux/Features/Cart/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cart() {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <Box>
      <Toolbar />
      <Box sx={{ width: "100%", height: "2rem" }} />
      <Divider sx={{ padding: 0, margin: 0 }} />

      <Container sx={{ paddingY: "" }}>
        {cartItems.length < 1 ? (
          <Box
            // justifyContent="center"
            // alignItems="center"
            sx={{ minHeight: "100vh", width: "100%" }}
          >
            {/* <Toolbar /> */}
            <Typography variant="h4" sx={{ paddingY: "0.7rem" }}>
              Cart
            </Typography>
            <Typography variant="body1">
              Your cart is empty, maybe you should take a look at our hot
              products
            </Typography>
          </Box>
        ) : (
          <Box
            // justifyContent="center"
            // alignItems="center"
            sx={{ minHeight: "100vh", width: "100%" }}
          >
            <Grid container>
              <Grid item xs={12} md={7} sx={{ paddingY: "1.5rem" }}>
                <Grid container>
                  {cartItems.map(
                    ({ title, id, price, category, image, rating }) => (
                      <Grid key={id} item xs={12}>
                        <Grid container sx={{ paddingY: "1.5rem" }}>
                          <Grid item xs={3}>
                            <Box
                              sx={{
                                height: "7rem",
                                width: "100%",
                                position: "relative",
                              }}
                            >
                              <Image
                                alt={title}
                                fill
                                src={image}
                                style={{ objectFit: "contain" }}
                              />
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            {/* info */}

                            <Typography
                              variant="h6"
                              sx={{
                                fontSize: { xs: "1rem", sm: "1.125rem" },
                                paddingY: "0.6rem",
                                fontWeight: 400,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                              }}
                            >
                              {title}
                            </Typography>
                            <Typography
                              variant="body"
                              sx={{ fontSize: "1.125rem" }}
                            >
                              {`$ ${price}`}
                            </Typography>
                          </Grid>
                          <Grid item xs={3} sx={{ height: "7rem" }}>
                            {/* button */}
                            <Stack
                              justifyContent="end"
                              alignItems="center"
                              sx={{
                                width: "100%",
                                height: "100%",
                              }}
                            >
                              <Button
                                onClick={() => {
                                  dispatch(removeFromCart(id));
                                }}
                                variant="text"
                                startIcon={<DeleteOutlineIcon />}
                                sx={{
                                  color: "rgba(52,50,61,0.5)",
                                  textTransform: "capitalize",
                                  "&:hover": {
                                    color: "rgba(52,50,61,0.8)",
                                    background: "white",
                                  },
                                }}
                              >
                                Remove
                              </Button>
                            </Stack>
                          </Grid>
                        </Grid>
                        <Divider />
                      </Grid>
                    )
                  )}
                </Grid>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item md={4.9}>
                <Grid container>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ padding: "1.5rem" }}
                    >
                      <Typography variant="body1" sx={{ opacity: 0.6 }}>
                        Subtotal
                      </Typography>
                      <Typography variant="body1">$ 450, 000</Typography>
                    </Stack>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ padding: "1.5rem" }}
                    >
                      <Typography variant="body1">
                        Do you have a discount code?
                      </Typography>
                    </Stack>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ padding: "1.5rem" }}
                    >
                      <Typography variant="body1">
                        Estimated Delivery Cost
                      </Typography>
                    </Stack>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ padding: "1.5rem" }}
                    >
                      <Typography variant="body1">Total</Typography>
                    </Stack>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{
                        paddingY: { xs: "1.5rem", sm: 0 },
                        padding: { xs: 0, sm: "1.5rem" },
                      }}
                    >
                      <Button variant="outlined" size="large">
                        Continue
                      </Button>
                      <Button disableElevation variant="contained" size="large">
                        Checkout
                      </Button>
                    </Stack>
                    <Divider />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Cart;
