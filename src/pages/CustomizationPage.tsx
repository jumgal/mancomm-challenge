import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonLink from "../components/buttons/ButtonLink";

const CustomizationPage = () => {
  return (
    <Box>
      <Typography variant="h6">CustomizationPage Page</Typography>
      <ButtonLink variant="text" to="/" color="secondary">
        Go to Dashboard
      </ButtonLink>
    </Box>
  );
};

export default CustomizationPage;

