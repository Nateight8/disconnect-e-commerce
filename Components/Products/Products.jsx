import { makeStyles } from "@material-ui/styles";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Product from "./Product";

function Products({ products }) {
  //  const { amount } = useSelector((store) => store.cart);

  return (
    <Container sx={{ marginY: "1.24rem" }}>
      <Box>
        <Typography sx={{ paddingY: { xs: "0.5", sm: "0.8rem" } }} variant="h6">
          Trending Products
        </Typography>
        <Grid container sx={{ width: "100%" }}>
          {products.map(({ title, id, price, category, image, rating }) => (
            <Grid
              key={id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                padding: "0.8rem",
              }}
            >
              <Product
                title={title}
                id={id}
                price={price}
                category={category}
                image={image}
                rating={rating}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Products;
