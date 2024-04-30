import { Box, Typography } from "@mui/material";
import { ChartContainer } from "@mui/x-charts";
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";

const pData = [2400, 1398, 3800, 2890];
const xLabels = ["Page A", "Page B", "Page C", "Page D"];
interface ILineChart {
  title: string;
  payload: string;
}

export default function SimpleLineChart({ title, payload }: ILineChart) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="body2">{title}</Typography>
      <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: "-3.5rem" }}>
        {payload}
      </Typography>
      <ChartContainer
        width={170}
        height={170}
        series={[{ type: "line", curve: "linear", data: pData }]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          [`& .${lineElementClasses.root}`]: {
            stroke: "#8884d8",
            strokeWidth: 2,
          },
          [`& .${markElementClasses.root}`]: {
            stroke: "#8884d8",
            scale: "0.6",
            fill: "#fff",
            strokeWidth: 2,
          },
        }}
        disableAxisListener
      >
        <LinePlot />
        <MarkPlot />
      </ChartContainer>
    </Box>
  );
}
