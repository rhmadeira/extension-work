import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Noticias() {
  const { manchete } = useParams<{ manchete: string }>();
  return (
    <Box>
      <Typography variant="h4">{manchete}</Typography>
    </Box>
  );
}
