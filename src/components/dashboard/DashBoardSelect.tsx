import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { manageSelectValues } from "./data/selectValues";

export default function DashBoardSelect() {
  const [manageValue, setManageValue] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setManageValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Manage</InputLabel>
        <Select
          labelId="managee-select-label"
          id="manage-simple-select"
          value={manageValue}
          defaultValue="Manage"
          label="Manage"
          onChange={handleChange}
          variant="standard"
          disableUnderline={true}
        >
          {manageSelectValues.map(({ value, label }) => (
            <MenuItem key={value} value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
