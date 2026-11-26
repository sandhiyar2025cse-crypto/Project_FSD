import "./hero.css";

const HeroComponent = (props) => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">{props.title}</h1>

      <h2 className="hero-heading">
        {props.heading}
        <br />
        <span>{props.highlight}</span>
      </h2>

      <p className="hero-description">{props.description}</p>

      <div className="hero-buttons">
        <button className="learning-btn">{props.button1}</button>

        <button className="demo-btn">{props.button2}</button>
      </div>
    </div>
  );
};

export default HeroComponent;
