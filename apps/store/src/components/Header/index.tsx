import Stack from "@mui/material/Stack";

import logo from "../../assets/logo.svg";
import { PaperBackground } from "@ecommerce/ui";
import { MiniCart } from "@ecommerce/cart/components";

const Header = () => {
  return (
    <PaperBackground>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} alt="Logo" width={190} height={30} />
        <MiniCart />
      </Stack>
    </PaperBackground>
  );
};

export default Header;
