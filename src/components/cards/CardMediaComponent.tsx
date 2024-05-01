import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

function CardMediaComponent() {
  return (
    <Box>
      <CardMedia
        component="img"
        image="./images/city-image.jpg"
        alt="City Picture"
        sx={{
          maxHeight: "350px",
          maxWidth: "250px",
          borderRadius: "5px",
          margin: '0.75rem auto'
        }}
      />
    </Box>
  );
}

export default CardMediaComponent;
