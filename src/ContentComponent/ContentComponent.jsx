const ContentComponent = (props) => {
  return (
    <div className="parent2">
      <div className="element">
        <div className="element_item">
          <h2 className="title">{props.title}</h2>

          <h3 className="sub-title">{props.description}</h3>
        </div>
      </div>
    </div>
  );
};

export default ContentComponent;
