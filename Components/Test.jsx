import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },

  appBar: {
    background: "white",
    color: "#34323d",
  },
}));

export default function NavTabs() {
  const classes = useStyles();
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
    <div className={classes.root}>
      <AppBar
        position="sticky"
        // sx={{ ".MuiAppBar-root": { backgroundColor: "red" } }}
        className={classes.appBar}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Home" value="/" component={Link} href="/" />
          <Tab label="Shop" value="/shop" component={Link} href="/x" />
          <Tab label="Search" value="/search" component={Link} href="/search" />
          <Tab label="About" value="/about" component={Link} href="/about" />
        </Tabs>
      </AppBar>
    </div>
  );
}
