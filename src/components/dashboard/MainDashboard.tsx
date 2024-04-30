import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import DashBoardSelect from "./DashBoardSelect";
import DashboardNav from "./DashboardNav";
import DashboardImageSection from "./DashboardImageSection";


function MainDashboard() {
  return (
    <Stack component="section" id="dashboard" sx={{ marginTop: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            typography: { xs: "h6", md: "h5" },
            color: "black",
          }}
        >
          Main Dashboard
        </Box>
        <DashBoardSelect />
      </Box>
      <DashboardNav />
      <DashboardImageSection />
    </Stack>
  );
}

export default MainDashboard;
