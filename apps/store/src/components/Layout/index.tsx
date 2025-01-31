import { PropsWithChildren } from "react";
import Container from "@mui/material/Container";

import Header from "../Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          paddingY: {
            xs: 2,
            sm: 3,
          },
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
