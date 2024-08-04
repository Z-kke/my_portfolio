import DynamicGrid from "./components/DynamicGrid";
import { Typography } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Introduction from "./components/Introduction";
import About from "./components/AboutMe";

export default function Home() {
  const appbarItems = ["About", "Experience", "Work", "Contact"];

  const items = [
    {
      component: Introduction,
      width: 12,
      height: 1,
    },
    {
      component: About,
      width: 12,
      height: 1,
    },
    {
      component: Introduction,
      width: 12,
      height: 1,
    },
  ];

  return (
    <div>
      <ResponsiveAppBar pages={appbarItems} />
      <DynamicGrid items={items} />
    </div>
  );
}
