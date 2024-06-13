import Loading from "./Loading";
import Item from "./Item";
import { useState, useEffect } from "react";

import getProducts from "../apis/getProducts";

import { Box, Grid } from "@mui/material";

const BeautyContainer = () => {
  const [cosmetics, getCosmetics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBeauty = async () => {
      try {
        const beauty = await getProducts("beauty");
        getCosmetics(beauty.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBeauty();
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {error && <div className="error">{error}</div>}
      {cosmetics.length > 0 ? (
        <>
          <Box sx={{ flexGrow: 1, marginTop: 4, marginBottom: 6 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {cosmetics.map((cosmetic) => (
                <Grid item xs={2} sm={4} md={4} key={cosmetic.id}>
                  <Item cosmetic={cosmetic} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <p>No cosmetics available</p>
      )}
    </div>
  );
};

export default BeautyContainer;
