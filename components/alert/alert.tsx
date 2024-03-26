import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import ReportIcon from "@mui/icons-material/Report";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import * as React from "react";
import Box from "@mui/joy/Box";
import Alert from "@mui/joy/Alert";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { ColorPaletteProp } from "@mui/joy/styles";

interface IProps {
  title: string;
  color: ColorPaletteProp;
  icon?: React.ReactElement;
  content: string;
  closeBtn?: boolean;
  width?: string;
}

export const items: {
  title: string;
  color: ColorPaletteProp;
  icon: React.ReactElement;
}[] = [
  { title: "Success", color: "success", icon: <CheckCircleIcon /> },
  { title: "Warning", color: "warning", icon: <WarningIcon /> },
  { title: "Error", color: "danger", icon: <ReportIcon /> },
  { title: "Neutral", color: "neutral", icon: <InfoIcon /> },
];

const BasicAlert = ({
  title,
  color,
  icon,
  content,
  closeBtn = true,
  width,
}: IProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        width: `${width ? width : "100%"}`,
        flexDirection: "column",
      }}
    >
      <Alert
        key={title}
        sx={{ alignItems: "flex-start" }}
        startDecorator={icon}
        variant="soft"
        color={color}
        endDecorator={
          <IconButton variant="soft" color={color}>
            {closeBtn && <CloseRoundedIcon />}
          </IconButton>
        }
      >
        <div>
          <div>{title}</div>
          <Typography level="body-sm" color={color}>
            {content}
          </Typography>
        </div>
      </Alert>
    </Box>
  );
};

export default BasicAlert;
