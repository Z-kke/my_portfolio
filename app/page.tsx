import DynamicGrid from "./components/DynamicGrid";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

export default function Home() {
  const appbarItems = ["About", "Experience", "Work", "Contact"];

  const items = [
    {
      component: "Introduction",
      width: 12,
      height: 1,
    },
    {
      component: "AboutMe",
      width: 12,
      height: 1,
    },
    {
      component: "Work",
      width: 12,
      height: 1,
    },
    {
      component: "Contact",
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
