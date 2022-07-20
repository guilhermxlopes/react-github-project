import { useState } from "react";
import "./DataItem.css";

const DataItem = (props) => {
  const [title, setTitle] = useState("GitHub Profile");

  const clickHandler = () => {
    setTitle("You clicked!");
  };

  return (
    <div>
      <img src={props.profile_photo} alt="profile"></img>
      <h1>{props.name}</h1>
      <i>{props.ig}</i>
      <p>
        <b>Main Language:</b> {props.main_language}
      </p>
      <p>
        <b>Coding Tech:</b> {props.tech}
      </p>
      <button onClick={clickHandler}>
        <a target="blank" href="https://github.com/guilhermxlopes">
          {title}
        </a>
      </button>
    </div>
  );
};

export default DataItem;
