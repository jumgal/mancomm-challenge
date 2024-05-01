import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const MeetingCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "mainColor.dark",
        padding: "1rem",
        borderRadius: "5px",
        margin: ".5rem auto",
        height: "120px",
      }}
    >
      <Typography
        variant="body1"
        component="h6"
        sx={{ color: "#fff", fontWeight: "bold" }}
      >
        Design Meetings
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#fff", marginBottom: "0.75rem" }}
      >
        <Box component="span" borderBottom="2px solid #fff">
          11 M
        </Box>
        in Left
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ paddingY: "0.15rem" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PersonPinIcon sx={{ fontSize: "2.5rem" }} />
          <Box
            component="span"
            sx={{
              border: "1px solid #fff",
              padding: "0.25rem",
              borderRadius: "50%",
              fontWeight: "bold",
              color: "mainColor.dark",
              backgroundColor: "#fff",
              marginLeft: "-6px",
            }}
          >
            08
          </Box>
        </Box>
        <Box sx={{ border: "1px solid yellow", borderRadius: '50%', display: 'flex', alignItems: 'center', background: 'yellow' }}>
          <ArrowOutwardIcon color="info"/>
        </Box>
      </Stack>
    </Box>
  );
};

export default MeetingCard;
