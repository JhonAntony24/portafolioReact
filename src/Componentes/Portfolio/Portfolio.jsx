import React, { useState } from "react";
import "./Portfolio.css";
import portafolio from "../../assets/portafolio.png";
import apirick from "../../assets/apirick.png";

const portfolioItems = [
  {
    id: 1,
    image: portafolio,
    title: "Portafolio",
    description: "Desarrollado con React, Tailwind, NodeJS",
    demolink: "",
  },
  {
    id: 2,
    image: apirick,
    title: "Rick and Morty APP",
    description: "Desarrollado con React, Tailwind, NodeJS",
    demolink: "https://rick-and-mortyjhon.vercel.app/",
  },
];

export const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portafolio</h1>

      <div className="portfolio-container">
        {portfolioItems.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="portfolio-image"
              onClick={() => setSelectedImage(item.image)}
            />
            <div className="portfolio-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.demolink && (
                <a
                  href={item.demolink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-button"
                >
                  Ver demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* === Modal para mostrar imagen ampliada === */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img src={selectedImage} alt="Ampliada" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
