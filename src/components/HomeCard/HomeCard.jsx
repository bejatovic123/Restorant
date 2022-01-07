import PropTypes from "prop-types";
import React from "react";

export const HomeCard = ({
  heading,
  image,
  text,
  buttonText,
  onButtonClick = () => {},
}) => (
  <div className="home-card">
    {heading && <h2>{heading}</h2>}
    {image && <img src={image} alt={heading} />}
    {text && (
      <p>
        {text.map((txt, i) => (
          <span key={i}>{txt}</span>
        ))}
      </p>
    )}
    {buttonText && <button onClick={onButtonClick}>{buttonText}</button>}
  </div>
);

HomeCard.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.array,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};
