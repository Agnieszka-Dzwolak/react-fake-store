import { useState, useEffect } from "react";

import Loading from "./Loading";
import getProducts from "../apis/getProducts";
import Item from "./Item";

import { Box, Grid } from "@mui/material";

const WomensBagsContainer = () => {
  const [bags, setBags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBags = async () => {
      try {
        const womensBags = await getProducts("womens-bags");
        setBags(womensBags.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBags();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <div>{error}</div>}
      {bags.length > 0 ? (
        <>
          <Box sx={{ flexGrow: 1, marginTop: 4, marginBottom: 6 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {bags.map((bag) => (
                <Grid item xs={2} sm={4} md={4} key={bag.id}>
                  <Item cosmetic={bag} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <p>No women`&apos;s bags available</p>
      )}
    </>
  );
};

export default WomensBagsContainer;
