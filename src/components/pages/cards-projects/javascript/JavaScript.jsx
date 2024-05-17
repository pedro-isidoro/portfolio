import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function JavaScript() {
  const navigate = useNavigate();

  const handleHtmlCssProjects = () => {
    return navigate("/projects/cards-projects/html-css");
  };
  const handleReactProjects = () => {
    return navigate("/projects/cards-projects/html-css-js-react");
  };

  const [htmlCssJsCards, setHtmlCssJsCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/json/javascript-cards.json");
        const data = await response.json();
        setHtmlCssJsCards(data);
      } catch (error) {
        console.error("Erro ao buscar os projetos HTML e CSS!!");
      }
    };
    fetchData();
  }, []);

  return (
    <section className="js-projects flex-row main-card main-projects-html-css-js-card">
      <div className="projects-buttons flex-column">
        <button className="btn" onClick={handleHtmlCssProjects}>
          HTML/CSS
        </button>
        <button className="btn" onClick={handleReactProjects}>
          React
        </button>
      </div>
      <div className="js-project-list flex-row">
        <ul className="js-project flex-row">
          {htmlCssJsCards.map((htmlCssJsCard, index) => (
            <li key={index} className="project flex-column">
              <div className="project-front flex-column">
                <h3>{htmlCssJsCard.h3FrontText}</h3>
                <img src={htmlCssJsCard.imgFrontSrc} className="image-link" />
              </div>
              <div className="project-back">
                <p>{htmlCssJsCard.pBackText}</p>
                <div className="github-links flex-row">
                  <a
                    href={htmlCssJsCard.internalDivBackFirstLinkHref}
                    target="_blank"
                  >
                    GitHub Repository
                  </a>
                  <a
                    href={htmlCssJsCard.internalDivBackSecondLinkHref}
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

export default JavaScript;
