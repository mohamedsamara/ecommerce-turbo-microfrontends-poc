import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Product, useCart } from "@ecommerce/shared";

const ProductItem = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      image: product.image,
      quantity: 1,
      price: product.price,
    });
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia
        sx={{ height: "300px", backgroundPosition: "center top" }}
        image={product.image}
        title={product.title}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: (theme) => theme.spacing(2) }}>
        <Button variant="contained" fullWidth onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
