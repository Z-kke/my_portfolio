import DynamicGrid from "./components/DynamicGrid";
import { Button, Typography } from "@mui/material";

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
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Saku Arho</h1>
      </main>

      <DynamicGrid items={items} />

      <footer className="bg-gray-200 py-4 mt-8">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Saku Arho
        </p>
      </footer>
    </div>
  );
}
