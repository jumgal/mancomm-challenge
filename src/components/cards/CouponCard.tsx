import { Box, Button, Typography } from "@mui/material";

const CouponCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "mainColor.dark",
        padding: "1rem",
        borderRadius: "5px",
        margin: ".5rem auto",
        height: "170px",
      }}
    >
      <Typography variant="h6" sx={{ color: "#fff", fontWeight: 'bold' }}>
        20% OFF
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#fff", marginBottom: "0.75rem" }}
      >
        On your first booking
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#fff",
          marginBottom: "0.75rem",
        }}
      >
        <Box
          component="span"
          sx={{
            padding: ".75rem",
            border: "1px dotted #fff",
            borderRadius: "0.5rem",
          }}
        >
          NEWBIE20
        </Box>
      </Typography>
      <Button variant="text" sx={{ fontSize: "12", color: '#fff' }}>
        COPY CODE
      </Button>
    </Box>
  );
};

export default CouponCard;
