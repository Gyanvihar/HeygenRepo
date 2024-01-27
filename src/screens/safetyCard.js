import React from 'react';
import '../App.css';

const SafetyCard = ({ icon, title, description, link }) => {
  return (
    <div className="safety_card_div">
      <div className="w-embed">{icon}</div>
      <div>
        <h3 className="safety_head">{title}</h3>
        <p className="safety_para">
          {description} <a href={link} className="link-underline-white">View more.</a>
        </p>
      </div>
    </div>
  );
};

export default SafetyCard;
