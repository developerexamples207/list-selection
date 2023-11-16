import Item from "./Item";

function List({ items }) {
  return (
    <div className="list flex">
      {items.map((item) => {
        return <Item className="item" key={item} value={item} />;
      })}
    </div>
  );
}

export default List;
