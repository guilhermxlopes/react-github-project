import "./DataItem.css";

const DataItem = (props) => {
  return (
    <div>
      <img src={props.profile_photo} alt="profile"></img>
      <h1>{props.name}</h1>
      <h3>
        <i>{props.ig}</i>
      </h3>
      <p>Main Language: {props.main_language}</p>
      <p>Coding Tech: {props.tech}</p>
      <button>
        <a href="https://github.com/guilhermxlopes">GitHub Profile</a>
      </button>
    </div>
  );
};

export default DataItem;
