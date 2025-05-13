import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  position: "relative",
  overflow: "hidden",
}));

const HeroImage = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "opacity 1s ease-in-out",
}));

const HeroOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textAlign: "center",
  padding: theme.spacing(2),
}));

const ChefSection = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  position: "relative",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  alignItems: "center",
}));

const ChefContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    padding: theme.spacing(4),
  },
}));

const ChefImage = styled("img")(({ theme }) => ({
  width: "400px",
  height: "400px",
  objectFit: "cover",
  borderRadius: "50%",
  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
  border: "4px solid #FFE4E8",
}));

const ChefText = styled(Box)(({ theme }) => ({
  maxWidth: "600px",
  "& h3": {
    color: "#FF1493",
    marginBottom: theme.spacing(3),
    fontSize: "2rem",
  },
  "& p": {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "#666666",
    marginBottom: theme.spacing(2),
  },
}));

const SpecialtiesSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  backgroundColor: "#FFF0F0",
  padding: theme.spacing(8, 0),
  display: "flex",
  alignItems: "center",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "#FF1493",
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(6),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "400px",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",
  marginBottom: theme.spacing(4),
  "&:hover": {
    transform: "translateY(-10px)",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: "200px",
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: "#FFE4E8",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(4),
  "& h5": {
    color: "#FF1493",
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  "& p": {
    color: "#666666",
    fontSize: "1.2rem",
    lineHeight: 1.6,
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
}));

const Home = () => {
  const images = [
    "/images/restaurant-1.jpg",
    "/images/restaurant-2.jpg",
    "/images/restaurant-3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <HeroSection>
        <HeroImage
          sx={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            opacity: 1,
          }}
        />
        <HeroOverlay>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: "bold",
              marginBottom: 2,
            }}
          >
            La Table de Chantal
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              marginBottom: 4,
            }}
          >
            Une expérience culinaire unique
          </Typography>
        </HeroOverlay>
      </HeroSection>

      <ChefSection>
        <Container>
          <ChefContent>
            <ChefImage src="/images/etchebest.webp" alt="Philippe Etchebest" />
            <ChefText>
              <Typography variant="h3" gutterBottom>
                Notre Chef : Philippe Etchebest
              </Typography>
              <Typography variant="body1" paragraph>
                Philippe Etchebest, chef étoilé et figure emblématique de la
                cuisine française, apporte son expertise et sa passion à La
                Table de Chantal. Avec plus de 30 ans d'expérience, il a su
                imposer sa vision moderne de la gastronomie tout en respectant
                les traditions culinaires françaises.
              </Typography>
              <Typography variant="body1" paragraph>
                Sa cuisine, reconnue pour sa précision et sa créativité, met en
                valeur les produits locaux et de saison. Chaque plat raconte une
                histoire, une émotion, une expérience unique que nous sommes
                fiers de partager avec vous.
              </Typography>
            </ChefText>
          </ChefContent>
        </Container>
      </ChefSection>

      <SpecialtiesSection>
        <Container>
          <SectionTitle>Nos Spécialités</SectionTitle>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <StyledLink to="/carte" sx={{ flex: 1 }}>
              <StyledCard>
                <StyledCardMedia
                  image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
                  title="Notre Carte"
                  sx={{ height: 200 }}
                />
                <StyledCardContent>
                  <Typography variant="h5" component="h2">
                    Notre Carte
                  </Typography>
                  <Typography>
                    Découvrez notre sélection de plats raffinés, préparés avec
                    des produits frais et de saison. De l'entrée au dessert,
                    chaque plat est une invitation au voyage culinaire.
                  </Typography>
                </StyledCardContent>
              </StyledCard>
            </StyledLink>

            <StyledLink to="/boissons" sx={{ flex: 1 }}>
              <StyledCard>
                <StyledCardMedia
                  image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
                  title="Carte des Vins"
                  sx={{ height: 200 }}
                />
                <StyledCardContent>
                  <Typography variant="h5" component="h2">
                    Carte des Vins
                  </Typography>
                  <Typography>
                    Explorez notre cave sélectionnée avec soin. Des vins
                    d'exception aux cocktails signature, notre sommelier vous
                    guide dans le choix parfait pour accompagner votre repas.
                  </Typography>
                </StyledCardContent>
              </StyledCard>
            </StyledLink>
          </Box>
        </Container>
      </SpecialtiesSection>
    </Box>
  );
};

export default Home;
