import { useState, useEffect } from "react";

import Loading from "./Loading";
import getProducts from "../apis/getProducts";
import Item from "./Item";

import { Box, Grid } from "@mui/material";

const WomensWatchesContainer = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const womensWatches = await getProducts("womens-watches");
        setWatches(womensWatches.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWatches();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <div>{error}</div>}
      {watches.length > 0 ? (
        <>
          <Box sx={{ flexGrow: 1, marginTop: 4, marginBottom: 6 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {watches.map((watch) => (
                <Grid item xs={2} sm={4} md={4} key={watch.id}>
                  <Item cosmetic={watch} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <p>No women&apos;s watches available</p>
      )}
    </>
  );
};

export default WomensWatchesContainer;
