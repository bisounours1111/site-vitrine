import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    contenu: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    console.log("Formulaire soumis:", formData);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <StyledPaper>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              color="primary"
            >
              Contactez-nous
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Sujet"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="contenu"
                value={formData.contenu}
                onChange={handleChange}
                margin="normal"
                required
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2 }}
              >
                Envoyer
              </Button>
            </form>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledPaper>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              color="primary"
            >
              Informations
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Adresse :</strong> 123 Rue de la Gastronomie, 75001 Paris
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Téléphone :</strong> 01 23 45 67 89
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Email :</strong> contact@latabledechantal.fr
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Horaires :</strong>
            </Typography>
            <Typography variant="body2" paragraph>
              Lundi - Vendredi : 12h00 - 14h30 et 19h00 - 22h30
            </Typography>
            <Typography variant="body2" paragraph>
              Samedi - Dimanche : 12h00 - 22h30
            </Typography>

            <Box sx={{ mt: 4, height: 300 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647884581234!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Carte du restaurant"
              />
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
