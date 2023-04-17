import { Box } from "@mui/material";
import Lanche from "../../assets/lanche.png";
import Restaurante from "../../assets/restaurante.png";
import Salao from "../../assets/salao.png";

export default function PublicityRight() {
  return (
    <Box maxWidth="200px" display="flex" flexDirection="column">
      <img src={Lanche} alt="" />
      <img src={Restaurante} alt="" />
      <img src={Salao} alt="" />
    </Box>
  );
}
