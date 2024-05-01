import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CardComponent from "./CardComponent";
import { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

const MultipleCards = () => {
  const [earnings, setEarnings] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);


  useEffect(() => {
     setEarnings(2890)
     setBalance(2)
  },[])
  const keyboardUpIcon = (
    <KeyboardDoubleArrowUpIcon
      color={earnings >= 2890 ? "success" : "error"}
      sx={{ fontSize: "1.5rem" }}
    />
  );

  const keyboardDownIcon = (
    <KeyboardDoubleArrowDownIcon
      color={balance >= 3 ? "success" : "error"}
      sx={{ fontSize: "1.5rem" }}
    />
  );
  const bookingIcon = (
    <TripOriginIcon color="success" sx={{ fontSize: "0.75rem" }} />
  );

  return (
    <Stack
      sx={{
        margin: "0.75rem 0",
        border: "1px solid #b3d9e3",
        borderRadius: "1rem",
        paddingX: '0.5rem',
        paddingY: '0.25rem',
        direction:'column',
        justifyContent: 'center'
        
      }}
    >
      <Box>
        <CardComponent
          title="Today's Earning"
          payload={`$${earnings}`}
          icon={keyboardUpIcon}
          height="75px"
        />
      </Box>
      <Box>
        <CardComponent
          title="Today's Bookings"
          payload="24"
          icon={bookingIcon}
          height="75px"
          move={true}
        />
      </Box>
      <Box>
        <CardComponent
          title="Total Balance"
          payload={`$${2}M`}
          icon={keyboardDownIcon}
          height="75px"
        />
      </Box>
    </Stack>
  );
};

export default MultipleCards;
