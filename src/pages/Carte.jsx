import { Container, Typography } from "@mui/material";
import { menuItems } from "../data/menuData";
import MenuCategory from "../components/shared/MenuCategory";

const Carte = () => {
  const foodCategories = ["entrees", "plats", "desserts"];
  const categoryTitles = {
    entrees: "Entrées",
    plats: "Plats",
    desserts: "Desserts",
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
        Notre Carte
      </Typography>
      {foodCategories.map((category) => (
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

export default Carte;
