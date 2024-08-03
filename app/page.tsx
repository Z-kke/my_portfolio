import DynamicGrid from "./components/DynamicGrid";
import { Button, Typography } from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

export default function Home() {
  const appbarItems = ["About", "Experience", "Work", "Contact"];

  const items = [
    {
      component: Typography,
      width: 12,
      height: 1,
      variant: "h4",
      children: "Text 1",
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
      <main className="container mx-auto px-4 py-8">
        <Typography variant="h1" gutterBottom>
          Saku Arho
        </Typography>
      </main>

      <DynamicGrid items={items} />
    </div>
  );
}
