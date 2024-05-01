import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonLink from "../buttons/ButtonLink";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CardComponent from "../cards/CardComponent";

function ActiveBookings() {
  return (
    <Box component="section" id="active-bookings" sx={{ marginTop: "1.5rem" }}>
      <Stack direction="row" justifyContent="space-between" alignItems='center'>
        <Box
          sx={{
            typography: { xs: "h5", md: "h4" },
            color: "black",
          }}
        >
          Active Bookings
        </Box>
        <ButtonLink to="booking" variant="text" color="warning">
          Check All
          <KeyboardArrowRightIcon />
        </ButtonLink>
      </Stack>
      <Grid container spacing={3} sx={{marginTop: '0.5rem'}} >
        <Grid item xs={12} md={6}>
          <CardComponent
            title="Award Ceremony - not completed"
            payload="12:30 - 15:45"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardComponent
            title="Design Discussion - not completed"
            payload="16:30 - 20:00"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ActiveBookings;
