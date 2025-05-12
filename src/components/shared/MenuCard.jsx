import {
  Card,
  CardContent as MuiCardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  backgroundSize: "cover",
});

const StyledCardContent = styled(MuiCardContent)({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  "& .MuiTypography-body2": {
    flexGrow: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  },
});

const PriceTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  marginTop: "auto",
}));

const MenuCard = ({ item }) => {
  return (
    <StyledCard>
      <StyledCardMedia image={item.image} title={item.nom} />
      <StyledCardContent>
        <Typography gutterBottom variant="h6" component="h3">
          {item.nom}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <PriceTypography variant="h6">{item.prix.toFixed(2)} €</PriceTypography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default MenuCard;
