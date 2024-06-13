import { useState, useEffect } from "react";

import Loading from "./Loading";
import getProducts from "../apis/getProducts";
import Item from "./Item";

import { Box, Grid } from "@mui/material";

const SkinCareContainer = () => {
  const [skinCare, setSkinCare] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSkinCare = async () => {
      try {
        const skinCare = await getProducts("skin-care");
        setSkinCare(skinCare.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSkinCare();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <div>{error}</div>}
      {skinCare.length > 0 ? (
        <>
          <Box sx={{ flexGrow: 1, marginTop: 4, marginBottom: 6 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {skinCare.map((skinCareItem) => (
                <Grid item xs={2} sm={4} md={4} key={skinCareItem.id}>
                  <Item cosmetic={skinCareItem} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <p>No skin-care products available</p>
      )}
    </>
  );
};

export default SkinCareContainer;
