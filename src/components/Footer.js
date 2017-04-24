import React from 'react'
import { Link } from 'react-router'

const Footer = (props) => {
  return (
    <div className="cta">
      <small>
        Om du liker dette stammespråket <a href="https://www.netliferesearch.com/jobb">kan du kanskje jobbe hos oss</a>?
       – <Link to="/alle">se alt stammespråket</Link>
       </small>
    </div>
  );
}

export default Footer;
