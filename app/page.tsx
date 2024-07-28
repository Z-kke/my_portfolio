import DynamicGrid from "./components/DynamicGrid";
import { Button, Typography } from "@mui/material";
import Layout from "./components/Layout";

export default function Home() {
  const items = [
    {
      component: Button,
      width: 6,
      height: 1,
      variant: "contained",
      color: "primary",
      children: "Button 1",
    },
    {
      component: Typography,
      width: 6,
      height: 1,
      variant: "h4",
      children: "Text 1",
    },
    {
      component: Button,
      width: 6,
      height: 2,
      variant: "contained",
      color: "secondary",
      children: "Button 2",
    },
    {
      component: Typography,
      width: 6,
      height: 1,
      variant: "h4",
      children: "Text 2",
    },
  ];

  return (
    <Layout>
      <main className="container mx-auto px-4 py-8">
        <Typography variant="h3" gutterBottom>
          Saku Arho
        </Typography>
      </main>

      <DynamicGrid items={items} />
    </Layout>
  );
}
