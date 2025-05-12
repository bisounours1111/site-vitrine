import { Container, Typography } from "@mui/material";
import { menuItems } from "../data/menuData";
import MenuCategory from "../components/shared/MenuCategory";

const Boissons = () => {
  const drinkCategories = ["softs", "bieres", "cocktails"];
  const categoryTitles = {
    softs: "Softs",
    bieres: "Bières",
    cocktails: "Cocktails",
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        color="primary"
        sx={{ mb: 6, textAlign: "center" }}
      >
        Nos Boissons
      </Typography>
      {drinkCategories.map((category) => (
        <MenuCategory
          key={category}
          title={categoryTitles[category]}
          items={menuItems
            .filter((item) => item.category === category)
            .slice(0, 5)}
        />
      ))}
    </Container>
  );
};

export default Boissons;
