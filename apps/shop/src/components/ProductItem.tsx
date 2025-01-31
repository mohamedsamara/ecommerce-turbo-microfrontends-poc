import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Product } from "@ecommerce/shared";
import { useCartStore } from "@ecommerce/state/stores";

const ProductItem = ({ product }: { product: Product }) => {
  const { addToCart } = useCartStore();

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
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          padding: (theme) => theme.spacing(1),
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            "&:before ": {
              display: "block",
              content: "''",
              paddingBottom: "100%",
            },
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            flex: 1,
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
