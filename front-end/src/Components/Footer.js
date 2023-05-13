import React from "react";
import "../Css/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <h2>ESRB Ratings</h2>
      <ul>
        <li>
          <strong>E</strong> - Everyone
          <p>
            Content is generally suitable for all ages. May contain minimal cartoon, fantasy or mild violence and/or infrequent use of mild language.
          </p>
        </li>
        <li>
          <strong>E10+</strong> - Everyone 10+
          <p>
            Content is generally suitable for ages 10 and up. May contain more cartoon, fantasy or mild violence, mild language and/or minimal suggestive themes.
          </p>
        </li>
        <li>
          <strong>T</strong> - Teen
          <p>
            Content is generally suitable for ages 13 and up. May contain violence, suggestive themes, crude humor, minimal blood, simulated gambling and/or infrequent use of strong language.
          </p>
        </li>
        <li>
          <strong>M</strong> - Mature
          <p>
            Content is generally suitable for ages 17 and up. May contain intense violence, blood and gore, sexual content and/or strong language.
          </p>
        </li>
        <li>
          <strong>A</strong> - Adults Only
          <p>
            Content is generally suitable for ages 18 and up. May include prolonged scenes of intense violence, graphic sexual content and/or gambling with real currency.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
