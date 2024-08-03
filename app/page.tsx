import DynamicGrid from "./components/DynamicGrid";
import { Typography } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Introduction from "./components/Introduction";

export default function Home() {
  const appbarItems = ["About", "Experience", "Work", "Contact"];

  const items = [
    {
      component: Introduction,
      width: 12,
      height: 1,
    },
    {
      component: Typography,
      width: 6,
      height: 1,
      variant: "h4",
      children: "Text 2",
    },
    {
      component: Typography,
      width: 4,
      height: 1,
      variant: "h4",
      children: "Text 2",
    },
  ];

  return (
    <div>
      <ResponsiveAppBar pages={appbarItems} />

      <DynamicGrid items={items} />
    </div>
  );
}
