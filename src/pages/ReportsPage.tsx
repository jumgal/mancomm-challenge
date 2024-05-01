import Typography from "@mui/material/Typography";
import ButtonLink from "../components/buttons/ButtonLink";

const ReportsPage = () => {
  return (
    <div>
      <Typography variant="h6"> Reports Page</Typography>
      <ButtonLink to="/" variant="contained">
        Home Page
      </ButtonLink>
    </div>
  );
};

export default ReportsPage;
