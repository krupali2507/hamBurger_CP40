// Write your code here
import Header from '../Header'
import {AboutContainer, AboutImage} from './styledComponents'

const About = () => (
  <AboutContainer>
    <Header />
    <AboutImage
      src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      alt="about"
    />
  </AboutContainer>
)

export default About
