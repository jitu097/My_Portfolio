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
              <p>I'm deeply passionate about Data Structures and Algorithms (DSA) and regularly practice on platforms like LeetCode and GeeksforGeeks. With over 300 problems solved, I continuously refine my problem-solving skills and analytical thinking to stay sharp and competitive in algorithmic challenges.</p>
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
              <p>My core strength lies in frontend web development, with hands-on experience in React, JavaScript, HTML, and CSS, creating responsive and user-friendly interfaces. I'm now expanding my skills in backend development using Node.js, Express, and MongoDB to grow as a complete Full Stack Developer.</p>
              <a href="hhttps://e-finance-lipu.onrender.com" className="progress-btn">Progress</a>
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
              <p>I'm actively learning Machine Learning (ML) and exploring AI technologies to understand their potential in solving real-world problems. Through hands-on projects and continuous learning, I'm building a strong foundation in Python, scikit-learn, and data preprocessing techniques, with a keen interest in applying these skills to practical applications in the future.</p>
              <a href="https://face-insight.vercel.app/" className="progress-btn">Progress</a>
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