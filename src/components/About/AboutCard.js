import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Krishnendu Das </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am a Master of Computational Science and Applications
            <br />
            Student at DST-CIMS, Banaras Hindu University, Varanasi, India.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Crads
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "𝙒𝙝𝙚𝙣 𝙮𝙤𝙪 𝙘𝙖𝙣'𝙩 𝙧𝙚𝙢𝙤𝙫𝙚 𝙣𝙤𝙞𝙨𝙚 𝙛𝙧𝙤𝙢 𝙮𝙤𝙪𝙧 𝙡𝙞𝙛𝙚, 𝙪𝙨𝙚 𝙞𝙩 𝙖𝙨 𝙖𝙪𝙩𝙤𝙩𝙪𝙣𝙚"{" "}
          </p>
          <footer className="blockquote-footer">Krishnendu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
