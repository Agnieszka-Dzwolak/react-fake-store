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

          {/* <li>
          <NavLink to="/fragrances">Fragrances</NavLink>
        </li>
        <li>
          <NavLink to="/homeDecoration">Home Decoration</NavLink>
        </li>
        <li>
          <NavLink to="/skinCare">Skin Care</NavLink>
        </li>
        <li>
          <NavLink to="/womensBags">Women's Bags</NavLink>
        </li>
        <li>
          <NavLink to="/womensDresses">Women's Dresses</NavLink>
        </li>
        <li>
          <NavLink to="/womensJewelry">Women's Jewelry</NavLink>
        </li>
        <li>
          <NavLink to="/womensShoes">Women's Shoes</NavLink>
        </li>
        <li>
          <NavLink to="/womensWatches">Women's Watches</NavLink>
        </li> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
