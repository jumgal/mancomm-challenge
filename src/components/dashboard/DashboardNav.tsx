import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import { manageSelectValues } from "./data/selectValues";
type Props = {};

const DashboardNav = (props: Props) => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      {manageSelectValues.map(({ value, label }) => (
        <Link
          key={value}
          component={RouterLink}
          to={`/${value}`}
          sx={{
            my: 2,
            color: "mainColor.dark",
            display: "block",
            mr: "1rem",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
              fontWeight: "bold",
            },
          }}
        >
          {label}
        </Link>
      ))}
    </Box>
  );
};

export default DashboardNav;
