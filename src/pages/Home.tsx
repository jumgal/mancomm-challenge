import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ResponsiveAppBar from "../components/header/ResponsiveAppBar";

type Props = {};

const Home = (props: Props) => {
  return (
    <Grid
      container
      direction={{ xs: "column", md: "row" }}
      height={{ md: "90vh" }}
      sx={{ marginTop: "2rem" }}
    >
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          backgroundColor: "mainColor.light",
        }}
      >
        <ResponsiveAppBar />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          backgroundColor: "#fff",
        }}
      >
        Right
      </Grid>
    </Grid>
  );
};

export default Home;
