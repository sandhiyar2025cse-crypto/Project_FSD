import "./boxes.css";

const BoxComponent = (props) => {
  return (
    <div className="parent">
      <div className="child">
        <div className="value">{props.value1}</div>
        <div className="detail">{props.detail1}</div>
      </div>

      <div className="child">
        <div className="value">{props.value2}</div>
        <div className="detail">{props.detail2}</div>
      </div>

      <div className="child">
        <div className="value">{props.value3}</div>
        <div className="detail">{props.detail3}</div>
      </div>

      <div className="child">
        <div className="value">{props.value4}</div>
        <div className="detail">{props.detail4}</div>
      </div>
    </div>
  );
};

export default BoxComponent;
