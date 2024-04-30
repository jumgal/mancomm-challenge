import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../components/header/ResponsiveAppBar";
import MainDashboard from "../components/dashboard/MainDashboard";

const Home = () => {
  return (
    <Grid
      container
      direction={{ xs: "column", md: "row" }}
      sx={{
        marginTop: "1rem",
      }}
    >
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          backgroundColor: "mainColor.light",
          padding: '1rem'
        }}
      >
        <ResponsiveAppBar />
        <MainDashboard />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          backgroundColor: "#fff",
        }}
      >
        Righttttt
      </Grid>
    </Grid>
  );
};

export default Home;
