import "./Hero.css";
import { Link as LinkRoll } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Gadgets on Point</h1>
        <p>
          We take the ordinary and make it extraordinary. Our smartphone
          accessories, perfectly priced, offer exceptional quality and a modern,
          eye-catching design.
        </p>
        <LinkRoll to="about" smooth={true} offset={-110}>
          <button className="btn">Learn more</button>
        </LinkRoll>
      </div>
    </div>
  );
};

export default Hero;
