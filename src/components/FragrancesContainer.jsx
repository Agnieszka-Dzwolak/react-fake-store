import { useState, useEffect } from "react";

import Loading from "./Loading";
import getProducts from "../apis/getProducts";
import Item from "./Item";

import { Box, Grid } from "@mui/material";

const FragrancesContainer = () => {
  const [fragrances, setFragrances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFragrances = async () => {
      try {
        const fragrances = await getProducts("fragrances");
        setFragrances(fragrances.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFragrances();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <div>{error}</div>}
      {fragrances.length > 0 ? (
        <>
          <Box sx={{ flexGrow: 1, marginTop: 4, marginBottom: 6 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {fragrances.map((fragrance) => (
                <Grid item xs={2} sm={4} md={4} key={fragrance.id}>
                  <Item cosmetic={fragrance} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <p>No fragrances available</p>
      )}
    </>
  );
};

export default FragrancesContainer;
