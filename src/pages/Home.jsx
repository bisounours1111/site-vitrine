import { Box, Typography, Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";

const HeroSection = styled(Box)({
  position: "relative",
  height: "100vh",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
});

const HeroImage = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
  transition: "opacity 1s ease-in-out",
});

const Overlay = styled(Paper)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  zIndex: 2,
});

const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 3,
  textAlign: "center",
  color: theme.palette.common.white,
  padding: theme.spacing(6),
  borderRadius: "20px 20px 0 0",
  backgroundColor: "rgb(255, 155, 205)",
  backdropFilter: "blur(5px)",
  marginBottom: 0,
}));

const images = [
  "/images/restaurant-1.jpg",
  "/images/restaurant-2.jpg",
  "/images/restaurant-3.jpg",
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <HeroSection>
        <HeroImage
          src={images[currentImageIndex]}
          alt="Restaurant ambiance"
          style={{ opacity: 1 }}
        />
        <Overlay />
        <HeroContent>
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 700,
              marginBottom: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            La Table de Chantal
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: { xs: "1.2rem", md: "1.8rem" },
              fontWeight: 400,
              marginBottom: 4,
              textShadow: "1px 1px 2px rgb(0, 0, 0)",
            }}
          >
            Une expérience culinaire unique
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              maxWidth: "600px",
              margin: "0 auto",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Découvrez une cuisine raffinée dans un cadre élégant et chaleureux.
            Notre chef vous propose une expérience gastronomique unique, mêlant
            tradition et innovation.
          </Typography>
        </HeroContent>
      </HeroSection>
    </Box>
  );
};

export default Home;
