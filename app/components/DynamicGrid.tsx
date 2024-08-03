import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

interface GridItemProps {
  component: React.ElementType;
  width: number;
  height: number;
  [key: string]: any; // Any additional props for the grid item.
}

interface DynamicGridProps {
  items: GridItemProps[];
}

const DynamicGrid: React.FC<DynamicGridProps> = ({ items }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {items.map((item, index) => {
        const { component: Component, width, height, ...props } = item;
        return (
          <Grid
            item
            xs={12}
            sm={width}
            md={width}
            lg={width}
            key={index}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gridRowEnd: `span ${height}` }}
          >
            <Component {...props} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DynamicGrid;

