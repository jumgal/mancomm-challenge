import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ResponsiveAppBar from "../components/header/ResponsiveAppBar";
import MainDashboard from "../components/dashboard/MainDashboard";
import ActiveBookings from "../components/booking/ActiveBookings";
import SimpleDatePicker from "../components/calendar/SimpeDatePicker";
import LeftCalendarAppBar from "../components/header/LeftCalendarAppBar";

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
          padding: "1rem",
        }}
      >
        <ResponsiveAppBar />
        <MainDashboard />
        <ActiveBookings />
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", paddingX: "1rem" }}
        >
          <LeftCalendarAppBar />
          <SimpleDatePicker />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
