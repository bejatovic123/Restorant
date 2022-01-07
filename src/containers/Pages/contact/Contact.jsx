import React from "react";
import map from "../../../assets/map.png";
import contactBanner from "../../../assets/contact-banner.jpeg";
import { HomeCard } from "../../../components/HomeCard/HomeCard";

export const Contact = () => {
  return (
    <div className="contact">
      <img src={contactBanner} alt="contact-banner" />
      <div className="contact__content-wrapper">
        <HomeCard
          image={map}
          text={[
            "Barbaros District Hesapçı St. No:33 Kaleiçi",
            "Antalya, Turkey",
            "09333333332",
            "info@mail.com",
            "https://myweb.com",
          ]}
        />
        <form>
          <h3>Send us a message</h3>
          <span>
            <label>Name:</label>
            <input />
          </span>
          <span>
            <label>Email:</label>
            <input />
          </span>
          <span>
            <label>Message:</label>
            <textarea />
          </span>
          <button>Send message</button>
        </form>
      </div>
    </div>
  );
};
