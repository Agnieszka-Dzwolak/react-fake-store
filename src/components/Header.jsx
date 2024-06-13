import PropTypes from "prop-types";

import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = ({ title }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#d81b60" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h3"
            marginTop={4}
            marginBottom={4}
            component="div"
            sx={{ flexGrow: 1, color: "#ffffff", textAlign: "center" }}
          >
            {title}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
