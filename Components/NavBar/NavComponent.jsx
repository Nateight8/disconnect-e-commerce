import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Paper,
  Stack,
  Button,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Badge,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import SearchComponent from "./SearchComponent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";

function NavComponent() {
  //   const inter = Inter({ subsets: ["latin"] });

  const [open, setopen] = useState(false);

  const { cartItems } = useSelector((store) => store.cart);

  const handleClick = () => {
    setopen(!open);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: "2px solid red",
      padding: "0 4px",
      color: "white",
    },
  }));

  const router = useRouter();

  return (
    <AppBar sx={{ background: "#252d33" }}>
      <Container>
        <Toolbar sx={{ paddingX: 0 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ background: "re", width: "100%" }}
          >
            <Box
              sx={{ marginRight: "1rem", display: { xs: "block", sm: "none" } }}
            >
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              sx={{ marginX: "0.1rem" }}
              aria-haspopup="true"
              onClick={() => {
                router.push("/");
              }}
              color="inherit"
            >
              <HomeIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, paddingX: "1rem" }}>
              <SearchComponent />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                sx={{ marginX: "0.1rem" }}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                sx={{ marginX: "0.1rem" }}
                aria-haspopup="true"
                onClick={() => {
                  router.push("/cart");
                }}
                color="inherit"
              >
                <StyledBadge badgeContent={cartItems.length}>
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                sx={{ marginX: "0.1rem" }}
                aria-haspopup="true"
                onClick={() => {
                  router.push("/cart");
                }}
                color="inherit"
              >
                <StyledBadge badgeContent={cartItems.length}>
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Box>
          </Stack>

          <Drawer
            // anchor={anchor}
            open={open}
            onClose={handleClick}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                background: "#252d33",
                width: "80%",
              },
            }}
          >
            <Box role="presentation"></Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavComponent;
