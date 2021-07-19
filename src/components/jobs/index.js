import "./index.css";

const Jobs = (props) => {
  return (
    <div className={props.className}>
      <div className="titre">{props.title}</div>
      <div className="infos">
        {props.contractType} {" - "} {props.country} {" - "} {props.city}
      </div>
    </div>
  );
};

export default Jobs;
