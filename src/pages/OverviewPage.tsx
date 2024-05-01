import Typography from "@mui/material/Typography";
import ButtonLink from "../components/buttons/ButtonLink";

const OverviewPage = () => {
  return (
    <div>
      <Typography variant="h6">OverviewPage</Typography>
      <ButtonLink to="/" variant="text">
        Home Page
      </ButtonLink>
    </div>
  );
};

export default OverviewPage;
