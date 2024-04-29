import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import { Box, Container } from "@mui/material";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <Container>
      {isLoading && <Loader />}
      <Box component="main">
        <Outlet />
      </Box>
    </Container>
  );
}

export default AppLayout;
