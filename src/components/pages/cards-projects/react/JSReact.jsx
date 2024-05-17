import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function JSReact() {
  const navigate = useNavigate();

  const handleHtmlCssProjects = () => {
    return navigate("/projects/cards-projects/html-css");
  };
  const handleJSProjects = () => {
    return navigate("/projects/cards-projects/html-css-js");
  };

  const [jsReactCards, setJsReactCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./src/json/js-react-cards.json");
        const data = await response.json();
        setJsReactCards(data);
      } catch (error) {
        console.error("Erro ao buscar os projetos HTML e CSS!!");
      }
    };
    fetchData();
  }, []);

  return (
    <section className="react-projects flex-row main-card main-projects-html-css-js-react-card">
      <div className="projects-buttons flex-column">
        <button className="btn" onClick={handleHtmlCssProjects}>
          HTML/CSS
        </button>
        <button className="btn" onClick={handleJSProjects}>
          JavaScript
        </button>
      </div>
      <div className="react-project-list flex-row">
        <ul className="react-project flex-row">
          {jsReactCards.map((jsReactCard, index) => (
            <li key={index} className="project flex-column">
              <div className="project-front flex-column">
                <h3>{jsReactCard.h3FrontText}</h3>
                <img src={jsReactCard.imgFrontSrc} className="image-link" />
              </div>
              <div className="project-back">
                <p>{jsReactCard.pBackText}</p>
                <div className="github-links flex-row">
                  <a
                    href={jsReactCard.internalDivBackFirstLinkHref}
                    target="_blank"
                  >
                    GitHub Repository
                  </a>
                  <a
                    href={jsReactCard.internalDivBackSecondLinkHref}
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

export default JSReact;
