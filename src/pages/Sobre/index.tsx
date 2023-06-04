import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import People from "../../shared/assets/people.jpeg";

export default function Sobre() {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box
      component="section"
      display="flex"
      flexDirection={mdDown ? "column" : "row"}
      alignItems="center"
      gap={2}
      padding={2}
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        width={mdDown ? "100%" : "40%"}
      >
        <Typography sx={{ alignSelf: "center" }} variant={mdDown ? "h4" : "h5"}>
          Sobre nós
        </Typography>
        <Typography
          sx={{
            //type text
            textAlign: "justify",
            textJustify: "auto",
          }}
          variant="body2"
        >
          Hoje o Avivamento Bíblico conta com igrejas implantadas em todos os
          Estados brasileiros. E mais além tem estendido as estacas, alcançando
          através da obra de missões países como: Chile, Uruguai, Paraguai,
          Argentina, Equador, Haiti, Angola, Moçambique, Inglaterra, Itália,
          Portugal, Índia e muitos outros. Sabemos que há ainda muito por fazer,
          mas o Senhor Deus, dono da Terra, tem levado a grei avivalista a
          assumir sua posição.
        </Typography>
        <Typography
          sx={{
            //type text
            textAlign: "justify",
            textJustify: "auto",
          }}
          variant="body2"
        >
          Na atualidade, a IEAB tem a seguinte configuração: a Convenção Geral,
          instância máxima da Igreja, na qual todas as leis e diretrizes são
          estabelecidas, bem como se elege o quadro de liderança superior, o
          Conselho Geral, que é composto do Presidente, dos Superintendentes
          Regionais e Diretores Gerais. Temos 4 áreas gerias de atuação:
          Administração, Ação Social, Cultura e Educação Cristã, Evangelismo e
          Missões. Trabalhamos com uma divisão territorial no Brasil em 9
          Regiões: Sudeste 1, Sudeste 2, Sudeste 3, Sul 1, Sul 2, Sul 3, Centro
          Oeste, Norte e Nordeste; nos demais países a coordenação está sob
          responsabilidade da área geral de Evangelismo e Missões.
        </Typography>
        <Typography
          sx={{
            //type text
            textAlign: "justify",
            textJustify: "inter-word",
          }}
          variant="body2"
        >
          Temos em nossa estrutura ainda o Seminário Evangélico Avivamento
          Bíblico (com vistas à formação do quadro ministerial), o Lar
          Avivalista (atendimento social à idosos), a Publicações Avivamento
          (editora que viabiliza a literatura da denominação), a Central
          Administrativa (prédio no qual se mantém escritórios das áreas gerais)
          e um Centro de Convenções. Para além disso, nossas igrejas mantém
          diversos programa e instituições como escolas e centros de
          reabilitação, com vistas ao atendimento da membresia e da população em
          geral.
        </Typography>
        <Typography
          sx={{
            //type text
            textAlign: "justify",
            textJustify: "auto",
          }}
          variant="body2"
        >
          A cada quadriênio, quando realizamos nossa Convenção Geral, várias
          mudanças administrativas vão sendo implementadas, buscando ajustar
          nossa estrutura e proporcionar que nossos obreiros possam avançar em
          suas tarefas com maior abrangência de ação, a fim de que a Missão da
          Igreja seja completada e sua vocação continue sendo perseguida com o
          mesmo entusiasmo dos primórdios, que diga-se enfaticamente, desde
          sempre tem caracterizado nosso valoroso povo avivalista.
        </Typography>
        <Typography
          sx={{
            //type text
            textAlign: "justify",
            textJustify: "auto",
          }}
          variant="body2"
        >
          Convidamos você a juntar-se a nós e celebrar as maravilhas de Deus
          entre os homens na obra de Avivamento Bíblico.
        </Typography>
      </Box>
      <Box
        sx={{
          width: mdDown ? "100%" : "60%",
          height: "500px",
          backgroundImage: `url(${People})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "2px",
        }}
      />
    </Box>
  );
}
