import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  margin: "0 10px",
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 500,
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  color: theme.palette.primary.main,
  fontWeight: "bold",
  fontSize: "1.5rem",
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const LogoImage = styled("img")({
  height: "40px",
  width: "auto",
});

const ThemeToggleButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginLeft: theme.spacing(2),
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

const Navbar = ({ onThemeToggle, isDarkMode }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Logo
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none" }}
        >
          <LogoImage
            src="https://img.icons8.com/fluency/96/restaurant.png"
            alt="Logo Restaurant"
          />
          La Table de Chantal
        </Logo>
        <Box>
          <StyledLink to="/">
            <Button color="inherit">Accueil</Button>
          </StyledLink>
          <StyledLink to="/carte">
            <Button color="inherit">Carte</Button>
          </StyledLink>
          <StyledLink to="/boissons">
            <Button color="inherit">Boissons</Button>
          </StyledLink>
          <StyledLink to="/contact">
            <Button color="inherit">Contact</Button>
          </StyledLink>
          <ThemeToggleButton
            onClick={onThemeToggle}
            aria-label="changer le thème"
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </ThemeToggleButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
