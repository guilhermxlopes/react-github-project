import "./DataItem.css";

const DataItem = (props) => {
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
      <button>
        <a href="https://github.com/guilhermxlopes">GitHub Profile</a>
      </button>
    </div>
  );
};

export default DataItem;
