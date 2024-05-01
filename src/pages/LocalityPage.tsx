import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonLink from "../components/buttons/ButtonLink";

const LocalityPage = () => {
  return (
    <Box>
      <Typography variant="h6">LocalityPage Page</Typography>
      <ButtonLink variant="text" to="/" color="secondary">
        Go to Dashboard
      </ButtonLink>
    </Box>
  );
};

export default LocalityPage;
