import Grid from "@mui/material/Grid";

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
    <Grid container spacing={2}>
      {items.map((item, index) => {
        const { component: Component, width, height, ...props } = item;
        return (
          <Grid
            item
            xs={12 / 2} // Divide grid into two columns.
            sm={12 / 2}
            md={12 / 2}
            lg={12 / 2}
            key={index}
            style={{ gridRowEnd: `span ${height}` }}
          >
            <Component {...props} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DynamicGrid;
