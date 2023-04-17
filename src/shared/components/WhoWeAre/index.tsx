import { Box, Paper, Typography } from "@mui/material";

export default function WhoWeAre() {
  return (
    <Box maxWidth="200px" display="flex" flexDirection="column" gap={0.5}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        component={Paper}
        height="40px"
      >
        <Typography fontWeight="bold">Galeria de fotos</Typography>
      </Box>
      <img
        src="https://blog.beliive.com/static/63293redux-ad9caa0793d1ebeeda77bc08ad0e5c0c-5b597.webp"
        alt=""
      />
      <img src="https://central.to.gov.br/image/174431?w=753&h=465" alt="" />
    </Box>
  );
}
