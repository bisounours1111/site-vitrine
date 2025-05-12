import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuCard from "./MenuCard";

const CategoryContainer = styled(Box)({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
});

const RowContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginBottom: "20px",
});

const CardWrapper = styled(Box)(({ width }) => ({
  width: width,
  flexShrink: 0,
}));

const MenuCategory = ({ title, items }) => {
  const firstRow = items.slice(0, 2);
  const secondRow = items.slice(2, 5);

  return (
    <CategoryContainer mb={6}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        color="primary"
        sx={{ mb: 4, textAlign: "center" }}
      >
        {title}
      </Typography>

      {/* Première ligne : 2 cartes de 35% */}
      <RowContainer>
        {firstRow.map((item) => (
          <CardWrapper width="35%" key={item.id}>
            <MenuCard item={item} />
          </CardWrapper>
        ))}
      </RowContainer>

      {/* Deuxième ligne : 3 cartes (30-35-30) */}
      <RowContainer>
        {secondRow.map((item, index) => (
          <CardWrapper width={index === 1 ? "35%" : "30%"} key={item.id}>
            <MenuCard item={item} />
          </CardWrapper>
        ))}
      </RowContainer>
    </CategoryContainer>
  );
};

export default MenuCategory;
