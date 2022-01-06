import React from "react";
import { HomeCard } from "../../../components/HomeCard/HomeCard";
import { Slider } from "../../../components/Slider/Slider";
import cardImage from "../../../assets/walcome_vanilla.jpeg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const bodyContent = [
    {
      heading: "Welcome to Vanilla",
      image: cardImage,
      text: [
        "Our philosophy is to provide a satisfying dining experience for all spectrum of tastes using modern, innovative and classic cooking techniques.",
      ],
      buttonText: "Read about us",
      onButtonClick: () => navigate("/about"),
    },
    {
      heading: "Reserve a Table",
      image: cardImage,
      text: [
        "We offer warm and relaxed dining in a contemporary setting, fused with traditional Ottoman architecture.",
        "Vanilla is located in Antalya’s old city (Kaleiçi) within the ancient citadel walls, 5 minutes from Hadrian’s Gate.",
      ],
      buttonText: "Call and reserve a table",
      onButtonClick: () => navigate("/contact"),
    },
    {
      heading: "Our Menu",
      image: cardImage,
      text: [
        "Vanilla is the perfect place to relax and enjoy the ambiance of the Old Town.",
        "We look forward to welcoming you.",
        "Come in and enjoy.",
      ],
      buttonText: "View our menu",
      onButtonClick: () => navigate("/contact"),
    },
  ];

  return (
    <>
      <Slider />
      <div className="home__cards-wrapper">
        {bodyContent.map((data, i) => (
          <HomeCard key={i} {...data} />
        ))}
      </div>
    </>
  );
};
