import Paper, { PaperProps } from "@mui/material/Paper";

export type PaperBackgroundProps = PaperProps;

export const PaperBackground = ({
  children,
  sx,
  ...rest
}: PaperBackgroundProps) => {
  return (
    <Paper
      sx={{
        padding: 3,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Paper>
  );
};
