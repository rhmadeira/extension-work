import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper.min.css";
import "./styles.css";

import { Box, Theme, Typography, useMediaQuery } from "@mui/material";

import Banner from "../../shared/assets/banner.jpeg";
import { Mousewheel, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Foto01 from "../../shared/assets/foto01.jpg";
import Foto02 from "../../shared/assets/foto02.png";
import Foto03 from "../../shared/assets/foto03.jpg";
import Foto04 from "../../shared/assets/foto04.jpg";

export default function Home() {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        gap={2}
        component="section"
      >
        <Box
          sx={{
            width: "100%",
            height: "200px",
            backgroundImage: `url(${Banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "2px",
          }}
        />
        <Typography
          variant={mdDown ? "h5" : "h4"}
          fontWeight="bold"
          sx={{
            color: "#8d5412",
          }}
        >
          BEM VINDO A NOSSA CASA
        </Typography>

        <Box
          width={smDown ? "300px" : "600px"}
          height={smDown ? "200px" : "400px"}
          border="2px solid black"
          borderRadius="4px"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            mousewheel={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Foto01} alt="a" width="400px" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Foto02} alt="a" width="400px" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Foto03} alt="a" width="400px" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Foto04} alt="a" width="400px" />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
