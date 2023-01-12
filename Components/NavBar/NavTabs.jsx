import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppBar, Box, Container, Divider, Toolbar } from "@mui/material";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: "white",
//   },

//   appBar: {
//     background: "white",
//     color: "#34323d",
//   },
// }));

export default function NavTabs() {
  //   const classes = useStyles();
  const [value, setValue] = useState("");
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    setValue(pathname);
  }, [pathname]);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    // <div className={classes.root}>
    // <AppBar
    //   position="sticky"
    //   sx={{ backgroundColor: "white", color: "#34323d" }}
    // >
    <Container>
      <Toolbar sx={{ padding: 0 }}>
        {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
        <Tabs
          value={value}
          onChange={handleChange}
          //   sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab
            label="Shop"
            value="/"
            component={Link}
            href="/"
            sx={{
              textTransform: "capitalize",
            }}
          />
          <Tab label="Search" value="/search" component={Link} href="/" />
          <Tab label="Help" value="/about" component={Link} href="/" />
        </Tabs>

        {/* </Box>{" "} */}
        {/* <Divider /> */}
      </Toolbar>
    </Container>
    // </AppBar>
    // </div>
  );
}
