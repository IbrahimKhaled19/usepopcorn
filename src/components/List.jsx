
const List = ({ data, renderItem }) => {
  return <ul className="list">{data.map(renderItem)}</ul>;
};

export default List;
