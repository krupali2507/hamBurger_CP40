// Write your code here
import Header from '../Header'
import {HomeContainer, HomeImage} from './styledComponents'

const Home = () => (
  <HomeContainer>
    <Header />
    <HomeImage
      src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      alt="home"
    />
  </HomeContainer>
)

export default Home
