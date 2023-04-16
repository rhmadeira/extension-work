import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

export default function WebSite() {
  return (
    <Box width="100%">
      <Box
        sx={{
          background:
            "linear-gradient(to right, #49769a, #0f334c, #49769a, #0f334c, #49769a )",
          width: "100%",
          height: "150px",
        }}
      />
      <Box maxWidth="1300px" margin="0 auto">
        <NavBar />
        <Box display="flex" justifyContent="space-between" position="relative">
          <Box width="200px" position="absolute" left={0} bgcolor="red">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            accusamus quo deserunt aliquam quidem consectetur tempore magnam
            doloribus ad error consequuntur recusandae in, incidunt fuga
            aspernatur debitis nam culpa. Quo?
          </Box>
          <Box width="calc(100% - 400px)" margin="0 auto" bgcolor="blue">
            <Outlet />
          </Box>
          <Box width="200px" position="absolute" right={0} bgcolor="red">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            cumque voluptates, amet eveniet nulla architecto provident rem,
            delectus facere beatae earum culpa numquam illo voluptas accusamus
            doloremque, expedita quaerat animi!
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
