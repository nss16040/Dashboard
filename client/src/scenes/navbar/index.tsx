import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import AcUnitIcon from "@mui/icons-material/AcUnit";
type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25 rem" p="0.5 rem 0 rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75 rem" sx={{fontSize: "28px"}}>
        <AcUnitIcon />
        <Typography variant="h4" fontSize="16px">Findash</Typography>
      </FlexBetween>
    </FlexBetween>
  );
};
export default Navbar;