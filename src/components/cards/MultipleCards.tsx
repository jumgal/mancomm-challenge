import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CardComponent from "./CardComponent";
import { useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const MultipleCards = () => {
  const [earnings, setEarnings] = useState<number>(2890);
  return (
    <Stack>
      <Box sx={{position: 'relative'}}>
        <CardComponent title="Today's Earning" payload={`$${earnings}`}/>
        <KeyboardDoubleArrowUpIcon sx={{position: 'absolute', bottom: '8rem', right: 2}}
          color={earnings >= 2890 ? "success" : "warning"} fontSize="large"
        />
      </Box>
      <Box>center</Box>
      <Box>bottom</Box>
    </Stack>
  );
};

export default MultipleCards;
