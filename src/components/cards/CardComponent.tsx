import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  payload: string;
  bgColor?: string;
  color?: string;
};

const CardComponent = ({
  title,
  payload,
  bgColor = "#fff",
  color = "black",
}: Props) => {
  return (
    <Box sx={{ width: "100%", marginTop: "0.75rem"}}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: bgColor,
          color: color,
          borderRadius: "1rem",
          border: "none",
          height: "170px",
        }}
      >
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Typography
            fontSize={13}
            fontWeight="bold"
            color={color}
            gutterBottom
            variant="h6"
          >
            {title}
          </Typography>
          <Typography variant="h4" >
            {payload}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardComponent;
