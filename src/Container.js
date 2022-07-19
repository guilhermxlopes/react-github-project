import DataItem from "./DataItem";

const Container = (props) => {
  return <DataItem name={props.items[0].name} />;
};

export default Container;
