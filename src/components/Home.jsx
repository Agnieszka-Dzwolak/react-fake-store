import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Box sx={{ padding: 4, backgroundColor: "#ffe4e1" }}>
        <Typography variant="h1" gutterBottom>
          Welcome to Glamour Haven
        </Typography>

        <Typography variant="body1" paragraph>
          Your one-stop destination for all things beauty and elegance! Our
          store is designed to cater to your every need, ensuring you look and
          feel your best from head to toe. Explore our wide array of
          high-quality products across various categories, each carefully
          curated to bring a touch of luxury and sophistication into your life.
        </Typography>

        <Typography variant="h2" gutterBottom>
          Our Collections Include:
        </Typography>
        <List>
          {[
            {
              primary: "Beauty",
              secondary:
                "Discover the latest in makeup, hair care, and beauty tools to enhance your natural radiance.",
            },
            {
              primary: "Fragrances",
              secondary:
                "Indulge in our exquisite selection of perfumes and colognes, perfect for any occasion.",
            },

            {
              primary: "Skin Care",
              secondary:
                "Pamper your skin with our premium skincare products designed to nourish, protect, and rejuvenate.",
            },
            {
              primary: "Women's Bags",
              secondary:
                "Elevate your style with our chic and functional handbags, perfect for every occasion.",
            },

            {
              primary: "Women's Shoes",
              secondary:
                "Step out in style with our fashionable and comfortable women's shoes.",
            },
            {
              primary: "Women's Watches",
              secondary:
                "Keep time in elegance with our sophisticated and trendy watches.",
            },
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                backgroundColor: "#fff0f5",
                padding: 2,
                marginBottom: 2,
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ color: "#d81b60" }}>
                    {item.primary}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" sx={{ color: "#8e24aa" }}>
                    {item.secondary}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>

        <Typography variant="body1" paragraph>
          At Glamour Haven, we believe in offering not just products, but an
          experience that enhances your everyday life. Our commitment to
          quality, style, and customer satisfaction ensures that you always
          leave our store feeling confident and inspired.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Welcome to Glamour Haven – where beauty meets luxury!</strong>
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
