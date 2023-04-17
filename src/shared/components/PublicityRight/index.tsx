import { Box, Typography } from "@mui/material";
import Lanche from "../../assets/lanche.png";
import Restaurante from "../../assets/restaurante.png";
import Salao from "../../assets/salao.png";

export default function PublicityRight() {
  return (
    <Box maxWidth="200px" display="flex" flexDirection="column" bgcolor="gray">
      <Box
        borderRadius="5px 5px 0 0"
        bgcolor="red"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography color="white" fontWeight="bold" fontSize="2rem">
          Anuncie
          <Typography
            color="yellow"
            component="span"
            fontWeight="bold"
            fontSize="2rem"
          >
            Aqui
          </Typography>
        </Typography>
      </Box>
      <Box
        boxSizing="border-box"
        display="flex"
        flexDirection="column"
        padding={0.5}
        gap={0.5}
      >
        <img src={Lanche} alt="" width="auto" />
        <img src={Restaurante} alt="" width="auto" />
        <img src={Salao} alt="" width="auto" />
      </Box>
    </Box>
  );
}
