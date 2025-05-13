import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFE4E8",
  color: "#333333",
  padding: theme.spacing(6, 0),
  marginTop: "auto",
  borderTop: "1px solid #FFB6C1",
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  fontSize: "1.2rem",
  color: "#FF1493",
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#666666",
  textDecoration: "none",
  display: "block",
  marginBottom: theme.spacing(1),
  "&:hover": {
    color: "#FF1493",
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: "#666666",
  marginRight: theme.spacing(1),
  "&:hover": {
    color: "#FF1493",
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
  gap: theme.spacing(1),
  color: "#666666",
  "& .MuiSvgIcon-root": {
    color: "#FF1493",
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          {/* Contact */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle>Contact</FooterTitle>
            <InfoItem>
              <LocationOnIcon />
              <Typography>123 Rue de la Gastronomie, Paris</Typography>
            </InfoItem>
            <InfoItem>
              <PhoneIcon />
              <Typography>01 23 45 67 89</Typography>
            </InfoItem>
            <InfoItem>
              <EmailIcon />
              <Typography>contact@latabledechantal.fr</Typography>
            </InfoItem>
          </Grid>

          {/* Horaires */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle>Horaires</FooterTitle>
            <InfoItem>
              <AccessTimeIcon />
              <Typography>
                Lundi - Vendredi: 12h - 14h30, 19h - 22h30
              </Typography>
            </InfoItem>
            <InfoItem>
              <AccessTimeIcon />
              <Typography>Samedi: 19h - 23h</Typography>
            </InfoItem>
            <InfoItem>
              <AccessTimeIcon />
              <Typography>Dimanche: Fermé</Typography>
            </InfoItem>
          </Grid>

          {/* Liens Rapides */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle>Liens Rapides</FooterTitle>
            <FooterLink href="/carte">Notre Carte</FooterLink>
            <FooterLink href="/boissons">Carte des Vins</FooterLink>
            <FooterLink href="/contact">Réservation</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </Grid>

          {/* Réseaux Sociaux */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle>Suivez-nous</FooterTitle>
            <Box>
              <SocialIconButton aria-label="Facebook">
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="Instagram">
                <InstagramIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="Twitter">
                <TwitterIcon />
              </SocialIconButton>
            </Box>
            <Typography sx={{ mt: 2, color: "#666666" }}>
              Restez informé de nos actualités et événements spéciaux
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: "1px solid #FFB6C1",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography sx={{ color: "#666666" }}>
            © {new Date().getFullYear()} La Table de Chantal. Tous droits
            réservés.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
