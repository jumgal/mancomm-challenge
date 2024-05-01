import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonLink from "../components/buttons/ButtonLink";

const AmentiesPage = () => {
  return (
    <Box>
      <Typography variant="h6">Amenties Page</Typography>
      <ButtonLink variant="text" to="/" color="secondary">
        Go to Dashboard
      </ButtonLink>
    </Box>
  );
};

export default AmentiesPage;
