import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Service() {
  return (
    <Container id="service">
      <h2>My Domains</h2>
      <div className="domains">
        <ScrollAnimation animateIn="flipInX">
          <div className="domain">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>DSA</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Data Structures & Algorithms</h3>
              <p>My passion lies in data structures and algorithms (DSA). I dedicate significant time to practicing on platforms like LeetCode and GeeksforGeeks. I have successfully solved over 300 problems on these platforms, constantly striving to enhance my DSA skills and remain at the forefront of algorithmic problem-solving.</p>
              <a href="https://codolio.com/profile/Jitendra_2" className="progress-btn">Progress</a>
            </div>
            <footer>
              <ul className="tech-list">
                <li>DSA</li>
                <li>Problem Solving</li>
                <li>Competitive Programming</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="domain">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Web Development</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Full Stack Development</h3>
              <p>My core strength lies in frontend web development, and I'm actively developing my backend skills.I have successfully completed numerous projects in web devlopement over the years.</p>
              <a href="https://codolio.com/profile/Jitendra_2" className="progress-btn">Progress</a>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Frontend</li>
                <li>Backend</li>
                <li>Database</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="domain">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Machine Learning</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </header>
            <div className="body">
              <h3>Machine Learning</h3>
              <p>Working on ML projects and exploring AI technologies for real-world applications.</p>
              <a href="https://codolio.com/profile/Jitendra_2" className="progress-btn">Progress</a>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>TensorFlow</li>
                <li>Data Science</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}