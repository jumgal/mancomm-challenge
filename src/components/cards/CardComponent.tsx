import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

type Props = {
  title: string;
  payload: string;
  bgColor?: string;
  color?: string;
  icon?: ReactNode;
  height?: string;
  move?: boolean
};

const CardComponent = ({
  title,
  payload,
  bgColor = "#fff",
  color = "black",
  icon,
  height = "170px",
  move = false
}: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        marginLeft: move ? '18px' : '.5rem'
      }}
    >
      <Card
        variant="outlined"
        sx={{
          backgroundColor: bgColor,
          color,
          paddingTop: '0.5rem',
          borderRadius: "1rem",
          border: "none",
          height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={{ xs: 4, md: 1 }}
            justifyContent="space-between"
          >
            <Typography
              fontSize={13}
              fontWeight="bold"
              color={color}
              gutterBottom
              variant="h6"
            >
              {title}
            </Typography>
            {icon}
          </Stack>
          <Typography variant="h5">{payload}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardComponent;
