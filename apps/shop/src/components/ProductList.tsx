import { useQuery } from "@tanstack/react-query";
import Grid from "@mui/material/Grid2";

import { Product } from "@ecommerce/shared";
import ProductItem from "./ProductItem";

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error: unknown) {
    throw new Error("Failed to fetch products");
  }
};

const ProductList = () => {
  const { data: products, isLoading } = useQuery(
    ["fetchProducts"],
    fetchProducts
  );

  if (isLoading) return <div>Loading...</div>;
  if (!products) return <div>No products found.</div>;

  return (
    <Grid container spacing={2} sx={{ padding: 20 }}>
      {products.map((product, idx) => (
        <Grid key={idx} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
