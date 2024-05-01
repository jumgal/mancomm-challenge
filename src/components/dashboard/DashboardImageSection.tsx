import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardComponent from "../cards/CardComponent";
import CardMediaComponent from "../cards/CardMediaComponent";
import SimpleLineChart from "../charts/SimpleLineChart";
import CouponCard from "../cards/CouponCard";
import MultipleCards from "../cards/MultipleCards";
import MeetingCard from "../cards/MeetingCard";

const DashboardImageSection = () => {
  return (
    <Grid container columnSpacing={2} rowSpacing={2}>
      <Grid item xs={12} md={5}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ width: "100%", marginTop: '0.5rem' }}
        >
          <SimpleLineChart title="Today's Earnings" payload="$2890" />
          <CardComponent title="Demographics" payload="20" bgColor="#ffc400" />
        </Box>
        <CouponCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardMediaComponent />
      </Grid>
      <Grid item xs={12} md={3}>
        <MultipleCards />
        <MeetingCard />
      </Grid>
    </Grid>
  );
};

export default DashboardImageSection;
