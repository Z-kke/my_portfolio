import DynamicGrid from "./components/DynamicGrid";
import { Typography } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Introduction from "./components/Introduction";
import About from "./components/AboutMe";
import Work from "./components/Work";
import Contact from "./components/Contact";

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
      component: Work,
      width: 12,
      height: 1,
    },
    {
      component: Contact,
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
