import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div>
      <Link className={`common-btn ${props.classname}`} to={props.url}>
        {props.title}
      </Link>
    </div>
  );
}

export default Button;
