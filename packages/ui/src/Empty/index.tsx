import { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";

import { PaperBackground, PaperBackgroundProps } from "../Backgrounds";

type Props = PaperBackgroundProps & {
  title: string;
  titleSx?: SxProps<Theme>;
};

const Empty = ({ title, titleSx, children }: Props) => {
  return (
    <PaperBackground
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        height: "200px",
        textAlign: "center",
        paddingX: 2,
      }}
    >
      <Typography sx={titleSx} color="textSecondary">
        {title}
      </Typography>
      {children && children}
    </PaperBackground>
  );
};

export default Empty;
