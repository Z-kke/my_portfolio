import DynamicGrid from "./components/DynamicGrid";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

export default function Home() {
  const items = ["Introduction", "AboutMe", "Work", "Contact"];

  const components = items.map((item) => ({ component: item }));

  return (
    <div>
      <ResponsiveAppBar pages={items} />
      <DynamicGrid items={components} />
    </div>
  );
}
