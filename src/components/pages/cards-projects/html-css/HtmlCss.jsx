import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import htmlCssData from "src/json/html-css-cards.json";

function HtmlCss() {
  // redirect - redirecionamento na lógica
  const navigate = useNavigate();
  const handleJSProjects = () => {
    // console.log("Contato enviado!")
    return navigate("/projects/cards-projects/html-css-js");
  };
  const handleReactProjects = () => {
    return navigate("/projects/cards-projects/html-css-js-react");
  };

  const [htmlCssCards, setHtmlCssCards] = useState([]);

  useEffect(() => {
    setHtmlCssCards(htmlCssData)
  }, []);

  return (
    <section className="html-css-projects flex-row main-card main-projects-html-css-card">
      <div className="projects-buttons flex-column">
        <button className="btn" onClick={handleJSProjects}>
          JavaScript
        </button>
        <button className="btn" onClick={handleReactProjects}>
          React
        </button>
      </div>
      <div className="html-css-project-list flex-row">
        <ul className="html-css-project flex-row">
          {htmlCssCards.map((htmlCssCard, index) => (
            <li key={index} className="project flex-column">
              <div className="project-front flex-column">
                <h3>{htmlCssCard.h3FrontText}</h3>
                <img src={htmlCssCard.imgFrontSrc} className="image-link" />
              </div>
              <div className="project-back">
                <p>{htmlCssCard.pBackText}</p>
                <div className="github-links flex-row">
                  <a
                    href={htmlCssCard.internalDivBackFirstLinkHref}
                    target="_blank"
                  >
                    GitHub Repository
                  </a>
                  <a
                    href={htmlCssCard.internalDivBackSecondLinkHref}
                    target="_blank"
                  >
                    GitHub Pages
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HtmlCss;
