// Write your code here
import Header from '../Header'
import {
  NotFoundContainer,
  NotFoundImage,
  HeadingNotFound,
  Description,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <Header />
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
    />
    <HeadingNotFound>Lost Your Way?</HeadingNotFound>
    <Description>
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </Description>
  </NotFoundContainer>
)

export default NotFound
