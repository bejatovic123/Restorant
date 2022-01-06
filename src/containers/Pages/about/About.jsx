import React from "react";
import aboutBanner from "../../../assets/about-banner.jpeg";
import foodSnap from "../../../assets/food-snap.jpg";

export const About = () => {
  return (
    <>
      <img className="about__banner" src={aboutBanner} alt="about-banner" />
      <div className="about__card">
        <img src={foodSnap} alt="food-snap" />
        <div>
          <h3>Since 2007</h3>
          <p>
            Vanilla was established in 2007 and has since been the centre of
            fine dining in Antalya.
          </p>
          <p>
            Situated five minutes’ walking distance from Hadrian’s Gate, Vanilla
            offers modern international cuisine served in a warm and relaxed
            environment. Executive Chef/Owner Wayne designs his menus to reflect
            the seasons, using the finest local produce.
          </p>
          <p>
            Our philosophy is to provide a satisfying dining experience for the
            full spectrum of tastes using modern, innovative and classic cooking
            techniques.
          </p>
          <p>We look forward to welcoming you.</p>
        </div>
      </div>
    </>
  );
};
