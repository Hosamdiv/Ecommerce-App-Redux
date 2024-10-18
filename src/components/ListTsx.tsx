import { CSSProperties } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }: { index: number; style: CSSProperties }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

const ListTsx = () => {
  return (
    <AutoSizer style={{
        width:500,
        height:"100vh"
    }}>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={1000}
          itemSize={35}
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default ListTsx;
