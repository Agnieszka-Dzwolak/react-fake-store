import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#d81b60" }}>
      <Toolbar>
        <Box
          sx={{ flexGrow: 1, justifyContent: "center", textAlign: "center" }}
        >
          <Button
            component={NavLink}
            to="/"
            sx={{ color: "#fff", "&.active": { fontWeight: "bold" } }}
          >
            Home
          </Button>

          <Button
            component={NavLink}
            to="/beauty"
            sx={{ color: "#fff", "&.active": { fontWeight: "bold" } }}
          >
            Beauty
          </Button>

          <Button
            component={NavLink}
            to="/fragrances"
            sx={{ color: "#fff", "&.active": { fontWeight: "bold" } }}
          >
            Fragrances
          </Button>

          <Button
            component={NavLink}
            to="/skinCare"
            sx={{ color: "#fff", "&.active": { fontWeight: "bold" } }}
          >
            Skin Care
          </Button>

          <Button
            component={NavLink}
            to="/womensBags"
            sx={{ color: "#fff", "&.active": { fontWeight: "bold" } }}
          >
            Women's Bags
          </Button>

          <Button
            component={NavLink}
            to="/womensShoes"
            sx={{ color: "#fff", "&.active": { fontWeight: "bold" } }}
          >
            Women's Shoes
          </Button>

          <Button
            component={NavLink}
            to="/womensWatches"
            sx={{ color: "#fff", "&.active": { fontWeight: "bold" } }}
          >
            Women's Watches
          </Button>

          {/* <li>
          <NavLink to="/womensDresses">Women's Dresses</NavLink>
        </li>
        <li>
          <NavLink to="/womensJewelry">Women's Jewelry</NavLink>
        </li> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
