import Link from "next/link";
import "./index.scss";

export default () => (
  <div className="vision-intro">
    <h1 className="title">Section 3: 🏆 Coding with Mental Models</h1>
    <br />
    <br />
    <h2>#3.0 Stepping into Coding</h2>
    <br />
    <span className="intro-card">
      <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/embed/r7dZKOL5rcg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        />
      </div>
      <br />
      don't ask about my math skills
    </span>

    <p></p>
    <Link href="/vision/logic-models-explained">
      <a className="next">Up next: Logic Models Explained</a>
    </Link>
  </div>
);
