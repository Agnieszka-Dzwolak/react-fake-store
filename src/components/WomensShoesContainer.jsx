import { useState, useEffect } from "react";

import Loading from "./Loading";
import getProducts from "../apis/getProducts";
import Item from "./Item";

import { Box, Grid } from "@mui/material";

const WomensShoesContainer = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const womensShoes = await getProducts("womens-shoes");
        setShoes(womensShoes.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchShoes();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <div>{error}</div>}
      {shoes.length > 0 ? (
        <>
          <Box sx={{ flexGrow: 1, marginTop: 4, marginBottom: 6 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {shoes.map((shoe) => (
                <Grid item xs={2} sm={4} md={4} key={shoe.id}>
                  <Item cosmetic={shoe} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <p>No women&apos;s shoes available</p>
      )}
    </>
  );
};

export default WomensShoesContainer;
