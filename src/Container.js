import DataItem from "./DataItem";

const Container = (props) => {
  return (
    <DataItem
      profile_photo={props.items[0].profile_photo}
      name={props.items[0].name}
      ig={props.items[0].ig}
      main_language={props.items[0].main_language}
      tech={props.items[0].tech}
    />
  );
};

export default Container;
