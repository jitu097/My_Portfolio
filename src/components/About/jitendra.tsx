// Import additional icons
import { Container } from "./styles";
import pythonIcon from '../../assets/python.svg'

import mongodbIcon from '../../assets/mongodb.svg'
import mysqlIcon from '../../assets/mysql.svg'
import reactNativeIcon from '../../assets/react-native.svg'
import ScrollAnimation from "react-animate-on-scroll";

// Add this after existing habilities section
<div className="about-content">
  <div className="about-text">
    <ScrollAnimation animateIn="fadeInUp">
      <h2>Additional Skills</h2>
    </ScrollAnimation>
    <div className="hard-skills">
      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
          <img src={pythonIcon} alt="Python" />
        </ScrollAnimation>
      </div>
      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
          <img src={mongodbIcon} alt="MongoDB" />
        </ScrollAnimation>
      </div>
      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
          <img src={mysqlIcon} alt="MySQL" />
        </ScrollAnimation>
      </div>
      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.23 * 1000}>
          <img src={reactNativeIcon} alt="React Native" />
        </ScrollAnimation>
      </div>
    </div>
  </div>
</div>