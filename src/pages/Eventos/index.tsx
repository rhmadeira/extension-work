import { Box, Typography } from "@mui/material";
import Gratidao from "../../shared/assets/gratidao.jpeg";
import Evento from "../../shared/assets/eventos.jpeg";

export default function Eventos() {
  return (
    <Box
      component="section"
      display="flex"
      width="100%"
      height="100%"
      alignItems="center"
    >
      <Box
        sx={{
          backgroundImage: `url(${Gratidao})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "2px",
          width: "40%",
          height: "90%",
        }}
      />
      <Box width="70%" height="60%" position="relative">
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            right: "300px",
            top: "-60px",
            color: "#8d5412",
          }}
        >
          EVENTOS
        </Typography>
        <Box
          sx={{
            backgroundImage: `url(${Evento})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "2px",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "-45px",
          }}
        />
      </Box>
    </Box>
  );
}
