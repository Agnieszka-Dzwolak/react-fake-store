import PropTypes from "prop-types";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const Item = ({ cosmetic }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={cosmetic.title}
        height="330"
        image={cosmetic.images}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" minHeight="70px">
          {cosmetic.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cosmetic.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold" ml={1} color="text.primary">
          {cosmetic.price}$
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#d81b60;",
            "&:hover": { backgroundColor: "#c2185b" },
            marginRight: 2,
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

Item.propTypes = {};

export default Item;
