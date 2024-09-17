import "./About.css";
import aboutLeft from "../../assets/img/about-left.jpg";
{
  /*import playIcon from "../../assets/img/play-icon.png";*/
}
export const About = () => {
  return (
    <div className="about" id="about-id">
      <div className="about-left">
        <img src={aboutLeft} alt="" className="about-img" />
        {/*<img src={playIcon} alt="" className="play-icon" />*/}
      </div>

      <div className="about-right">
        <h3>About alkaya.</h3>
        <h2>We take the ordinary and make it extraordinary.</h2>
        <p>
          <strong>
            Our smartphone accessories, perfectly priced, offer exceptional
            quality and a modern, eye-catching design.
          </strong>
          We&apos;re not just a brand; we&apos;re a vibe. We are the solution
          maker for those who value both function and design. Our mission is
          simple -<strong>&quot;Gadgets on point&quot;. </strong>We care so our
          clients can enjoy and rely on us, we deliver what they need, nothing
          less, just on the dot!
        </p>
        <p>
          <strong>
            The Problem. <br />
            The world of smartphone accessories has become an overwhelming,
            monotonous sea of uninspired choices, offered by countless
            manufacturers, packaged in varying sizes and presentations, leaving
            consumers feeling overwhelmed.
          </strong>
          Unfortunately, these products are often poorly displayed in many
          retail spaces, making them appear extremely unappealing and ultimately
          causing customers to refrain from making purchases.
        </p>
        <p>
          <strong>
            Our Solution.
            <br /> We have made it our mission to permeate the world of
            smartphone accessories with energy and style.
          </strong>
          We simplify things for our audience by delivering high-quality
          products at a reasonable price. Furthermore, our eye-catching product
          displays not only enhance the shopping experience but also accentuate
          the aesthetics of retail spaces, resulting in higher sales and
          satisfied customers!
        </p>
      </div>
    </div>
  );
};

export default About;
