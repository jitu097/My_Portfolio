import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import githubSearch from "../../assets/BILLLLi.png";
import portfolio from "../../assets/portfolio.png";
import sorting from "../../assets/sorting.png";
import sip_calculator from "../../assets/sip_calculator.png";
import IntelliMock from "../../assets/intellimock.png";
import efinance from "../../assets/efinance.png";
export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/jitu097/Efinance" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://e-finance-lipu.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>eFinance</h3>
              <div className="project-image-container">
                <img src={efinance} alt="Project Preview" className="project-image"/>
                <div className="image-overlay">
                  <p>
                  eFinance is a comprehensive financial management application that helps users track expenses, manage budgets, and analyze spending patterns with an intuitive dashboard.</p>
                </div>
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/jitu097/IntelliMock_Ai" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://intelli-mock-ai.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>IntelliMock</h3>
              <div className="project-image-container">
                <img src={IntelliMock} alt="Project Preview" className="project-image"/>
                <div className="image-overlay">
                  <p>
                  IntelliMock is a project that automates interviews using AI, generating questions, evaluating responses, and providing feedback to candidates.</p>
                </div>
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>Gemini Api</li>
                <li>Drizzle Orm</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="hhttps://github.com/jitu097/Sip_caluclator" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://sip-caluclator.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Sip-Calculator</h3>
              <div className="project-image-container">
                <img src={sip_calculator} alt="Project Preview" className="project-image"/>
                <div className="image-overlay">
                  <p>SIP Calculator: A responsive tool built with CSS and JavaScript to compute investment returns based on systematic investment plans.</p>
                </div>
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML,CSS</li>
                <li>Javascript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/jitu097/VisualSort" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://visual-sort-gll7.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Visual Sort</h3>
              <div className="project-image-container">
                <img src={sorting} alt="Project Preview" className="project-image"/>
                <div className="image-overlay">
                  <p>A react based application using Data structure and algorithm , showcasing sorting algorithms like Bubble Sort, Insertion Sort, Merge sort,Quick Sort.</p>
                </div>
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Sorting Algorithms</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/jitu097/GitFinder" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://git-finder-ten.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>GitFinder</h3>
              <div className="project-image-container">
                <img src={githubSearch} alt="Project Preview" className="project-image"/>
                <div className="image-overlay">
                  <p>The GitHub Profile Search Project is a simple and interactive web application built using HTML, CSS, and JavaScript. The primary goal of the project is to allow users to search for GitHub profiles by entering a username and display relevant profile details in a visually appealing manner.</p>
                </div>
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML,CSS</li>
                <li>JavaScript</li>
                <li>Github API</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/jitu097/My_Portfolio" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://jitendra-portfolio.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio</h3>
              <div className="project-image-container">
                <img src={portfolio} alt="Project Preview" className="project-image"/>
                <div className="image-overlay">
                  <p>"My Portfolio" is a project built using TypeScript (.ts) and TypeScript JSX (.tsx) to showcase skills, projects, and experience interactively. It leverages .tsx for React components with JSX and .ts for utility functions, ensuring type safety and scalability.</p>
                </div>
              </div>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TypeScript</li>
                <li>TypeScriptJsx</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}