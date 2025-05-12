import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  marginTop: "auto",
  borderTop: `1px solid ${theme.palette.primary.light}`,
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="body2" color="textSecondary" gutterBottom>
          © 2024 La Table de Chantal
        </Typography>
        <Box>
          <SocialIcon
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </SocialIcon>
        </Box>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
